import { type CoreMessage, streamText } from "ai";
import { openai } from "@ai-sdk/openai";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages }: { messages: CoreMessage[] } = await req.json();

  const result = await streamText({
    model: openai("gpt-3.5-turbo"),
    system: "You are a helpful assistant.",
    messages,
  });

  //   const sendMessage = (prompt: string) =>
  //     generateText({
  //       model: "gpt-3.5-turbo",
  //       system: "you are a friendly weather assistant!",
  //       prompt,
  //       tools: {
  //         getWeather: {
  //           description: "Get the weather in a location",
  //           parameters: z.object({
  //             location: z
  //               .string()
  //               .describe("The location to get the weather for"),
  //           }),
  //           execute: async ({ location }: { location: string }) => ({
  //             location,
  //             temperature: 72 + Math.floor(Math.random() * 21) - 10,
  //           }),
  //         },
  //       },
  //     });

  return result.toAIStreamResponse();
}
