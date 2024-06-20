"use client";

import React, { useState } from "react";
import { ArrowUp } from "lucide-react";
import { useUIState, useActions } from "ai/rsc";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { nanoid } from "@/lib/utils";

import AIChat from "./ai-chat";
const AIForm = () => {
  const { submitMessage } = useActions();
  const [input, setInput] = useState<string>("");
  const [messages, setMessages] = useUIState();

  return (
    <>
      <AIChat />
      <form
        method="post"
        onSubmit={async (e: any) => {
          e.preventDefault();
          const value = input.trim();

          // Blur focus on mobile
          if (window.innerWidth < 600) {
            e.target["message"]?.blur();
          }
          console.log("heyyyyyy");
          if (!value) return;
          setInput("");
          setMessages((currentMessages: any) => [
            ...currentMessages,
            {
              id: nanoid(),
              display: value,
              content: value,
              role: "user",
            },
          ]);
          try {
            console.log("heyyyyyy");
            const responseMessage = await submitMessage(value);
            setMessages((currentMessages: any) => [
              ...currentMessages,
              responseMessage,
            ]);
          } catch (err) {
            console.log("heyyyyyy");

            console.error(err);
          }
        }}
      >
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              AI Question
            </Label>
            <Input
              id="link"
              placeholder="Do you have mobile projects?"
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
          </div>
          <Button type="submit" size="sm" className="px-3">
            <span className="sr-only">Send</span>
            <ArrowUp className="h-4 w-4" />
          </Button>
        </div>
      </form>
    </>
  );
};

export default AIForm;
