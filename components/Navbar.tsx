"use client";

import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Research", href: "#research" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("About");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems.map((item) => ({
        name: item.name,
        section: document.querySelector(item.href),
      }));

      const scrollPos = window.scrollY + 120;

      for (const item of sections) {
        if (!item.section) continue;

        const top = (item.section as HTMLElement).offsetTop;
        const height = (item.section as HTMLElement).offsetHeight;

        if (scrollPos >= top && scrollPos < top + height) {
          setActive(item.name);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-cyan-500/20 bg-[#050816]/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        <a
          href="#"
          className="text-3xl font-black text-cyan-400 transition hover:scale-105"
        >
          Rishav
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`transition ${
                active === item.name
                  ? "text-cyan-400"
                  : "text-gray-300 hover:text-cyan-400"
              }`}
            >
              {item.name}
            </a>
          ))}

          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 rounded-lg border border-cyan-500 px-4 py-2 text-cyan-300 transition hover:bg-cyan-500 hover:text-black"
          >
            <Download size={18} />
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="text-cyan-400 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-cyan-500/20 bg-[#050816]/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-6 p-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`transition ${
                  active === item.name
                    ? "text-cyan-400"
                    : "text-gray-300"
                }`}
              >
                {item.name}
              </a>
            ))}

            <a
              href="/resume.pdf"
              download
              className="rounded-lg bg-cyan-500 px-4 py-3 text-center font-semibold text-black"
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}