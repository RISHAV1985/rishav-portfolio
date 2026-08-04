"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Github() {
  return (
    <section id="github" className="bg-[#050816] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl font-bold text-white">
            GitHub <span className="text-cyan-400">Activity</span>
          </h2>

          <p className="mt-6 text-gray-400">
            Open-source contributions and coding activity.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">

          <img
  src="https://github-readme-stats-sigma-five.vercel.app/api?username=RISHAV1985&show_icons=true&theme=tokyonight&hide_border=true"
  alt="GitHub Stats"
  className="w-full rounded-xl shadow-lg"
  loading="lazy"
/>

<img
  src="https://github-readme-stats-sigma-five.vercel.app/api/top-langs/?username=RISHAV1985&layout=compact&theme=tokyonight&hide_border=true"
  alt="Top Languages"
  className="w-full rounded-xl shadow-lg"
  loading="lazy"
/>

        </div>
      </div>
    </section>
  );
}