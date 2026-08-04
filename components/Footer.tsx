"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050816] py-12">

      <div className="mx-auto max-w-7xl px-6">

        <div className="flex flex-col items-center gap-6">

          <h3 className="text-3xl font-bold text-cyan-400">
            Rishav Yadav
          </h3>

          <p className="text-center text-gray-400">
            Software Engineer • Backend • AI • Machine Learning
          </p>

          <div className="flex gap-6 text-2xl">

            <a
              href="https://github.com/RISHAV1985"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-cyan-400"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/rishavyadav-itengineer/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-cyan-400"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:rishavyadav1985@gmail.com"
              className="transition hover:text-cyan-400"
            >
              <MdEmail />
            </a>

          </div>

          <div className="h-px w-full bg-white/10" />

          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Rishav Yadav. All rights reserved.
          </p>

          <p className="text-center text-sm text-gray-600">
            Built with Next.js • React • Tailwind CSS • Framer Motion
          </p>

        </div>

      </div>

    </footer>
  );
}