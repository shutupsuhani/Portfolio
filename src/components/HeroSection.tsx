"use client";
import React from "react";
import { Boxes } from "./ui/background-boxes";
import { cn } from "@/lib/utils";
import { Typewriter } from 'react-simple-typewriter';
import Navbar from "./Navbar";

const HeroSection = () => {
    return (
        <> 
         <div className="mt-36">

            <h1 className={cn("text-xl md:text-4xl top-2 font-bold font-serif text-white relative z-20")}>
                Hi 👋🏻, I'm <span className="text-blue-400 text-3xl md:text-5xl decoration-from-font"> Suhani Sahu</span>
            </h1>
            <p className="text-center mt-4 font-serif font-semibold text-cyan-400  relative z-20 text-lg md:text-2xl">
                <Typewriter
                    words={['Full Stack Developer', 'Competitive Programmer', 'Backend Developer']}
                    loop={0} // 0 means infinite loop
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                />
            </p>

            <p className="text-center mt-3 font-serif font-semibold text-purple-400  relative z-20 text-lg md:text-2xl">
                Building Web Applications for Web2 and Web3.
            </p>
          

            </div>

      </>
    );
};

export default HeroSection;
