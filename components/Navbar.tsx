"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/60 px-6 py-4 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between">

        {/* Logo */}
        <a
          href="#"
          className="text-xl font-bold transition hover:text-yellow-400"
        >
          Alphin
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#about"
            className="transition hover:text-yellow-400"
          >
            About
          </a>

          <a
            href="#timeline"
            className="transition hover:text-yellow-400"
          >
            Journey
          </a>

          <a
            href="#projects"
            className="transition hover:text-yellow-400"
          >
            Projects
          </a>

          <a
            href="#connect"
            className="transition hover:text-yellow-400"
          >
            Connect
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl md:hidden"
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="mt-4 flex flex-col items-center gap-5 border-t border-white/10 pt-5 md:hidden">

          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="transition hover:text-yellow-400"
          >
            About
          </a>

          <a
            href="#timeline"
            onClick={() => setMenuOpen(false)}
            className="transition hover:text-yellow-400"
          >
            Journey
          </a>

          <a
            href="#projects"
            onClick={() => setMenuOpen(false)}
            className="transition hover:text-yellow-400"
          >
            Projects
          </a>

          <a
            href="#connect"
            onClick={() => setMenuOpen(false)}
            className="transition hover:text-yellow-400"
          >
            Connect
          </a>

        </div>
      )}
    </nav>
  );
}