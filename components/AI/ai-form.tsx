"use client";
import React, { useState } from "react";
import { ArrowUp } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const AIForm = ({ msgs, setMsgs }: any) => {
  const [question, setQuestion] = useState("");
  return (
    <form
      method="post"
      onSubmit={(e) => {
        e.preventDefault();
        const newMessages = [
          ...msgs,
          { msg: question, index: msgs.length - 1, isQuestion: 1 },
          { msg: "I'm stupid", index: msgs.length, isQuestion: 0 },
        ];
        setMsgs(newMessages);
        setQuestion("");
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
            onChange={(e) => {
              setQuestion(e.target.value);
            }}
            value={question}
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
