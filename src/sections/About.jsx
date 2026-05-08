import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="bg-[#0a0a0a] text-white py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">

        {/* FOTO */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-400/20 blur-3xl rounded-3xl"></div>

            <img
              src="https:{profile}///photo-1506794778202-cad84cf45f1d"
              alt="about"
              className="relative w-[320px] rounded-3xl border border-white/10"
            />
          </div>
        </motion.div>

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-cyan-400 font-medium mb-2">
            About Me
          </p>

          <h2 className="text-4xl font-bold mb-6">
            Building websites that feel premium
          </h2>

          <p className="text-gray-400 leading-relaxed mb-6">
            I specialize in creating modern landing pages and company
            profile websites using React, Tailwind CSS, and smooth
            animations. My goal is to help brands stand out online
            with beautiful and functional designs.
          </p>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="bg-white/5 p-4 rounded-xl">
              <h3 className="text-cyan-400 text-2xl font-bold">10+</h3>
              <p className="text-gray-400">Projects Built</p>
            </div>

            <div className="bg-white/5 p-4 rounded-xl">
              <h3 className="text-cyan-400 text-2xl font-bold">100%</h3>
              <p className="text-gray-400">Responsive Design</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}