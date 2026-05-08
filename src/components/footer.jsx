export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

        <h1 className="text-white text-2xl font-bold">
          Gigz<span className="text-cyan-400">Dev</span>
        </h1>

        <p className="text-gray-500 text-sm text-center">
          © 2026 GigzDev. All rights reserved.
        </p>

        <div className="flex gap-5 text-gray-400">
          <a href="#" className="hover:text-cyan-400 transition">
            Instagram
          </a>

          <a href="#" className="hover:text-cyan-400 transition">
            Github
          </a>

          <a href="#" className="hover:text-cyan-400 transition">
            LinkedIn
          </a>
        </div>

      </div>
    </footer>
  );
}