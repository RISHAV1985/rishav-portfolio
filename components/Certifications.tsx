"use client";

import { motion } from "framer-motion";
import {
  Award,
  Trophy,
  ShieldCheck,
  Star,
} from "lucide-react";

const certifications = [
  {
    icon: <ShieldCheck size={28} />,
    title: "Microsoft Security, Compliance & Identity Fundamentals",
    issuer: "Microsoft",
    type: "Certification",
  },
  {
    icon: <Award size={28} />,
    title: "Artificial Intelligence & Machine Learning",
    issuer: "AICTE / Internship Program",
    type: "Certification",
  },
  {
    icon: <Star size={28} />,
    title: "Python Programming",
    issuer: "Professional Training",
    type: "Certification",
  },
];

const achievements = [
  "Published research chapter on AI, IoT & Smart Agriculture (2024)",
  "Developed 100+ REST APIs at Tata Consultancy Services",
  "Optimized 50+ SQL queries improving backend performance",
  "3+ years of enterprise software engineering experience",
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="bg-[#050816] py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl font-bold">
            Certifications &{" "}
            <span className="text-cyan-400">
              Achievements
            </span>
          </h2>

          <p className="mt-6 text-gray-400">
            Continuous learning, professional development and career milestones.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">

          {/* Certifications */}

          <div className="rounded-2xl border border-cyan-500/20 bg-white/5 p-8">

            <h3 className="mb-8 flex items-center gap-3 text-2xl font-semibold">
              <Award className="text-cyan-400" />
              Certifications
            </h3>

            <div className="space-y-6">

              {certifications.map((cert) => (

                <div
                  key={cert.title}
                  className="rounded-xl border border-cyan-500/20 p-5"
                >

                  <div className="flex gap-4">

                    <div className="text-cyan-400">
                      {cert.icon}
                    </div>

                    <div>

                      <h4 className="font-semibold">
                        {cert.title}
                      </h4>

                      <p className="text-sm text-gray-400">
                        {cert.issuer}
                      </p>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>

          {/* Achievements */}

          <div className="rounded-2xl border border-cyan-500/20 bg-white/5 p-8">

            <h3 className="mb-8 flex items-center gap-3 text-2xl font-semibold">

              <Trophy className="text-cyan-400" />

              Achievements

            </h3>

            <ul className="space-y-5">

              {achievements.map((item) => (

                <li
                  key={item}
                  className="flex gap-3 text-gray-300"
                >
                  <span className="text-cyan-400">✔</span>
                  {item}
                </li>

              ))}

            </ul>

          </div>

        </div>

      </div>
    </section>
  );
}