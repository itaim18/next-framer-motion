"use client";

import React from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";

function Navigation() {
  const [hoveredNavItem, setHoveredNavItem] = React.useState<null | string>(
    null
  );

  return (
    <>
      <Menu className="flex lg:hidden self-center" />
      <ul
        className="hidden h-fit lg:flex flex-row gap-3 list-none"
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
                  className="absolute rounded-lg inset-0 bg-[rgba(255,255,255,0.2)]"
                  initial={{
                    borderRadius: 32,
                  }}
                />
              )}

              <a
                href={href}
                className="flex relative h-full items-center  text-2xl px-8 py-4 text-white font-semibold opacity-75 transition-opacity duration-500 hover:opacity-100"
                onMouseEnter={() => setHoveredNavItem(slug)}
              >
                {label}
              </a>
            </li>
          )
        )}
      </ul>
    </>
  );
}

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

export default Navigation;
