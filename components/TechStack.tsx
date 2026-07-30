"use client";

import { motion } from "framer-motion";

const skills = [
  {
    category: "Languages",
    items: [
      { name: "Java", level: 95 },
      { name: "Python", level: 90 },
      { name: "SQL", level: 88 },
      { name: "JavaScript", level: 82 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Spring Boot", level: 95 },
      { name: "REST APIs", level: 94 },
      { name: "Microservices", level: 88 },
      { name: "Hibernate", level: 85 },
      { name: "MySQL", level: 90 },
    ],
  },
  {
    category: "AI & Machine Learning",
    items: [
      { name: "Machine Learning", level: 85 },
      { name: "Scikit-Learn", level: 82 },
      { name: "Pandas", level: 86 },
      { name: "NumPy", level: 86 },
      { name: "TensorFlow", level: 78 },
      { name: "OpenCV", level: 80 },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React", level: 84 },
      { name: "Next.js", level: 82 },
      { name: "Tailwind CSS", level: 90 },
      { name: "HTML/CSS", level: 92 },
    ],
  },
  {
    category: "Tools & Cloud",
    items: [
      { name: "Git", level: 95 },
      { name: "GitHub", level: 94 },
      { name: "Postman", level: 92 },
      { name: "Docker", level: 72 },
      { name: "Jenkins", level: 74 },
      { name: "AWS", level: 68 },
    ],
  },
];

export default function TechStack() {
  return (
    <section
      id="tech"
      className="bg-[#050816] py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-5xl font-bold"
        >
          Tech <span className="text-cyan-400">Stack</span>
        </motion.h2>

        <p className="mx-auto mt-6 max-w-3xl text-center text-gray-400">
          Technologies and tools I use to design, build and deploy scalable software solutions.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2">

          {skills.map((group, index) => (

            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-cyan-500/20 bg-white/5 p-8 backdrop-blur-lg"
            >

              <h3 className="mb-8 text-2xl font-semibold text-cyan-400">
                {group.category}
              </h3>

              {group.items.map((skill) => (

                <div key={skill.name} className="mb-6">

                  <div className="mb-2 flex justify-between">

                    <span>{skill.name}</span>

                    <span>{skill.level}%</span>

                  </div>

                  <div className="h-2 rounded-full bg-gray-700">

                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1 }}
                      className="h-2 rounded-full bg-cyan-400"
                    />

                  </div>

                </div>

              ))}

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}