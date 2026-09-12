"use client";

import { useEffect, useState } from "react";
import {
  FiArrowDown,
  FiArrowUpRight,
  FiDownload,
  FiMail,
} from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";

export default function Hero() {
  const [mouse, setMouse] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative -mt-[94px] min-h-screen overflow-hidden bg-white px-6 pt-[94px] text-[#171518]">
      {/* Dynamic colour background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden bg-white">
        {/* Main colourful splash */}
        <div
          className="absolute h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[90px] transition-all duration-500 ease-out"
          style={{
            left: `${mouse.x}%`,
            top: `${mouse.y}%`,
            background: `
              radial-gradient(
                circle at 20% 25%,
                rgba(139, 92, 246, 0.38) 0%,
                transparent 38%
              ),
              radial-gradient(
                circle at 78% 22%,
                rgba(59, 130, 246, 0.34) 0%,
                transparent 40%
              ),
              radial-gradient(
                circle at 75% 78%,
                rgba(236, 72, 153, 0.32) 0%,
                transparent 42%
              ),
              radial-gradient(
                circle at 22% 78%,
                rgba(249, 115, 22, 0.30) 0%,
                transparent 40%
              )
            `,
          }}
        />

        {/* Green / purple drifting splash */}
        <div
          className="absolute h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[75px] transition-all duration-[900ms] ease-out"
          style={{
            left: `${mouse.x}%`,
            top: `${mouse.y}%`,
            transform: `
              translate(
                ${(mouse.x - 50) * -0.18}px,
                ${(mouse.y - 50) * -0.18}px
              )
            `,
            background: `
              radial-gradient(
                circle at 18% 20%,
                rgba(34, 197, 94, 0.27) 0%,
                transparent 35%
              ),
              radial-gradient(
                circle at 82% 28%,
                rgba(168, 85, 247, 0.30) 0%,
                transparent 38%
              ),
              radial-gradient(
                circle at 52% 85%,
                rgba(236, 72, 153, 0.24) 0%,
                transparent 42%
              )
            `,
          }}
        />

        {/* Warm yellow/orange glow */}
        <div
          className="absolute h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[60px] transition-all duration-[1200ms] ease-out"
          style={{
            left: `${mouse.x}%`,
            top: `${mouse.y}%`,
            transform: `
              translate(
                ${(mouse.x - 50) * 0.3}px,
                ${(mouse.y - 50) * 0.3}px
              )
            `,
            background:
              "radial-gradient(circle, rgba(250, 204, 21, 0.24) 0%, rgba(249, 115, 22, 0.14) 40%, transparent 72%)",
          }}
        />

        {/* Blue edge glow */}
        <div
          className="absolute h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[65px] transition-all duration-[800ms] ease-out"
          style={{
            left: `${mouse.x}%`,
            top: `${mouse.y}%`,
            transform: `
              translate(
                ${(mouse.x - 50) * -0.25}px,
                ${(mouse.y - 50) * 0.2}px
              )
            `,
            background:
              "radial-gradient(circle, rgba(14, 165, 233, 0.20) 0%, rgba(99, 102, 241, 0.14) 42%, transparent 72%)",
          }}
        />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "linear-gradient(#171518 1px, transparent 1px), linear-gradient(90deg, #171518 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Main */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1400px] items-center">
        <div className="grid w-full items-center lg:grid-cols-[1.05fr_0.95fr]">
          {/* Left */}
          <div className="relative z-20 pt-28 lg:pt-10">
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.35em] text-[#625A52]">
              Hi, I'm
            </p>

            <h1 className="text-[clamp(5rem,13vw,11rem)] font-black leading-[0.76] tracking-[-0.085em] text-[#171518]">
              Alphin
            </h1>

            <div className="mt-9 flex flex-wrap items-center gap-4 text-xl font-medium tracking-tight text-[#302C29] md:text-2xl">
              <span>Full Stack Developer</span>
              <span className="h-2 w-2 rounded-full bg-[#C98F65]" />
              <span>CS Student</span>
            </div>

            <p className="mt-7 max-w-lg text-base leading-8 text-[#625A52] md:text-lg">
              I build web applications, explore AI, and turn ideas into
              products that people can actually use.
            </p>

            {/* Actions */}
            <div className="mt-9 flex flex-wrap items-center gap-7">
              <a
                href="#projects"
                className="group flex items-center gap-3 text-sm font-semibold text-[#171518]"
              >
                <span className="relative">
                  Explore my work
                  <span className="absolute -bottom-1 left-0 h-px w-full origin-left bg-[#171518] transition-transform duration-300 group-hover:scale-x-0" />
                </span>

                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#171518] text-white transition-transform duration-300 group-hover:translate-x-1">
                  <FiArrowUpRight size={15} />
                </span>
              </a>

              <a
                href="/resume.pdf"
                download="Alphin-Shaiju-Resume.pdf"
                className="group flex items-center gap-2 text-sm font-medium text-[#625A52] transition-colors duration-300 hover:text-[#171518]"
              >
                <FiDownload
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5"
                />
                Resume
              </a>
            </div>

            {/* Small information row */}
            <div className="mt-16 flex items-center gap-8 border-t border-[#171518]/10 pt-6">
              <div>
                <p className="text-2xl font-bold text-[#171518]">02+</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#81786F]">
                  Projects
                </p>
              </div>

              <div className="h-10 w-px bg-[#171518]/10" />

              <div>
                <p className="text-2xl font-bold text-[#171518]">UK</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#81786F]">
                  Based
                </p>
              </div>

              <div className="h-10 w-px bg-[#171518]/10" />

              <div>
                <p className="text-2xl font-bold text-[#171518]">CS</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#81786F]">
                  Student
                </p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="relative flex min-h-[600px] items-center justify-center lg:min-h-[760px]">
            {/* Portrait */}
            <div
              className="animate-blob relative z-10 h-[500px] w-[390px] overflow-hidden rounded-[42%_58%_65%_35%/45%_35%_65%_55%] shadow-[0_35px_100px_rgba(23,21,24,0.18)] transition-transform duration-700 ease-out md:h-[610px] md:w-[470px]"
              style={{
                transform: `translate(${(mouse.x - 50) * 0.025}px, ${
                  (mouse.y - 50) * 0.025
                }px)`,
              }}
            >
              <Image
                src="/est.png"
                alt="Portrait of Alphin"
                fill
                sizes="(max-width: 768px) 90vw, 470px"
                priority
                className="object-cover"
              />
            </div>

            {/* Small handwritten-style decoration */}
            <div className="absolute right-[2%] top-[20%] hidden rotate-[-7deg] lg:block">
              <p className="font-serif text-2xl italic text-[#302C29]">
                Build
              </p>

              <p className="font-serif text-2xl italic text-[#302C29]">
                Learn
              </p>

              <p className="font-serif text-2xl italic text-[#302C29]">
                Grow
              </p>

              <div className="mt-2 h-px w-20 rotate-[-5deg] bg-[#302C29]" />
            </div>
          </div>
        </div>
      </div>

      {/* Socials */}
      <div className="absolute bottom-9 left-8 z-20 hidden items-center gap-5 md:flex lg:left-14">
        <a
          href="https://github.com/alphiii2005"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-[#625A52] transition-all duration-300 hover:-translate-y-1 hover:text-[#171518]"
        >
          <FaGithub size={18} />
        </a>

        <a
          href="https://www.linkedin.com/in/alphiii2005"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-[#625A52] transition-all duration-300 hover:-translate-y-1 hover:text-[#171518]"
        >
          <FaLinkedinIn size={18} />
        </a>

        <a
          href="mailto:18alphinnn@gmail.com"
          aria-label="Email"
          className="text-[#625A52] transition-all duration-300 hover:-translate-y-1 hover:text-[#171518]"
        >
          <FiMail size={19} />
        </a>
      </div>

      {/* Scroll */}
      <a
        href="#about"
        className="absolute bottom-8 right-8 z-20 hidden items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#81786F] transition-colors hover:text-[#171518] md:flex lg:right-14"
      >
        Scroll

        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#171518]/15">
          <FiArrowDown size={15} className="animate-bounce" />
        </span>
      </a>

      {/* Bottom edge */}
      <div className="absolute bottom-0 left-0 h-px w-full bg-[#171518]/10" />
    </section>
  );
}