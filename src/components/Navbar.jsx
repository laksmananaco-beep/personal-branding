import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="text-white text-2xl font-bold tracking-wide">
          Laks<span className="text-cyan-400">Dev</span>
        </h1>

        {/* Menu */}
        <ul className="hidden md:flex gap-8 text-gray-300 font-medium">
          <li className="hover:text-cyan-400 transition cursor-pointer">
            Home
          </li>
          <li className="hover:text-cyan-400 transition cursor-pointer">
            About
          </li>
          <li className="hover:text-cyan-400 transition cursor-pointer">
            Services
          </li>
          <li className="hover:text-cyan-400 transition cursor-pointer">
            Portfolio
          </li>
          <li className="hover:text-cyan-400 transition cursor-pointer">
            Contact
          </li>
        </ul>

        {/* Button */}
        <button className="bg-cyan-400 hover:bg-cyan-500 text-black font-semibold px-5 py-2 rounded-full transition shadow-lg shadow-cyan-500/30">
          Hire Me
        </button>
      </div>
    </motion.nav>
  );
}