import Link from "next/link";
import React, { ReactNode } from "react";

interface linkProps {
  href: string;
  target?: string;
  children: ReactNode;
}

function SpecialLink({ href, children, target }: linkProps) {
  return (
    <Link
      href={href}
      target={target}
      className="text-indigo-600 hover:text-indigo-300 underline hover:no-underline transition-all ease-in-out duration-200"
    >
      {children}
    </Link>
  );
}

export default SpecialLink;
