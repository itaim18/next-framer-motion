"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { useActions, useUIState } from "ai/rsc";
import { AI } from "@/app/actions";
import { nanoid } from "@/lib/utils";

const questions = [
  "📝 Did you write a blog post lately?",
  "🌐 Display a project about web",
  "🚀 Show me some projects",
  "☀️ What is the weather in LA?",
];

const AIQuestions = () => {
  const { submitMessage } = useActions<typeof AI>();
  const [_, setMessages] = useUIState<typeof AI>();

  const onSubmit = async (input: string) => {
    const value = input.trim();

    if (!value) return;

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
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 sm:mx-1 mt-4">
      {questions.map((q, i) => {
        return <ButtonSecondary text={q} key={i} onSubmit={onSubmit} />;
      })}
    </div>
  );
};
export { AIQuestions };

export function ButtonSecondary({ text, onSubmit }: any) {
  return (
    <Button
      onClick={() => onSubmit(text)}
      variant="secondary"
      className="border bg-card text-card-foreground shadow p-4 sm:py-6 md:py-6 flex items-center w-full rounded-lg cursor-pointer hover:border-primary hover:bg-primary-foreground"
    >
      {text}
    </Button>
  );
}
