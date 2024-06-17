"use client";

import { Wand2 } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import Link from "next/link";
import AIChat from "./ai-chat";
export function DialogCloseButton() {
  const [clicked, setClicked] = useState(false);

  return (
    <Dialog>
      <DialogTrigger asChild>
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
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            <Wand2 /> Start the AI magic
          </DialogTitle>
          <DialogDescription>
            Here is my best shot to match you one component :) <br />
            Are you looking to see code of one of my project or go through my
            blog posts?
          </DialogDescription>
        </DialogHeader>

        <AIChat />
        <DialogFooter className="sm:justify-start text-sm inline-block text-green-700">
          Have any questions for me? please
          <Link
            href="https://wa.me/0542258899"
            target="_blank"
            className="text-emerald-600 hover:text-emerald-400"
          >
            {" "}
            whatsapp{" "}
          </Link>
          me
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
