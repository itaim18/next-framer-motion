"use client";
import React, { useEffect, useRef, useState } from "react";
import Message from "../ui/message";
import AIForm from "./ai-form";
interface msg {
  index: number;
  isQuestion: boolean;
  msg: string;
}
const AIChat = () => {
  const [msgs, setMsgs] = useState<msg[]>([]);
  const listRef: any = useRef(null);

  //2️⃣ watch for when new items are added
  useEffect(() => {
    //3️⃣ bring the last item into view
    listRef.current?.lastElementChild?.scrollIntoView({ behavior: "smooth" });
  }, [msgs]);
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
