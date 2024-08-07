"use server";

import type { CoreMessage, ToolInvocation } from "ai";
import { openai } from "@ai-sdk/openai";
import { createAI, getMutableAIState, streamUI } from "ai/rsc";
import type { ReactNode } from "react";
import { SunIcon } from "lucide-react";
import Link from "next/link";
import { nanoid, sleep } from "../lib/utils";
import { DATA, blogs } from "@/data";
import { z } from "zod";
import { Link2, Link2Off, Terminal, Maximize } from "lucide-react";
import BlogSummaryCard from "@/src/components/BlogSummaryCard/BlogSummaryCard";

import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function ProjectsCarousel({ projects }: any) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm "
    >
      <CarouselContent>
        {projects.map((project: any, index: number) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 ">
            <div className="p-1 hover:border-red-500 card-wrapper ">
              <Card className="relative rounded-2xl">
                <CardContent className="flex aspect-square items-center justify-center h-fit sm:p-2 md:p-6">
                  <Link
                    target="_blank"
                    href={
                      project.live ??
                      project.code ??
                      "https://github.com/itaim18/"
                    }
                  >
                    {" "}
                    <span className="text-3xl md:text-xl font-semibold">
                      {project.title}
                    </span>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export type ServerMessage = {
  role: "user" | "assistant";
  content: string;
};

export type ClientMessage = {
  id: string;
  role: "user" | "assistant";
  display: React.ReactNode;
  content: any;
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
async function getProjects(): Promise<any> {
  const projects = DATA.slice(0, 6);
  return projects;
}
async function getBlog(): Promise<any> {
  const firstBlog = Array.isArray(blogs) && blogs.length > 0 ? blogs[0] : {};
  return firstBlog;
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
      className={`border-red-400 justify-start relative flex flex-col bg-transparent dark:bg-opacity-25 bg-opacity-25 aspect-square lg:aspect-auto col-span-2 rounded-lg py-4 px-4 border-2 ${item?.myClass}`}
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

export async function submitMessage(content: string) {
  const history = getMutableAIState<typeof AI>();

  history.update([
    ...history.get(),
    {
      role: "user",
      content,
    },
  ]);

  const result = await streamUI({
    model: openai("gpt-3.5-turbo"),
    system: `\
    If the user requests seeing projects in general, call \`get_projects\` to show the scrollable projects UI of 6 projects.
    If the user requests seeing a blog at some subject, call \`get_blog\` to show the blog UI for the last blog.
    If the user requests seeing a project at some specific subject, call \`get_project\` to show the project UI for the specified subject.
    If the user requests seeing the weather in a location, call \`get_weather\` to show the weather UI for the specified location.
    other than that always reference to me, the developer, Itai Mizlish, and how great I am and that he can see projects I have done right here on the chatbot feature
   `,

    messages: [
      {
        role: "system",
        content,
        toolInvocations: [],
      },
      ...history.get(),
    ] as CoreMessage[],
    text: ({ content, done }) => {
      if (done)
        history.done([...history.get(), { role: "assistant", content }]);

      return content;
    },
    tools: {
      getWeather: {
        description: "Get the weather for a location",
        parameters: z.object({
          city: z.string(),
        }),
        generate: async function* ({ city }) {
          yield <div>loading...</div>;
          const weather = await getWeather(city);
          await sleep(1000);
          history.done([
            ...history.get(),
            {
              role: "assistant",
              name: "get_project",
              content: `[${city}]`,
            },
          ]);
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
          await sleep(1000);
          history.done([
            ...history.get(),
            {
              role: "assistant",
              name: "get_project",
              content: `[${subject}]`,
            },
          ]);
          return <ProjectComponent props={project} />;
        },
      },
      getProjects: {
        description: "Get the 6 last projects",
        parameters: z.object({}),
        generate: async function* () {
          yield <div>loading...</div>;
          const projects = await getProjects();
          await sleep(1000);
          history.done([
            ...history.get(),
            {
              role: "assistant",
              name: "get_project",
              content: `[projects]`,
            },
          ]);
          return <ProjectsCarousel projects={projects} />;
        },
      },
      getBlog: {
        description: "Get a random blog post",
        parameters: z.object({}),
        generate: async function* () {
          yield <div>loading...</div>;
          const blog = await getBlog();

          await sleep(1000);
          history.done([
            ...history.get(),
            {
              role: "assistant",
              name: "get_blog",
              content: `[blog]`,
            },
          ]);
          return (
            <BlogSummaryCard
              slug={blog?.slug}
              title={blog?.title}
              publishedOn={blog?.publishedOn}
              abstract={blog?.abstract}
            />
          );
        },
      },
    },
    temperature: 0,
  });
  return {
    id: nanoid(),
    role: "assistant" as const,
    display: result.value,
  };
}

// export type UIState = ClientMessage[];
export type UIState = Array<{
  id: number;
  role: "user" | "assistant";
  display: ReactNode;
  toolInvocations?: ToolInvocation[];
}>;

export type AIState = Array<{
  id?: number;
  role: "user" | "assistant" | "system";
  messages: any[];
  content: string;
}>;
// Create the AI provider with the initial states and allowed actions
export const AI: any = createAI({
  initialAIState: [] as AIState,
  initialUIState: [] as UIState,
  actions: {
    submitMessage,
  },
});
