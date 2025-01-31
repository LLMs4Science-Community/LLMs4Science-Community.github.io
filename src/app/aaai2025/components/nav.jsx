"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

const Nav = () => {
  const links = [
    { type: "section", name: "about", href: "#about" },
    { type: "section", name: "program", href: "#program" },
    { type: "section", name: "keynote speakers", href: "#speakers" },
    { type: "section", name: "general co-chairs", href: "#organizers" },
    {
      type: "section",
      name: "student co-organizers",
      href: "#student-organizers",
    },
    {
      type: "site",
      name: "LLMs4Science",
      href: "/",
    },
  ];

  return (
    <nav className="fixed left-0 w-screen h-[100px] z-[1000] flex justify-center gap-[40px] px-[80px] items-center bg-white">
      {links.map((link, i) => (
        <Link className="no-underline" key={i} href={link.href}>
          {link.type === "section" ? (
            <span className="font-semibold text-black">
              {link.name.toUpperCase()}
            </span>
          ) : (
            <motion.span
              whileHover={{ borderColor: "#000000" }}
              className="flex gap-2 items-center font-semibold px-4 py-2 rounded-md border border-neutral-100 text-black"
            >
              {link.name.toUpperCase()}
              <ArrowTopRightOnSquareIcon className="size-5 text-black" />
            </motion.span>
          )}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
