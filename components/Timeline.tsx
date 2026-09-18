"use client";

import { motion } from "motion/react";
import {
  FaCode,
  FaGraduationCap,
  FaRocket,
} from "react-icons/fa";

const journey = [
  {
    year: "2024",
    title: "The Beginning",
    subtitle: "Started Programming",
    description:
      "Started exploring programming and discovered an interest in building things with code. Began learning the fundamentals and experimenting with different technologies.",
    icon: FaCode,
    number: "01",
  },
  {
    year: "2025",
    title: "Building For Real",
    subtitle: "Full-Stack Development",
    description:
      "Moved from learning individual technologies to building complete applications. Worked with Python, Django, JavaScript, React and databases while learning how frontend and backend systems connect.",
    icon: FaRocket,
    number: "02",
  },
  {
    year: "2026",
    title: "Going Deeper",
    subtitle: "Computer Science & AI",
    description:
      "Studying Computer Science at Wrexham University while building larger projects and exploring AI-powered applications, modern web development and software engineering.",
    icon: FaGraduationCap,
    number: "03",
  },
];

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="relative overflow-hidden bg-[#F7F3EC] px-4 py-24 text-[#1F1D20] sm:px-6 sm:py-32"
    >
      {/* Decorative background text */}
      <div className="pointer-events-none absolute -right-24 top-16 select-none text-[6rem] font-black leading-none text-[#1F1D20]/[0.025] sm:-right-20 sm:text-[12rem] md:text-[18rem]">
        JOURNEY
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-16 flex flex-col justify-between gap-7 sm:mb-24 md:flex-row md:items-end">

          <div>
            <div className="flex items-center gap-3 sm:gap-4">
              <span className="h-px w-8 bg-[#C98F65] sm:w-12" />

              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7B7369] sm:text-sm sm:tracking-[0.3em]">
                My Journey
              </p>
            </div>

            <h2 className="mt-5 max-w-4xl text-[2.7rem] font-bold leading-[0.95] tracking-tight text-[#1F1D20] sm:text-5xl md:text-7xl lg:text-8xl">
              From curiosity
              <br />
              to <span className="text-[#C98F65]">creation.</span>
            </h2>
          </div>

          <p className="max-w-[340px] text-sm leading-6 text-[#7B7369] sm:text-base sm:leading-7 md:pb-2">
            A timeline of how I went from writing my first programs to
            building full-stack applications and studying Computer Science.
          </p>
        </div>

        {/* Journey */}
        <div className="relative">

          {/* Main connecting line */}
          <div className="absolute left-4 top-0 h-full w-px bg-[#D7C9B2] sm:left-5 md:left-1/2 md:-translate-x-1/2" />

          {/* Animated line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute left-4 top-0 w-px bg-[#C98F65] sm:left-5 md:left-1/2 md:-translate-x-1/2"
          />

          {journey.map((item, index) => {
            const Icon = item.icon;
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={item.year}
                initial={{
                  opacity: 0,
                  y: 70,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                }}
                className={`relative mb-16 last:mb-0 sm:mb-24 md:flex md:items-center ${
                  isLeft ? "md:justify-start" : "md:justify-end"
                }`}
              >

                {/* Year Marker */}
                <div className="absolute left-4 top-7 z-20 -translate-x-1/2 sm:left-5 sm:top-8 md:left-1/2">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.25 + index * 0.15,
                      type: "spring",
                    }}
                    className="flex h-8 w-8 items-center justify-center rounded-full border-[4px] border-[#F7F3EC] bg-[#C98F65] shadow-[0_0_0_1px_#C98F65] sm:h-10 sm:w-10 sm:border-[5px]"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-white sm:h-2 sm:w-2" />
                  </motion.div>
                </div>

                {/* Card */}
                <div
                  className={`ml-10 w-[calc(100%-2.5rem)] sm:ml-14 sm:w-[calc(100%-3.5rem)] md:ml-0 md:w-[43%] ${
                    isLeft ? "md:mr-auto" : "md:ml-auto"
                  }`}
                >
                  <div className="group relative overflow-hidden rounded-[1.5rem] border border-[#D7C9B2] bg-white/60 p-5 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#C98F65]/50 hover:bg-white hover:shadow-[0_25px_70px_rgba(31,29,32,0.08)] sm:rounded-[2rem] sm:p-7 md:p-9">

                    {/* Background number */}
                    <span className="pointer-events-none absolute -right-2 -top-4 text-[6rem] font-black leading-none text-[#1F1D20]/[0.035] transition-all duration-500 group-hover:text-[#C98F65]/[0.08] sm:-right-3 sm:-top-7 sm:text-[9rem]">
                      {item.number}
                    </span>

                    <div className="relative z-10">

                      {/* Top row */}
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-4xl font-black tracking-tight text-[#C98F65] sm:text-5xl">
                          {item.year}
                        </span>

                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#D7C9B2] bg-[#F7F3EC] text-[#C98F65] transition-all duration-500 group-hover:rotate-6 group-hover:border-[#C98F65]/40 sm:h-11 sm:w-11">
                          <Icon size={16} />
                        </div>
                      </div>

                      {/* Text */}
                      <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8B8278] sm:mt-8 sm:text-xs sm:tracking-[0.25em]">
                        {item.title}
                      </p>

                      <h3 className="mt-2 text-xl font-bold leading-tight text-[#1F1D20] sm:text-2xl md:text-3xl">
                        {item.subtitle}
                      </h3>

                      <p className="mt-4 text-sm leading-6 text-[#6F6962] sm:mt-5 sm:text-base sm:leading-7">
                        {item.description}
                      </p>

                      {/* Bottom accent */}
                      <div className="mt-6 flex items-center gap-3 sm:mt-8">
                        <span className="h-1 w-8 shrink-0 rounded-full bg-[#C98F65] transition-all duration-500 group-hover:w-20 sm:w-10" />

                        <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#9A9187] sm:text-xs sm:tracking-[0.2em]">
                          Chapter {item.number}
                        </span>
                      </div>

                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 border-t border-[#D7C9B2] pt-8 sm:mt-28 sm:pt-10"
        >
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8B8278] sm:text-xs sm:tracking-[0.3em]">
                Still moving
              </p>

              <h3 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-[#1F1D20] sm:text-3xl md:text-5xl">
                The story isn't finished yet.
              </h3>
            </div>

            <p className="max-w-[320px] text-sm leading-6 text-[#7B7369]">
              More projects, more problems to solve, and plenty more to learn.
            </p>

          </div>
        </motion.div>

      </div>
    </section>
  );
}