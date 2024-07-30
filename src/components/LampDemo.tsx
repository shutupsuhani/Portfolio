"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br w-2/3 from-slate-300 to-slate-500 py-0 bg-clip-text text-center text-xl font-medium tracking-tight text-transparent md:text-2xl"
      >
        
        Hey there! I'm Suhani Sahu, a Full Stack Developer with a keen eye for detail and a passion for crafting Elegant Solutions. Functionality is my forte, and I thrive on building seamless experiences from Front to Back. When I'm not coding, you can find me exploring new Technologies, refining my Skills, or enjoying some downtime with a good book.
      </motion.h1>
    </LampContainer>
  );
}
