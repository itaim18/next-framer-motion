"use client";
import "./Climbing.css";
import { useIntersectionObserver } from "@/src/hooks/useIntersectionObserver";
import React from "react";

function Climbing() {
  const ref = React.useRef<any>();
  const onScreen = useIntersectionObserver(ref, { threshold: 0 });
  return (
    <img
      ref={ref}
      className={`${
        onScreen ? "animate-bounce" : ""
      } h-64 m-auto aspect-auto rounded-md`}
      src="https://github.com/shadcn-ui/ui/assets/37772742/1e4a754f-f3c3-4d58-8240-db3b189173a4"
      alt="climbing"
    />
  );
}

export default Climbing;
