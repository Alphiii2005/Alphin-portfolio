import { FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex min-h-[calc(100vh-80px)] items-center px-6">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-12 lg:flex-row lg:justify-between">

        {/* Left side */}
        <div>

          <p className="text-lg text-[#B8AEA0]">
            Hi, I'm
          </p>

          <h1 className="mt-2 text-6xl font-bold text-[#F3EBDD]">
            Alphin Shaiju
          </h1>

          <h2 className="mt-4 text-4xl font-bold text-[#D6B98C]">
            Full Stack Developer
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-[#B8AEA0]">
            I build modern, responsive and scalable web applications.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex gap-4">

            <a
              href="#projects"
              className="rounded-lg border border-[#3A332C] px-6 py-3 text-[#F3EBDD] transition-all duration-300 hover:-translate-y-1 hover:border-[#D6B98C] hover:bg-[#D6B98C] hover:text-[#141312]"
            >
              View Projects
            </a>

            <a
              href="#connect"
              className="rounded-lg border border-[#3A332C] px-6 py-3 text-[#F3EBDD] transition-all duration-300 hover:-translate-y-1 hover:border-[#C98F65] hover:bg-[#C98F65] hover:text-[#141312]"
            >
              Contact Me
            </a>

          </div>

          {/* Social icons */}
          <div className="mt-6 flex items-center gap-5">

            <a
              href="https://github.com/alphiii2005"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-[#7F766B] transition-all duration-300 hover:scale-110 hover:text-[#D6B98C]"
            >
              <FaGithub size={24} />
            </a>

            <a
              href="https://www.linkedin.com/in/alphiii2005"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-[#7F766B] transition-all duration-300 hover:scale-110 hover:text-[#D6B98C]"
            >
              <FaLinkedinIn size={24} />
            </a>

            <a
              href="mailto:18alphinnn@gmail.com"
              aria-label="Email"
              className="text-[#7F766B] transition-all duration-300 hover:scale-110 hover:text-[#D6B98C]"
            >
              <FiMail size={25} />
            </a>

          </div>

        </div>

        {/* Right side image */}
        <div className="relative flex h-96 w-96 items-center justify-center">

          {/* Warm glow */}
          <div
            className="
              absolute
              h-full
              w-full
              animate-blob
              rounded-[55%_45%_35%_65%/60%_50%_50%_40%]
              bg-gradient-to-br
              from-[#D6B98C]
              via-[#C98F65]
              to-[#3A332C]
              blur-2xl
              opacity-60
            "
          />

          {/* Photo */}
          <div className="animate-blob relative h-[90%] w-[90%] overflow-hidden rounded-[42%_58%_65%_35%/45%_35%_65%_55%]">
            <Image
              src="/est.png"
              alt="Portrait of Alphin"
              fill
              sizes="(max-width: 768px) 80vw, 345px"
              loading="eager"
              className="object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
}