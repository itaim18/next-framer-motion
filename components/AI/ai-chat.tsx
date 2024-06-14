"use client";
import React, { useEffect, useRef, useState } from "react";
import Message from "../ui/message";
import AIForm from "./ai-form";
import { useChat } from "@ai-sdk/react";
import { log } from "console";
interface msg {
  index: number;
  isQuestion: boolean;
  msg: string;
}

const AIChat = () => {
  const [msgs, setMsgs] = useState<msg[]>([]);
  const listRef: any = useRef(null);

  useEffect(() => {
    listRef.current?.lastElementChild?.scrollIntoView({ behavior: "smooth" });
  }, [msgs]);
  const { error, messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat",
  });
  //   const { messages, input, handleInputChange, handleSubmit } = useChat({
  //     api: "api/chat",
  //   });
  return (
    <>
      {error ? <div>{error.message}</div> : null}
      {messages.map((message) => {
        return (
          <div key={message.id}>
            {message.role === "user" ? "User: " : "AI: "}
            {message.content}
          </div>
        );
      })}
      <form onSubmit={handleSubmit}>
        <input
          name="prompt"
          value={input}
          onChange={handleInputChange}
          id="input"
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
  return (
    <>
      <div ref={listRef} className=" h-56 flex flex-col overflow-auto">
        {msgs
          .sort((a, b) => a.index - b.index)
          .map((msg, i) => {
            return (
              <Message isQuestion={msg.isQuestion} content={msg.msg} key={i} />
            );
          })}
      </div>
      <AIForm msgs={msgs} setMsgs={setMsgs} />
    </>
  );
};

export default AIChat;
