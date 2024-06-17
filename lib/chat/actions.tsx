import "server-only";
import { CoreMessage } from "ai";

import {
  createAI,
  createStreamableUI,
  getMutableAIState,
  getAIState,
  streamUI,
  createStreamableValue,
} from "ai/rsc";
// import { saveChat } from "@/app/actions";
import { openai } from "@ai-sdk/openai";
import Project from "@/components/AI/project-card";
import { Socials, LinksSkeleton } from "@/components/AI/links-skeleton";
import { z } from "zod";
import { sleep, nanoid } from "@/lib/utils";
import { SpinnerMessage } from "@/components/AI/spinner-message";
import { Message } from "@/components/ui/message";
import BlogHero from "@/src/components/BlogHero";

async function submitUserMessage(content: string) {
  "use server";

  const aiState = getMutableAIState<any>();

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
    initial: <SpinnerMessage />,
    system: `\
    You are a cool friendly technological conversation bot and you can help users navigate in my site and other sources on me, Itai Mizlish.
    You and the user can discuss web and other software and the user can see projects I have done, blog posts videos and links to my socials in the UI.
    
    Messages inside [] means that it's a UI element or a user event. For example:
    - "[Project=1]" means that an interface of cards of projects about web is shown to the user.
    - "[User has chosen the Zits project]" means that the user has chosen the zits project to display.
    
    If the user requests to see projects, call \`show_projects\` to show the projects UI.
    If the user just wants to see blog posts, call \`show_blog_posts\` to show the price.
    If you want to show socials, call \`list_socials\`.
    If you want to show events, call \`get_events\`.
    If the user wants to sell stock, or complete another impossible task, respond that you are a demo and cannot do that.
    
    Besides that, you can also chat with users and do some calculations or drop some compliments on me, Itai mizlish if needed.`,
    messages: [
      ...aiState.get().messages.map((message: any) => ({
        role: message.role,
        content: message.content,
        name: message.name,
      })),
    ],
    text: ({ content, done, delta }) => {
      if (!textStream) {
        textStream = createStreamableValue("");
        textNode = <Message isUser={false} content={textStream.value} />;
      }

      if (done) {
        textStream.done();
        aiState.done({
          ...aiState.get(),
          messages: [
            ...aiState.get().messages,
            {
              id: nanoid(),
              role: "assistant",
              content,
            },
          ],
        });
      } else {
        textStream.update(delta);
      }

      return textNode;
    },
    tools: {
      listSocials: {
        description: "List ways to contact the developer, Itai Mizlish.",
        parameters: z.object({
          socials: z.array(
            z.object({
              gLink: z.string().describe("The github link"),
              tLink: z.string().describe("The telephone link"),
              lLink: z.string().describe("The linkedin link"),
            })
          ),
        }),
        generate: async function* ({ socials }) {
          yield <LinksSkeleton />;

          await sleep(1000);

          const toolCallId = nanoid();

          aiState.done({
            ...aiState.get(),
            messages: [
              ...aiState.get().messages,
              {
                id: nanoid(),
                role: "assistant",
                content: [
                  {
                    type: "tool-call",
                    toolName: "listSocials",
                    toolCallId,
                    args: { socials },
                  },
                ],
              },
              {
                id: nanoid(),
                role: "tool",
                content: [
                  {
                    type: "tool-result",
                    toolName: "listSocials",
                    toolCallId,
                    result: socials,
                  },
                ],
              },
            ],
          });

          return <Socials props={socials} />;
        },
      },
      showBlogPosts: {
        description:
          "Get the blog post most related to what the user wants(if have nothing in subject bring a blog post from online). Use this to show the post card to the user.",
        parameters: z.object({
          title: z.string().describe("The name of the blog post title"),
          image: z
            .string()
            .describe("The route/link to an image in the blog post subject"),
          description: z
            .string()
            .describe("The first paragraph of the blog post"),
        }),
        generate: async function* ({ title, image, description }) {
          yield (
            <LinksSkeleton />
            //TODO: create component for blog post card
          );

          await sleep(1000);

          const toolCallId = nanoid();

          aiState.done({
            ...aiState.get(),
            messages: [
              ...aiState.get().messages,
              {
                id: nanoid(),
                role: "assistant",
                content: [
                  {
                    type: "tool-call",
                    toolName: "title, image, description",
                    toolCallId,
                    args: { title, image, description },
                  },
                ],
              },
              {
                id: nanoid(),
                role: "tool",
                content: [
                  {
                    type: "tool-result",
                    toolName: "showBlogPosts",
                    toolCallId,
                    result: { title, image, description },
                  },
                ],
              },
            ],
          });

          return (
            <div>{title}</div>
            //  <Project props={{ project="project x", description }} />
            //TO-DO:blog post component
          );
        },
      },
      showProjects: {
        description:
          "Show project and the UI to see technology stack and links to code and live site. Use this if the user wants to be impressed with my work.",
        parameters: z.object({
          project: z.string().describe("The project's title"),
          description: z
            .string()
            .describe(
              "The full description concerning what the project is, technologies and processes I have acquired"
            ),
          techStack: z
            .array(z.string())
            .describe("The technologies used in the project"),
          codeLink: z.string().describe("The link to the code repository"),
          liveLink: z.string().describe("The link to the live site"),
        }),
        generate: async function* ({
          project,
          description,
          techStack,
          codeLink,
          liveLink,
        }) {
          const toolCallId = nanoid();

          aiState.done({
            ...aiState.get(),
            messages: [
              ...aiState.get().messages,
              {
                id: nanoid(),
                role: "assistant",
                content: [
                  {
                    type: "tool-call",
                    toolName: "showProjects",
                    toolCallId,
                    args: {
                      project,
                      description,
                      techStack,
                      codeLink,
                      liveLink,
                    },
                  },
                ],
              },
              {
                id: nanoid(),
                role: "tool",
                content: [
                  {
                    type: "tool-result",
                    toolName: "showProjects",
                    toolCallId,
                    result: {
                      project,
                      description,
                      techStack,
                      codeLink,
                      liveLink,
                    },
                  },
                ],
              },
            ],
          });

          return (
            <Project
              props={{
                project,
                description,
                techStack,
                codeLink,
                liveLink,
              }}
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

export type Message = CoreMessage & {
  id: string;
};

export type UIState = {
  id: string;
  display: React.ReactNode;
}[];

export type AIState = {
  messages: Message[];
};

export const AI = createAI<any, any>({
  actions: {
    submitUserMessage,
  },
  initialUIState: [],
  initialAIState: { messages: [] },
  onGetUIState: async () => {
    "use server";

    const aiState = getAIState();

    if (aiState) {
      const uiState = getUIStateFromAIState(aiState);
      return uiState;
    }
  },
  onSetAIState: async ({ state }) => {
    "use server";

    const { messages } = state;
    console.log(messages);

    return;
  },
});

export const getUIStateFromAIState = (aiState: any) => {
  return aiState.messages
    .filter((message: any) => message.role !== "system")
    .map((message: any, index: any) => ({
      id: `${aiState.chatId}-${index}`,
      display:
        message.role === "tool" ? (
          message.content.map((tool: any) => {
            return tool.toolName === "listSocials" ? (
              // {/* @ts-expect-error */}
              <Socials props={tool.result} />
            ) : tool.toolName === "showBlogPosts" ? (
              // {/* @ts-expect-error */}
              <BlogHero props={tool.result} />
            ) : tool.toolName === "showProjects" ? (
              <Project props={tool.result} />
            ) : null;
          })
        ) : message.role === "user" ? (
          <Message isUser={true}>{message.content as string}</Message>
        ) : message.role === "assistant" &&
          typeof message.content === "string" ? (
          <Message isUser={false} content={message.content} />
        ) : null,
    }));
};
