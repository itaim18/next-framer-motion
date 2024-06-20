import {
  createAI,
  getMutableAIState,
  getAIState,
  streamUI,
  createStreamableValue,
} from "ai/rsc";
import { openai } from "@ai-sdk/openai";
import { SunIcon } from "lucide-react";
import Link from "next/link";
import { z } from "zod";
import { nanoid } from "../utils";
import { DATA } from "@/data";
import { Link2, Link2Off, Terminal, Maximize } from "lucide-react";
export type ServerMessage = {
  role: "user" | "assistant";
  content: string;
};

export type ClientMessage = {
  id: string;
  role: "user" | "assistant";
  display: React.ReactNode;
};
function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
async function getProject(subject: string): Promise<any> {
  const proj = DATA.find((project: any) =>
    project.types.includes(capitalizeFirstLetter(subject))
  );

  return proj;
}
async function getWeather(city: string): Promise<any> {
  const url = `http://api.weatherapi.com/v1/current.json?key=d222f818f5c14ad4901154740241806&q=${city}&aqi=no`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching weather data: ${response.statusText}`);
    }
    const data = await response.json();
    console.log("data weather", data);

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

const ProjectComponent = (props: any) => {
  const { props: item } = props;
  return (
    <div
      id="card"
      key={item?.id}
      className={`border-red-400 justify-start relative flex flex-col bg-transparent dark:bg-opacity-25 bg-opacity-25 aspect-square lg:aspect-auto col-span-2 rounded-lg py-8 px-4 border-2 ${item?.myClass}`}
    >
      {item?.image ? (
        <img
          src={item?.image?.src}
          className="inset-0 w-full aspect-[5/3]   bg-purple-200 rounded-lg my-4"
        />
      ) : (
        <div className="inset-0 w-full aspect-[5/3]   bg-purple-600 rounded-lg my-4"></div>
      )}

      <div>
        <h5 className="text-lg sm:text-2xl">{item?.subtitle}</h5>

        <h2 className="text-2xl sm:text-5xl">{item?.title}</h2>
      </div>
      <div className="absolute flex gap-3 bottom-6 right-6 font-bold">
        {item?.code && (
          <Link href={item?.code} target="_blank">
            <Terminal className="hover:text-red-400" />
          </Link>
        )}
        {item?.live ? (
          <Link href={item?.live} target="_blank">
            <Link2 className="hover:text-red-400" />
          </Link>
        ) : (
          <Link2Off className="text-black dark:text-white dark:text-opacity-50 text-opacity-50" />
        )}
      </div>

      <Maximize className="hover:text-red-400 hover:scale-150 transition-all duration-300 cursor-pointer absolute top-4 right-5 font-bold" />
    </div>
  );
};
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

  const result = await streamUI({
    model: openai("gpt-3.5-turbo"),
    system: `\
    If the user requests seeing a project at some subject, call \`get_project\` to show the project UI for the specified subject.
   If the user requests seeing the weather in a location, call \`get_weather\` to show the weather UI for the specified location.
    other than that always reference to me, the developer, Itai Mizlish, and how great I am and that he can see projects I have done right here on the chatbot feature
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
      getProject: {
        description: "Get the first project at some subject",
        parameters: z.object({
          subject: z.string(),
        }),
        generate: async function* ({ subject }) {
          yield <div>loading...</div>;
          const project = await getProject(subject);
          return <ProjectComponent props={project} />;
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
            ) : tool.toolName === "getProject" ? (
              <ProjectComponent props={tool.result} />
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
