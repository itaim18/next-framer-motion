import React from "react";
// import { motion } from "framer-motion";
import { Movie } from "./Movie";

const MoviesGrid = ({ books }: any) => {
  return (
    <section className="mt-[86vh] min-h-screen  flex flex-col">
      <div className="flex flex-row gap-4 mr-4 overflow-x-auto h-full w-screen list-none">
        {books.slice(0, 10).map((book: any, i: number) => (
          <Movie key={i} book={book} i={i} />
        ))}
      </div>
    </section>
    // <h1 className="text-3xl ml-4 w-screen">Some of the movies I like</h1>
  );
};

export default MoviesGrid;

{
  /* /* <ul className="grid grid-cols-3 lg:grid-cols-6 xl:grid-cols-8 content-start gap-6 p-4 rounded-sm min-h-full backdrop-blur list-none">
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
      </ul> */
}
