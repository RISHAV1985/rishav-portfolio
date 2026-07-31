"use client";

import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#050816]">

      {/* Top Glow */}
      <motion.div
        animate={{
          x: [0, 120, -60, 0],
          y: [0, -80, 60, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[140px]"
      />

      {/* Right Glow */}
      <motion.div
        animate={{
          x: [0, -100, 80, 0],
          y: [0, 100, -40, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-0 top-40 h-[450px] w-[450px] rounded-full bg-purple-600/20 blur-[150px]"
      />

      {/* Bottom Glow */}
      <motion.div
        animate={{
          x: [0, 80, -100, 0],
          y: [0, -40, 80, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-sky-500/15 blur-[130px]"
      />

    </div>
  );
}