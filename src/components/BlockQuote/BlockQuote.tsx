import React from "react";

function BlockQuote({ children }: any) {
  return (
    <div className="flex flex-row gap-3">
      <div className="w-2 h-full bg-slate-500 rounded-full"></div>
      {children}
    </div>
  );
}

export default BlockQuote;
