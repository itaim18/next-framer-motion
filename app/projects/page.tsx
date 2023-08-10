"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProjectsGrid from "@/src/components/ProjectsGrid/ProjectsGrid";
const DATA = [
  {
    id: crypto.randomUUID(),
    subtitle: "hello there people of earth",
    title: "Price Explorer",
    myClass: "col-span-6 md:col-span-3 lg:col-span-4 xl:col-span-4",
    types: ["Web"],
  },

  {
    id: crypto.randomUUID(),
    subtitle: "hello there people of earth",
    title: "Zits",
    myClass: "col-span-6 md:col-span-3 lg:col-span-2",
    types: ["Volunteer", "Web", "Mobile"],
  },
  {
    id: crypto.randomUUID(),
    subtitle: "hello there people of earth",
    title: "Chit Chat",
    myClass: "col-span-6 md:col-span-3 lg:col-span-2",
    types: ["Web"],
  },
  {
    id: crypto.randomUUID(),
    subtitle: "hello there people of earth",
    title: "Sportodo",
    myClass: "col-span-6 md:col-span-3 lg:col-span-2",
    types: ["Web"],
  },
  {
    id: crypto.randomUUID(),
    subtitle: "hello there people of earth",
    title: "Coop",
    myClass: "col-span-6 md:col-span-3 lg:col-span-2",
    types: ["Mobile", "Open Source"],
  },
  {
    id: crypto.randomUUID(),
    subtitle: "hello there people of earth",
    title: "Qwik-UI",
    myClass: "col-span-6 md:col-span-3 lg:col-span-2 xl:col-span-3",
    types: ["Open Source", "Web"],
  },
  {
    id: crypto.randomUUID(),
    subtitle: "hello there people of earth",
    title: "Portfolio",
    myClass: "col-span-6 md:col-span-4 xl:col-span-3",
    types: ["Web"],
  },
  {
    id: crypto.randomUUID(),
    subtitle: "hello there people of earth",
    title: "UniShield",
    myClass: "col-span-6 md:col-span-3 lg:col-span-4",
    types: ["Mobile", "Volunteer"],
  },
  {
    id: crypto.randomUUID(),
    subtitle: "hello there people of earth",
    title: "StartAch",
    myClass: "col-span-6 md:col-span-3 lg:col-span-2",
    types: ["Mobile", "Web", "Volunteer"],
  },
];
const topics = ["All", "Web", "Mobile", "Volunteer"];
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
            <motion.div className="flex sticky  justify-end max-h-[60vh] overflow-y-auto">
              <X
                className=" cursor-pointer"
                onClick={() => setSelectedId(null)}
              />
            </motion.div>
            <motion.div className="inset-0 w-full aspect-video bg-purple-600 rounded-lg my-4"></motion.div>
            <motion.h5 className="text-lg">
              {items.find((item) => item.id === selectedId)?.subtitle}
            </motion.h5>
            <motion.h2 className="text-2xl">
              {items.find((item) => item.id === selectedId)?.title}
            </motion.h2>
            <ul>
              <li>react</li>
              <li>JS</li>
              <li>Framer-motion</li>
              <li>react</li>
              <li>JS</li>
              <li>Framer-motion</li>
              <li>react</li>
              <li>JS</li>
              <li>Framer-motion</li>
              <li>react</li>
              <li>JS</li>
              <li>Framer-motion</li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
