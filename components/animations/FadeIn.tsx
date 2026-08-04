"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

export default function FadeIn({
  children,
  delay = 0,
  direction = "up",
}: FadeInProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x:
          direction === "left"
            ? 40
            : direction === "right"
            ? -40
            : 0,
        y:
          direction === "up"
            ? 40
            : direction === "down"
            ? -40
            : 0,
      }}
      animate={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      transition={{
        duration: 0.7,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}