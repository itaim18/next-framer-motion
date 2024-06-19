"use client";
import React, { useEffect, useRef } from "react";
import { Message } from "../ui/message";
import { useUIState } from "ai/rsc";
// import { useChat } from "@ai-sdk/react";
interface msg {
  index: number;
  isUser: boolean;
  msg: string;
}

const AIChat = () => {
  const listRef: any = useRef(null);
  const [messages] = useUIState<any>();

  useEffect(() => {
    listRef.current?.lastElementChild?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      <div ref={listRef} className=" h-56 flex flex-col overflow-auto">
        {messages.map((message: any, i: number) => {
          return (
            <Message isUser={message?.role === "user"} key={i}>
              {message?.display}
            </Message>
          );
        })}
      </div>
    </>
  );
};

export default AIChat;
