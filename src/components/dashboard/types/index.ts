import { z } from "zod";
import {
  CheckCircledIcon,
  CircleIcon,
  CrossCircledIcon,
  StopwatchIcon,
} from "@radix-ui/react-icons";

export const client_status = [
  {
    value: "HOLD",
    label: "Hold",
    icon: CircleIcon,
  },
  {
    value: "PENDING",
    label: "Pending",
    icon: StopwatchIcon,
  },
  {
    value: "DONE",
    label: "Done",
    icon: CheckCircledIcon,
  },
  {
    value: "CANCELED",
    label: "Canceled",
    icon: CrossCircledIcon,
  },
];

export const order_status = [
  {
    value: "pending",
    label: "Pending",
    icon: CircleIcon,
  },
  {
    value: "processing",
    label: "Processing",
    icon: StopwatchIcon,
  },
  {
    value: "shipped",
    label: "Shipped",
    icon: CheckCircledIcon,
  },
  {
    value: "delivered",
    label: "Delivered",
    icon: CheckCircledIcon,
  },
  {
    value: "CANCELED",
    label: "Canceled",
    icon: CrossCircledIcon,
  },
];

export const client_role = [
  {
    value: "SERVER_OWNER",
    label: "Owner",
    icon: CheckCircledIcon,
  },
  {
    value: "SERVER_ADMIN",
    label: "Admin",
    icon: CheckCircledIcon,
  },
  {
    value: "SERVER_MOD",
    label: "Mod",
    icon: CheckCircledIcon,
  },
  {
    value: "DEVELOPER",
    label: "Developer",
    icon: CheckCircledIcon,
  },
  {
    value: "STAFF",
    label: "Staff",
    icon: CheckCircledIcon,
  },
  {
    value: "UNKNOWN",
    label: "Unknown",
    icon: CrossCircledIcon,
  },
];

export const client_plan = [
  {
    value: "BASIC",
    label: "Basic",
    icon: CheckCircledIcon,
  },
  {
    value: "PREMIUM",
    label: "Premium",
    icon: CheckCircledIcon,
  },
  {
    value: "PRO",
    label: "Pro",
    icon: CheckCircledIcon,
  },
];

export const clientSchema = z.object({
  id: z.string(),
  client: z.object({
    name: z.string(),
    avatar: z.string(),
    discord_id: z.string().optional(),
    discord_display_name: z.string().optional(),
    status: z.enum(["HOLD", "PENDING", "DONE", "CANCELED"]),
    role: z.enum([
      "SERVER_OWNER",
      "SERVER_ADMIN",
      "SERVER_MOD",
      "DEVELOPER",
      "STAFF",
      "UNKNOWN",
    ]),
    contact_info: z.object({
      discord_server: z.object({
        id: z.string(),
        name: z.string(),
        invite_url: z.string(),
      }),
    }),
    payment_method: z.enum(["PAYPAL", "STRIPE", "GCASH", "PAYMAYA", "CASH"]),
  }),
  orders: z.array(
    z.object({
      id: z.string(),
      total: z.number(),
      status: z.enum(["ORDERED", "SHIPPED", "DELIVERED", "CANCELED"]),
      created_at: z.date(),
      product: z.array(
        z.object({
          id: z.string(),
          price: z.number(),
          stock: z.number(),
        })
      ),
    })
  ),
  plan: z.enum(["BASIC", "PREMIUM", "PRO"]),
  balance: z.number(),
  created_at: z.date(),
  is_blocked: z.boolean(),
});

export type ClientSchema = z.infer<typeof clientSchema>;
