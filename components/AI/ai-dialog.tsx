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
import Link from "next/link";
import AIForm from "./ai-form";
import { useUIState } from "ai/rsc";
import { AI } from "@/app/actions";
import ShinyButton from "../ui/shiny-button";

export function AIDialog() {
  const [_, setMessages] = useUIState<typeof AI>();
  return (
    <Dialog>
      <DialogTrigger asChild onClick={() => setMessages([])}>
        <div>
          <ShinyButton text="Ask AI" />
        </div>
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
