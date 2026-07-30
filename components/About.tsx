"use client";

import { motion } from "framer-motion";
import {
  Code2,
  BrainCircuit,
  Database,
  Trophy,
} from "lucide-react";

const cards = [
  {
    icon: <Code2 size={34} />,
    title: "Backend Engineering",
    text: "Built 100+ REST APIs using Java, Spring Boot and MySQL while developing scalable enterprise applications at Tata Consultancy Services.",
  },
  {
    icon: <BrainCircuit size={34} />,
    title: "AI & Machine Learning",
    text: "Passionate about building intelligent applications using Python, Machine Learning and Data Science to solve real-world problems.",
  },
  {
    icon: <Database size={34} />,
    title: "Performance Optimization",
    text: "Optimized more than 50 SQL queries and improved backend performance through efficient database design and API optimization.",
  },
  {
    icon: <Trophy size={34} />,
    title: "Research & Learning",
    text: "Published research in AI-powered Smart Agriculture and continuously upskilling in AI, LLMs, Data Science and Cloud technologies.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#050816] py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-5xl font-bold"
        >
          About <span className="text-cyan-400">Me</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .2 }}
          viewport={{ once: true }}
          className="mx-auto mt-8 max-w-4xl text-center text-lg leading-9 text-gray-400"
        >
          I'm a Software Engineer at Tata Consultancy Services with more than
          3 years of experience designing backend systems using Java,
          Spring Boot and SQL. Alongside enterprise backend development,
          I've been actively building expertise in Artificial Intelligence,
          Machine Learning and Data Science.

          <br /><br />

          My goal is to combine strong software engineering practices with
          intelligent AI systems to build scalable products that create
          real-world impact.
        </motion.p>

        <div className="mt-20 grid gap-8 md:grid-cols-2">

          {cards.map((card, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * .15 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-cyan-500/20 bg-white/5 p-8 backdrop-blur-lg hover:border-cyan-400 transition"
            >
              <div className="mb-6 text-cyan-400">
                {card.icon}
              </div>

              <h3 className="mb-3 text-2xl font-semibold">
                {card.title}
              </h3>

              <p className="leading-8 text-gray-400">
                {card.text}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}