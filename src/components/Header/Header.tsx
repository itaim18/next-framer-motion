"use client";
import React from "react";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { XIcon } from "lucide-react";
const LINKS = [
  {
    slug: "home",
    label: "Home",
    href: "/",
  },
  {
    slug: "about",
    label: "About",
    href: "/usage",
  },
  {
    slug: "projects",
    label: "Projects",
    href: "/integrations",
  },
];

function Header() {
  const [showMenu, setShowMenu] = React.useState<boolean>(false);
  const [hoveredNavItem, setHoveredNavItem] = React.useState<null | string>(
    null
  );
  const toggleMenu = () => {
    setShowMenu((prevState) => !prevState);
  };
  return (
    <>
      <header className="bgDark font-sans antialiased px-8 md:px-12 lg:px-32 xl:px-64 w-full py-12  flex flex-row justify-between">
        <Logo />
        {!showMenu ? (
          <Menu className="flex lg:hidden self-center" onClick={toggleMenu} />
        ) : (
          <XIcon className="flex lg:hidden self-center" onClick={toggleMenu} />
        )}
        <Navigation />
      </header>
      {showMenu && (
        <>
          <ul
            className="lg:hidden glassBg h-fit flex mx-3 py-24 gap-10 flex-col list-none"
            onMouseLeave={() => setHoveredNavItem(null)}
          >
            {LINKS.map(
              ({
                slug,
                label,
                href,
              }: {
                slug: string;
                label: string;
                href: string;
              }) => (
                <li key={slug} className="relative w-auto m-auto h-12">
                  {hoveredNavItem === slug && (
                    <motion.div
                      layoutId="hovered-backdrop"
                      className="absolute  rounded-lg inset-0 bg-[rgba(255,255,255,0.2)]"
                      initial={{
                        borderRadius: 32,
                      }}
                    />
                  )}

                  <a
                    href={href}
                    className="flex relative h-full items-center w-fit m-auto text-2xl px-8 py-4 text-white font-semibold opacity-75 transition-opacity duration-500 hover:opacity-100"
                    onMouseEnter={() => setHoveredNavItem(slug)}
                  >
                    {label}
                  </a>
                </li>
              )
            )}
          </ul>
        </>
      )}
    </>
  );
}

export default Header;
