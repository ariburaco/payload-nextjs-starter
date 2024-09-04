"use client";

import { assetUrl } from "@/lib/utils";
import Image from "next/image";
import { Media, Nav } from "payload-types";

interface NavbarProps {
  nav?: Nav;
}

const Navbar = ({ nav }: NavbarProps) => {
  if (!nav || !nav?.id) return null;
  console.log("🚀 ~ Navbar ~ nav:", nav);

  const logo = typeof nav.logo === "object" ? nav.logo : null;
  console.log("🚀 ~ Navbar ~ logo:", logo);

  const fullLogo = assetUrl(logo?.url || "");

  const utUrl = `https://utfs.io/f/${logo?._key}`;

  return (
    <nav className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Image
          src={utUrl}
          alt="Logo"
          width={logo?.width || 50}
          height={logo?.height || 50}
        />
        <span className="text-lg font-bold">{nav?.cta}</span>
      </div>
    </nav>
  );
};

export default Navbar;
