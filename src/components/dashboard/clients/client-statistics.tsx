import { Card } from "@/components/ui/card";
import { UsersRound, UserRoundPlus, UserRoundCheck, UserRoundX } from "lucide-react";
import React from "react";

export default function ClientStatistics() {
  return (
    <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
      <Card>
        <div className="flex justify-between gap-1 p-5">
          <div className="flex flex-col gap-1 flex-grow">
            <p className="text-md">Session</p>
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="font-medium text-lg">24,114</h3>
              <p className="text-[#56ca00]/70">(+29%)</p>
            </div>
            <p className="text-sm">Total Client</p>
          </div>
          <div className="relative flex items-center justify-center flex-shrink-0 overflow-hidden rounded-[6px] bg-[#8c57ff29]/10 w-[42px] h-[42px]">
            <UsersRound className="text-[26px]" />
          </div>
        </div>
      </Card>

			<Card>
        <div className="flex justify-between gap-1 p-5">
          <div className="flex flex-col gap-1 flex-grow">
            <p className="text-md">Paid Users</p>
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="font-medium text-lg">24,114</h3>
              <p className="text-[#56ca00]/70">(+29%)</p>
            </div>
            <p className="text-sm">Total Client</p>
          </div>
          <div className="relative flex items-center justify-center flex-shrink-0 overflow-hidden rounded-[6px] bg-[#ff4c5129]/10 w-[42px] h-[42px]">
            <UserRoundPlus className="text-[26px]" />
          </div>
        </div>
      </Card>

			<Card>
        <div className="flex justify-between gap-1 p-5">
          <div className="flex flex-col gap-1 flex-grow">
            <p className="text-md">Active Users</p>
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="font-medium text-lg">24,114</h3>
              <p className="text-[#56ca00]/70">(+29%)</p>
            </div>
            <p className="text-sm">Total Client</p>
          </div>
          <div className="relative flex items-center justify-center flex-shrink-0 overflow-hidden rounded-[6px] bg-[#56ca0029]/10 w-[42px] h-[42px]">
            <UserRoundCheck className="text-[26px]" />
          </div>
        </div>
      </Card>

			<Card>
        <div className="flex justify-between gap-1 p-5">
          <div className="flex flex-col gap-1 flex-grow">
            <p className="text-md">Pending Users</p>
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="font-medium text-lg">24,114</h3>
              <p className="text-[#56ca00]/70">(+29%)</p>
            </div>
            <p className="text-sm">Total Client</p>
          </div>
          <div className="relative flex items-center justify-center flex-shrink-0 overflow-hidden rounded-[6px] bg-[#ffb40029]/10 w-[42px] h-[42px]">
            <UserRoundX className="text-[26px]" />
          </div>
        </div>
      </Card>
    </div>
  );
}
