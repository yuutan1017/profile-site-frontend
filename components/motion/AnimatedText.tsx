import React from "react";
import { motion } from "framer-motion";

const variants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      delay: 0.7,
    },
  },
  hidden: {
    opacity: 0,
    y: 70,
  },
};

export const AnimatedText = ({ text }: any) => {
  const words = text.split(" ");
  return (
    <motion.article
      className="flex overflow-hidden"
      variants={variants}
      initial="hidden"
      animate="visible"
    >
      {words.map((word: string, idx: number) => (
        <motion.p className="mx-2" key={idx}>
          {word}
        </motion.p>
      ))}
    </motion.article>
  );
};
