"use client";
import React from "react";
import useHighlighted from "@/src/hooks/useHighlighted";
const ToCLink = ({ heading }: any) => {
  const id = heading.id;
  const [highlighted, setHighlighted] = useHighlighted(id);
  return (
    <a
      className={` ${
        heading.tagName === "H2"
          ? "ml-3"
          : heading.tagName === "H3"
          ? "ml-5"
          : ""
      } scroll-smooth text-lg block mr-3 focus-visible:outline-accent`}
      href={`#${id}`}
      onClick={(e) => {
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      <li
        className={` ${
          highlighted && "text-purple-700"
        } hover:bg-slate-600 font-medium hover:text-purple-700 hover:bg-opacity-40 transition-all duration-200 ease-in-out hover:font-bold list-none px-2 py-1 rounded-md`}
      >
        {heading.innerText}
      </li>
    </a>
  );
};

export default ToCLink;
