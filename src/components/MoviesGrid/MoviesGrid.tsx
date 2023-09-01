import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import StreamList from "@/src/components/StreamList/StreamList";
import LeadingVideo from "@/src/components/LeadingVideo/LeadingVideo";
import { Movie } from "./Movie";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 3000, min: 1536 },
    items: 4,
    slidesToSlide: 4,
  },
  desktop: {
    breakpoint: { max: 1536, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const MoviesGrid = ({ books }: any) => {
  return (
    <>
      <section className="mt-[86vh] min-h-screen  flex flex-col">
        {/* <div className="flex flex-row gap-4 mr-4 overflow-x-auto h-full w-screen list-none"> */}
        <Carousel
          responsive={responsive}
          className="flex flex-row gap-16 mr-4 overflow-x-auto h-full w-screen relative z-20 list-none"
        >
          {books.slice(0, 10).map((book: any, i: number) => (
            <Movie key={i} book={book} i={i} />
            // <p key={i}>{book.isbn}</p>
          ))}
        </Carousel>
        {/* </div> */}
      </section>{" "}
    </>
  );
};

export default MoviesGrid;
