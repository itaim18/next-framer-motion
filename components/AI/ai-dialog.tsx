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
import Link from "next/link";
import AIForm from "./ai-form";
import { useUIState } from "ai/rsc";
import { AI } from "@/app/actions";
export function AIDialog() {
  const [_, setMessages] = useUIState<typeof AI>();
  return (
    <Dialog>
      <DialogTrigger asChild onClick={() => setMessages([])}>
        <button className="inline-flex items-center justify-center fixed bottom-24 right-12 rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300">
          <span
            className={`relative inline-block h-5 w-5 transition-transform duration-300 ease-in-out group-hover:rotate-180 group-active:rotate-180`}
          >
            <Wand2 className="absolute inset-0 h-full w-full text-gray-50 dark:text-gray-900" />
          </span>
          <span className="ml-2">{"Ask AI"}</span>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md  min-h-fit md:max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex flex-row items-end gap-2">
            <Wand2 /> Start the AI magic
          </DialogTitle>
          <DialogDescription>
            Here is my best shot to match you one component :) <br />
            Are you looking to see code of one of my project or go through my
            blog posts?
          </DialogDescription>
        </DialogHeader>

        <AIForm />
        <DialogFooter className="sm:justify-start text-sm inline-block text-green-700">
          Have any questions for me? please
          <Link
            href="https://wa.me/+972542258899"
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
