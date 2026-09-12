"use client";

import {
  FaCode,
  FaGithub,
  FaReact,
  FaPython,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiDjango,
  SiPostgresql,
  SiJavascript,
  SiCplusplus,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export default function About() {
  const technologies = [
    { name: "Python", icon: <FaPython /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "React", icon: <FaReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Django", icon: <SiDjango /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "C++", icon: <SiCplusplus /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "TypeScript", icon: <SiTypescript /> }
  ];

  return (
    <section id="about" className="relative overflow-hidden px-6 py-32">
      <div className="mx-auto max-w-6xl">

        {/* Section Intro */}
        <div className="mb-20">
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-[#D6B98C]" />

            <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#B8AEA0]">
              About Me
            </p>
          </div>

          <h2 className="mt-6 max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight text-[#F3EBDD] md:text-7xl">
            I like turning
            <span className="text-[#D6B98C]"> ideas </span>
            into things people can actually use.
          </h2>
        </div>

        {/* Main About Layout */}
        <div className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">

          {/* Main Story */}
          <div className="relative overflow-hidden rounded-[2rem] border border-[#3A332C] bg-[#1D1A17] p-8 md:p-12">

            {/* Decorative number */}
            <div className="absolute right-8 top-6 text-7xl font-bold text-[#F3EBDD]/[0.025] md:text-9xl">
              01
            </div>

            <div className="relative z-10">
              <p className="text-sm uppercase tracking-[0.25em] text-[#D6B98C]">
                Who I am
              </p>

              <h3 className="mt-5 max-w-2xl text-3xl font-semibold leading-tight text-[#F3EBDD] md:text-4xl">
                Computer Science student.
                <br />
                Full-stack developer.
                <br />
                Always building.
              </h3>

              <div className="mt-8 max-w-2xl space-y-5 text-base leading-8 text-[#B8AEA0] md:text-lg">
                <p>
                  I'm Alphin, a Computer Science student who enjoys building
                  software from the ground up. I work across the frontend and
                  backend, with a particular interest in Python, Django,
                  React, Next.js and modern web applications.
                </p>

                <p>
                  Most of what I learn comes from building. Whether it's an
                  AI assistant, an e-commerce platform or a new idea I've
                  never tried before, I like taking something from concept
                  to a working product.
                </p>
              </div>

              {/* Bottom line */}
              <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-[#3A332C] pt-7">
                <div className="flex items-center gap-2 text-sm text-[#B8AEA0]">
                  <span className="h-2 w-2 rounded-full bg-[#D6B98C]" />
                  Currently studying Computer Science
                </div>

                <div className="hidden h-4 w-px bg-[#3A332C] sm:block" />

                <div className="text-sm text-[#B8AEA0]">
                  Based in the UK
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">

            <div className="group rounded-[2rem] border border-[#3A332C] bg-[#1D1A17] p-8 transition-all duration-500 hover:-translate-y-1 hover:border-[#D6B98C]/50">
              <div className="flex items-start justify-between">
                <span className="text-sm uppercase tracking-[0.2em] text-[#7B7369]">
                  Projects
                </span>

                <FaCode className="text-xl text-[#D6B98C] transition-transform duration-500 group-hover:rotate-12" />
              </div>

              <p className="mt-8 text-5xl font-bold text-[#F3EBDD]">
                02<span className="text-[#D6B98C]">+</span>
              </p>

              <p className="mt-3 text-sm leading-6 text-[#B8AEA0]">
                Full-stack projects built from idea to working application.
              </p>
            </div>

            <div className="group rounded-[2rem] border border-[#3A332C] bg-[#1D1A17] p-8 transition-all duration-500 hover:-translate-y-1 hover:border-[#C98F65]/50">
              <div className="flex items-start justify-between">
                <span className="text-sm uppercase tracking-[0.2em] text-[#7B7369]">
                  Focus
                </span>

                <span className="text-xl text-[#C98F65]">✦</span>
              </div>

              <p className="mt-8 text-4xl font-bold text-[#F3EBDD]">
                Full Stack
              </p>

              <p className="mt-3 text-sm leading-6 text-[#B8AEA0]">
                Building useful products across frontend, backend and AI.
              </p>
            </div>

          </div>
        </div>

        {/* Technologies */}
        <div className="mt-24">

          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#B8AEA0]">
                Tools of the trade
              </p>

              <h3 className="mt-3 text-3xl font-bold text-[#F3EBDD] md:text-4xl">
                What I build with.
              </h3>
            </div>

            <p className="max-w-md text-sm leading-6 text-[#7B7369]">
              A growing toolkit shaped by projects, experimentation and
              constant learning.
            </p>
          </div>

          {/* Tech Grid */}
          <div className="grid grid-cols-2 overflow-hidden rounded-[2rem] border border-[#3A332C] bg-[#1D1A17] sm:grid-cols-3 md:grid-cols-5">
            {technologies.map((technology, index) => (
              <div
                key={technology.name}
                className={`group flex items-center gap-4 border-[#3A332C] p-6 transition-all duration-300 hover:bg-[#25211D] ${
                  index < 5 ? "border-b" : ""
                } ${
                  index % 5 !== 4 ? "md:border-r" : ""
                } ${
                  index % 3 !== 2 ? "sm:border-r" : ""
                }`}
              >
                <span className="text-xl text-[#7B7369] transition-all duration-300 group-hover:scale-110 group-hover:text-[#D6B98C]">
                  {technology.icon}
                </span>

                <span className="text-sm font-medium text-[#B8AEA0] transition-colors duration-300 group-hover:text-[#F3EBDD]">
                  {technology.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="mt-24 flex flex-col items-start justify-between gap-8 border-t border-[#3A332C] pt-10 md:flex-row md:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#7B7369]">
              Philosophy
            </p>

            <p className="mt-4 max-w-2xl text-2xl font-medium leading-relaxed text-[#F3EBDD] md:text-3xl">
              Learn something.
              <span className="text-[#D6B98C]"> Build something. </span>
              Repeat.
            </p>
          </div>

          <div className="flex items-center gap-3 text-[#7B7369]">
            <FaGithub className="text-xl" />
            <span className="text-sm">Always learning through code</span>
          </div>
        </div>

      </div>
    </section>
  );
}