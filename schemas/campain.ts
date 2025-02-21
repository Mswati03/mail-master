import { z } from "zod"

export const campaignSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, "Campaign name is required"),
  subject: z.string().min(1, "Subject is required"),
  content: z.string().min(1, "Content is required"),
  status: z.enum(["draft", "scheduled", "sent"]),
  scheduledDate: z.date().optional(),
})

export type Campaign = z.infer<typeof campaignSchema>

