import Link from "next/link";
import React from "react";
import Particles from "./components/particles";


const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "About me", href: "/about" },
  { name: "Contact", href: "/contact" },
];



export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center font-semibold justify-center gap-4 bg-opacity-75 bg-black">
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
        octavio gzain
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-md text-blue-300 bg-opacity-75 bg-black">
          I leverage the power of AI to create innovative solutions for real-life problems.
        </h2>
      </div>
    </div>
  );

}
