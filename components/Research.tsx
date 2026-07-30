"use client";

import { motion } from "framer-motion";
import { BookOpen, Award, ExternalLink } from "lucide-react";

export default function Research() {
  return (
    <section
      id="research"
      className="bg-[#050816] py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl font-bold">
            Research & <span className="text-cyan-400">Publications</span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-gray-400">
            My research interests lie at the intersection of Artificial
            Intelligence, Machine Learning, IoT and sustainable technology.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-2xl border border-cyan-500/20 bg-white/5 p-8 backdrop-blur-lg"
        >

          <div className="flex items-center gap-4">

            <BookOpen className="text-cyan-400" size={34} />

            <div>
              <h3 className="text-2xl font-bold">
                Sustainable Development in Agriculture
              </h3>

              <p className="text-cyan-300">
                Book Chapter • Published 2024
              </p>
            </div>

          </div>

          <p className="mt-8 leading-8 text-gray-300">
            Published a research chapter exploring the integration of
            Artificial Intelligence, IoT and Robotics in precision
            agriculture. The research demonstrates how intelligent
            irrigation systems, predictive analytics and smart automation
            can improve agricultural productivity while reducing water
            consumption and operational costs.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">

            {[
              "Artificial Intelligence",
              "Machine Learning",
              "IoT",
              "Smart Agriculture",
              "Research"
            ].map((item) => (

              <span
                key={item}
                className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300"
              >
                {item}
              </span>

            ))}

          </div>

          <div className="mt-10 flex gap-4">

            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-5 py-3 font-semibold text-black transition hover:bg-cyan-400"
            >
              <ExternalLink size={18} />
              View Publication
            </a>

            <div className="inline-flex items-center gap-2 rounded-lg border border-cyan-500/30 px-5 py-3 text-cyan-300">
              <Award size={18} />
              Published Research
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}