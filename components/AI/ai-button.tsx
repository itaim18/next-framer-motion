"use client";

import { useState } from "react";

export default function AIButtonWrapper() {
  const [clicked, setClicked] = useState(false);
  return (
    <button
      className="inline-flex items-center justify-center fixed bottom-24 right-12 rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
      onClick={() => setClicked(true)}
      onMouseLeave={() => setClicked(false)}
    >
      <span
        className={`relative inline-block h-5 w-5 transition-transform duration-300 ease-in-out group-hover:rotate-180 group-active:rotate-180 ${
          clicked ? "rotate-180" : ""
        }`}
      >
        <WandIcon className="absolute inset-0 h-full w-full text-gray-50 dark:text-gray-900" />
      </span>
      {!clicked && <span className="ml-2">Ask AI</span>}
    </button>
  );
}

function WandIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 4V2" />
      <path d="M15 16v-2" />
      <path d="M8 9h2" />
      <path d="M20 9h2" />
      <path d="M17.8 11.8 19 13" />
      <path d="M15 9h0" />
      <path d="M17.8 6.2 19 5" />
      <path d="m3 21 9-9" />
      <path d="M12.2 6.2 11 5" />
    </svg>
  );
}
