"use client";

import React from "react";

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
      <div className="flex flex-col dark:text-white text-black fixed inset-y-0 top-1/3 max-h-[40vh] right-20">
        <h1 className="text-2xl">Table of Contents</h1>
        {headings
          ? headings.map((heading: any) => {
              return (
                <a
                  key={heading.id}
                  href={`#${heading.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById(heading.id)
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={` ${
                    heading.tagName === "H2"
                      ? "ml-3"
                      : heading.tagName === "H3"
                      ? "ml-5"
                      : ""
                  } scroll-smooth text-lg block mt-3 focus-visible:outline-accent`}
                >
                  <li className=" hover:bg-slate-600 font-medium hover:text-purple-700 hover:bg-opacity-40 transition-all duration-200 ease-in-out hover:font-bold list-none px-2 py-1 rounded-md">
                    {heading.innerText}
                  </li>
                </a>
              );
            })
          : "loading.."}
      </div>
    </div>
  );
}

export default TableOfContents;
