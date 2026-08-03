"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Research", href: "#research" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#050816]/70 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        {/* Logo */}

        <a
          href="#"
          className="text-3xl font-black text-cyan-400"
        >
          Rishav
        </a>

        {/* Desktop Menu */}

        <div className="hidden items-center gap-10 text-gray-300 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="transition hover:text-cyan-400"
            >
              {link.name}
            </a>
          ))}

          <a
            href="/resume.pdf"
            target="_blank"
            className="rounded-lg border border-cyan-400 px-5 py-2 text-cyan-400 transition hover:bg-cyan-400 hover:text-black"
          >
            Resume
          </a>
        </div>

        {/* Mobile Button */}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-cyan-400 md:hidden"
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}

      {isOpen && (
        <div className="border-t border-white/10 bg-[#050816] md:hidden">
          <div className="flex flex-col items-center gap-6 py-8">

            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg text-gray-300 transition hover:text-cyan-400"
              >
                {link.name}
              </a>
            ))}

            <a
              href="/resume.pdf"
              target="_blank"
              onClick={() => setIsOpen(false)}
              className="rounded-lg border border-cyan-400 px-5 py-2 text-cyan-400 transition hover:bg-cyan-400 hover:text-black"
            >
              Resume
            </a>

          </div>
        </div>
      )}
    </nav>
  );
}