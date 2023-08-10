import React from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

function StreamList({ books, handleRemoveBook }: any) {
  return (
    <>
      <div className="w-full h-64 fixed left-0 bottom-16 p-4 bg-slate-800 text-white">
        <h2>Reading List</h2>
        <ol className="flex flex-row h-5/6">
          {books.map((book: any) => {
            return (
              <li key={book.isbn} className="relative">
                <motion.img
                  layoutId={`book-cover-${book.isbn}`}
                  alt={book.name}
                  src={book.coverSrc}
                  draggable={false}
                  className="block h-full  object-cover rounded-sm will-change-transform"
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 60,
                  }}
                />
                <motion.button
                  layout="position"
                  className="absolute top-1 right-1 bg-slate-800 bg-opacity-25 text-white cursor-pointer"
                  onClick={() => handleRemoveBook(book)}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 60,
                  }}
                >
                  <X />
                </motion.button>
              </li>
            );
          })}
        </ol>
      </div>
    </>
  );
}

export default StreamList;
