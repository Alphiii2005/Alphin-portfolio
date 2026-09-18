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
    <section className="relative -mt-[94px] min-h-screen overflow-hidden bg-white px-4 pt-[94px] text-[#171518] sm:px-6">
      {/* Dynamic colour background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden bg-white">
        {/* Main colourful splash */}
        <div
          className="absolute h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[70px] transition-all duration-500 ease-out sm:h-[520px] sm:w-[520px] sm:blur-[90px]"
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
          className="absolute h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[60px] transition-all duration-[900ms] ease-out sm:h-[380px] sm:w-[380px] sm:blur-[75px]"
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
          className="absolute h-[180px] w-[180px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[50px] transition-all duration-[1200ms] ease-out sm:h-[240px] sm:w-[240px] sm:blur-[60px]"
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
          className="absolute h-[210px] w-[210px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[55px] transition-all duration-[800ms] ease-out sm:h-[280px] sm:w-[280px] sm:blur-[65px]"
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
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-94px)] max-w-[1400px] items-center">
        <div className="grid w-full items-center lg:grid-cols-[1.05fr_0.95fr]">
          {/* Left */}
          <div className="relative z-20 pt-12 sm:pt-20 lg:pt-10">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-[#625A52] sm:mb-5 sm:text-sm sm:tracking-[0.35em]">
              Hi, I'm
            </p>

            <h1 className="text-[clamp(4.1rem,20vw,11rem)] font-black leading-[0.78] tracking-[-0.085em] text-[#171518] sm:text-[clamp(5rem,13vw,11rem)]">
              Alphin
            </h1>

            <div className="mt-7 flex max-w-[360px] flex-wrap items-center gap-x-3 gap-y-2 text-base font-medium tracking-tight text-[#302C29] sm:mt-9 sm:max-w-none sm:gap-4 sm:text-xl md:text-2xl">
              <span>Full Stack Developer</span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#C98F65] sm:h-2 sm:w-2" />
              <span>CS Student</span>
            </div>

            <p className="mt-5 max-w-[340px] text-sm leading-7 text-[#625A52] sm:mt-7 sm:max-w-lg sm:text-base sm:leading-8 md:text-lg">
              I build web applications, explore AI, and turn ideas into
              products that people can actually use.
            </p>

            {/* Actions */}
            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-4 sm:mt-9 sm:gap-7">
              <a
                href="#projects"
                className="group flex items-center gap-2.5 text-sm font-semibold text-[#171518] sm:gap-3"
              >
                <span className="relative">
                  Explore my work
                  <span className="absolute -bottom-1 left-0 h-px w-full origin-left bg-[#171518] transition-transform duration-300 group-hover:scale-x-0" />
                </span>

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#171518] text-white transition-transform duration-300 group-hover:translate-x-1 sm:h-9 sm:w-9">
                  <FiArrowUpRight size={14} />
                </span>
              </a>

              <a
                href="/Resume2026.pdf"
                download="Alphin-Shaiju-Resume.pdf"
                className="group flex items-center gap-2 text-sm font-medium text-[#625A52] transition-colors duration-300 hover:text-[#171518]"
              >
                <FiDownload
                  size={15}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5"
                />
                Resume
              </a>
            </div>

            {/* Small information row */}
            <div className="mt-10 flex items-center gap-4 border-t border-[#171518]/10 pt-5 sm:mt-16 sm:gap-8 sm:pt-6">
              <div>
                <p className="text-xl font-bold text-[#171518] sm:text-2xl">
                  02+
                </p>
                <p className="mt-1 text-[9px] uppercase tracking-[0.15em] text-[#81786F] sm:text-[10px] sm:tracking-[0.2em]">
                  Projects
                </p>
              </div>

              <div className="h-8 w-px bg-[#171518]/10 sm:h-10" />

              <div>
                <p className="text-xl font-bold text-[#171518] sm:text-2xl">
                  UK
                </p>
                <p className="mt-1 text-[9px] uppercase tracking-[0.15em] text-[#81786F] sm:text-[10px] sm:tracking-[0.2em]">
                  Based
                </p>
              </div>

              <div className="h-8 w-px bg-[#171518]/10 sm:h-10" />

              <div>
                <p className="text-xl font-bold text-[#171518] sm:text-2xl">
                  CS
                </p>
                <p className="mt-1 text-[9px] uppercase tracking-[0.15em] text-[#81786F] sm:text-[10px] sm:tracking-[0.2em]">
                  Student
                </p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="relative flex min-h-[380px] items-center justify-center pt-10 sm:min-h-[600px] sm:pt-0 lg:min-h-[760px]">
            {/* Portrait */}
            <div
              className="animate-blob relative z-10 h-[360px] w-[280px] overflow-hidden rounded-[42%_58%_65%_35%/45%_35%_65%_55%] shadow-[0_25px_70px_rgba(23,21,24,0.16)] transition-transform duration-700 ease-out xs:h-[400px] xs:w-[310px] sm:h-[500px] sm:w-[390px] sm:shadow-[0_35px_100px_rgba(23,21,24,0.18)] md:h-[610px] md:w-[470px]"
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
                sizes="(max-width: 480px) 280px, (max-width: 768px) 390px, 470px"
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
      <div className="mt-8 flex items-center gap-6 md:absolute md:bottom-9 md:left-8 md:mt-0 lg:left-14">
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