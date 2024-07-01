"use client";
import React, { useEffect, useRef } from "react";
import { Message } from "../ui/message";
import { useUIState } from "ai/rsc";
import { AIQuestions } from "./ai-questions";

const AIChat = () => {
  const listRef: any = useRef(null);
  const [messages] = useUIState<any>();

  useEffect(() => {
    if (listRef.current) {
      console.log(listRef.current);

      listRef.current.scrollTop = listRef.current.scrollHeight;
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
    </>
  );
};

export default AIChat;
