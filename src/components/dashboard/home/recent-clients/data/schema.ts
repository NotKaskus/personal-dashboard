import { z } from "zod"

export const recentClientSchema = z.object({
  id: z.string(),
  status: z.string(),
  client: z.object({
    name: z.string(),
    avatar: z.string(),
    email: z.string().optional(),
  }),
  order: z.string(),
  total: z.string(),
})

export type RecentClient = z.infer<typeof recentClientSchema>