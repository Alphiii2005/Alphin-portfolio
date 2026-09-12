"use client";

import { useEffect, useState } from "react";

export default function MouseBackground() {
  const [position, setPosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({
        x: (event.clientX / window.innerWidth) * 100,
        y: (event.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Main moving glow */}
      <div
        className="absolute h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D6B98C]/8 blur-[120px] transition-all duration-700 ease-out"
        style={{
          left: `${position.x}%`,
          top: `${position.y}%`,
        }}
      />

      {/* Secondary ambient glow */}
      <div
        className="absolute h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8F6F52]/7 blur-[100px] transition-all duration-1000 ease-out"
        style={{
          left: `${100 - position.x * 0.25}%`,
          top: `${100 - position.y * 0.25}%`,
        }}
      />

      {/* Subtle overall gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#1D1A17_85%)]" />
    </div>
  );
}