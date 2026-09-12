"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";

const projects = [
  {
    number: "01",
    name: "AlphaBot",
    category: "AI / FULL STACK",
    description:
      "A Django-based AI assistant built to bring multiple useful tools into one place, from coding assistance and content generation to CV creation.",
    technologies: ["Python", "Django", "AI APIs"],
    image: "/alphabot.png",
    github: "https://github.com/Alphiii2005/alphabot-live",
    live: "https://alphabot-aal9.onrender.com/",
    accent: "#C98F65",
  },
  {
    number: "02",
    name: "Manjaly's Fresh Direct",
    category: "E-COMMERCE / FULL STACK",
    description:
      "A full-stack e-commerce platform designed for a local meat business, with product management, cart functionality and Stripe checkout.",
    technologies: ["Next.js", "Django", "Stripe"],
    image: "/manjalys-fd.png",
    github: "https://github.com/Alphiii2005/manjalys-fresh-direct",
    live: "#",
    accent: "#D6B98C",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#141312] px-6 py-32 text-[#F3EBDD]"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-20 top-20 select-none text-[12rem] font-black leading-none text-white/[0.02] md:text-[20rem]">
        WORK
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-24"
        >
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-[#C98F65]" />
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#B8AEA0]">
              Selected Work
            </p>
          </div>

          <div className="mt-6 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <h2 className="max-w-4xl text-5xl font-bold leading-[0.95] tracking-tight text-[#F3EBDD] md:text-7xl lg:text-8xl">
              Things I've
              <br />
              <span className="text-[#D6B98C]">built.</span>
            </h2>

            <p className="max-w-sm text-base leading-7 text-[#7B7369]">
              A collection of projects where I've turned ideas into working
              products while learning along the way.
            </p>
          </div>
        </motion.div>

        {/* Projects */}
        <div className="space-y-28">
          {projects.map((project, index) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              {/* Project number / line */}
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span
                    className="text-sm font-bold"
                    style={{ color: project.accent }}
                  >
                    {project.number}
                  </span>

                  <span className="h-px w-16 bg-[#3A332C]" />

                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#7B7369]">
                    {project.category}
                  </span>
                </div>

                <span className="hidden text-sm text-[#7B7369] md:block">
                  0{index + 1} / 02
                </span>
              </div>

              {/* Main project */}
              <div className="grid overflow-hidden rounded-[2rem] border border-[#3A332C] bg-[#1D1A17] lg:grid-cols-[1.15fr_0.85fr]">
                {/* Image */}
                <div className="relative min-h-[320px] overflow-hidden bg-[#25211D] md:min-h-[500px]">
                  <div
                    className="absolute -left-20 -top-20 h-64 w-64 rounded-full blur-3xl opacity-20"
                    style={{ backgroundColor: project.accent }}
                  />

                  <div className="absolute inset-6 overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-[#141312] md:inset-10">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 55vw"
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />

                    {/* Image overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141312]/50 via-transparent to-transparent opacity-60" />
                  </div>

                  {/* Floating number */}
                  <span className="pointer-events-none absolute bottom-3 right-6 text-[7rem] font-black leading-none text-white/[0.035] md:text-[9rem]">
                    {project.number}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between p-8 md:p-12 lg:p-14">
                  <div>
                    <div className="mb-8 flex items-center justify-between">
                      <span
                        className="flex h-12 w-12 items-center justify-center rounded-full border"
                        style={{
                          borderColor: `${project.accent}55`,
                          color: project.accent,
                        }}
                      >
                        <span className="h-2.5 w-2.5 rounded-full bg-current" />
                      </span>

                      <span className="text-xs uppercase tracking-[0.2em] text-[#7B7369]">
                        Full Stack
                      </span>
                    </div>

                    <h3 className="max-w-xl text-4xl font-bold leading-tight tracking-tight text-[#F3EBDD] transition-colors duration-300 group-hover:text-white md:text-5xl">
                      {project.name}
                    </h3>

                    <p className="mt-6 max-w-xl text-base leading-8 text-[#B8AEA0] md:text-lg">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mt-8 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-[#3A332C] px-4 py-2 text-xs font-medium text-[#B8AEA0] transition-colors duration-300 group-hover:border-[#4A4239] group-hover:text-[#F3EBDD]"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="mt-12 flex flex-wrap items-center gap-4 border-t border-[#3A332C] pt-8">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link flex items-center gap-3 rounded-full border border-[#3A332C] px-5 py-3 text-sm font-medium text-[#F3EBDD] transition-all duration-300 hover:-translate-y-1 hover:border-[#D6B98C] hover:bg-[#D6B98C] hover:text-[#141312]"
                    >
                      <FaGithub className="text-base" />
                      GitHub
                      <FaArrowUpRightFromSquare className="text-xs opacity-60 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </a>

                    {project.live !== "#" && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link flex items-center gap-3 rounded-full bg-[#D6B98C] px-5 py-3 text-sm font-semibold text-[#141312] transition-all duration-300 hover:-translate-y-1 hover:bg-[#F3EBDD]"
                      >
                        Live Project
                        <FaArrowUpRightFromSquare className="text-xs transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-28 flex flex-col justify-between gap-6 border-t border-[#3A332C] pt-10 md:flex-row md:items-end"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#7B7369]">
              More to come
            </p>

            <h3 className="mt-3 text-3xl font-bold tracking-tight text-[#F3EBDD] md:text-5xl">
              I'm just getting started.
            </h3>
          </div>

          <p className="max-w-sm text-sm leading-6 text-[#7B7369]">
            New ideas, experiments and bigger projects are already in the
            pipeline.
          </p>
        </motion.div>
      </div>
    </section>
  );
}