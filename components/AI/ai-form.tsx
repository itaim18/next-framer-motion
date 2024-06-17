"use client";
import React from "react";
import { ArrowUp } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Message } from "../ui/message";
import { nanoid } from "@/lib/utils";
import { useActions } from "ai/rsc";
const AIForm = ({ value, onChange, setMessages }: any) => {
  const { submitUserMessage } = useActions();
  return (
    <form
      method="post"
      onSubmit={async (e: any) => {
        e.preventDefault();

        // Blur focus on mobile
        if (window.innerWidth < 600) {
          e.target["message"]?.blur();
        }

        if (!value) return;

        // Optimistically add user message UI
        setMessages((currentMessages: any) => [
          ...currentMessages,
          {
            id: nanoid(),
            display: <Message isUser={true}>{value}</Message>,
          },
        ]);

        // Submit and get response message
        const responseMessage = await submitUserMessage(value);
        console.log("hi", responseMessage);

        setMessages((currentMessages: any) => [
          ...currentMessages,
          responseMessage,
        ]);
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
            onChange={onChange}
            value={value}
          />
        </div>
        <Button type="submit" size="sm" className="px-3">
          <span className="sr-only">Send</span>
          <ArrowUp className="h-4 w-4" />
        </Button>
      </div>
    </form>
  );
};

export default AIForm;
