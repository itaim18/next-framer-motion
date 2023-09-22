import React from "react";
import { RotateCcw } from "lucide-react";

const ResultCard = ({ result, handleRetry }) => {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(180deg,hsl(315deg 100% 81%) 0%,hsl(309deg 75% 74%) 11%,hsl(303deg 59% 67%) 22%,hsl(295deg 53% 62%) 33%,hsl(288deg 53% 58%) 44%,hsl(281deg 52% 54%) 56%,hsl(273deg 51% 51%) 67%,hsl(265deg 55% 48%) 78%,hsl(255deg 61% 45%) 89%,hsl(236deg 75% 40%) 100%)",
        width: "100%",
        height: "320px",
        justifyContent: "center",
        alignItems: "center",
      }}
      className={`border-2 relative flex border-pink-400 opacity-70 hover:opacity-100 transition-all duration-300 ease-in-out rounded-lg text-2xl text-blue-400 py-10 px-16 w-64 text-center ${
        result !== "completed" && "hidden"
      }`}
    >
      <button
        // whileHover={{ rotate: -30 }}
        // whileTap={{ rotate: -180 }}
        onClick={handleRetry}
        style={{ top: "14px", right: "14px", borderRadius: "100%" }}
        className="absolute top-2 p-3 right-2 border rounded-xl bg-slate-800 bg-opacity-60 hover:bg-opacity-80"
      >
        <RotateCcw size={36} />
      </button>
      {result === "completed" ? "Yay! you completed all questions🥳" : result}
    </div>
  );
};

export default ResultCard;
