import { FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";


export default function Hero() {
  return (
    <section className="flex min-h-[calc(100vh-80px)] items-center px-6">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-12 lg:flex-row lg:justify-between">

        {/* Left side */}
        <div>
          <p className="text-lg">Hi, I'm</p>

          <h1 className="mt-2 text-6xl font-bold">
            Alphin Shaiju
          </h1>

          <h2 className="mt-4 bg-gradient-to-r from-purple-500 via-pink-400 to-cyan-400 bg-clip-text text-4xl font-bold text-transparent">
            Full Stack Developer
          </h2>

          <p className="mt-6 max-w-xl text-lg">
            I build modern, responsive and scalable web applications.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#projects"
              className="rounded-lg border px-6 py-3 transition hover:bg-white hover:text-black"
            >
              View Projects
            </a>

            <a
              href="#connect"
              className="rounded-lg border px-6 py-3 transition hover:bg-white hover:text-black"
            >
              Contact Me
            </a>
          </div>
          <div className="mt-6 flex items-center gap-5">
            <a
                href="https://github.com/alphiii2005"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-400 transition-all duration-300 hover:scale-110 hover:text-yellow-400"
            >
                <FaGithub size={24} />
            </a>

            <a
                href="https://www.linkedin.com/in/alphiii2005"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-400 transition-all duration-300 hover:scale-110 hover:text-yellow-400"
            >
                <FaLinkedinIn size={24} />
            </a>

            <a
                href="mailto:18alphinnn@gmail.com"
                aria-label="Email"
                className="text-gray-400 transition-all duration-300 hover:scale-110 hover:text-yellow-400"
            >
                <FiMail size={25} />
            </a>
            </div>
        </div>

       {/* Right side image */}
        <div className="relative flex h-96 w-96 items-center justify-center">


            {/* Gradient blob behind */}
            <div className="absolute h-full w-full animate-blob rounded-[55%_45%_35%_65%/60%_50%_50%_40%] bg-gradient-to-br from-purple-500 via-pink-400 to-cyan-400 blur-xl opacity-60" />

            {/* Your photo */}
            <div className="animate-blob relative h-[90%] w-[90%] overflow-hidden rounded-[42%_58%_65%_35%/45%_35%_65%_55%]">
                <Image
                src="/alphy.jpeg"
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