import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

type Project = {
  name: string;
  description: string;
  technologies: string[];
  github: string;
  live: string;
  image: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.08]">

      {/* Gradient glow */}
      <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-purple-500/20 blur-3xl transition-all duration-500 group-hover:bg-purple-500/30" />

      <div className="relative">

        <div className="relative mb-6 h-56 overflow-hidden rounded-2xl border border-white/10">
            <Image
                src={project.image}
                alt={`${project.name} project preview`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition duration-500 group-hover:scale-105"
            />
        </div>

        {/* Project title */}
        <h3 className="text-2xl font-bold transition-colors duration-300 group-hover:text-yellow-400">
          {project.name}
        </h3>

        {/* Description */}
        <p className="mt-4 leading-7 text-gray-400">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-gray-300 transition-colors duration-300 group-hover:border-white/20"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap gap-4">

          {/* GitHub */}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:text-yellow-400"
          >
            <FaGithub size={16} />
            GitHub
          </a>

          {/* Live Demo */}
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:text-yellow-400"
          >
            <FaExternalLinkAlt size={14} />
            Live Demo
          </a>

        </div>

      </div>
    </div>
  );
}