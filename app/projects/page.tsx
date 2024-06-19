"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { X, Minimize, Link2, Link2Off, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProjectsGrid from "@/src/components/ProjectsGrid/ProjectsGrid";
import PriceExplorer from "../../public/assets/projects/priceExplorer.png";
import chitchat from "../../public/assets/projects/chitchat.png";
import coop from "../../public/assets/projects/coop.png";
import portfolio from "../../public/assets/projects/portfolio.png";
import qwikui from "../../public/assets/projects/qwikui.png";
import sportodo from "../../public/assets/projects/sportodo.png";
import startach from "../../public/assets/projects/startach.png";
import unishield from "../../public/assets/projects/unishield.png";
import zits from "../../public/assets/projects/zits.png";
import Link from "next/link";
import {
  SiAirtable,
  SiHasura,
  SiJest,
  SiGooglemaps,
  SiNextdotjs,
  SiFlutter,
  SiFirebase,
  SiTailwindcss,
} from "react-icons/si";
import { FaReact, FaCss3 } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import {
  TbBrandNextjs,
  TbBrandFramerMotion,
  TbBrandFirebase,
  TbBrandReactNative,
  TbBrandFlutter,
  TbBrandCss3,
} from "react-icons/tb";
import { BiLogoTailwindCss } from "react-icons/bi";
const DATA: any[] = [
  {
    image: PriceExplorer,
    id: crypto.randomUUID(),
    subtitle: "The best tool for sales to handle their workforce",
    description:
      "The optimal solution for sales professionals to manage their company's workforce involves utilizing a combination of technologies including React, Airtable, Framer Motion, Next.js, Radix UI, UIShadcn, React Hook Form, and NextAuth.",
    title: "AI-Mirror",
    myClass: "col-span-6 md:col-span-3 lg:col-span-4 xl:col-span-4",
    types: ["AI"],
    live: "http://google.com/",
    skills: [BiLogoTailwindCss],
  },
  {
    image: PriceExplorer,
    id: crypto.randomUUID(),
    subtitle: "The best tool for sales to handle their workforce",
    description:
      "The optimal solution for sales professionals to manage their company's workforce involves utilizing a combination of technologies including React, Airtable, Framer Motion, Next.js, Radix UI, UIShadcn, React Hook Form, and NextAuth.",
    title: "Pricer",
    myClass: "col-span-6 md:col-span-3 lg:col-span-4 xl:col-span-4",
    types: ["Web"],
    live: "http://pricer.itaimiz.com/",
    skills: [
      BiLogoTailwindCss,
      FaReact,
      TbBrandNextjs,
      TbBrandFramerMotion,
      TbBrandFirebase,
      SiAirtable,
    ],
  },
  {
    image: unishield,
    id: crypto.randomUUID(),
    description:
      "A mobile application built with React Native that empowers women by providing them with the tools and information needed to identify and address instances of technology-related violence or abuse.",
    subtitle: "App that helps women under tech violence",
    title: "UniShield",
    myClass: "col-span-6 md:col-span-3 lg:col-span-4",
    types: ["Data", "ML"],
    skills: [TbBrandReactNative, TbBrandCss3, FaReact],
  },
  {
    image: zits,
    id: crypto.randomUUID(),
    subtitle: "An app that connects WW2 survivors with volunteers",
    description:
      "A mobile application designed to connect Holocaust survivors with our dedicated volunteers, offering distinct user experiences tailored to both groups. This app is developed using React Native, Recoil for state management, Firebase for backend services, and React Navigation for seamless navigation.",
    title: "Zits",
    myClass: "col-span-6 md:col-span-3 lg:col-span-2",
    types: ["Volunteer", "Web", "Mobile"],
    live: "https://zits.vercel.app/",
    code: "https://github.com/itaim18/Zits",
    skills: [BiLogoTailwindCss, FaReact, TbBrandReactNative, TbBrandFirebase],
  },
  {
    image: chitchat,
    id: crypto.randomUUID(),
    description:
      "Engage with individuals globally through Chit-Chat, a platform enabling text and image communication. Send messages and pictures, receive notifications for unread messages, and view images in their entirety when desired. This interactive experience is built using React, Firebase for backend functionality, and Jest for testing.",
    subtitle: "Personally designed Chat web app ",
    title: "Chit Chat",
    myClass: "col-span-6 md:col-span-3 lg:col-span-2",
    types: ["Web"],
    live: "https://chitnchat.netlify.app/login",
    code: "https://github.com/itaim18/ChitChat",
    skills: [FaReact, SiFirebase, TbBrandCss3],
  },
  {
    image: sportodo,
    id: crypto.randomUUID(),
    subtitle: "Web app for finding your sport and read about it",
    title: "Sportodo",
    myClass: "col-span-6 md:col-span-3 lg:col-span-2",
    types: ["Web"],
    live: "https://sportodo.netlify.app/",
    code: "https://github.com/itaim18/sportodo-app",
    skills: [FaReact, TbBrandCss3],
  },
  {
    image: coop,
    id: crypto.randomUUID(),
    description:
      "Develop an application using Flutter that empowers users to stay informed about ongoing protests. This app integrates Google Maps to provide location-based insights and uses Dio for efficient data fetching.    With this app, users can access comprehensive information about ongoing protests, their locations, and relevant details. The combination of Flutter, Google Maps, and Dio ensures a seamless and responsive user experience.",
    subtitle: "An app that lets you know all about accruing protests",
    title: "Coop",
    myClass: "col-span-6 md:col-span-3 lg:col-span-2",
    types: ["Mobile", "Open Source"],
    code: "https://github.com/stavgafny/coop",
    skills: [SiFlutter, SiGooglemaps],
  },
  {
    image: qwikui,
    id: crypto.randomUUID(),
    description:
      "A meticulously curated component library, diligently maintained by the Qwik team, tailored specifically to complement the Qwik.js framework. This library offers a collection of reusable UI elements and components, seamlessly integrated with Qwik.js to enhance the development process and streamline the creation of efficient and performant web applications.",
    subtitle: "Component library suitable for Qwik.js",
    title: "Qwik-UI",
    myClass: "col-span-6 md:col-span-3 lg:col-span-2 xl:col-span-3",
    types: ["Open Source", "Web"],
    live: "https://qwikui.com/",
    code: "https://github.com/qwikifiers/qwik-ui",
    skills: [BiLogoTailwindCss, SiJest, RiJavascriptFill],
  },
  {
    image: portfolio,
    id: crypto.randomUUID(),
    description:
      "Interactive web application designed to educate and guide users through the intricacies of Framer Motion, a powerful animation library.",
    subtitle: "Engaging web app educates on Framer-Motion.",
    title: "Portfolio",
    myClass: "col-span-6 md:col-span-3 lg:col-span-4 xl:col-span-3",
    types: ["Web"],
    live: "https://next-react-framer-motion.vercel.app/",
    code: "https://github.com/itaim18/next-framer-motion",
    skills: [FaReact, SiNextdotjs, TbBrandFramerMotion, BiLogoTailwindCss],
  },
  {
    image: unishield,
    id: crypto.randomUUID(),
    description:
      "A mobile application built with React Native that empowers women by providing them with the tools and information needed to identify and address instances of technology-related violence or abuse.",
    subtitle: "App that helps women under tech violence",
    title: "UniShield",
    live: "https://unishield.vercel.app/",
    code: "https://github.com/itaim18/Zits",
    myClass: "col-span-6 md:col-span-3 lg:col-span-4",
    types: ["Mobile", "Volunteer"],
    skills: [TbBrandReactNative, TbBrandCss3, FaReact],
  },
  {
    image: startach,
    id: crypto.randomUUID(),
    live: "https://startach.org.il/",
    description:
      "A dedicated app for 'Yedidim Badrachim,' catering to individuals facing roadblocks during their journeys. This platform connects drivers encountering difficulties with empathetic volunteers who offer assistance, ensuring they can overcome car-related issues and continue their travels seamlessly.",
    subtitle: "An app for 'Yedidim Badrachim'",
    title: "StartAch",
    myClass: "col-span-6 md:col-span-3 lg:col-span-2",
    types: ["Mobile", "Web", "Volunteer"],
    skills: [SiFlutter, SiHasura],
  },
];
const topics = ["All", "Web", "Mobile", "Volunteer", "AI", "Data", "ML"];
export default function Projects() {
  const [items, setItems] = React.useState(DATA);
  const [selectedId, setSelectedId] = useState<any>(null);
  const [topic, setTopic] = useState("All");
  React.useEffect(() => {
    selectedId
      ? (document.getElementsByTagName("html")[0].style.overflowY = "hidden")
      : (document.getElementsByTagName("html")[0].style.overflowY = "auto");
  }, [selectedId]);
  function toggleTopic(myTopic: any) {
    const nextProjects = DATA.filter(
      (item: any) => item.types.includes(myTopic) || myTopic === "All"
    );
    setTopic(myTopic);
    setItems(nextProjects);
  }
  const selectedItem = items.find((item) => item.id === selectedId);
  return (
    <main className="w-screen relative">
      <div className="relative  flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:lg:w-[200px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-950 after:via-blue-800 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:bg-gradient-to-br before:from-transparent before:dark:to-blue-700 before:dark:opacity-10  after:opacity-40 before:lg:h-[360px] z-[-1]"></div>{" "}
      <div
        onClick={() => {
          selectedId && setSelectedId(null);
        }}
        className={`grid gap-4 relative min-w-fit min-h-[70vh] grid-cols-6 mx-14 lg:mx-24 xl:mx-36 2xl:mx-56 self-center  my-28  lg:mb-36 mt-56 ${
          selectedId && "mb-96 opacity-30"
        }`}
      >
        <h1 className=" w-full flex flex-row flex-wrap gap-0 m-auto col-span-6">
          {topics.map((myTopic, i) => (
            <Button
              className={`text-2xl m-0 p-1 tracking-wide hover:text-indigo-900 ${
                topic === myTopic
                  ? "text-indigo-700 hover:text-indigo-700"
                  : "text-black dark:text-white hover:dark:text-indigo-300"
              } `}
              onClick={() => toggleTopic(myTopic)}
              variant="link"
              key={i}
            >
              {"//"}
              {myTopic}
            </Button>
          ))}
        </h1>
        <ProjectsGrid
          items={items}
          topic={topic}
          handleChooseProject={(projectId: any) => {
            setSelectedId(projectId);
          }}
        />
      </div>
      <AnimatePresence>
        {selectedId && (
          <motion.div
            className="fixed inset-0 w-[80vw] overflow-y-auto lg:w-[60vw] 2xl:w-[45vw] mx-auto my-32 z-[60] backdrop-blur justify-evenly border-red-600 rounded-lg py-8 px-4 border-2"
            layoutId={selectedId}
          >
            <motion.div className="flex sticky  justify-end max-h-[60vh] ">
              <Minimize
                className="hover:text-red-400 hover:scale-100 scale-125 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedId(null)}
              />
            </motion.div>
            {selectedItem?.image ? (
              <motion.img
                src={selectedItem?.image?.src}
                className="inset-0 w-full aspect-video bg-purple-600 rounded-lg my-4"
              />
            ) : (
              <motion.div className="inset-0 w-full aspect-video bg-purple-600 rounded-lg my-4"></motion.div>
            )}

            <motion.h5 className="text-xl self-end text-end text-purple-400">
              {selectedItem?.subtitle}
            </motion.h5>
            <motion.h2 className="text-4xl ml-3">
              {selectedItem?.title}
            </motion.h2>
            <motion.p className="w-2/3 ml-3 tracking-wide text-justify">
              {selectedItem?.description}
            </motion.p>
            <div className="ml-3 mt-2 text-4xl flex flex-row gap-4">
              {" "}
              {selectedItem?.skills?.map((skill: any) => {
                const Tag = skill;
                return <Tag key={`tag-${skill}`} />;
              })}
            </div>
            <div className=" sticky flex gap-3 bottom-6 right-6 font-bold justify-end">
              {selectedItem?.code && (
                <Link href={selectedItem?.code} target="_blank">
                  <Terminal className="hover:text-red-400" />
                </Link>
              )}
              {selectedItem?.live ? (
                <Link href={selectedItem?.live} target="_blank">
                  <Link2 className="hover:text-red-400" />
                </Link>
              ) : (
                <Link2Off className="text-black dark:text-white dark:text-opacity-50 text-opacity-50" />
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
