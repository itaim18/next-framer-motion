"use client";
import React from "react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/src/hooks/useIntersectionObserver";
import { Link2, Link2Off, Terminal, Maximize } from "lucide-react";

import Link from "next/link";
function Project({ item, handleChooseProject, i }: any) {
  const ref = React.useRef<any>();
  const onScreen = useIntersectionObserver(ref, { threshold: 0 });

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
      className={`border-red-400 justify-start relative flex flex-col bg-transparent dark:bg-opacity-25 bg-opacity-25 aspect-square lg:aspect-auto col-span-2 rounded-lg py-8 px-4 border-2 ${item.myClass}`}
    >
      {item.image ? (
        <motion.img
          src={item.image?.src}
          className="inset-0 w-full aspect-[5/3]   bg-purple-200 rounded-lg my-4"
        />
      ) : (
        <motion.div className="inset-0 w-full aspect-[5/3]   bg-purple-600 rounded-lg my-4"></motion.div>
      )}

      <div>
        <motion.h5 className="text-lg sm:text-2xl">{item.subtitle}</motion.h5>

        <motion.h2 className="text-2xl sm:text-5xl">{item.title}</motion.h2>
      </div>
      <div className="absolute flex gap-3 bottom-6 right-6 font-bold">
        {item.code && (
          <Link href={item.code} target="_blank">
            <Terminal className="hover:text-red-400" />
          </Link>
        )}
        {item.live ? (
          <Link href={item.live} target="_blank">
            <Link2 className="hover:text-red-400" />
          </Link>
        ) : (
          <Link2Off className="text-black dark:text-white dark:text-opacity-50 text-opacity-50" />
        )}
      </div>

      <Maximize
        onClick={() => {
          handleChooseProject(item.id);
        }}
        className="hover:text-red-400 hover:scale-150 transition-all duration-300 cursor-pointer absolute top-4 right-5 font-bold"
      />
    </motion.div>
  );
}

export default Project;
