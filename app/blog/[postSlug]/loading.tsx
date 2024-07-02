export default function Loading() {
  return (
    <article
      className="my-36 relative max-w-2xl m-auto py-24"
      style={{
        fontFamily: "var(--font-family-loading)",
      }}
    >
      <header className="relative flex flex-col justify-end items-center w-full max-w-xl m-auto">
        <div className="relative w-full max-w-lg p-8">
          <h1 className="mb-1 text-3xl font-bold">
            {"Celebrating the holidays with 'React-Pixelated'"}
          </h1>
          <p className="text-xl text-slate-500 mb-0 font-semibold">
            Published on{" "}
            <span className="font-bold">{"September 18th, 2023"}</span>
          </p>
        </div>
      </header>
      <div className="relative max-w-2xl text-lg m-auto p-8">
        <h1>Introduction</h1>
        <p>
          {
            " Icons and featured elements can add visual appeal and context to your blog posts. For a 'Jewish Holidays' blog/landing page, we want to create unique and eye-catching pixelated React nodes that capture the essence and importance of the jewish holidays for us."
          }
        </p>
        <p>
          {
            "Incorporating custom visuals can make your app stand out and provide a more immersive experience for your readers. In this tutorial, we'll guide you through the process of creating pixelated React nodes and use it for icons, games and hero components step by step."
          }
        </p>
      </div>
      <p className="border-t-2 text-lg leading-8 p-10 text-justify font-extrabold">
        Hey there! 👋 I&apos;m Itai Mizlish , a passionate fullstack web
        developer with a knack for crafting captivating digital experiences
        using the magical world of JS frameworks and magical UI libraries. 🚀
        When I&apos;m not immersed in lines of code, you&apos;ll find me
        exploring the diverse landscapes of Israel, contributing to open source
        projects, and getting lost in the time-traveling adventures of Doctor
        Who! 🌌🌟 <br />
        You can read more about me{" "}
      </p>
    </article>
  );
}
