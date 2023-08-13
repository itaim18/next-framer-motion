import React from "react";

function Strong({ children }: any) {
  return (
    <span className="dark:bg-slate-900 bg-slate-200 text-indigo-400 px-2 border rounded-md mx-1 bg-opacity-60">
      {children}
    </span>
  );
}

export default Strong;
