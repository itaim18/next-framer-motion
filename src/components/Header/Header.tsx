import React from "react";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation";

function Header() {
  return (
    <header className="bgDark font-sans antialiased px-8 md:px-12 lg:px-32 xl:px-64 w-full py-12  flex flex-row justify-between">
      <Logo />
      <Navigation />
    </header>
  );
}

export default Header;
