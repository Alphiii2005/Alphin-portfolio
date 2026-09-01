"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-[#4D4845]/40 bg-[#1F1D20]/80 px-6 py-4 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between">

        {/* Logo */}
        <a
          href="#"
          className="text-xl font-bold text-[#F5EDDC] transition-colors duration-300 hover:text-[#D7C9B2]"
        >
          Alphin
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#about"
            className="text-[#F5EDDC] transition-colors duration-300 hover:text-[#D7C9B2]"
          >
            About
          </a>

          <a
            href="#timeline"
            className="text-[#F5EDDC] transition-colors duration-300 hover:text-[#D7C9B2]"
          >
            Journey
          </a>

          <a
            href="#projects"
            className="text-[#F5EDDC] transition-colors duration-300 hover:text-[#D7C9B2]"
          >
            Projects
          </a>

          <a
            href="#connect"
            className="text-[#F5EDDC] transition-colors duration-300 hover:text-[#D7C9B2]"
          >
            Connect
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl text-[#F5EDDC] transition-colors duration-300 hover:text-[#D7C9B2] md:hidden"
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="mt-4 flex flex-col items-center gap-5 border-t border-[#4D4845]/40 pt-5 md:hidden">

          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="text-[#F5EDDC] transition-colors duration-300 hover:text-[#D7C9B2]"
          >
            About
          </a>

          <a
            href="#timeline"
            onClick={() => setMenuOpen(false)}
            className="text-[#F5EDDC] transition-colors duration-300 hover:text-[#D7C9B2]"
          >
            Journey
          </a>

          <a
            href="#projects"
            onClick={() => setMenuOpen(false)}
            className="text-[#F5EDDC] transition-colors duration-300 hover:text-[#D7C9B2]"
          >
            Projects
          </a>

          <a
            href="#connect"
            onClick={() => setMenuOpen(false)}
            className="text-[#F5EDDC] transition-colors duration-300 hover:text-[#D7C9B2]"
          >
            Connect
          </a>

        </div>
      )}
    </nav>
  );
}