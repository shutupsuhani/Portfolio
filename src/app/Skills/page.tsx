"use client"

import Image from 'next/image';
import { FC } from 'react';
import { motion } from 'framer-motion';

const cardVariants = {
  left: {
    initial: { x: '-100%', opacity: 0 },
    animate: { x: 0, opacity: 1 },
  },
  top: {
    initial: { y: '-100%', opacity: 0 },
    animate: { y: 0, opacity: 1 },
  },
  right: {
    initial: { x: '100%', opacity: 0 },
    animate: { x: 0, opacity: 1 },
  },
};

const Skills: FC = () => {
  const title = "Skills";

  return (
    <div className="px-4 mt-20 md:px-0 bg-gradient-to-r from-slate-300 via-slate-500 via-slate-600 to-slate-800">
      <div className="text-4xl text-center font-bold font-mono">{title}</div>
      <div className="flex flex-wrap justify-center mt-10 gap-4">
        {/* General */}
        <motion.div
          className="relative w-72 h-96 rounded-xl  border border-transparent bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 to-blue-500 bg-[length:200%_200%] animate-animate-border"
          variants={cardVariants.left}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-1 bg-white rounded-xl shadow-inner">
            <Image
              className="h-32 w-full object-cover mt-4 shadow-2xl rounded-xl"
              src="/general.jpg"
              alt="General"
              width={288}
              height={128}
            />
            <h1 className="font-mono text-center text-blue-700 text-2xl mt-4">General</h1>
            <div className="text-lg font-mono text-slate-800 text-center">
              <ul className="list-none">
                <li>C++</li>
                <li>Javascript</li>
                <li>Data Structures</li>
                <li>MongoDB & mySQL</li>
                <li>Git/Github</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Frontend */}
        <motion.div
          className="relative w-72 h-96 border rounded-xl border-transparent bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 to-blue-500 bg-[length:200%_200%] animate-animate-border"
          variants={cardVariants.top}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-1 bg-white rounded-xl shadow-inner">
            <Image
              className="h-32 w-full object-cover mt-4 shadow-2xl rounded-xl"
              src="/frontend.jpg"
              alt="Frontend"
              width={288}
              height={128}
            />
            <h1 className="font-mono text-center text-blue-700 text-2xl mt-4">Frontend</h1>
            <div className="text-xl font-mono text-slate-800 text-center">
              <ul className="list-none">
                <li>HTML & CSS</li>
                <li>Bootstrap</li>
                <li>ReactJS</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Backend */}
        <motion.div
          className="relative w-72 h-96 border rounded-xl border-transparent bg-gradient-to-r from-pink-400 via-yellow-300 via-red-400 to-blue-300 bg-[length:200%_200%] animate-animate-border"
          variants={cardVariants.right}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-1 bg-white rounded-xl shadow-inner">
            <Image
              className="h-32 w-full object-cover mt-4 px-1 shadow-2xl rounded-xl"
              src="/backend.jpeg"
              alt="Backend"
              width={288}
              height={128}
            />
            <h1 className="font-mono text-center text-blue-700 text-2xl mt-4">Backend</h1>
            <div className="text-xl font-mono text-slate-800 text-center">
              <ul className="list-none">
                <li>Node JS</li>
                <li>Express JS</li>
                <li>Docker</li>
                <li>Python</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="mt-12 border-t border-gray-800"></div>
    </div>
  );
};

export default Skills;
