"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

import Button from "./ui/Button";
import Stats from "./Stats";
import TechStack from "./TechStack";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050816]">

      {/* Background Glow */}

      <div className="absolute -top-40 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[170px]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col-reverse items-center gap-16 px-6 pt-32 lg:flex-row">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1"
        >
          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
            🚀 Software Engineer @ Tata Consultancy Services
          </span>

          <h1 className="mt-8 text-5xl font-black leading-tight md:text-7xl">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Rishav Yadav
            </span>
          </h1>

          <h2 className="mt-6 text-2xl text-gray-300">
            Backend Engineer • AI • Machine Learning • Data Science
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">
            Building scalable backend systems with Java and Spring Boot while
            developing intelligent AI-powered applications using Python,
            Machine Learning and modern cloud technologies.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="#projects">
              View Projects
            </Button>

            <Button href="/resume.pdf" variant="secondary">
              Download Resume
            </Button>

            <Button href="#contact" variant="secondary">
              Hire Me
            </Button>
          </div>


          <div className="mt-8 flex gap-6 text-3xl text-gray-300">
            <a href="https://github.com/RISHAV1985" target="_blank">
              <FaGithub className="hover:text-cyan-400 transition" />
            </a>

            <a href="https://www.linkedin.com/in/rishavyadav-itengineer/" target="_blank">
              <FaLinkedin className="hover:text-cyan-400 transition" />
            </a>

            <a href="mailto:rishavyadav1985@gmail.com">
              <MdEmail className="hover:text-cyan-400 transition" />
            </a>
          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-1 justify-center"
        >
          <div className="relative">

            <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-3xl" />

            <Image
              src="/images/profile.jpeg"
              alt="Rishav Yadav"
              width={420}
              height={420}
              priority
              className="relative rounded-full border-4 border-cyan-400 object-cover shadow-[0_0_80px_rgba(34,211,238,0.4)]"
            />

          </div>
        </motion.div>

      </div>

    </section>
  );
}