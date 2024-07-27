import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Link from "next/link";

export function Handle() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link" className="relative text-xl bottom-2 right-3">
          <Link target="_blank" href={"https://github.com/itaim18"}>
            @itaim18
          </Link>
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex flex-row space-x-4">
          <Avatar>
            <AvatarImage
              src="https://avatars.githubusercontent.com/u/37772742?v=4"
              className="h-10 w-10 rounded-full"
            />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="">
            <Link
              target="_blank"
              href={"https://github.com/itaim18"}
              className="text-sm font-semibold border"
            >
              @itaim18
            </Link>
            <p className="text-sm text-gray-500">Centering divs.</p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
