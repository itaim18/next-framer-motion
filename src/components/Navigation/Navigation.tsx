"use client";
import { LINKS } from "@/src/config/docs";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
function Navigation({ toggleMenu }: { toggleMenu: () => void }) {
  const [hoveredNavItem, setHoveredNavItem] = React.useState<null | string>(
    null
  );

  return (
    <>
      <ul
        className="hidden self-center h-fit lg:flex flex-row gap-3 list-none"
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
            <li key={slug} className="relative h-12">
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
                className="flex relative h-full items-center  text-2xl px-8 py-4 text-black dark:text-white font-semibold opacity-75 transition-opacity duration-500 hover:opacity-100"
                onMouseEnter={() => setHoveredNavItem(slug)}
              >
                {label}
              </Link>
            </li>
          )
        )}
      </ul>
    </>
  );
}

export default Navigation;
