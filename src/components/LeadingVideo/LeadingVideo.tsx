import React from "react";
import Image from "next/image";
import { PlusCircle, Youtube } from "lucide-react";
import Balancer from "react-wrap-balancer";
function LeadingVideo() {
  return (
    <div className="absolute  inset-0 bottom-36  z-10">
      <Image
        width={480}
        height={360}
        className="lg:hidden absolute h-full overflow-y-hidden -z-50 object-cover object-left  w-full m-auto inset-0 top-4 blur-2xl rounded-xl"
        src="https://i3.ytimg.com/vi/x7cQ3mrcKaY/maxresdefault.jpg"
        alt="Leading Video"
        title="Leading Video"
      />
      <Image
        quality={100}
        width={480}
        height={360}
        className="h-5/6 lg:h-screen relative object-cover object-left w-11/12 lg:w-screen m-auto border border-red-600 lg:border-none inset-0 top-24 lg:top-0 rounded-xl lg:rounded-none"
        src="https://i3.ytimg.com/vi/x7cQ3mrcKaY/maxresdefault.jpg"
        alt="Leading Video"
        title="Leading Video"
      />
      <article className="mx-8 sm:mx-12 md:mx-16 lg:mx-24 flex flex-col absolute backdrop-blur gap-4  bottom-16 rounded-lg z-[200]">
        <h1 className="text-4xl lg:text-6xl text-center md:text-start mx-auto w-fit">
          <Balancer className="drop-shadow-lg shadow-black">
            Pete Hunt: React: Rethinking best practices -- JSConf EU
          </Balancer>
        </h1>
        <p className="hidden  md:line-clamp-4 w-1/2">
          <Balancer className="text-lg hidden">
            <span className="sm:line-clamp-3 xl:line-clamp-4">
              React, the new open-source JS library from Facebook and Instagram,
              is a different way to write JavaScript apps. When it was
              introduced at JSConf US in May, the audience was shocked by some
              of its design principles. One sarcastic tweet from an audience
              member ended up describing Reacts philosophy quite accurately:
            </span>
          </Balancer>
        </p>
        <div className="flex justify-around md:justify-start md:gap-8 lg:gap-16">
          <h1 className="text-2xl  items-center text-start cursor-pointer flex flex-row w-fit h-fit px-6 py-2 text-black hover:text-[#ff0000] bg-slate-100 rounded-md z-[200] ">
            <Youtube size={24} className="text-6xl mr-1" />
            Play
          </h1>
          <h1 className="text-2xl items-center text-start cursor-pointer flex flex-row w-fit h-fit px-6 py-2 text-white hover:text-[#ff0000] bg-slate-800 rounded-md z-[200] ">
            <PlusCircle size={24} className="text-6xl mr-1" />
            Add
          </h1>
        </div>
      </article>
    </div>
  );
}

export default LeadingVideo;
