export default function Footer() {
  return (
    <footer className="border-t border-[#3A332C] bg-[#141312] px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="text-2xl font-bold tracking-tight text-[#F3EBDD]">
              Alphin<span className="text-[#C98F65]">.</span>
            </p>

            <p className="mt-3 text-sm text-[#6F665D]">
              Building, learning, and figuring things out one project at a
              time.
            </p>
          </div>

          <div className="flex flex-col gap-2 text-sm md:items-end">
            <a
              href="#about"
              className="text-[#7B7369] transition-colors duration-300 hover:text-[#D6B98C]"
            >
              About
            </a>

            <a
              href="#timeline"
              className="text-[#7B7369] transition-colors duration-300 hover:text-[#D6B98C]"
            >
              Journey
            </a>

            <a
              href="#projects"
              className="text-[#7B7369] transition-colors duration-300 hover:text-[#D6B98C]"
            >
              Projects
            </a>

            <a
              href="#connect"
              className="text-[#7B7369] transition-colors duration-300 hover:text-[#D6B98C]"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-3 border-t border-[#3A332C] pt-6 text-xs text-[#6F665D] sm:flex-row">
          <p>
            © 2026{" "}
            <span className="text-[#B8AEA0]">Alphin Shaiju</span>
          </p>

          <p>Built with Next.js, React & Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}