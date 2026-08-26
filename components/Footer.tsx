export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center text-center">

        {/* Copyright */}
        <p className="text-sm text-gray-400">
          © 2026 Alphin. All rights reserved.
        </p>

        <p className="mt-1 text-xs text-gray-500">
          Built with Next.js, React & Tailwind CSS.
        </p>

      </div>
    </footer>
  );
}