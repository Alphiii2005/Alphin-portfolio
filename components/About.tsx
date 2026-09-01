export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-[#B8AEA0]">
            About Me
          </p>

          <h2 className="mt-3 text-5xl font-bold text-[#D6B98C] md:text-7xl">
            Building things that matter.
          </h2>
        </div>

        {/* About paragraph */}
        <div className="rounded-3xl border border-[#3A332C] bg-[#1D1A17] p-8 md:p-12">
          <h3 className="text-2xl font-semibold text-[#F3EBDD]">
            Who I am
          </h3>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-[#B8AEA0]">
            I'm Alphin, a Computer Science student and full-stack developer
            who enjoys turning ideas into useful applications. I work mainly
            with Python, Django, JavaScript, React and Next.js, and I'm
            increasingly exploring AI and intelligent software systems.
          </p>

          <p className="mt-5 max-w-4xl text-lg leading-8 text-[#B8AEA0]">
            I enjoy building projects from the ground up, learning by doing,
            and experimenting with new technologies to solve real-world
            problems. My goal is to create software that is not only
            functional, but genuinely useful.
          </p>
        </div>

        {/* Tech Stack */}
        <div className="mt-20">
          <div className="mb-10 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-[#B8AEA0]">
              Tech Stack
            </p>

            <h3 className="mt-3 text-3xl font-bold text-[#F3EBDD] md:text-4xl">
              What I work with
            </h3>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {/* Programming Languages */}
            <div className="group rounded-2xl border border-[#3A332C] bg-[#1D1A17] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#D6B98C]/60 hover:bg-[#25211D]">
              <div className="mb-5 text-3xl transition-transform duration-300 group-hover:scale-110">
                💻
              </div>

              <h4 className="text-xl font-semibold text-[#F3EBDD]">
                Programming
              </h4>

              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  "Python",
                  "JavaScript",
                  "C",
                  "C++",
                ].map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-[#3A332C] bg-[#141312] px-3 py-1 text-sm text-[#B8AEA0] transition-colors duration-300 group-hover:border-[#D6B98C]/30"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            {/* Frontend */}
            <div className="group rounded-2xl border border-[#3A332C] bg-[#1D1A17] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#C98F65]/60 hover:bg-[#25211D]">
              <div className="mb-5 text-3xl transition-transform duration-300 group-hover:scale-110">
                🎨
              </div>

              <h4 className="text-xl font-semibold text-[#F3EBDD]">
                Frontend
              </h4>

              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  "React",
                  "Next.js",
                  "HTML",
                  "CSS",
                  "Tailwind CSS",
                ].map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-[#3A332C] bg-[#141312] px-3 py-1 text-sm text-[#B8AEA0] transition-colors duration-300 group-hover:border-[#C98F65]/30"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="group rounded-2xl border border-[#3A332C] bg-[#1D1A17] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#D6B98C]/60 hover:bg-[#25211D]">
              <div className="mb-5 text-3xl transition-transform duration-300 group-hover:scale-110">
                ⚙️
              </div>

              <h4 className="text-xl font-semibold text-[#F3EBDD]">
                Backend
              </h4>

              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  "Django",
                  "REST APIs",
                  "PostgreSQL",
                  "SQLite",
                ].map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-[#3A332C] bg-[#141312] px-3 py-1 text-sm text-[#B8AEA0] transition-colors duration-300 group-hover:border-[#D6B98C]/30"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            {/* AI */}
            <div className="group rounded-2xl border border-[#3A332C] bg-[#1D1A17] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#C98F65]/60 hover:bg-[#25211D]">
              <div className="mb-5 text-3xl transition-transform duration-300 group-hover:scale-110">
                🤖
              </div>

              <h4 className="text-xl font-semibold text-[#F3EBDD]">
                AI & Tools
              </h4>

              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  "AI APIs",
                  "LLMs",
                  "OpenRouter",
                  "Prompt Engineering",
                  "Git",
                  "GitHub",
                ].map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-[#3A332C] bg-[#141312] px-3 py-1 text-sm text-[#B8AEA0] transition-colors duration-300 group-hover:border-[#C98F65]/30"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}