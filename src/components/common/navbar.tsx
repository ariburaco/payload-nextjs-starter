"use client";

import Image from "next/image";
import { Media, Nav } from "payload-types";

interface NavbarProps {
  nav?: Nav;
}

const Navbar = ({ nav }: NavbarProps) => {
  if (!nav) return null;

  const logo = nav.logo as Media;

  return (
    <nav className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Image src={logo.url || ""} alt="Logo" width={50} height={50} />
      </div>
    </nav>
  );
};

export default Navbar;
