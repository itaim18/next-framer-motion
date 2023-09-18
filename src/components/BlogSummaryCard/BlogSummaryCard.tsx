import React from "react";
import Link from "next/link";
import { format } from "date-fns";

function BlogSummaryCard({ slug, title, publishedOn, abstract }: any) {
  const href = `/blog/${slug}`;
  const humanizedDate = format(new Date(publishedOn), "MMMM do, yyyy");

  return (
    <div className="mb-16 flex flex-col pb-14 relative">
      <Link
        href={href}
        className="text-2xl mr-2 hover:text-indigo-400  transition-all ease-in-out duration-300"
      >
        {title}
      </Link>
      <time dateTime={publishedOn}>{humanizedDate}</time>

      <p className="mt-4">
        {abstract}
        <br />
        <Link
          href={href}
          className="absolute bottom-4 left-3/4 text-indigo-400 group hover:text-indigo-200"
        >
          <span className="group-hover:mr-2 transition-all ease-in-out duration-300">
            {" "}
            Continue reading
          </span>{" "}
          →
        </Link>
      </p>
    </div>
  );
}

export default BlogSummaryCard;
