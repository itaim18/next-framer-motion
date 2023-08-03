"use client";
import React from "react";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { XIcon } from "lucide-react";
import { LINKS } from "@/src/config/docs";
import Link from "next/link";
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
      <div className="flex flex-col">
        <header className="bgDark backdrop-blur  fixed font-sans antialiased px-8 md:px-12 lg:px-32 xl:px-64 w-full py-6 md:py-12 flex flex-row justify-between">
          <Logo />
          <div className="flex lg:hidden border-2 self-center bg-transparent h-fit p-2 rounded-md">
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
        </header>
        {showMenu && (
          <>
            <ul
              className="lg:hidden top-28 inset-0 fixed glassBg h-fit flex mx-3 py-24 gap-10 flex-col list-none before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-slate-500 before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:lg:w-[200px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-600 after:via-blue-600 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-violet-900 after:dark:via-[#8d01ff] after:dark:opacity-40 before:lg:h-[360px]"
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

                    <Link
                      onClick={toggleMenu}
                      href={href}
                      className="flex relative h-full items-center w-fit m-auto text-2xl px-8 py-4 text-white font-semibold opacity-75 transition-opacity duration-500 hover:opacity-100"
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
      </div>
    </>
  );
}

export default Header;
