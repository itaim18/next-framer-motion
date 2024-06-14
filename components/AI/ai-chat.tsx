"use client";
import React, { useEffect, useRef, useState } from "react";
import Message from "../ui/message";
import AIForm from "./ai-form";
import { useChat } from "@ai-sdk/react";

interface msg {
  index: number;
  isQuestion: boolean;
  msg: string;
}

const AIChat = () => {
  const listRef: any = useRef(null);

  const { error, messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat",
  });
  useEffect(() => {
    listRef.current?.lastElementChild?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  return (
    <>
      {error ? <div>{error.message}</div> : null}

      <div ref={listRef} className=" h-56 flex flex-col overflow-auto">
        {messages.map((message, i) => {
          return (
            <Message
              isQuestion={message.role === "user"}
              content={message.content}
              key={message.id}
            />
          );
        })}
      </div>

      <AIForm
        msgs={messages}
        onSubmit={handleSubmit}
        value={input}
        onChange={handleInputChange}
      />
    </>
  );
};

export default AIChat;
