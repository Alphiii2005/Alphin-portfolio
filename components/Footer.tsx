export default function Footer() {
  return (
    <footer className="border-t border-[#3A332C] bg-[#141312] px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center text-center">

        <p className="text-sm text-[#B8AEA0]">
          © 2026{" "}
          <span className="font-medium text-[#D6B98C]">
            Alphin
          </span>
          . All rights reserved.
        </p>

        <p className="mt-2 text-xs text-[#6F665D]">
          Built with Next.js, React & Tailwind CSS.
        </p>

      </div>
    </footer>
  );
}