// app/o-nas/template.tsx
"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ scale: 0.8, rotate: -5, opacity: 0 }}
      animate={{ scale: 1, rotate: 0, opacity: 1 }}
      exit={{ scale: 0.8, rotate: 5, opacity: 0 }}
      transition={{
        type: "tween",
        ease: "anticipate",
        duration: 0.8,
      }}
    >
      {children}
    </motion.div>
  );
}
