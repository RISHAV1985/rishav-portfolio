"use client";

import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Download,
  Briefcase,
} from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#050816] py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl font-bold">
            Let's <span className="text-cyan-400">Connect</span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-gray-400 leading-8">
            I'm currently open to Backend Engineering, AI/ML and Data Science
            opportunities. If you're looking for someone who enjoys solving
            challenging engineering problems, I'd love to connect.
          </p>

          <div className="mt-6 inline-flex items-center rounded-full border border-green-500/30 bg-green-500/10 px-5 py-2 text-green-400">
            <Briefcase size={18} className="mr-2" />
            Open to Work
          </div>
        </motion.div>

        {/* Contact Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          <a
            href="mailto:YOUR_EMAIL@gmail.com"
            className="rounded-2xl border border-cyan-500/20 bg-white/5 p-6 text-center transition hover:border-cyan-400 hover:-translate-y-2"
          >
            <Mail className="mx-auto text-cyan-400" size={34} />
            <h3 className="mt-4 text-xl font-semibold">Email</h3>
            <p className="mt-2 text-sm text-gray-400 break-all">
              rishavyadav1985@gmail.com
            </p>
          </a>

          <a
            href="https://www.linkedin.com/in/rishavyadav-itengineer/"
            target="_blank"
            className="rounded-2xl border border-cyan-500/20 bg-white/5 p-6 text-center transition hover:border-cyan-400 hover:-translate-y-2"
          >
            <FaLinkedin className="mx-auto text-cyan-400" size={34} />
            <h3 className="mt-4 text-xl font-semibold">LinkedIn</h3>
            <p className="mt-2 text-sm text-gray-400">
              Connect with me
            </p>
          </a>

          <a
            href="https://github.com/RISHAV1985"
            target="_blank"
            className="rounded-2xl border border-cyan-500/20 bg-white/5 p-6 text-center transition hover:border-cyan-400 hover:-translate-y-2"
          >
            <FaGithub className="mx-auto text-cyan-400" size={34} />
            <h3 className="mt-4 text-xl font-semibold">GitHub</h3>
            <p className="mt-2 text-sm text-gray-400">
              View my repositories
            </p>
          </a>

          <div className="rounded-2xl border border-cyan-500/20 bg-white/5 p-6 text-center">
            <MapPin className="mx-auto text-cyan-400" size={34} />
            <h3 className="mt-4 text-xl font-semibold">Location</h3>
            <p className="mt-2 text-sm text-gray-400">
              India
            </p>
          </div>

        </div>

        {/* CTA Buttons */}
        <div className="mt-16 flex flex-wrap justify-center gap-6">

          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-black transition hover:bg-cyan-400"
          >
            <Download size={20} />
            Download Resume
          </a>

          <a
            href="mailto:rishavyadav1985@gmail.com"
            className="rounded-xl border border-cyan-500 px-8 py-4 font-semibold text-cyan-300 transition hover:bg-cyan-500/10"
          >
            Hire Me
          </a>

        </div>

      </div>
    </section>
  );
}