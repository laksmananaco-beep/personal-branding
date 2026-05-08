import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="bg-black text-white py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          <p className="text-cyan-400 mb-2">
            Contact Me
          </p>

          <h2 className="text-4xl font-bold mb-6">
            Let's Work Together
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Interested in building a modern website for your business,
            personal brand, or project? Let's create something amazing together.
          </p>

          {/* CONTACT CARD */}
          <div className="grid md:grid-cols-3 gap-6">

            {/* EMAIL */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-cyan-400 transition">
              <h3 className="text-xl font-semibold mb-3">
                Email
              </h3>

              <p className="text-gray-400">
                your@email.com
              </p>
            </div>

            {/* INSTAGRAM */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-cyan-400 transition">
              <h3 className="text-xl font-semibold mb-3">
                Instagram
              </h3>

              <p className="text-gray-400">
                @yourusername
              </p>
            </div>

            {/* WHATSAPP */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-cyan-400 transition">
              <h3 className="text-xl font-semibold mb-3">
                WhatsApp
              </h3>

              <p className="text-gray-400">
                +62 812 xxxx xxxx
              </p>
            </div>

          </div>

          {/* BUTTON */}
          <div className="mt-12">
            <button className="bg-cyan-400 hover:bg-cyan-500 text-black px-8 py-4 rounded-full font-semibold transition shadow-lg shadow-cyan-500/20">
              Start Project
            </button>
          </div>

        </motion.div>
      </div>
    </section>
  );
}