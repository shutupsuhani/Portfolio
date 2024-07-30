'use client';
import React, { useState, useEffect } from "react";
import { cn } from "@/utils/cn";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full top-0 left-0 p-4 z-50",
        isScrolled ? 'backdrop-blur-lg shadow-lg transition duration-300 ease-in-out' : '',
        className
      )}
      style={{ backgroundColor: 'slate-950' }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex space-x-3 items-center">
          <img className="rounded-full h-11 w-11" src="/Suhanicoverimage.jpeg" alt="Profile" />
          <div className="text-3xl font-mono ml-3 font-bold text-white">
            Suhani Sahu
          </div>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            type="button"
            className="text-white text-blue-700 focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M2 6a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zm0 5a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zm0 5a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        <div className="hidden md:flex font-semibold md:space-x-4 font-mono">
          <Link href="/" className="text-xl text-white hover:text-blue-700">
            Home
          </Link>
          <Link href="/About" className="text-xl text-white hover:text-blue-700">
            About Me
          </Link>
          <Link href="/Skills" className="text-xl text-white hover:text-blue-700">
            Skills
          </Link>
          <Link href="/Project" className="text-xl text-white hover:text-blue-700">
            Projects
          </Link>
          <Link href="/contact" className="text-xl text-white hover:text-blue-700">
            Contact
          </Link>
        </div>

        {menuOpen && (
          <div className="md:hidden absolute top-16 right-4 bg-slate-200 p-4 shadow-md rounded-lg transition-all duration-300 ease-in-out">
            <button
              onClick={() => setMenuOpen(false)}
              type="button"
              className="text-blue-700 bg-white h-8 w-8 rounded-full hover:text-black focus:outline-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414L11.414 10l2.293 2.293a1 1 0 11-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 01-1.414-1.414L8.586 10 6.293 7.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-xl text-black hover:text-blue-700">
                Home
              </Link>
              <Link href="/About" className="text-xl text-black hover:text-blue-700">
                About Me
              </Link>
              <Link href="/Skills" className="text-xl text-black hover:text-blue-700">
                Skills
              </Link>
              <Link href="/Project" className="text-xl text-black hover:text-blue-700">
                Projects
              </Link>
              <Link href="/contact" className="text-xl text-black hover:text-blue-700">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
