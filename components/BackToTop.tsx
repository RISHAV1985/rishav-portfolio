"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggle = () => {
      setVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", toggle);
    return () => window.removeEventListener("scroll", toggle);
  }, []);

  return (
    <button
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      className={`fixed bottom-8 right-8 z-50 rounded-full bg-cyan-500 p-4 text-black shadow-lg transition-all duration-300 hover:scale-110 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-10 opacity-0"
      }`}
    >
      <ArrowUp />
    </button>
  );
}