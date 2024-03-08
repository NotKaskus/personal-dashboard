import { z } from "zod";
import {
  CheckCircledIcon,
  CircleIcon,
  CrossCircledIcon,
  StopwatchIcon,
} from "@radix-ui/react-icons"

export const statuses = [
  {
    value: "hold",
    label: "Hold",
    icon: CircleIcon,
  },
  {
    value: "pending",
    label: "pending",
    icon: StopwatchIcon,
  },
  {
    value: "done",
    label: "Done",
    icon: CheckCircledIcon,
  },
  {
    value: "canceled",
    label: "Canceled",
    icon: CrossCircledIcon,
  },
]

export const clientSchema = z.object({
  id: z.string(),
  status: z.string(),
  client: z.object({
    name: z.string(),
    avatar: z.string(),
    discordId: z.string(),
  }),
  order: z.string(),
  total: z.string(),
})

export type ClientOverviewSchema = z.infer<typeof clientSchema>