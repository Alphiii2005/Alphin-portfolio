export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-400">
            About Me
          </p>

          <h2 className="mt-3 bg-gradient-to-r from-purple-500 via-pink-400 to-cyan-400 bg-clip-text text-5xl font-bold text-transparent md:text-7xl">
            Building things that matter.
          </h2>
        </div>

        {/* About paragraph */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm md:p-12">
          <h3 className="text-2xl font-semibold">
            Who I am
          </h3>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-gray-400">
            I'm Alphin, a Computer Science student and full-stack developer
            who enjoys turning ideas into useful applications. I work mainly
            with Python, Django, JavaScript, React and Next.js, and I'm
            increasingly exploring AI and intelligent software systems.
          </p>

          <p className="mt-5 max-w-4xl text-lg leading-8 text-gray-400">
            I enjoy building projects from the ground up, learning by doing,
            and experimenting with new technologies to solve real-world
            problems. My goal is to create software that is not only
            functional, but genuinely useful.
          </p>
        </div>

        {/* Tech Stack */}
        <div className="mt-20">
          <div className="mb-10 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-400">
              Tech Stack
            </p>

            <h3 className="mt-3 text-3xl font-bold md:text-4xl">
              What I work with
            </h3>
          </div>

          <div className="grid gap-6 md:grid-cols-3">

            {/* Web Development */}
            <div className="group rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-purple-400/40 hover:bg-white/[0.08]">
              <div className="mb-5 text-3xl transition-transform duration-300 group-hover:scale-110">
                🌐
              </div>

              <h4 className="text-xl font-semibold">
                Web Development
              </h4>

              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full bg-white/5 px-3 py-1 text-sm text-gray-300">
                  React
                </span>
                <span className="rounded-full bg-white/5 px-3 py-1 text-sm text-gray-300">
                  Next.js
                </span>
                <span className="rounded-full bg-white/5 px-3 py-1 text-sm text-gray-300">
                  JavaScript
                </span>
                <span className="rounded-full bg-white/5 px-3 py-1 text-sm text-gray-300">
                  HTML
                </span>
                <span className="rounded-full bg-white/5 px-3 py-1 text-sm text-gray-300">
                  CSS
                </span>
                <span className="rounded-full bg-white/5 px-3 py-1 text-sm text-gray-300">
                  Tailwind CSS
                </span>
              </div>
            </div>

            {/* Backend & Python */}
            <div className="group rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-pink-400/40 hover:bg-white/[0.08]">
              <div className="mb-5 text-3xl transition-transform duration-300 group-hover:scale-110">
                🐍
              </div>

              <h4 className="text-xl font-semibold">
                Backend & Python
              </h4>

              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full bg-white/5 px-3 py-1 text-sm text-gray-300">
                  Python
                </span>
                <span className="rounded-full bg-white/5 px-3 py-1 text-sm text-gray-300">
                  Django
                </span>
                <span className="rounded-full bg-white/5 px-3 py-1 text-sm text-gray-300">
                  REST APIs
                </span>
                <span className="rounded-full bg-white/5 px-3 py-1 text-sm text-gray-300">
                  PostgreSQL
                </span>
                <span className="rounded-full bg-white/5 px-3 py-1 text-sm text-gray-300">
                  SQLite
                </span>
              </div>
            </div>

            {/* AI & Tools */}
            <div className="group rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/[0.08]">
              <div className="mb-5 text-3xl transition-transform duration-300 group-hover:scale-110">
                🧠
              </div>

              <h4 className="text-xl font-semibold">
                AI & Tools
              </h4>

              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full bg-white/5 px-3 py-1 text-sm text-gray-300">
                  AI APIs
                </span>
                <span className="rounded-full bg-white/5 px-3 py-1 text-sm text-gray-300">
                  LLMs
                </span>
                <span className="rounded-full bg-white/5 px-3 py-1 text-sm text-gray-300">
                  OpenRouter
                </span>
                <span className="rounded-full bg-white/5 px-3 py-1 text-sm text-gray-300">
                  Git
                </span>
                <span className="rounded-full bg-white/5 px-3 py-1 text-sm text-gray-300">
                  GitHub
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}