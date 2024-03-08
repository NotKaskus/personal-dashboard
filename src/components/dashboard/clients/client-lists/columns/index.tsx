"use client"

import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import {
  Crown,
  ShieldCheck,
  Shield,
  Code2,
  Gavel,
  HelpCircle,
} from "lucide-react";

import { ColumnDef } from "@tanstack/react-table";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { client_status, type ClientSchema } from "@/components/dashboard/types";
import { DataTableColumnHeader } from "./data-table-column-header";
import { cn } from "@/lib/utils";

export const columns: ColumnDef<ClientSchema>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: "client",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="CLIENT" />
    ),
    cell: ({ row }) => {
      let { name, avatar, discord_id } = row.original.client;
      return (
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={avatar} />
            <AvatarFallback>{name}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <p>{name}</p>
            {discord_id && (
              // TODO: Add Tooltip for discord user here
              <p className="text-muted-foreground text-xs">{discord_id}</p>
            )}
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "orders",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ORDERS" />
    ),
    cell: ({ row }) => {
      let orders = row.original.orders;
      return (
        <p className="text-xs md:text-sm">Total Order: {orders.length}</p>
      );
    },
  },
  {
    accessorKey: "role",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ROLE" />
    ),
    cell: ({ row }) => {
      switch (row.original.client.role) {
        case "SERVER_OWNER":
          return (
            <div className="flex items-center gap-2">
              <Crown className="text-yellow-500 text-sm" />
              <p className="text-sm">Server Owner</p>
            </div>
          );
        case "SERVER_ADMIN":
          return (
            <div className="flex items-center gap-2">
              <ShieldCheck className="text-green-500 text-sm" />
              <p className="text-sm">Server Admin</p>
            </div>
          );
        case "SERVER_MOD":
          return (
            <div className="flex items-center gap-2">
              <Shield className="text-blue-500 text-sm" />
              <p className="text-sm">Server Mod</p>
            </div>
          );
        case "DEVELOPER":
          return (
            <div className="flex items-center gap-2">
              <Code2 className="text-purple-500 text-sm" />
              <p className="text-sm">Developer</p>
            </div>
          );
        case "STAFF":
          return (
            <div className="flex items-center gap-2">
              <Gavel className="text-red-500 text-sm" />
              <p className="text-sm">Staff</p>
            </div>
          );
        case "UNKNOWN":
          return (
            <div className="flex items-center gap-2">
              <HelpCircle className="text-gray-500 text-sm" />
              <p className="text-sm">Unknown</p>
            </div>
          );
      }
    },
    filterFn: (rows, filterValue) => {
      return filterValue.includes(rows.original.client.role);
    },
  },
  {
    accessorKey: "plan",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="PLAN" />
    ),
    cell: ({ row }) => {
      switch (row.original.plan) {
        case "BASIC":
          return (
            <p className="text-sm">Basic</p>
          );
        case "PREMIUM":
          return (
            <p className="text-sm">Premium</p>
          );
        case "PRO":
          return (
            <p className="text-sm">Pro</p>
          );
      }
    },
    filterFn: (rows, filterValue) => {
      return filterValue.includes(rows.original.plan);
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      let { status } = row.original.client;

      switch (status) {
        case "DONE":
          return (
            <Badge className="bg-green-500 text-white font-medium">Done</Badge>
          );
        case 'HOLD':
          return (
            <Badge className="bg-orange-500 text-white font-medium">
              Hold
            </Badge>
          );
        case "PENDING":
          return (
            <Badge className="bg-yellow-500 text-white font-medium">
              Pending
            </Badge>
          );
        case "CANCELED":
          return (
            <Badge className="bg-red-500 text-white font-medium">
              Canceled
            </Badge>
          );
        default:
          return (
            <Badge className="bg-gray-500 text-white font-medium">
              Unknown
            </Badge>
          );
      }
    },
    filterFn: (rows, filterValue) => {
      return filterValue.includes(rows.original.client.status);
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const props = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <DotsHorizontalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(props.id)}
            >
              Copy Customer ID
            </DropdownMenuItem>
            {props.client.discord_id && (
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(props.client.discord_id!)}
              >
                Copy Discord ID
              </DropdownMenuItem>
            )}
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
