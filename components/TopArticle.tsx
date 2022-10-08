import React from "react";
import { AnimatedText } from "./motion/AnimatedText";

export const TopArticle = () => {
  return (
    <div className="mt-12">
      <div className="flex items-center justify-center text-2xl">
        <AnimatedText text="Thankyou for Visiting!!" />
      </div>
    </div>
  );
};
