"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface AnimatedHeadingProps {
  children: ReactNode;
  className?: string;
}

export function AnimatedHeading({
  children,
  className,
}: AnimatedHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <h1 className={className}>{children}</h1>
    </motion.div>
  );
}
export default AnimatedHeading;