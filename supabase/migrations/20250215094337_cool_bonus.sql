/*
  # Email Marketing Schema

  1. New Tables
    - `campaigns`
      - Campaign management with status tracking and analytics
    - `templates`
      - Reusable email templates
    - `subscribers`
      - Subscriber information and metadata
    - `lists`
      - Subscriber list management
    - `list_subscribers`
      - Many-to-many relationship between lists and subscribers
    - `campaign_analytics`
      - Track campaign performance metrics
    - `smtp_settings`
      - Store SMTP configuration per user

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Campaigns table
CREATE TABLE IF NOT EXISTS campaigns (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  name text NOT NULL,
  subject text NOT NULL,
  content text NOT NULL,
  template_id uuid,
  status text NOT NULL DEFAULT 'draft',
  scheduled_for timestamptz,
  sent_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Templates table
CREATE TABLE IF NOT EXISTS templates (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  name text NOT NULL,
  content text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Subscribers table
CREATE TABLE IF NOT EXISTS subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  email text NOT NULL,
  first_name text,
  last_name text,
  metadata jsonb DEFAULT '{}',
  status text NOT NULL DEFAULT 'active',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(user_id, email)
);

-- Lists table
CREATE TABLE IF NOT EXISTS lists (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  name text NOT NULL,
  description text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- List subscribers junction table
CREATE TABLE IF NOT EXISTS list_subscribers (
  list_id uuid REFERENCES lists(id) ON DELETE CASCADE,
  subscriber_id uuid REFERENCES subscribers(id) ON DELETE CASCADE,
  created_at timestamptz DEFAULT now(),
  PRIMARY KEY (list_id, subscriber_id)
);

-- Campaign analytics table
CREATE TABLE IF NOT EXISTS campaign_analytics (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  campaign_id uuid REFERENCES campaigns(id) ON DELETE CASCADE,
  opens integer DEFAULT 0,
  clicks integer DEFAULT 0,
  bounces integer DEFAULT 0,
  unsubscribes integer DEFAULT 0,
  last_updated timestamptz DEFAULT now()
);

-- SMTP settings table
CREATE TABLE IF NOT EXISTS smtp_settings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  host text NOT NULL,
  port integer NOT NULL,
  username text NOT NULL,
  password text NOT NULL,
  from_email text NOT NULL,
  from_name text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(user_id)
);

-- Enable RLS
ALTER TABLE campaigns ENABLE ROW LEVEL SECURITY;
ALTER TABLE templates ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE lists ENABLE ROW LEVEL SECURITY;
ALTER TABLE list_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE campaign_analytics ENABLE ROW LEVEL SECURITY;
ALTER TABLE smtp_settings ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY "Users can manage their own campaigns"
  ON campaigns
  USING (auth.uid() = user_id);

CREATE POLICY "Users can manage their own templates"
  ON templates
  USING (auth.uid() = user_id);

CREATE POLICY "Users can manage their own subscribers"
  ON subscribers
  USING (auth.uid() = user_id);

CREATE POLICY "Users can manage their own lists"
  ON lists
  USING (auth.uid() = user_id);

CREATE POLICY "Users can manage their list subscribers"
  ON list_subscribers
  USING (EXISTS (
    SELECT 1 FROM lists
    WHERE lists.id = list_subscribers.list_id
    AND lists.user_id = auth.uid()
  ));

CREATE POLICY "Users can view their campaign analytics"
  ON campaign_analytics
  USING (EXISTS (
    SELECT 1 FROM campaigns
    WHERE campaigns.id = campaign_analytics.campaign_id
    AND campaigns.user_id = auth.uid()
  ));

CREATE POLICY "Users can manage their SMTP settings"
  ON smtp_settings
  USING (auth.uid() = user_id);