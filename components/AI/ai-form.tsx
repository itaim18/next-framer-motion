"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ArrowUp } from "lucide-react";
import { useUIState, useActions } from "ai/rsc";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { AI } from "@/app/actions";
import { nanoid } from "@/lib/utils";
import { Message } from "../ui/message";
import { AIQuestions } from "./ai-questions";
// import AIChat from "./ai-chat";

const AIForm = () => {
  const [input, setInput] = useState<string>("");
  const [messages, setMessages] = useUIState<typeof AI>();
  const { submitMessage } = useActions<typeof AI>();
  const listRef: any = useRef(null);

  useLayoutEffect(() => {
    if (listRef.current) {
      const lastElement = listRef.current.lastElementChild;

      if (lastElement) {
        setTimeout(() => {
          lastElement.scrollIntoView({ behavior: "smooth" });
          console.log("scrolling", lastElement);
        }, 100); // Optional delay
      }
    }
  }, [messages]);

  return (
    <>
      <div
        ref={listRef}
        className={` h-56 flex flex-col overflow-auto overflow-x-hidden ${
          messages.length == 0 && "place-content-end"
        }`}
      >
        {messages.length > 0 ? (
          messages.map((message: any, i: number) => {
            return (
              <Message isUser={message?.role === "user"} key={i}>
                {message?.display}
              </Message>
            );
          })
        ) : (
          <AIQuestions />
        )}
      </div>
      <form
        method="post"
        onSubmit={async (e: any) => {
          e.preventDefault();
          const value = input.trim();

          // Blur focus on mobile
          if (window.innerWidth < 600) {
            e.target["message"]?.blur();
          }

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
            const responseMessage = await submitMessage(value);
            setMessages((currentMessages: any) => [
              ...currentMessages,
              responseMessage,
            ]);
          } catch (err) {
            console.log("error");

            console.error(err);
            setMessages((currentMessages: any) => [
              ...currentMessages,
              {
                id: nanoid(),
                role: "assistant" as const,
                display:
                  "sorry I didn't understand your request. try phrasing it differently",
              },
            ]);
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
