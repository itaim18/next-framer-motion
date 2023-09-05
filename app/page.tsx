"use client";
import Toasty from "@/src/components/Toasty/Toasty";
import { motion } from "framer-motion";
import FlexLesson from "@/src/components/FlexLesson/FlexLesson";

export default function Home() {
  return (
    <>
      <main className="flex  flex-col ">
        <div className="relative mt-44  self-center flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:lg:w-[200px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"></div>
        <motion.article
          variants={container}
          initial="hidden"
          animate="visible"
          className="flx flex-col p-6 gap-20 leading-9  mx-auto w-fit"
        >
          <h2 className="text-4xl mb-4  text-indigo-400">Itai Mizlish</h2>
          <h1 className="text-5xl mb-4 z-0">Frontend Developer</h1>
          <h3 className="text-2xl  mb-8 text-indigo-400">
            Always focused on UX, optimization and sharing great solutions with
            developers.
          </h3>
        </motion.article>
        <FlexLesson />
      </main>
      <Toasty />
    </>
  );
}
const container = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};
