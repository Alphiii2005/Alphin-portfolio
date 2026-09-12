"use client";

import { motion } from "motion/react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiMail, FiArrowUpRight } from "react-icons/fi";

const links = [
  {
    name: "GitHub",
    label: "Explore my code",
    href: "https://github.com/alphiii2005",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    label: "Let's connect",
    href: "https://www.linkedin.com/in/alphiii2005",
    icon: FaLinkedinIn,
  },
  {
    name: "Email",
    label: "Send me a message",
    href: "mailto:18alphinnn@gmail.com",
    icon: FiMail,
  },
];

export default function Connect() {
  return (
    <section
      id="connect"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#F7F3EC] px-6 py-32 text-[#1F1D20]"
    >
      <div className="pointer-events-none absolute -bottom-24 -left-20 select-none text-[13rem] font-black leading-none text-[#1F1D20]/[0.025] md:text-[20rem]">
        HELLO
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-[#C98F65]" />

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#7B7369]">
              Connect
            </p>
          </div>

          <div className="mt-6 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <h2 className="text-5xl font-bold leading-[0.95] tracking-tight text-[#1F1D20] md:text-7xl lg:text-8xl">
              Let's build
              <br />
              something
              <br />
              <span className="text-[#C98F65]">worth using.</span>
            </h2>

            <p className="max-w-md text-base leading-8 text-[#7B7369] md:text-lg">
              Have an idea, a project, or an opportunity? I'm always open to
              meeting people, discussing ideas and building something useful.
            </p>
          </div>
        </motion.div>

        {/* Contact panel */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-20 overflow-hidden rounded-[2rem] border border-[#D7C9B2] bg-white shadow-[0_25px_80px_rgba(31,29,32,0.06)]"
        >
          <div className="grid lg:grid-cols-[0.75fr_1.25fr]">
            {/* Left */}
            <div className="relative overflow-hidden border-b border-[#D7C9B2] p-8 md:p-12 lg:border-b-0 lg:border-r">
              <span className="pointer-events-none absolute -right-5 -top-10 text-[10rem] font-black leading-none text-[#1F1D20]/[0.035]">
                →
              </span>

              <div className="relative z-10 flex h-full flex-col justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C98F65]">
                    Have a project?
                  </p>

                  <h3 className="mt-5 text-3xl font-bold leading-tight text-[#1F1D20] md:text-4xl">
                    Let's talk.
                  </h3>

                  <p className="mt-5 max-w-sm text-sm leading-7 text-[#7B7369]">
                    Whether it's a website, web application or a new idea,
                    feel free to reach out.
                  </p>
                </div>

                <a
                  href="mailto:18alphinnn@gmail.com"
                  className="mt-12 inline-flex w-fit items-center gap-3 text-sm font-medium text-[#C98F65] transition-all duration-300 hover:gap-5 hover:text-[#1F1D20]"
                >
                  18alphinnn@gmail.com
                  <FiArrowUpRight />
                </a>
              </div>
            </div>

            {/* Links */}
            <div className="p-4 md:p-6">
              <div className="divide-y divide-[#D7C9B2]">
                {links.map((link) => {
                  const Icon = link.icon;

                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      target={link.name === "Email" ? undefined : "_blank"}
                      rel={
                        link.name === "Email"
                          ? undefined
                          : "noopener noreferrer"
                      }
                      className="group flex items-center justify-between rounded-2xl px-4 py-7 transition-all duration-300 hover:bg-[#F7F3EC] md:px-6"
                    >
                      <div className="flex items-center gap-5">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D7C9B2] bg-[#F7F3EC] text-[#7B7369] transition-all duration-300 group-hover:border-[#C98F65]/50 group-hover:text-[#C98F65]">
                          <Icon size={21} />
                        </div>

                        <div>
                          <p className="text-lg font-semibold text-[#1F1D20]">
                            {link.name}
                          </p>

                          <p className="mt-1 text-sm text-[#7B7369]">
                            {link.label}
                          </p>
                        </div>
                      </div>

                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D7C9B2] text-[#7B7369] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:border-[#C98F65]/50 group-hover:text-[#C98F65]">
                        <FiArrowUpRight />
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-16 flex flex-col justify-between gap-5 border-t border-[#D7C9B2] pt-8 text-xs uppercase tracking-[0.2em] text-[#7B7369] md:flex-row"
        >
          <span>Alphin Shaiju</span>
          <span>Computer Science · Full Stack Development</span>
          <span>2026</span>
        </motion.div>
      </div>
    </section>
  );
}