// app/o-nas/template.tsx
"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      transition={{
        ease: [0.6, -0.05, 0.01, 0.99],
        duration: 0.8,
      }}
    >
      {children}
    </motion.div>
  );
}
