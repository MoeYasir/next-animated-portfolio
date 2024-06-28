"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const links = [
  {
    url: "/",
    title: "Home",
  },
  {
    url: "/about",
    title: "About",
  },
  {
    url: "/contact",
    title: "Contact",
  },
  {
    url: "/portfolio",
    title: "Portfolio",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      <div className="hidden md:flex gap-4 w-1/3">
        {/* LINKS */}
        {links.map((link) => (
          <Link href={link.url} key={link.title}>
            {link.title}
          </Link>
        ))}
      </div>
      {/* LOGO */}
      <div className="md:hidden lg:flex w-1/3 justify-center">
        <Link
          href="/"
          className="text-sm bg-black font-semibold p-1 rounded-md flex items-center justify-center"
        >
          <span className="text-white mr-1">Mohammed</span>
          <span className="bg-white text-black w-12 h-8 rounded flex items-center justify-center">
            .dev
          </span>
        </Link>
      </div>
      {/* SOCIALS */}
      <div className="hidden md:flex gap-4 w-1/3">
        <Link href="https://github.com/MoeYasir">
          <Image src="/github.png" alt="" width={24} height={24} />
        </Link>
        <Link href="https://www.linkedin.com/in/moeyasir/">
          <Image src="/linkedin.png" alt="" width={24} height={24} />
        </Link>
        <Link href="https://github.com/MoeYasir">
          <Image src="/github.png" alt="" width={24} height={24} />
        </Link>
        <Link href="https://github.com/MoeYasir">
          <Image src="/instagram.png" alt="" width={24} height={24} />
        </Link>
        <Link href="https://github.com/MoeYasir">
          <Image src="/hero.png" alt="" width={24} height={24} />
        </Link>
        <Link href="https://github.com/MoeYasir">
          <Image src="/pinterest.png" alt="" width={24} height={24} />
        </Link>
      </div>
      {/* Responsive Menu */}
      <div className="md:hidden">
        {/* Menu Button */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen(!open)}
        >
          <div className="w-10 h-1 bg-white rounded"></div>
          <div className="w-10 h-1 bg-white rounded"></div>
          <div className="w-10 h-1 bg-white rounded"></div>
        </button>
        {open && (
          <div className="absolute text-white w-screen top-0 left-0 h-screen bg-black flex flex-col items-center justify-center gap-8 text-4xl">
            {links.map((link) => (
              <Link href={link.url} key={link.title}>
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default Navbar;
