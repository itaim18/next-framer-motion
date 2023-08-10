import React from "react";
import { motion } from "framer-motion";

function MoviesGrid({ books, handleSelectBook, ...delegated }: any) {
  return (
    <section {...delegated}>
      <div className="flex flex-col ">
        <h1 className="text-3xl text-slate-100 bg-slate-900 w-fit">
          Some of the movies I like
        </h1>
        <ul className="grid grid-cols-8 content-start gap-6 p-4 rounded-sm min-h-full bg-violet-950 bg-opacity-60 backdrop-blur list-none">
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
      </div>
    </section>
  );
}

export default MoviesGrid;
