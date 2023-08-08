"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { X } from "lucide-react";
const SPRING = {
  type: "spring",
  stiffness: 100,
  mass: 3,
  damping: 1,
};
const items = [
  {
    id: crypto.randomUUID(),
    subtitle: "hello there people of earth",
    title: "Price Explorer",
    myClass: "col-span-6 lg:col-span-4",
  },
  {
    id: crypto.randomUUID(),
    subtitle: "hello there people of earth",
    title: "Chit Chat",
    myClass: "col-span-6 lg:col-span-1",
  },
  {
    id: crypto.randomUUID(),
    subtitle: "hello there people of earth",
    title: "thanks",
    myClass: "col-span-6 lg:col-span-1",
  },
  {
    id: crypto.randomUUID(),
    subtitle: "hello there people of earth",
    title: "wow",
    myClass: "col-span-6 lg:col-span-2",
  },
  {
    id: crypto.randomUUID(),
    subtitle: "hello there people of earth",
    title: "Damn",
    myClass: "col-span-6 lg:col-span-2",
  },
  {
    id: crypto.randomUUID(),
    subtitle: "hello there people of earth",
    title: "naa",
    myClass: "col-span-6 lg:col-span-2",
  },
  {
    id: crypto.randomUUID(),
    subtitle: "hello there people of earth",
    title: "hiya",
    myClass: "col-span-6",
  },
];

export default function Projects() {
  const [selectedId, setSelectedId] = useState<any>(null);

  return (
    <main className="w-screen relative">
      <div className="relative  flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:lg:w-[200px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-950 after:via-blue-800 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:bg-gradient-to-br before:from-transparent before:dark:to-blue-700 before:dark:opacity-10  after:opacity-40 before:lg:h-[360px] z-[-1]"></div>{" "}
      <div
        onClick={() => {
          selectedId && setSelectedId(null);
        }}
        className={`grid gap-4 ${
          selectedId && "opacity-30"
        } relative w-fit min-h-[70vh] grid-cols-6 min-w-[240px] self-center mx-auto my-28 `}
      >
        <h1 className="text-4xl text-center self-center m-auto col-span-6">
          Projects
        </h1>
        {items.map((item, i) => (
          <motion.div
            key={item.id}
            layoutId={item.id}
            variants={{
              start: {
                opacity: 0,
                y: -30,
              },
              finish: { opacity: 1, y: 0, transition: { delay: 0.2 * i } },
            }}
            initial="start"
            animate="finish"
            style={{ opacity: 0.2 }}
            className={`border-red-400 bg-black bg-opacity-25 opacity-10 aspect-square lg:aspect-auto cursor-pointer col-span-2 rounded-lg py-8 px-4 border-2 ${item.myClass}`}
            onClick={() => {
              setSelectedId(item.id);
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
          >
            <div className=" inset-0 h-full bg-purple-600 rounded-lg my-4"></div>
            <motion.h5 className="text-lg">{item.subtitle}</motion.h5>
            <motion.h2 className="text-2xl">{item.title}</motion.h2>
          </motion.div>
        ))}
      </div>
      <AnimatePresence>
        {selectedId && (
          <motion.div
            layout
            className="absolute inset-0 mx-8 my-44 max-h-[60vh] aspect-[4/3] p-8 bg-black backdrop-blur bg-opacity-60 flex flex-col items-stretch  border-red-600 rounded-lg py-8 px-4 border-2"
            layoutId={selectedId}
          >
            <X
              className="border self-end"
              onClick={() => setSelectedId(null)}
            />
            <div className=" inset-0 h-full bg-purple-600 rounded-lg my-4"></div>
            <motion.h5 layout="position" className="text-lg">
              {items.find((item) => item.id === selectedId)?.subtitle}
            </motion.h5>
            <motion.h2 layout="position" className="text-2xl">
              {items.find((item) => item.id === selectedId)?.title}
            </motion.h2>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
