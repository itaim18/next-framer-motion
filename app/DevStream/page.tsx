"use client";
import React from "react";
import MoviesGrid from "@/src/components/MoviesGrid/MoviesGrid";
import LeadingVideo from "@/src/components/LeadingVideo/LeadingVideo";

export default function DevStreamHub() {
  // const [books, setBooks] = React.useState<any>(DATA);
  // function toggleBook(toggledBook: any) {
  //   const nextBooks = books.filter(
  //     (book: any) => book.isbn !== toggledBook.isbn
  //   );

  //   nextBooks.push({
  //     ...toggledBook,
  //     selected: !toggledBook.selected,
  //   });

  //   setBooks(nextBooks);
  // }

  // const selectedBooks = books.filter((book: any) => book?.selected);
  // const unselectedBooks = books.filter((book: any) => !book?.selected);

  return (
    <main className="flex flex-col items-center min-h-screen justify-between">
      <LeadingVideo />
      {/* <div className="flex flex-col z-10"> */}
      <MoviesGrid books={DATA} />
      {/* {selectedBooks.length > 0 && (
        <StreamList books={selectedBooks} handleRemoveBook={toggleBook} />
      )} */}
      {/* </div> */}
    </main>
  );
}

const DATA = [
  {
    isbn: "4FhJkX18fS8",
  },
  {
    isbn: "x7cQ3mrcKaY",
  },
  {
    isbn: "MSq_DCRxOxw",
  },
  {
    isbn: "zMf_xeGPn6s",
  },
  {
    isbn: "jdJo44qs3Tk",
  },
  {
    isbn: "7eP9o_Q-nDY",
  },
  {
    isbn: "vztUMbRARoo",
  },
  {
    isbn: "kd0fT1W0PL8",
  },
  {
    isbn: "ga4qoNJGNts",
  },
  {
    isbn: "FUxMgk_CTYI",
  },
];
console.log(DATA.length);
