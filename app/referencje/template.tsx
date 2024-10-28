// app/o-nas/template.tsx
"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ x: -50, scale: 0.95, opacity: 0 }}
      animate={{ x: 0, scale: 1, opacity: 1 }}
      exit={{ x: 50, scale: 0.95, opacity: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 0.7,
      }}
    >
      {children}
    </motion.div>
  );
}
