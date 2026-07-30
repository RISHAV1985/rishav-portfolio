"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "100+", label: "REST APIs Built" },
  { value: "50+", label: "SQL Optimizations" },
  { value: "1", label: "Research Publication" },
];

export default function Stats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
      {stats.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          viewport={{ once: true }}
          className="rounded-xl border border-cyan-500/20 bg-white/5 p-5 text-center backdrop-blur-sm"
        >
          <h3 className="text-3xl font-bold text-cyan-400">
            {item.value}
          </h3>

          <p className="text-sm text-gray-400 mt-2">
            {item.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}