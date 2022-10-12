import React from "react";
import { motion } from "framer-motion";

export const AnimatedText = ({ text }: any) => {
  const words = text.split(" ");
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.025, delayChildren: 0.04 },
    },
  };

  const child = {
    hidden: {
      y: "200%",

      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 1 },
    },
    visible: {
      y: 0,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 2 },
    },
  };

  return (
    <motion.div
      className="flex overflow-hidden"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word: string, idx: number) => (
        <motion.p className="mx-2" key={idx} variants={child}>
          {word}
        </motion.p>
      ))}
    </motion.div>
  );
};
