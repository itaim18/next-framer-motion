"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";
import MoviesGrid from "@/src/components/MoviesGrid/MoviesGrid";
import StreamList from "@/src/components/StreamList/StreamList";
import LeadingVideo from "@/src/components/LeadingVideo/LeadingVideo";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
export default function DevStreamHub() {
  const [books, setBooks] = React.useState<any>(DATA);
  function toggleBook(toggledBook: any) {
    const nextBooks = books.filter(
      (book: any) => book.isbn !== toggledBook.isbn
    );

    nextBooks.push({
      ...toggledBook,
      selected: !toggledBook.selected,
    });

    setBooks(nextBooks);
  }

  const selectedBooks = books.filter((book: any) => book?.selected);
  const unselectedBooks = books.filter((book: any) => !book?.selected);

  return (
    <main className="flex flex-col items-center min-h-screen justify-between">
      <LeadingVideo />
      {/* <div className="flex flex-col z-10"> */}
      <MoviesGrid books={books} handleSelectBook={toggleBook} />
      {/* {selectedBooks.length > 0 && (
        <StreamList books={selectedBooks} handleRemoveBook={toggleBook} />
      )} */}
      {/* </div> */}
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        className="w-[240px] h-[240px]"
      >
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
      </Carousel>
      ;
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
