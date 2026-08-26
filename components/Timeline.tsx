"use client"; // ⭐ ADDED: allows us to use Motion in this component

import { motion } from "motion/react"; // ⭐ ADDED: imports animation tools

export default function Timeline() {
  return (
    <section id="timeline" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">

        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-400">
            My Journey
          </p>

          <h2 className="mt-3 bg-gradient-to-r from-purple-500 via-pink-400 to-cyan-400 bg-clip-text text-5xl font-bold text-transparent md:text-7xl">
            The Road So Far
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Gradient line */}
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-purple-500 via-pink-400 to-cyan-400 md:left-1/2 md:-translate-x-1/2" />

          {/* 2024 */}
          <motion.div
            initial={{ opacity: 0, x: -60 }} // ⭐ ADDED: starts invisible and to the left
            whileInView={{ opacity: 1, x: 0 }} // ⭐ ADDED: moves into normal position
            viewport={{ once: true, amount: 0.3 }} // ⭐ ADDED: triggers when 30% is visible
            transition={{ duration: 0.7 }} // ⭐ ADDED: animation speed
            className="relative mb-16 md:flex md:items-center md:justify-between"
          >

            <div className="ml-12 md:ml-0 md:w-[45%] md:text-right">
              <p className="text-2xl font-bold text-purple-400">
                2024
              </p>

              <h3 className="mt-2 text-xl font-semibold">
                Started Programming
              </h3>

              <p className="mt-3 text-gray-400">
                Started exploring programming and discovered a passion for
                building things with code.
              </p>
            </div>

            {/* 2024 dot */}
            <motion.div
              initial={{ scale: 0 }} // ⭐ ADDED
              whileInView={{ scale: 1 }} // ⭐ ADDED
              viewport={{ once: true }} // ⭐ ADDED
              transition={{ duration: 0.4, delay: 0.2 }} // ⭐ ADDED
              className="absolute left-4 top-1 h-3 w-3 -translate-x-1/2 rounded-full bg-purple-500 shadow-lg shadow-purple-500/50 md:left-1/2"
            />

          </motion.div>


          {/* 2025 */}
          <motion.div
            initial={{ opacity: 0, x: 60 }} // ⭐ ADDED: starts to the right
            whileInView={{ opacity: 1, x: 0 }} // ⭐ ADDED
            viewport={{ once: true, amount: 0.3 }} // ⭐ ADDED
            transition={{ duration: 0.7 }} // ⭐ ADDED
            className="relative mb-16 md:flex md:flex-row-reverse md:items-center md:justify-between"
          >

            <div className="ml-12 md:ml-0 md:w-[45%]">
              <p className="text-2xl font-bold text-pink-400">
                2025
              </p>

              <h3 className="mt-2 text-xl font-semibold">
                Full-Stack Development
              </h3>

              <p className="mt-3 text-gray-400">
                Started building full-stack applications with Python, Django,
                JavaScript and React while learning how modern web applications
                work from frontend to backend.
              </p>
            </div>

            {/* 2025 dot */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="absolute left-4 top-1 h-3 w-3 -translate-x-1/2 rounded-full bg-pink-400 shadow-lg shadow-pink-400/50 md:left-1/2"
            />

          </motion.div>


          {/* 2026 */}
          <motion.div
            initial={{ opacity: 0, x: -60 }} // ⭐ ADDED
            whileInView={{ opacity: 1, x: 0 }} // ⭐ ADDED
            viewport={{ once: true, amount: 0.3 }} // ⭐ ADDED
            transition={{ duration: 0.7 }} // ⭐ ADDED
            className="relative md:flex md:items-center md:justify-between"
          >

            <div className="ml-12 md:ml-0 md:w-[45%] md:text-right">
              <p className="text-2xl font-bold text-cyan-400">
                2026
              </p>

              <h3 className="mt-2 text-xl font-semibold">
                Computer Science & AI
              </h3>

              <p className="mt-3 text-gray-400">
                Studying Computer Science at Wrexham University, building
                larger projects and exploring AI-powered applications.
              </p>
            </div>

            {/* 2026 dot */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="absolute left-4 top-1 h-3 w-3 -translate-x-1/2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50 md:left-1/2"
            />

          </motion.div>

        </div>
      </div>
    </section>
  );
}