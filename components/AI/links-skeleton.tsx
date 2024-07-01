"use client";
import React from "react";

const LinksSkeleton = () => {
  return <div>LinksSkeleton </div>;
};

interface Social {
  gLink: string;
  tLink: string;
  lLink: string;
}

const Socials = ({ props: socials }: { props: Social[] }) => {
  return (
    <div>
      <div className="mb-4 flex flex-col gap-2 overflow-y-scroll pb-4 text-sm sm:flex-row">
        {socials.map((social) => (
          <button
            key={social.gLink}
            className="flex cursor-pointer flex-row gap-2 rounded-lg bg-zinc-800 p-2 text-left hover:bg-zinc-700 sm:w-52"
          >
            {social.tLink}
          </button>
        ))}
      </div>
    </div>
  );
};

export { Socials, LinksSkeleton };
