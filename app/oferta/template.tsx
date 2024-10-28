// app/o-nas/template.tsx
"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ scale: 0.85, rotate: -10, y: 50, opacity: 0 }}
      animate={{ scale: 1, rotate: 0, y: 0, opacity: 1 }}
      exit={{ scale: 0.85, rotate: 10, y: -50, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 60,
        damping: 20,
        duration: 1,
        bounce: 0.4,
      }}
    >
      {children}
    </motion.div>
  );
}
