"use client";
import React from "react";

const LinksSkeleton = () => {
  return <div>LinksSkeleton </div>;
};

import { useActions, useUIState } from "ai/rsc";

// import type { AI } from '@/lib/chat/actions'

interface Social {
  gLink: string;
  tLink: string;
  lLink: string;
}

const Socials = ({ props: socials }: { props: Social[] }) => {
  const [, setMessages] = useUIState<any>();
  const { submitUserMessage } = useActions();

  return (
    <div>
      <div className="mb-4 flex flex-col gap-2 overflow-y-scroll pb-4 text-sm sm:flex-row">
        {socials.map((social) => (
          <button
            key={social.gLink}
            className="flex cursor-pointer flex-row gap-2 rounded-lg bg-zinc-800 p-2 text-left hover:bg-zinc-700 sm:w-52"
            onClick={async () => {
              const response = await submitUserMessage(`View ${social.gLink}`);
              setMessages((currentMessages: any) => [
                ...currentMessages,
                response,
              ]);
            }}
          >
            {social.tLink}
          </button>
        ))}
      </div>
    </div>
  );
};

export { Socials, LinksSkeleton };
