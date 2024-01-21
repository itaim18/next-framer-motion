import Image from "next/image";
import React from "react";

function MDXImage({ src }: any) {
  return (
    <Image
      width={240}
      height={240}
      className="w-2/3 self-center m-auto"
      alt="gif"
      src={src}
    />
  );
}

export default MDXImage;
