import "server-only";
import {
  createAI,
  createStreamableUI,
  getMutableAIState,
  getAIState,
  streamUI,
  createStreamableValue,
} from "ai/rsc";
import { openai } from "@ai-sdk/openai";
import { SunIcon } from "lucide-react";

import { z } from "zod";
import { Message } from "@/components/ui/message";
import { nanoid } from "../utils";

export type ServerMessage = {
  role: "user" | "assistant";
  content: string;
};

export type ClientMessage = {
  id: string;
  role: "user" | "assistant";
  display: React.ReactNode;
};
async function getWeather(city: string): Promise<any> {
  const url = `http://api.weatherapi.com/v1/current.json?key=d222f818f5c14ad4901154740241806&q=${city}&aqi=no`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching weather data: ${response.statusText}`);
    }
    const data = await response.json();
    console.log("weather:", data);

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
const WeatherComponent = (props: any) => (
  <div className="p-4 max-w-fit">
    The weather in {props.location} is {props.weather}c
    <SunIcon />
  </div>
);
async function submitMessage(content: string) {
  "use server";
  const aiState = getMutableAIState<typeof AI>();
  aiState.update({
    ...aiState.get(),
    messages: [
      ...aiState.get().messages,
      {
        id: nanoid(),
        role: "user",
        content,
      },
    ],
  });

  let textStream: undefined | ReturnType<typeof createStreamableValue<string>>;
  let textNode: undefined | React.ReactNode;
  const result = await streamUI({
    model: openai("gpt-3.5-turbo"),
    system: `\
   If the user requests purchasing seeing the weather in a location, call \`get_weather\` to show the weather UI for the specified location.
    `,
    messages: [
      ...aiState.get().messages.map((message: any) => ({
        role: message.role,
        content: message.content,
        name: message.name,
      })),
    ],
    text: ({ content }) => <div>{content}</div>,
    tools: {
      getWeather: {
        description: "Get the weather for a location",
        parameters: z.object({
          city: z.string(),
        }),
        generate: async function* ({ city }) {
          yield <div>loading...</div>;
          const weather = await getWeather(city);
          return (
            <WeatherComponent
              weather={weather?.current?.temp_c}
              location={city}
            />
          );
        },
      },
    },
  });
  return {
    id: nanoid(),
    display: result.value,
  };
}

export type UIState = ClientMessage[];
export type AIState = {
  messages: any[];
};
// Create the AI provider with the initial states and allowed actions
export const AI = createAI<AIState, UIState>({
  initialAIState: { messages: [] },
  initialUIState: [],
  actions: {
    submitMessage,
  },
  onGetUIState: async () => {
    "use server";

    const aiState = getAIState();

    if (aiState) {
      const uiState = getUIStateFromAIState(aiState);
      return uiState;
    }
  },
});

export const getUIStateFromAIState = (aiState: any) => {
  return aiState?.messages
    ?.filter((message: any) => message.role !== "system")
    .map((message: any, index: number) => ({
      id: `${index}`,
      display:
        message.role === "tool" ? (
          message.content.map((tool: any) => {
            return tool.toolName === "getWeather" ? (
              <WeatherComponent props={tool.result} />
            ) : null;
          })
        ) : message.role === "user" ? (
          <div>{message.content as string}</div>
        ) : message.role === "assistant" &&
          typeof message.content === "string" ? (
          <div>{message.content as string}</div>
        ) : null,
    }));
};
