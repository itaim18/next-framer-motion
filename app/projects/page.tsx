"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInView } from "react-intersection-observer";
import { InView } from "react-intersection-observer";
const items = [
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
  const [selectedId, setSelectedId] = useState<any>(null);
  const [topic, setTopic] = useState("All");
  const [y, setY] = useState<number>(0);
  React.useEffect(() => {
    selectedId
      ? (document.getElementsByTagName("html")[0].style.overflowY = "hidden")
      : (document.getElementsByTagName("html")[0].style.overflowY = "auto");
  }, [selectedId, y]);

  return (
    <main className="w-screen relative">
      <div className="relative  flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:lg:w-[200px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-950 after:via-blue-800 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:bg-gradient-to-br before:from-transparent before:dark:to-blue-700 before:dark:opacity-10  after:opacity-40 before:lg:h-[360px] z-[-1]"></div>{" "}
      <div
        onClick={() => {
          selectedId && setSelectedId(null);
        }}
        className={`grid gap-4 ${
          selectedId && "opacity-30"
        } relative min-w-fit min-h-[70vh] grid-cols-6 mx-14 lg:mx-24 xl:mx-36 2xl:mx-56 self-center  my-28 lg:my-56 ${
          selectedId && "mb-96"
        } lg:my-36`}
      >
        <h1 className=" w-full flex flex-row flex-wrap gap-0 m-auto col-span-6">
          {topics.map((myTopic, i) => (
            <Button
              className={`text-2xl m-0 p-1 hover:dark:text-indigo-300 hover:text-indigo-900 ${
                topic === myTopic
                  ? "text-indigo-700 hover:text-indigo-700"
                  : "text-black dark:text-white"
              } `}
              onClick={() => setTopic(myTopic)}
              variant="link"
              key={i}
            >
              {"//"}
              {myTopic}
            </Button>
          ))}
        </h1>
        {items
          .filter((item) => item.types.includes(topic) || topic === "All")
          .map((item, i) => (
            <InView key={i}>
              {({ ref, inView }) => (
                <motion.div
                  ref={ref}
                  // key={item.id}
                  layoutId={item.id}
                  variants={{
                    start: {
                      opacity: 0,
                      y: -30,
                    },
                    finish: {
                      opacity: 1,
                      y: 0,
                      transition: { delay: 0.05 * i },
                    },
                  }}
                  initial="start"
                  animate={inView && "finish"}
                  style={{ opacity: 0.2 }}
                  className={`border-red-400 justify-start flex flex-col bg-white dark:bg-black dark:bg-opacity-25 bg-opacity-25 aspect-square lg:aspect-auto cursor-pointer col-span-2 rounded-lg py-8 px-4 border-2 ${item.myClass}`}
                  onClick={(e: any) => {
                    const scrolly =
                      e.currentTarget.getBoundingClientRect().y +
                      window.scrollY;
                    setSelectedId(item.id);
                    setY(scrolly);
                  }}
                >
                  <motion.div className="inset-0 w-full aspect-[5/3]   bg-purple-600 rounded-lg my-4"></motion.div>
                  <div>
                    <motion.h5 className="text-lg sm:text-2xl">
                      {item.subtitle}
                    </motion.h5>
                    <motion.h2 className="text-2xl sm:text-5xl">
                      {item.title}
                    </motion.h2>
                  </div>
                </motion.div>
              )}
            </InView>
          ))}
      </div>
      <AnimatePresence>
        {selectedId && (
          <motion.div
            className="fixed inset-0 w-[80vw] lg:w-[60vw] 2xl:w-[45vw] mx-auto my-32 z-[60] backdrop-blur justify-evenly aspect-[4/3] lg:aspect-[5/3] border-red-600 rounded-lg py-8 px-4 border-2"
            layoutId={selectedId}
          >
            <div className="flex justify-end">
              <X onClick={() => setSelectedId(null)} />
            </div>
            <motion.div className="inset-0 w-full aspect-[5/3] lg:aspect-video  bg-purple-600 rounded-lg my-4"></motion.div>
            <motion.h5 className="text-lg">
              {items.find((item) => item.id === selectedId)?.subtitle}
            </motion.h5>
            <motion.h2 className="text-2xl">
              {items.find((item) => item.id === selectedId)?.title}
            </motion.h2>
            <ul className="overflow-y-auto">
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
