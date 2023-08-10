import React from "react";
import Image from "next/image";
import { Youtube } from "lucide-react";
function LeadingVideo() {
  return (
    <div className="border h-[93vh] absolute inset-0 bg-black z-10">
      <Image
        quality={100}
        width={480}
        height={360}
        className="h-[93vh] border relative w-full inset-0"
        src="https://i3.ytimg.com/vi/x7cQ3mrcKaY/maxresdefault.jpg"
        alt="Leading Video"
        title="Leading Video"
      />
      <article className=" items-center text-black  flex flex-col bg-white bg-opacity-20 backdrop-blur absolute top-1/3 right-24 w-1/3 h-fit rounded-lg z-[200]">
        <h1 className="text-6xl text-center">
          Pete Hunt: React: Rethinking best practices -- JSConf EU
        </h1>
        <p className="text-2xl line-clamp-4">
          React, the new open-source JS library from Facebook and Instagram, is
          a different way to write JavaScript apps. When it was introduced at
          JSConf US in May, the audience was shocked by some of its design
          principles. One sarcastic tweet from an audience member ended up
          describing Reacts philosophy quite accurately:
          https://twitter.com/cowboy/status/339... At Facebook and Instagram,
          were trying to push the limits of whats possible on the web with
          React. My talk will start with a brief introduction to the framework,
          and then dive into three controversial topics: Throwing out the notion
          of templates and building views with JavaScript,re-rendering your
          entire application when your data changes, and a lightweight
          implementation of the DOM and events.
        </p>
        <h1 className="text-4xl items-center text-center cursor-pointer flex flex-row w-fit h-fit px-6 py-2 text-black hover:text-[#ff0000] bg-slate-100 bg-opacity-60 backdrop-blur  rounded-lg z-[200] ">
          <Youtube size={42} className="text-6xl mr-3" />
          Play
        </h1>
      </article>
    </div>
  );
}

export default LeadingVideo;
