import PriceExplorer from "@/public/assets/projects/priceExplorer.png";
import chitchat from "@/public/assets/projects/chitchat.png";
import coop from "@/public/assets/projects/coop.png";
import portfolio from "@/public/assets/projects/portfolio.png";
import qwikui from "@/public/assets/projects/qwikui.png";
import sportodo from "@/public/assets/projects/sportodo.png";
import startach from "@/public/assets/projects/startach.png";
import unishield from "@/public/assets/projects/unishield.png";
import zits from "@/public/assets/projects/zits.png";

import {
  SiAirtable,
  SiHasura,
  SiJest,
  SiGooglemaps,
  SiNextdotjs,
  SiFlutter,
  SiFirebase,
} from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import {
  TbBrandNextjs,
  TbBrandFramerMotion,
  TbBrandFirebase,
  TbBrandReactNative,
  TbBrandCss3,
} from "react-icons/tb";
import { BiLogoTailwindCss } from "react-icons/bi";
export const DATA: any[] = [
  {
    image: PriceExplorer,
    id: crypto.randomUUID(),
    subtitle: "The best tool for sales to handle their workforce",
    description:
      "The optimal solution for sales professionals to manage their company's workforce involves utilizing a combination of technologies including React, Airtable, Framer Motion, Next.js, Radix UI, UIShadcn, React Hook Form, and NextAuth.",
    title: "AI-Mirror",
    myClass: "col-span-6 md:col-span-3 lg:col-span-4 xl:col-span-4",
    types: ["AI"],
    live: "http://google.com/",
    skills: [BiLogoTailwindCss],
  },
  {
    image: PriceExplorer,
    id: crypto.randomUUID(),
    subtitle: "The best tool for sales to handle their workforce",
    description:
      "The optimal solution for sales professionals to manage their company's workforce involves utilizing a combination of technologies including React, Airtable, Framer Motion, Next.js, Radix UI, UIShadcn, React Hook Form, and NextAuth.",
    title: "Pricer",
    myClass: "col-span-6 md:col-span-3 lg:col-span-4 xl:col-span-4",
    types: ["Web"],
    live: "http://pricer.itaimiz.com/",
    skills: [
      BiLogoTailwindCss,
      FaReact,
      TbBrandNextjs,
      TbBrandFramerMotion,
      TbBrandFirebase,
      SiAirtable,
    ],
  },
  {
    image: unishield,
    id: crypto.randomUUID(),
    description:
      "A mobile application built with React Native that empowers women by providing them with the tools and information needed to identify and address instances of technology-related violence or abuse.",
    subtitle: "App that helps women under tech violence",
    title: "UniShield",
    myClass: "col-span-6 md:col-span-3 lg:col-span-4",
    types: ["Data", "ML"],
    skills: [TbBrandReactNative, TbBrandCss3, FaReact],
  },
  {
    image: zits,
    id: crypto.randomUUID(),
    subtitle: "An app that connects WW2 survivors with volunteers",
    description:
      "A mobile application designed to connect Holocaust survivors with our dedicated volunteers, offering distinct user experiences tailored to both groups. This app is developed using React Native, Recoil for state management, Firebase for backend services, and React Navigation for seamless navigation.",
    title: "Zits",
    myClass: "col-span-6 md:col-span-3 lg:col-span-2",
    types: ["Volunteer", "Web", "Mobile"],
    live: "https://zits.vercel.app/",
    code: "https://github.com/itaim18/Zits",
    skills: [BiLogoTailwindCss, FaReact, TbBrandReactNative, TbBrandFirebase],
  },
  {
    image: chitchat,
    id: crypto.randomUUID(),
    description:
      "Engage with individuals globally through Chit-Chat, a platform enabling text and image communication. Send messages and pictures, receive notifications for unread messages, and view images in their entirety when desired. This interactive experience is built using React, Firebase for backend functionality, and Jest for testing.",
    subtitle: "Personally designed Chat web app ",
    title: "Chit Chat",
    myClass: "col-span-6 md:col-span-3 lg:col-span-2",
    types: ["Web"],
    live: "https://chitnchat.netlify.app/login",
    code: "https://github.com/itaim18/ChitChat",
    skills: [FaReact, SiFirebase, TbBrandCss3],
  },
  {
    image: sportodo,
    id: crypto.randomUUID(),
    subtitle: "Web app for finding your sport and read about it",
    title: "Sportodo",
    myClass: "col-span-6 md:col-span-3 lg:col-span-2",
    types: ["Web"],
    live: "https://sportodo.netlify.app/",
    code: "https://github.com/itaim18/sportodo-app",
    skills: [FaReact, TbBrandCss3],
  },
  {
    image: coop,
    id: crypto.randomUUID(),
    description:
      "Develop an application using Flutter that empowers users to stay informed about ongoing protests. This app integrates Google Maps to provide location-based insights and uses Dio for efficient data fetching.    With this app, users can access comprehensive information about ongoing protests, their locations, and relevant details. The combination of Flutter, Google Maps, and Dio ensures a seamless and responsive user experience.",
    subtitle: "An app that lets you know all about accruing protests",
    title: "Coop",
    myClass: "col-span-6 md:col-span-3 lg:col-span-2",
    types: ["Mobile", "Open Source"],
    code: "https://github.com/stavgafny/coop",
    skills: [SiFlutter, SiGooglemaps],
  },
  {
    image: qwikui,
    id: crypto.randomUUID(),
    description:
      "A meticulously curated component library, diligently maintained by the Qwik team, tailored specifically to complement the Qwik.js framework. This library offers a collection of reusable UI elements and components, seamlessly integrated with Qwik.js to enhance the development process and streamline the creation of efficient and performant web applications.",
    subtitle: "Component library suitable for Qwik.js",
    title: "Qwik-UI",
    myClass: "col-span-6 md:col-span-3 lg:col-span-2 xl:col-span-3",
    types: ["Open Source", "Web"],
    live: "https://qwikui.com/",
    code: "https://github.com/qwikifiers/qwik-ui",
    skills: [BiLogoTailwindCss, SiJest, RiJavascriptFill],
  },
  {
    image: portfolio,
    id: crypto.randomUUID(),
    description:
      "Interactive web application designed to educate and guide users through the intricacies of Framer Motion, a powerful animation library.",
    subtitle: "Engaging web app educates on Framer-Motion.",
    title: "Portfolio",
    myClass: "col-span-6 md:col-span-3 lg:col-span-4 xl:col-span-3",
    types: ["Web"],
    live: "https://next-react-framer-motion.vercel.app/",
    code: "https://github.com/itaim18/next-framer-motion",
    skills: [FaReact, SiNextdotjs, TbBrandFramerMotion, BiLogoTailwindCss],
  },
  {
    image: unishield,
    id: crypto.randomUUID(),
    description:
      "A mobile application built with React Native that empowers women by providing them with the tools and information needed to identify and address instances of technology-related violence or abuse.",
    subtitle: "App that helps women under tech violence",
    title: "UniShield",
    live: "https://unishield.vercel.app/",
    code: "https://github.com/itaim18/Zits",
    myClass: "col-span-6 md:col-span-3 lg:col-span-4",
    types: ["Mobile", "Volunteer"],
    skills: [TbBrandReactNative, TbBrandCss3, FaReact],
  },
  {
    image: startach,
    id: crypto.randomUUID(),
    live: "https://startach.org.il/",
    description:
      "A dedicated app for 'Yedidim Badrachim,' catering to individuals facing roadblocks during their journeys. This platform connects drivers encountering difficulties with empathetic volunteers who offer assistance, ensuring they can overcome car-related issues and continue their travels seamlessly.",
    subtitle: "An app for 'Yedidim Badrachim'",
    title: "StartAch",
    myClass: "col-span-6 md:col-span-3 lg:col-span-2",
    types: ["Mobile", "Web", "Volunteer"],
    skills: [SiFlutter, SiHasura],
  },
];
