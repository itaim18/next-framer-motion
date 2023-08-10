"use client";
import React from "react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/src/hooks/useIntersectionObserver";
function Project({ item, handleChooseProject, i }: any) {
  const ref = React.useRef<any>();
  const onScreen = useIntersectionObserver(ref, {});

  return (
    <motion.div
      id="card"
      key={item.id}
      ref={ref}
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
      animate={onScreen ? "finish" : "start"}
      className={`border-red-400 justify-start flex flex-col bg-white dark:bg-black dark:bg-opacity-25 bg-opacity-25 aspect-square lg:aspect-auto cursor-pointer col-span-2 rounded-lg py-8 px-4 border-2 ${item.myClass}`}
      onClick={() => {
        handleChooseProject(item.id);
      }}
    >
      <motion.div className="inset-0 w-full aspect-[5/3]   bg-purple-600 rounded-lg my-4"></motion.div>
      <div>
        <motion.h5 className="text-lg sm:text-2xl">{item.subtitle}</motion.h5>
        <motion.h2 className="text-2xl sm:text-5xl">{item.title}</motion.h2>
      </div>
    </motion.div>
  );
}

export default Project;
