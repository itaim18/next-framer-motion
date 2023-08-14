import React from "react";
import { motion } from "framer-motion";

function MoviesGrid({ books, handleSelectBook }: any) {
  return (
    <section className="mt-[86vh] min-h-screen  flex flex-col">
      <div className="flex flex-row overflow-x-auto h-full w-screen backdrop-blur list-none">
        {books.slice(0, 10).map((book: any, i: number) => (
          <div
            className="cursor-pointer ml-12 sm:ml-16 relative flex p-3 flex-row "
            key={book.isbn}
          >
            <button className="relative bg-transparent items-start w-[25vw] sm:w-[20vw] md:w-[16vw] lg:w-[12vw]  flex flex-row aspect-[3/5] cursor-pointer">
              <span
                style={{ textShadow: " 2px 2px 1px red" }}
                className="text-[8rem] text-slate-900 drop-shadow-2xl sm:text-[11rem] leading-[0.7] scale-x-125 z-10 p-0 relative left-3 font-light  tracking-tighter"
              >
                {i + 1}
              </span>
              <img
                alt={book.name}
                src={book.coverSrc}
                className=" object-cover z-20 rounded-sm w-[25vw] sm:w-[20vw] md:w-[16vw] lg:w-[12vw] aspect-[3/5] cursor-pointer will-change-transform"
              />
            </button>
          </div>
        ))}
      </div>
      <h1 className="text-3xl ml-4 w-screen">Some of the movies I like</h1>
      <ul className="grid grid-cols-3 lg:grid-cols-6 xl:grid-cols-8 content-start gap-6 p-4 rounded-sm min-h-full backdrop-blur list-none">
        {books.map((book: any) => (
          <li className="cursor-pointer" key={book.isbn}>
            <button
              className="relative w-full block bg-transparent border-none p-0 cursor-pointer"
              onClick={() => handleSelectBook(book)}
            >
              <motion.img
                layoutId={`book-cover-${book.isbn}`}
                alt={book.name}
                src={book.coverSrc}
                className="block aspect-[3/5] object-cover rounded-sm cursor-pointer will-change-transform w-full h-full"
                draggable={false}
              />
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default MoviesGrid;
