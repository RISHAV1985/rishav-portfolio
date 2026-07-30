"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
} from "lucide-react";

const experiences = [
  {
    company: "Tata Consultancy Services",
    role: "System Engineer",
    duration: "Jul 2023 - Present",
    achievements: [
      "Developed 100+ enterprise REST APIs using Java and Spring Boot.",
      "Optimized 50+ SQL queries, improving database performance by ~35%.",
      "Worked with MySQL, Git, Postman and Agile methodologies.",
      "Collaborated with cross-functional teams to deliver scalable backend solutions."
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "REST APIs",
      "MySQL",
      "Git",
      "Postman"
    ]
  },
  {
    company: "Argusoft",
    role: "Programmer Analyst Intern",
    duration: "Jan 2023 - Jun 2023",
    achievements: [
      "Worked on backend application development.",
      "Implemented RESTful services and database operations.",
      "Participated in debugging and performance improvements."
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "SQL"
    ]
  },
  {
    company: "RecruitNXT",
    role: "Python Developer Intern",
    duration: "2022",
    achievements: [
      "Built Python-based automation utilities.",
      "Worked on backend scripts and data processing."
    ],
    technologies: [
      "Python",
      "Automation"
    ]
  },
  {
    company: "AICTE NEAT",
    role: "Data Analyst Intern",
    duration: "2022",
    achievements: [
      "Performed data analysis and visualization.",
      "Worked on data preprocessing and reporting."
    ],
    technologies: [
      "Python",
      "Pandas",
      "Excel"
    ]
  }
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 bg-[#050816]"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity:0,y:20 }}
          whileInView={{ opacity:1,y:0 }}
          viewport={{ once:true }}
          className="text-center"
        >

          <h2 className="text-5xl font-bold text-white">
            Professional <span className="text-cyan-400">Experience</span>
          </h2>

          <p className="mt-6 text-gray-400 max-w-3xl mx-auto">
            My journey from internships to enterprise software engineering.
          </p>

        </motion.div>

        <div className="mt-20 space-y-10">

          {experiences.map((exp,index)=>(

            <motion.div
              key={index}
              initial={{ opacity:0,x:-40 }}
              whileInView={{ opacity:1,x:0 }}
              viewport={{ once:true }}
              transition={{ delay:index*0.15 }}
              className="rounded-2xl border border-cyan-500/20 bg-white/5 p-8 backdrop-blur-lg"
            >

              <div className="flex flex-wrap justify-between items-start gap-4">

                <div>

                  <div className="flex items-center gap-3">

                    <Briefcase className="text-cyan-400"/>

                    <h3 className="text-2xl font-bold text-white">
                      {exp.company}
                    </h3>

                  </div>

                  <p className="mt-2 text-cyan-300">
                    {exp.role}
                  </p>

                </div>

                <div className="flex items-center gap-2 text-gray-400">

                  <Calendar size={18}/>

                  {exp.duration}

                </div>

              </div>

              <ul className="mt-8 space-y-3">

                {exp.achievements.map((item,i)=>(

                  <li
                    key={i}
                    className="text-gray-300"
                  >
                    • {item}
                  </li>

                ))}

              </ul>

              <div className="flex flex-wrap gap-3 mt-8">

                {exp.technologies.map((tech)=>(

                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-sm"
                  >
                    {tech}
                  </span>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}