import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden">
      
      {/* Background Blur */}
      <div className="absolute w-72 h-72 bg-cyan-500/30 blur-[120px] rounded-full top-10 left-10"></div>
      <div className="absolute w-72 h-72 bg-blue-500/20 blur-[120px] rounded-full bottom-10 right-10"></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-cyan-400 mb-3 font-medium">
            Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Frontend <br />
            Web Developer
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg">
            I create modern website experiences with clean design,
            smooth animations, and responsive layouts for businesses
            and personal brands.
          </p>

          <div className="flex gap-4">
            <button className="bg-cyan-400 hover:bg-cyan-500 text-black px-7 py-3 rounded-full font-semibold transition shadow-lg shadow-cyan-500/30">
              View Portfolio
            </button>

            <button className="border border-white/20 hover:border-cyan-400 px-7 py-3 rounded-full font-semibold transition">
              Contact Me
            </button>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-400/30 blur-3xl rounded-full"></div>

            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
              alt="profile"
              className="relative w-[350px] h-[450px] object-cover rounded-3xl border border-white/10 shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}