import { image } from "motion/react-client";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    name: "AlphaBot",
    description: "An AI assistant built with Django and AI APIs.",
    technologies: ["Python", "Django", "AI"],
    github: "https://github.com/Alphiii2005/alphabot-live.git",
    live: "https://alphabot-aal9.onrender.com/",
    image: "/alphabot.png",
  },
  {
    name: "Manjaly's Fresh Direct",
    description: "A full-stack e-commerce platform for a local meat business.",
    technologies: ["Next.js", "Django", "Stripe"],
    github: "https://github.com/Alphiii2005/manjalys-fresh-direct.git",
    live: "https://your-demo.com",
    image: "/manjalys-fd.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-400">
            Projects
          </p>

          <h2 className="mt-3 bg-gradient-to-r from-purple-500 via-pink-400 to-cyan-400 bg-clip-text text-5xl font-bold text-transparent md:text-7xl">
            Things I've Built
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-400">
            A collection of projects I've built while learning, experimenting,
            and turning ideas into working applications.
          </p>
        </div>

        {/* Projects */}
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.name}
              project={project}
            />
          ))}
        </div>

      </div>
    </section>
  );
}