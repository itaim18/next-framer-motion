"use client";
import React from "react";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { XIcon } from "lucide-react";
import { LINKS } from "@/src/config/docs";
import Link from "next/link";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

function Header() {
  const { setTheme } = useTheme();
  const [showMenu, setShowMenu] = React.useState<boolean>(false);
  const [hoveredNavItem, setHoveredNavItem] = React.useState<null | string>(
    null
  );

  const toggleMenu = () => {
    setShowMenu((prevState) => !prevState);
  };
  return (
    <>
      <header className="bgDark backdrop-blur w-screen fixed font-sans antialiased px-8 md:px-12 lg:px-32 xl:px-64 py-6 lg:py-12 flex flex-row justify-between">
        <Logo />
        <div className="flex gap-3">
          <div className="flex  border-2 cursor-pointer self-center bg-transparent h-fit p-2 rounded-md">
            <Moon
              onClick={() => setTheme("light")}
              className="absolute h-[24px] w-[24px] rotate-0 scale-0 transition-all dark:rotate-0 dark:scale-100"
            />

            <Sun
              onClick={() => setTheme("dark")}
              className="h-[24px] w-[24px] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
            />
          </div>
          <div className="flex lg:hidden border-2 cursor-pointer self-center bg-transparent h-fit p-2 rounded-md">
            {!showMenu ? (
              <Menu
                color="#424b58"
                className="flex lg:hidden"
                onClick={toggleMenu}
              />
            ) : (
              <XIcon
                color="#424b58"
                className="flex lg:hidden "
                onClick={toggleMenu}
              />
            )}
          </div>
          <Navigation toggleMenu={toggleMenu} />
        </div>
      </header>
      {showMenu && (
        <>
          <ul
            className="lg:hidden top-28 inset-0 w-screen fixed glassBg h-fit flex py-24 gap-10 flex-col list-none"
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
                      className="absolute   inset-0 bg-[rgba(0,0,0,0.2)] dark:bg-[rgba(255,255,255,0.2)]"
                      initial={{
                        borderRadius: 20,
                      }}
                    />
                  )}

                  <Link
                    onClick={toggleMenu}
                    href={href}
                    className="flex relative h-full items-center w-fit m-auto text-2xl px-8 py-4 text-black dark:text-white font-semibold opacity-75 transition-opacity duration-500 hover:opacity-100"
                    onMouseEnter={() => setHoveredNavItem(slug)}
                  >
                    {label}
                  </Link>
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
