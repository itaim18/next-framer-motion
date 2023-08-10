"use client";
import React from "react";
import Project from "./Project";
function ProjectsGrid({ items, handleChooseProject }: any) {
  console.log(items);

  return (
    <>
      {items.map((item: any, i: any) => (
        <Project
          key={i}
          item={item}
          i={i}
          handleChooseProject={handleChooseProject}
        />
      ))}
    </>
  );
}

export default ProjectsGrid;
