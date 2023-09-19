import React from "react";
import { format } from "date-fns";

function BlogHero({ title, publishedOn, className, ...delegated }: any) {
  const humanizedDate = format(new Date(publishedOn), "MMMM do, yyyy");

  return (
    <header
      className="relative flex flex-col justify-end items-center w-full max-w-xl m-auto"
      {...delegated}
    >
      <div className="relative w-full max-w-lg p-8">
        <h1 className="mb-1 text-3xl font-bold">{title}</h1>
        <p className="text-xl text-slate-500 mb-0 font-semibold">
          Published on{" "}
          <time dateTime={publishedOn} className="font-bold">
            {humanizedDate}
          </time>
        </p>
      </div>
    </header>
  );
}

export default BlogHero;
