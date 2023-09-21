import React from "react";

const ResultCard = ({ result }) => {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(180deg,hsl(315deg 100% 81%) 0%,hsl(309deg 75% 74%) 11%,hsl(303deg 59% 67%) 22%,hsl(295deg 53% 62%) 33%,hsl(288deg 53% 58%) 44%,hsl(281deg 52% 54%) 56%,hsl(273deg 51% 51%) 67%,hsl(265deg 55% 48%) 78%,hsl(255deg 61% 45%) 89%,hsl(236deg 75% 40%) 100%)",
      }}
      className={`border rounded-lg text-2xl text-blue-400 py-10 px-16 ${
        result !== "completed" && "hidden"
      }`}
    >
      {result === "completed" ? "Yay! you completed all questions🥳" : result}
    </div>
  );
};

export default ResultCard;
