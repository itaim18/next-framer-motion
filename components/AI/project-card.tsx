import React from "react";

interface projectProps {
  project: string;
  description: string;
  techStack: string[];
  codeLink: string;
  liveLink: string;
}

const Project = ({ props: project }: { props: projectProps }) => {
  return <div>project-card</div>;
};

export default Project;
