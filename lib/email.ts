import nodemailer from 'nodemailer';
import { SmtpSettings } from '@/types/settings';

export async function createEmailTransport(settings: SmtpSettings) {
  return nodemailer.createTransport({
    host: settings.host,
    port: settings.port,
    secure: settings.port === 465,
    auth: {
      user: settings.username,
      pass: settings.password,
    },
  });
}

export async function sendEmail(transport: any, options: any) {
  return transport.sendMail({
    from: `"${options.fromName}" <${options.fromEmail}>`,
    to: options.to,
    subject: options.subject,
    html: options.html,
  });
}