"use client";
import React, { useEffect, useRef } from "react";
import { Message } from "../ui/message";
import AIForm from "./ai-form";
import { useChat } from "@ai-sdk/react";
interface msg {
  index: number;
  isUser: boolean;
  msg: string;
}

const AIChat = () => {
  const listRef: any = useRef(null);
  const { error, input, handleInputChange, setMessages, messages } = useChat({
    api: "/api/chat",
  });
  useEffect(() => {
    listRef.current?.lastElementChild?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  return (
    <>
      {error ? <div>{error.message}</div> : null}

      <div ref={listRef} className=" h-56 flex flex-col overflow-auto">
        {messages.map((message: any, i: number) => {
          return (
            <Message
              isUser={message.role === "user"}
              content={message.content}
              key={message.id}
            />
          );
        })}
      </div>

      <AIForm
        setMessages={setMessages}
        msgs={messages}
        value={input}
        onChange={handleInputChange}
      />
    </>
  );
};

export default AIChat;
