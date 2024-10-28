"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.8,
        rotate: -5,
        y: 50,
        filter: "blur(10px)",
      }}
      animate={{
        opacity: 1,
        scale: 1,
        rotate: 0,
        y: 0,
        filter: "blur(0px)",
      }}
      exit={{
        opacity: 0,
        scale: 0.9,
        rotate: 5,
        y: -50,
        filter: "blur(5px)",
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 18,
        duration: 1.2,
        mass: 0.7,
      }}
    >
      {children}
    </motion.div>
  );
}
