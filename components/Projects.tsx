"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { projects } from "@/constants/projects";
import {
  FaGithub
} from "react-icons/fa";
export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#050816] py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl font-bold">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>

          <p className="mt-6 text-gray-400 max-w-3xl mx-auto">
            A collection of enterprise backend applications, AI projects,
            research work and full-stack applications showcasing my
            experience across Backend Engineering, Machine Learning and
            Data Science.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="mt-16 grid gap-10 md:grid-cols-2 xl:grid-cols-3">

          {projects.map((project, index) => (

            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="overflow-hidden rounded-2xl border border-cyan-500/20 bg-white/5 backdrop-blur-lg transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]"
            >

              {/* Image */}

              <div className="relative h-56 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}

              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-2 text-cyan-400 text-sm">
                  {project.subtitle}
                </p>

                <p className="mt-5 text-gray-400 leading-7">
                  {project.description}
                </p>

                {/* Tech Stack */}

                <div className="mt-6 flex flex-wrap gap-2">

                  {project.techStack.map((tech) => (

                    <span
                      key={tech}
                      className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                {/* Buttons */}

                <div className="mt-8 flex gap-4">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg border border-cyan-500/30 px-4 py-2 text-sm hover:bg-cyan-500/10 transition"
                  >
                    <FaGithub size={18} />
                    GitHub
                  </a>

                  {project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-black hover:bg-cyan-400 transition"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}