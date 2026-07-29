"use client";

import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import {
  MdEmail
} from "react-icons/md";

import {
  Download,
  ArrowRight,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050816]">

      {/* Background Glow */}
      <div className="absolute w-[700px] h-[700px] rounded-full bg-cyan-500/20 blur-[180px]" />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-6 max-w-5xl"
      >

        {/* Badge */}

        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-sm mb-8">
          🚀 Software Engineer @ Tata Consultancy Services
        </div>

        {/* Intro */}

        <p className="text-cyan-400 text-lg mb-3">
          Hello, I'm
        </p>

        {/* Name */}

        <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
          Rishav Yadav
        </h1>

        {/* Subtitle */}

        <h2 className="mt-8 text-2xl md:text-3xl font-semibold text-gray-300">
          Backend Engineer • AI • Machine Learning • Data Science
        </h2>

        {/* Description */}

        <p className="mt-8 text-gray-400 text-lg leading-8 max-w-3xl mx-auto">
          Passionate Software Engineer with 3+ years of experience building
          scalable backend systems using Java, Spring Boot, Python and modern
          cloud technologies while exploring Artificial Intelligence, Machine
          Learning and Data Science to solve real-world problems.
        </p>

        {/* Buttons */}

        <div className="mt-12 flex flex-wrap justify-center gap-5">

          <a
            href="#projects"
            className="flex items-center gap-2 px-7 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition text-black font-semibold"
          >
            View Projects
            <ArrowRight size={18} />
          </a>

          <a
            href="/resume.pdf"
            className="flex items-center gap-2 px-7 py-4 rounded-xl border border-cyan-500 text-cyan-300 hover:bg-cyan-500/10 transition"
          >
            <Download size={18} />
            Download Resume
          </a>

        </div>

        {/* Social Icons */}

        <div className="mt-12 flex justify-center gap-8">

          <a
            href="https://github.com/RISHAV1985"
            target="_blank"
            className="hover:text-cyan-400 transition"
          >
            <FaGithub size={28} />
          </a>

          <a
            href="https://www.linkedin.com/in/rishavyadav-itengineer/"
            target="_blank"
            className="hover:text-cyan-400 transition"
          >
           <FaLinkedin size={28} />
          </a>

          <a
            href="mailto:rishavyadav1985@gmail.com"
            className="hover:text-cyan-400 transition"
          >
            <MdEmail size={28} />
          </a>

        </div>

      </motion.div>

    </section>
  );
}