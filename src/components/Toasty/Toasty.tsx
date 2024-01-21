"use client";
import React from "react";
import { motion, useMotionValue } from "framer-motion";
import toasty from "./toasty.png";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function Toasty() {
  const devIcon = {
    hidden: {
      pathLength: 0,
      fillOpacity: 0,
    },
    visible: {
      pathLength: 1,
      fillOpacity: 1,
    },
  };

  const pathLength = useMotionValue(1);
  const [isShown, setIsShown] = React.useState(false);

  const wrapperRef = React.useRef<any>();

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;

      setIsShown(entry.isIntersecting);
    });

    observer.observe(wrapperRef.current);
  }, []);

  const translateX = isShown ? "0%" : "420px";

  return (
    <div ref={wrapperRef} className="relative z-50">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              className="absolute cursor-pointer right-4 bottom-8 text-6xl will-change-transform"
              href={"/DevStream"}
            >
              <motion.div
                transition={{
                  type: "spring",
                  stiffness: isShown ? 300 : 600,
                  damping: isShown ? 70 : 40,
                  restDelta: 0.1,
                }}
                animate={{ x: translateX }}
              >
                <div className="w-44 bg-slate-800 overflow-hidden h-24 z-10 absolute top-4 inset-x-0 first-letter:text-md">
                  <span className="inset-0"> DevStream</span>
                </div>
                <Image
                  loading="lazy"
                  width={360}
                  height={360}
                  className="w-40 relative z-20 h-40"
                  src={toasty}
                  alt="toasty"
                />
              </motion.div>
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>Go watch some of favorite Web Dev Content</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}

export default Toasty;
