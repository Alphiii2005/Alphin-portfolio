"use client";

import { motion } from "motion/react";

export default function Timeline() {
  return (
    <section id="timeline" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">

        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-[#B8AEA0]">
            My Journey
          </p>

          <h2 className="mt-3 text-5xl font-bold text-[#D6B98C] md:text-7xl">
            The Road So Far
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Timeline line */}
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-[#D6B98C] via-[#C98F65] to-[#3A332C] md:left-1/2 md:-translate-x-1/2" />

          {/* 2024 */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="relative mb-16 md:flex md:items-center md:justify-between"
          >
            <div className="ml-12 md:ml-0 md:w-[45%] md:text-right">
              <p className="text-2xl font-bold text-[#D6B98C]">
                2024
              </p>

              <h3 className="mt-2 text-xl font-semibold text-[#F3EBDD]">
                Started Programming
              </h3>

              <p className="mt-3 leading-7 text-[#B8AEA0]">
                Started exploring programming and discovered a passion for
                building things with code.
              </p>
            </div>

            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="absolute left-4 top-1 h-3 w-3 -translate-x-1/2 rounded-full bg-[#D6B98C] shadow-lg shadow-[#D6B98C]/30 md:left-1/2"
            />
          </motion.div>

          {/* 2025 */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="relative mb-16 md:flex md:flex-row-reverse md:items-center md:justify-between"
          >
            <div className="ml-12 md:ml-0 md:w-[45%]">
              <p className="text-2xl font-bold text-[#C98F65]">
                2025
              </p>

              <h3 className="mt-2 text-xl font-semibold text-[#F3EBDD]">
                Full-Stack Development
              </h3>

              <p className="mt-3 leading-7 text-[#B8AEA0]">
                Started building full-stack applications with Python, Django,
                JavaScript and React while learning how modern web applications
                work from frontend to backend.
              </p>
            </div>

            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="absolute left-4 top-1 h-3 w-3 -translate-x-1/2 rounded-full bg-[#C98F65] shadow-lg shadow-[#C98F65]/30 md:left-1/2"
            />
          </motion.div>

          {/* 2026 */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="relative md:flex md:items-center md:justify-between"
          >
            <div className="ml-12 md:ml-0 md:w-[45%] md:text-right">
              <p className="text-2xl font-bold text-[#D6B98C]">
                2026
              </p>

              <h3 className="mt-2 text-xl font-semibold text-[#F3EBDD]">
                Computer Science & AI
              </h3>

              <p className="mt-3 leading-7 text-[#B8AEA0]">
                Studying Computer Science at Wrexham University, building
                larger projects and exploring AI-powered applications.
              </p>
            </div>

            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="absolute left-4 top-1 h-3 w-3 -translate-x-1/2 rounded-full bg-[#D6B98C] shadow-lg shadow-[#D6B98C]/30 md:left-1/2"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}