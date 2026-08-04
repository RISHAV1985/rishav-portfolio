"use client";

import { motion } from "framer-motion";

const skills = [
  {
    category: "Languages",
    items: [
      { name: "Java", proficiency: "Advanced" },
      { name: "Python", proficiency: "Advanced" },
      { name: "SQL", proficiency: "Advanced" },
      { name: "JavaScript", proficiency: "Proficient" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Spring Boot", proficiency: "Advanced" },
      { name: "REST APIs", proficiency: "Advanced" },
      { name: "Microservices", proficiency: "Proficient" },
      { name: "Hibernate", proficiency: "Proficient" },
      { name: "MySQL", proficiency: "Advanced" },
    ],
  },
  {
    category: "AI & Machine Learning",
    items: [
      { name: "Machine Learning", proficiency: "Proficient" },
      { name: "Scikit-Learn", proficiency: "Proficient" },
      { name: "Pandas", proficiency: "Advanced" },
      { name: "NumPy", proficiency: "Advanced" },
      { name: "TensorFlow", proficiency: "Working Knowledge" },
      { name: "OpenCV", proficiency: "Working Knowledge" },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React", proficiency: "Proficient" },
      { name: "Next.js", proficiency: "Proficient" },
      { name: "Tailwind CSS", proficiency: "Advanced" },
      { name: "HTML/CSS", proficiency: "Advanced" },
    ],
  },
  {
    category: "Tools & Cloud",
    items: [
      { name: "Git", proficiency: "Advanced" },
      { name: "GitHub", proficiency: "Advanced" },
      { name: "Postman", proficiency: "Advanced" },
      { name: "Docker", proficiency: "Working Knowledge" },
      { name: "Jenkins", proficiency: "Working Knowledge" },
      { name: "AWS", proficiency: "Working Knowledge" },
    ],
  },
];

export default function TechStack() {
  return (
    <section
      id="tech"
      className="bg-[#050816] py-16"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl font-bold text-white">
            Tech <span className="text-cyan-400">Stack</span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-gray-400">
            Technologies, frameworks and tools I use to build scalable backend
            systems, AI-powered applications and modern web experiences.
          </p>
        </motion.div>

        {/* Skill Categories */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {skills.map((group, index) => (

            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.12,
                duration: 0.6,
              }}
              whileHover={{
                y: -6,
              }}
              className="rounded-2xl border border-cyan-500/20 bg-white/5 p-8 backdrop-blur-lg transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.18)]"
            >

              <h3 className="mb-6 text-2xl font-semibold text-cyan-400">
                {group.category}
              </h3>

              <div className="space-y-4">

                {group.items.map((skill) => (

                  <div
                    key={skill.name}
                    className="flex items-center justify-between rounded-xl border border-white/10 bg-[#0b1020] px-4 py-3 transition-all duration-300 hover:border-cyan-400"
                  >

                    <span className="font-medium text-white">
                      {skill.name}
                    </span>

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        skill.proficiency === "Advanced"
                          ? "bg-green-500/20 text-green-400"
                          : skill.proficiency === "Proficient"
                          ? "bg-cyan-500/20 text-cyan-400"
                          : "bg-yellow-500/20 text-yellow-400"
                      }`}
                    >
                      {skill.proficiency}
                    </span>

                  </div>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}