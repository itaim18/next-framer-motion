"use client";

import { useState } from "react";
import { Wand2 } from "lucide-react";
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
          clicked ? "rotate-90 " : ""
        }`}
      >
        <Wand2 className="absolute inset-0 h-full w-full text-gray-50 dark:text-gray-900" />
      </span>
      <span className="ml-2">{!clicked ? "Ask AI" : "AI processing"}</span>
    </button>
  );
}
