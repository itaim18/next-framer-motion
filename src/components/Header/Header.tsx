"use client";
import { usePathname } from "next/navigation";
import React from "react";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation";
import { motion } from "framer-motion";
import { LINKS } from "@/src/config/docs";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Menu, Moon, Sun, XIcon } from "lucide-react";
import Strong from "../Strong/Strong";
import { useTheme } from "next-themes";

const useScrollCounter = (offset: number) => {
  const pName = usePathname();
  const [reached, setReached] = React.useState(pName === "/DevStream");
  React.useEffect(() => {
    const showTitle = () =>
      setReached(window.scrollY > offset || pName === "/DevStream");
    window.addEventListener("scroll", showTitle);
    return () => {
      window.removeEventListener("scroll", showTitle);
    };
  }, [offset, pName]);

  return reached;
};
function Header() {
  const { setTheme } = useTheme();
  const [showMenu, setShowMenu] = React.useState<boolean>(false);
  const [hoveredNavItem, setHoveredNavItem] = React.useState<null | string>(
    null
  );
  const reached = useScrollCounter(80);
  const toggleMenu = () => {
    setShowMenu((prevState) => !prevState);
  };
  const closeMenu = () => {
    setShowMenu(false);
  };
  const headerVariants = {
    open: {
      paddingTop: 48,
      paddingBottom: 48,
      transition: { ease: "easeInOut", duration: 0.3 },
    },
    collapsed: {
      paddingTop: 12,
      paddingBottom: 12,
      transition: { ease: "easeInOut", duration: 0.3, delayChildren: 0.5 },
    },
  };
  return (
    <>
      <motion.header
        initial="open"
        animate={reached ? "collapsed" : "open"}
        variants={headerVariants}
        className="bgDark z-40 backdrop-blur w-screen fixed font-sans antialiased px-8 md:px-12 lg:px-32 xl:px-64 py-6 lg:py-12 flex flex-row justify-between"
      >
        <Logo closeMenu={closeMenu} />
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
              <Menu className="flex lg:hidden " onClick={toggleMenu} />
            ) : (
              <XIcon className="flex lg:hidden " onClick={toggleMenu} />
            )}
          </div>
          <Navigation toggleMenu={toggleMenu} />
        </div>
      </motion.header>

      <>
        <motion.ul
          variants={{
            first: {
              y: "-135%",
            },
            last: {
              y: "0%",
            },
          }}
          transition={{
            borderRadius: { type: "spring", stiffness: 150, damping: 16 },
          }}
          initial="first"
          animate={showMenu ? "last" : "first"}
          className="lg:hidden z-30 top-20 inset-0 w-screen fixed glassBg h-fit flex py-24 gap-10 flex-col list-none"
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
                    className="absolute  inset-0 bg-[rgba(0,0,0,0.2)] dark:bg-[rgba(255,255,255,0.2)]"
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
                {slug === "blog" && (
                  <Badge className="bg-transparent hover:bg-transparent absolute inset-y-0 -right-8">
                    <Strong>New</Strong>
                  </Badge>
                )}
              </li>
            )
          )}
        </motion.ul>
      </>
    </>
  );
}

export default Header;
