// ProjectCard.tsx

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
    <div className="group relative overflow-hidden rounded-3xl border border-[#3A332C] bg-[#1D1A17] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#D6B98C]/50 hover:bg-[#25211D]">

      {/* Warm ambient glow */}
      <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#D6B98C]/10 blur-3xl transition-all duration-500 group-hover:bg-[#D6B98C]/20" />

      <div className="relative">

        {/* Project image */}
        <div className="relative mb-6 h-56 overflow-hidden rounded-2xl border border-[#3A332C] bg-[#141312]">
          <Image
            src={project.image}
            alt={`${project.name} project preview`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        {/* Project title */}
        <h3 className="text-2xl font-bold text-[#F3EBDD] transition-colors duration-300 group-hover:text-[#D6B98C]">
          {project.name}
        </h3>

        {/* Description */}
        <p className="mt-4 leading-7 text-[#B8AEA0]">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-[#3A332C] bg-[#141312] px-3 py-1 text-sm text-[#B8AEA0] transition-colors duration-300 group-hover:border-[#D6B98C]/30 group-hover:text-[#D6B98C]"
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
            className="flex items-center gap-2 rounded-lg border border-[#3A332C] px-4 py-2 text-sm text-[#F3EBDD] transition-all duration-300 hover:-translate-y-1 hover:border-[#D6B98C] hover:bg-[#D6B98C] hover:text-[#1D1A17]"
          >
            <FaGithub size={16} />
            GitHub
          </a>

          {/* Live Demo */}
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-[#3A332C] px-4 py-2 text-sm text-[#F3EBDD] transition-all duration-300 hover:-translate-y-1 hover:border-[#D6B98C] hover:bg-[#D6B98C] hover:text-[#1D1A17]"
          >
            <FaExternalLinkAlt size={14} />
            Live Demo
          </a>

        </div>

      </div>
    </div>
  );
}