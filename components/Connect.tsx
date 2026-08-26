import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export default function Connect() {
  return (
    <section
      id="connect"
      className="flex min-h-screen items-center justify-center px-6 py-24"
    >
      <div className="w-full max-w-5xl text-center">

        {/* Heading */}
        <div className="mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-400">
            Connect
          </p>

          <h2 className="mt-3 bg-gradient-to-r from-purple-500 via-pink-400 to-cyan-400 bg-clip-text text-5xl font-bold text-transparent md:text-7xl">
            Let's Build Something.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-400">
            Have an idea, a project, or an opportunity? I'd love to hear
            from you. Feel free to reach out.
          </p>
        </div>

        {/* Contact Card */}
        <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-sm md:p-14">

          <h3 className="text-2xl font-semibold">
            Find me online
          </h3>

          <p className="mt-3 text-gray-400">
            You can find my work and get in touch through any of these.
          </p>

          {/* Links */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-8">

            {/* GitHub */}
            <a
              href="https://github.com/alphiii2005"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="group flex items-center gap-3 text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:text-yellow-400"
            >
              <FaGithub
                size={26}
                className="transition-transform duration-300 group-hover:scale-110"
              />
              <span>GitHub</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/alphiii2005"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="group flex items-center gap-3 text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:text-yellow-400"
            >
              <FaLinkedinIn
                size={26}
                className="transition-transform duration-300 group-hover:scale-110"
              />
              <span>LinkedIn</span>
            </a>

            {/* Email */}
            <a
              href="mailto:18alphinnn@gmail.com"
              aria-label="Email"
              className="group flex items-center gap-3 text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:text-yellow-400"
            >
              <FiMail
                size={27}
                className="transition-transform duration-300 group-hover:scale-110"
              />
              <span>Email</span>
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}