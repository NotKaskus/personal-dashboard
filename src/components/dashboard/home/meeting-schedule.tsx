import { CalendarClock } from "lucide-react";
import { format } from "date-fns";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export interface ClientSched {
  id: string;
  client: {
    name: string;
    avatar: string;
    discordId: string;
  };
  schedule: {
    start: string;
    end: string;
  };
}

export function MeetingSchedule({ data }: { data: ClientSched[] }) {
  return (
    <div className="flex flex-col gap-[1.71rem]">
      {data.map((props) => {
        return (
          <div className="flex items-center gap-3" key={props.id}>
            <Avatar>
              <AvatarImage
                src={props.client.avatar}
                alt={`${props.client.name} avatar`}
              />
              <AvatarFallback>{props.client.name}</AvatarFallback>
            </Avatar>
            <div className="flex justify-between items-center flex-wrap gap-x-4 gap-y-2">
              <div className="flex flex-col gap-0.5">
                <p className="text-sm font-medium">
                  Call with {props.client.name}
                </p>
                <div className="flex items-center gap-2">
                  <CalendarClock size={15} className="text-muted-foreground" />
                  <p className="text-xs text-muted-foreground">
                    {format(new Date(props.schedule.start), "dd MMM | hh:mmaaa")} -{" "}
                    {format(new Date(props.schedule.end), "hh:mmaaa")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
