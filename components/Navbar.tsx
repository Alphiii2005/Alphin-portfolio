"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const collapsed = scrolled && !menuOpen;

  return (
    <nav
      className={`fixed left-1/2 top-4 z-50 -translate-x-1/2 transition-all duration-500 ${
        collapsed ? "w-auto" : "w-[94%] max-w-6xl"
      }`}
    >
      <div
        className={`transition-all duration-500 ${
          scrolled
            ? "border border-white/15 bg-[#252321]/70 shadow-[0_10px_40px_rgba(0,0,0,0.18)] text-[#F5EDDC]"
            : "border border-black/10 bg-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.06)] text-[#171518]"
        } backdrop-blur-md backdrop-saturate-150 ${
          collapsed
            ? "rounded-full px-6 py-3"
            : "rounded-full px-5 py-4"
        }`}
      >
        {/* Collapsed Navbar */}
        {collapsed ? (
          <button
            onClick={() => setMenuOpen(true)}
            className="text-lg font-bold tracking-tight text-[#F5EDDC] transition-colors duration-300 hover:text-[#D7C9B2]"
          >
            Alphin
          </button>
        ) : (
          <div className="relative flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
              className={`text-xl font-bold tracking-tight transition-colors duration-300 ${
                scrolled
                  ? "text-[#F5EDDC] hover:text-[#D7C9B2]"
                  : "text-[#171518] hover:text-[#C98F65]"
              }`}
            >
              Alphin
            </button>

            {/* Desktop Navigation */}
            <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className={`text-sm font-medium transition-colors duration-300 ${
                  scrolled
                    ? "text-[#F5EDDC]/90 hover:text-[#D7C9B2]"
                    : "text-[#302C29] hover:text-[#C98F65]"
                }`}
              >
                About
              </a>

              <a
                href="#timeline"
                onClick={() => setMenuOpen(false)}
                className={`text-sm font-medium transition-colors duration-300 ${
                  scrolled
                    ? "text-[#F5EDDC]/90 hover:text-[#D7C9B2]"
                    : "text-[#302C29] hover:text-[#C98F65]"
                }`}
              >
                Journey
              </a>

              <a
                href="#projects"
                onClick={() => setMenuOpen(false)}
                className={`text-sm font-medium transition-colors duration-300 ${
                  scrolled
                    ? "text-[#F5EDDC]/90 hover:text-[#D7C9B2]"
                    : "text-[#302C29] hover:text-[#C98F65]"
                }`}
              >
                Projects
              </a>
            </div>

            {/* Desktop Hire Me */}
            <a
              href="#connect"
              onClick={() => setMenuOpen(false)}
              className="hidden rounded-full bg-[#171518] px-5 py-2 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#C98F65] md:block"
            >
              Hire Me
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur-md transition-all duration-300 md:hidden ${
                scrolled
                  ? "border-white/20 bg-white/10 text-[#F5EDDC] hover:bg-white/20 hover:text-[#D7C9B2]"
                  : "border-black/10 bg-white/20 text-[#171518] hover:bg-white/40 hover:text-[#C98F65]"
              }`}
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        )}
      </div>

      {/* Mobile Dropdown */}
      {!collapsed && (
        <div
          className={`overflow-hidden transition-all duration-500 ease-out md:hidden ${
            menuOpen
              ? "mt-2 max-h-80 opacity-100"
              : "pointer-events-none max-h-0 opacity-0"
          }`}
        >
          <div
            className={`rounded-3xl border p-6 shadow-[0_15px_50px_rgba(0,0,0,0.12)] backdrop-blur-xl backdrop-saturate-150 ${
              scrolled
                ? "border-white/15 bg-[#252321]/80"
                : "border-black/10 bg-white/20"
            }`}
          >
            <div className="flex flex-col items-center gap-5">
              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className={`text-sm font-medium transition-colors duration-300 ${
                  scrolled
                    ? "text-[#F5EDDC] hover:text-[#D7C9B2]"
                    : "text-[#302C29] hover:text-[#C98F65]"
                }`}
              >
                About
              </a>

              <a
                href="#timeline"
                onClick={() => setMenuOpen(false)}
                className={`text-sm font-medium transition-colors duration-300 ${
                  scrolled
                    ? "text-[#F5EDDC] hover:text-[#D7C9B2]"
                    : "text-[#302C29] hover:text-[#C98F65]"
                }`}
              >
                Journey
              </a>

              <a
                href="#projects"
                onClick={() => setMenuOpen(false)}
                className={`text-sm font-medium transition-colors duration-300 ${
                  scrolled
                    ? "text-[#F5EDDC] hover:text-[#D7C9B2]"
                    : "text-[#302C29] hover:text-[#C98F65]"
                }`}
              >
                Projects
              </a>

              <a
                href="#connect"
                onClick={() => setMenuOpen(false)}
                className="mt-1 rounded-full bg-[#171518] px-7 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#C98F65]"
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}