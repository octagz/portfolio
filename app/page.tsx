"use client"
import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import { useState, useEffect } from 'react';
import { Metadata } from "next";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "About me", href: "/about" },
  { name: "Contact", href: "/contact" },
];


export default function Home() {
  const name = "Octavio Gzain.";
  const characters = name.split("");
  const [visibleCount, setVisibleCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleCount(currentCount => {
        if (currentCount < characters.length) {
          return currentCount + 1;
        } else {
          clearInterval(interval);
          return currentCount;
        }
      });
    }, 50); // Adjust the interval time as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pb-32 flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center font-semibold justify-center gap-8 bg-opacity-75 bg-black">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-100"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />

      <h1 className="z-10 text-4xl text-transparent duration-5000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        {characters.map((char, index) => (
            <span key={index} className={index < visibleCount ? (index === characters.length - 1 ? 'visible blink' : 'visible') : 'invisible'}>
                {char}
            </span>
          )
        )}
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-8 text-center animate-fade-in">
        <h2 className="text-lg font-semibold text-blue-100 bg-opacity-20 bg-black text-balance">
          Sr. Software Engineer Specialized in Artificial&nbsp;Intelligence
        </h2>
      </div>
      
      <div className="my-2 text-center animate-fade-in px-4 ">
        <h2 className="text-md italic text-blue-300 bg-opacity-75 bg-black">
          "I leverage the power of AI to create innovative solutions for real-life&nbsp;problems"
        </h2>
      </div>
    </div>
  );

}
