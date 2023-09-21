"use client";
import { range } from "../HolidaysTest";
import React from "react";
import ToCLink from "./ToCLink";
const lines = [
  "Introduction",
  "Getting Started",
  "Step 1: Install Dependencies",
  "Step 2: Create a Pixelated Component",
  "step 3: Using the Pixelated React Node",
  "Now for our game",
  "Now for our game",
  "Conclusion",
];
function TableOfContents() {
  const [headings, setHeadings] = React.useState<any>(null);
  React.useEffect(() => {
    const headingElements: any = Array.from(
      document.querySelectorAll("[data-toc]")
    );
    setHeadings(headingElements);
  }, []);
  return (
    <div className="relative hidden xl:flex">
      <div className="flex flex-col max-w-[20vw] gap-1 overflow-auto dark:text-white text-black fixed inset-y-0 top-1/3 max-h-[50vh] right-20">
        <h1 className="text-2xl">Table of Contents</h1>
        {headings
          ? headings.map((heading: any) => (
              <ToCLink key={heading.id} heading={heading} />
            ))
          : range(8).map((num) => (
              <h1
                key={num}
                style={{
                  fontFamily: "var(--font-family-loading)",
                }}
              >
                {lines[num]}
              </h1>
            ))}
      </div>
    </div>
  );
}

export default TableOfContents;
