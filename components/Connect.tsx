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
          <p className="text-sm uppercase tracking-[0.3em] text-[#B8AEA0]">
            Connect
          </p>

          <h2 className="mt-3 text-5xl font-bold text-[#D6B98C] md:text-7xl">
            Let's Build Something.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#B8AEA0]">
            Have an idea, a project, or an opportunity? I'd love to hear
            from you. Feel free to reach out.
          </p>
        </div>

        {/* Contact Card */}
        <div className="mx-auto max-w-3xl rounded-3xl border border-[#3A332C] bg-[#1D1A17] p-10 transition-all duration-300 hover:border-[#D6B98C]/50 hover:shadow-[0_0_40px_rgba(214,185,140,0.08)] md:p-14">

          <h3 className="text-2xl font-semibold text-[#F3EBDD]">
            Find me online
          </h3>

          <p className="mt-3 text-[#B8AEA0]">
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
              className="group flex items-center gap-3 rounded-xl border border-[#3A332C] bg-[#141312] px-5 py-3 text-[#B8AEA0] transition-all duration-300 hover:-translate-y-1 hover:border-[#D6B98C]/60 hover:bg-[#25211D] hover:text-[#D6B98C]"
            >
              <FaGithub
                size={24}
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
              className="group flex items-center gap-3 rounded-xl border border-[#3A332C] bg-[#141312] px-5 py-3 text-[#B8AEA0] transition-all duration-300 hover:-translate-y-1 hover:border-[#D6B98C]/60 hover:bg-[#25211D] hover:text-[#D6B98C]"
            >
              <FaLinkedinIn
                size={24}
                className="transition-transform duration-300 group-hover:scale-110"
              />
              <span>LinkedIn</span>
            </a>

            {/* Email */}
            <a
              href="mailto:18alphinnn@gmail.com"
              aria-label="Email"
              className="group flex items-center gap-3 rounded-xl border border-[#3A332C] bg-[#141312] px-5 py-3 text-[#B8AEA0] transition-all duration-300 hover:-translate-y-1 hover:border-[#D6B98C]/60 hover:bg-[#25211D] hover:text-[#D6B98C]"
            >
              <FiMail
                size={25}
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