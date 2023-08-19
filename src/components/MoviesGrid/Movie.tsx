import Image from "next/image";
import React from "react";
export const Movie = ({ book, i }: any) => {
  const [movie, setMovie] = React.useState<any>(null);
  React.useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=Itbsnna09MY&key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        setMovie(data);
      });
  };
  return (
    <div
      className="cursor-pointer ml-12 sm:ml-16 relative flex p-3 flex-row"
      key={book.isbn}
    >
      <button className="relative bg-transparent items-start w-44  flex flex-row aspect-[3/5] cursor-pointer">
        <span
          style={{ textShadow: " 2px 2px 1px red" }}
          className="text-[8rem] absolute inset-0 -left-40 text-slate-900 drop-shadow-2xl sm:text-[11rem] leading-[0.7] scale-x-125 z-10 p-0 font-light tracking-tighter"
        >
          {i + 1}
        </span>
        <div className="relative w-44 aspect-[3/5] ml-8">
          {movie ? (
            <Image
              quality={100}
              width={480}
              height={360}
              alt={movie?.items[0].snippet.title}
              src={movie?.items[0].snippet.thumbnails.high.url}
              className="absolute w-44 inset-0 object-cover aspect-[3/5] z-10 rounded-sm cursor-pointer"
            />
          ) : (
            <div className="absolute w-36 z-20 inset-0 rounded-sm bg-slate-400 animate-pulse aspect-[3/5]" />
          )}
        </div>
      </button>
    </div>
  );
};
