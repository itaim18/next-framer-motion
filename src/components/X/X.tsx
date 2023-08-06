"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import twix from "./Twix.svg";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Link from "next/link";

function X() {
  const [hoverX, setHoverX] = React.useState(false);
  return (
    <Popover>
      <PopoverTrigger asChild>
        <motion.svg
          onMouseEnter={() => setHoverX(true)}
          onMouseLeave={() => setHoverX(false)}
          xmlns="http://www.w3.org/2000/svg"
          height="1.6em"
          className="mr-3 cursor-pointer fill-black dark:fill-white"
          viewBox="0 0 512 512"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            scale: { delay: 2, duration: 0.7, ease: "easeInOut" },
            rotate: { delay: 2, duration: 0.7, ease: "easeInOut" },
          }}
        >
          <motion.path
            transition={{
              default: { duration: 0.8, ease: "easeInOut" },
              fillOpacity: { delay: 2, duration: 0.5, ease: [1, 0, 0.8, 1] },
            }}
            className={
              hoverX
                ? "fill-[#1da1f2] stroke-[#1da1f2]"
                : "fill-black stroke-black dark:fill-white "
            }
            stroke="white"
            variants={icon}
            initial="hidden"
            animate="visible"
            d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
          />
        </motion.svg>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <div className="flex flex-row items-center">
              {" "}
              <Image title="Twix" src={twix} alt="Twix" width={48} />
              <h4 className="font-medium text-md ml-3 leading-none">
                or Twitter
              </h4>
            </div>
            <AlertDialog>
              {" "}
              <p className="text-sm text-muted-foreground flex flex-row">
                or even X for that matter, click{" "}
                <AlertDialogTrigger asChild>
                  <h1 className="text-sm cursor-pointer text-indigo-600  hover:text-indigo-400 font-bold ml-1">
                    {" "}
                    here
                  </h1>
                </AlertDialogTrigger>
              </p>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle className="text-center">
                    Do we really wanna get there?
                  </AlertDialogTitle>
                  <AlertDialogDescription className="text-left w-3/5 m-auto">
                    You know what? Fine! 😒 but this one&apos;s on your head
                    👉🚪 go in. <br /> Laugh your laughs at me 😅
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter className="flex flex-row justify-around">
                  <AlertDialogCancel>Never Mind</AlertDialogCancel>
                  <Link
                    className="mt-2"
                    target="_blank"
                    href="https://twitter.com/IMizlish"
                  >
                    <AlertDialogAction>I&apos;m going in</AlertDialogAction>
                  </Link>
                </AlertDialogFooter>
              </AlertDialogContent>{" "}
            </AlertDialog>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default X;

const icon = {
  hidden: {
    pathLength: 0,
    fillOpacity: 0,
  },
  visible: {
    pathLength: 1,
    fillOpacity: 1,
  },
};
