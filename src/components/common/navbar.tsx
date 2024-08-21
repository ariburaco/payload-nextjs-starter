"use client";

import { assetUrl } from "@/lib/utils";
import Image from "next/image";
import { Media, Nav } from "payload-types";

interface NavbarProps {
  nav?: Nav;
}

const Navbar = ({ nav }: NavbarProps) => {
  if (!nav) return null;
  console.log("🚀 ~ Navbar ~ nav:", nav);

  const logo = typeof nav.logo === "object" ? nav.logo : null;
  console.log("🚀 ~ Navbar ~ logo:", logo);

  const fullLogo = assetUrl(logo?.url || "");
  console.log("🚀 ~ Navbar ~ fullLogo:", fullLogo);

  return (
    <nav className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Image src={fullLogo} alt="Logo" width={50} height={50} />
      </div>
    </nav>
  );
};

export default Navbar;
