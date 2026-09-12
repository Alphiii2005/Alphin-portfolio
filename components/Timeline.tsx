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
      className="relative overflow-hidden bg-[#F7F3EC] px-6 py-32 text-[#1F1D20]"
    >
      {/* Decorative background text */}
      <div className="pointer-events-none absolute -right-20 top-10 select-none text-[12rem] font-black leading-none text-[#1F1D20]/[0.025] md:text-[18rem]">
        JOURNEY
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-24 flex flex-col justify-between gap-8 md:flex-row md:items-end">

          <div>
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-[#C98F65]" />

              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#7B7369]">
                My Journey
              </p>
            </div>

            <h2 className="mt-6 max-w-4xl text-5xl font-bold leading-[0.95] tracking-tight text-[#1F1D20] md:text-7xl lg:text-8xl">
              From curiosity
              <br />
              to <span className="text-[#C98F65]">creation.</span>
            </h2>
          </div>

          <p className="max-w-sm text-base leading-7 text-[#7B7369] md:pb-2">
            A timeline of how I went from writing my first programs to
            building full-stack applications and studying Computer Science.
          </p>
        </div>

        {/* Journey */}
        <div className="relative">

          {/* Main connecting line */}
          <div className="absolute left-5 top-0 h-full w-px bg-[#D7C9B2] md:left-1/2 md:-translate-x-1/2" />

          {/* Animated line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute left-5 top-0 w-px bg-[#C98F65] md:left-1/2 md:-translate-x-1/2"
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
                className={`relative mb-24 last:mb-0 md:flex md:items-center ${
                  isLeft ? "md:justify-start" : "md:justify-end"
                }`}
              >

                {/* Year Marker */}
                <div className="absolute left-5 top-8 z-20 -translate-x-1/2 md:left-1/2">

                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.25 + index * 0.15,
                      type: "spring",
                    }}
                    className="flex h-10 w-10 items-center justify-center rounded-full border-[5px] border-[#F7F3EC] bg-[#C98F65] shadow-[0_0_0_1px_#C98F65]"
                  >
                    <span className="h-2 w-2 rounded-full bg-white" />
                  </motion.div>
                </div>

                {/* Card */}
                <div
                  className={`ml-14 w-full md:ml-0 md:w-[43%] ${
                    isLeft ? "md:mr-auto" : "md:ml-auto"
                  }`}
                >
                  <div className="group relative overflow-hidden rounded-[2rem] border border-[#D7C9B2] bg-white/60 p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#C98F65]/50 hover:bg-white hover:shadow-[0_25px_70px_rgba(31,29,32,0.08)] md:p-9">

                    {/* Background number */}
                    <span className="pointer-events-none absolute -right-3 -top-7 text-[9rem] font-black leading-none text-[#1F1D20]/[0.035] transition-all duration-500 group-hover:text-[#C98F65]/[0.08]">
                      {item.number}
                    </span>

                    <div className="relative z-10">

                      {/* Top row */}
                      <div className="flex items-center justify-between">
                        <span className="text-5xl font-black tracking-tight text-[#C98F65]">
                          {item.year}
                        </span>

                        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D7C9B2] bg-[#F7F3EC] text-[#C98F65] transition-all duration-500 group-hover:rotate-6 group-hover:border-[#C98F65]/40">
                          <Icon />
                        </div>
                      </div>

                      {/* Text */}
                      <p className="mt-8 text-xs font-semibold uppercase tracking-[0.25em] text-[#8B8278]">
                        {item.title}
                      </p>

                      <h3 className="mt-2 text-2xl font-bold text-[#1F1D20] md:text-3xl">
                        {item.subtitle}
                      </h3>

                      <p className="mt-5 text-base leading-7 text-[#6F6962]">
                        {item.description}
                      </p>

                      {/* Bottom accent */}
                      <div className="mt-8 flex items-center gap-3">
                        <span className="h-1 w-10 rounded-full bg-[#C98F65] transition-all duration-500 group-hover:w-20" />

                        <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#9A9187]">
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
          className="mt-28 border-t border-[#D7C9B2] pt-10"
        >
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8B8278]">
                Still moving
              </p>

              <h3 className="mt-3 text-3xl font-bold tracking-tight text-[#1F1D20] md:text-5xl">
                The story isn't finished yet.
              </h3>
            </div>

            <p className="max-w-sm text-sm leading-6 text-[#7B7369]">
              More projects, more problems to solve, and plenty more to learn.
            </p>

          </div>
        </motion.div>

      </div>
    </section>
  );
}