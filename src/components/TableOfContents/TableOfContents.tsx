"use client";
import React from "react";
import ToCLink from "./ToCLink";

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
          : "loading..."}
      </div>
    </div>
  );
}

export default TableOfContents;
