"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

const Nav = () => {
  const [activeSection, setActiveSection] = useState("");

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

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav className="fixed left-0 w-screen h-[100px] z-[1000] flex justify-center gap-[40px] px-[80px] items-center bg-white">
      {links.map((link, i) => (
        <Link className="no-underline" key={i} href={link.href}>
          {link.type === "section" ? (
            <motion.span
              animate={{
                color:
                  activeSection === link.href.substring(1)
                    ? "#000000"
                    : "#a0a0a0",
              }}
              className="font-semibold"
            >
              {link.name.toUpperCase()}
            </motion.span>
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
