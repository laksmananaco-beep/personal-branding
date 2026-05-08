import { motion } from "framer-motion";

const services = [
  {
    title: "Landing Page",
    desc: "Modern and responsive landing pages for personal or business branding.",
  },
  {
    title: "Company Profile",
    desc: "Professional websites to showcase your business identity online.",
  },
  {
    title: "UI Development",
    desc: "Pixel-perfect frontend implementation from design to code.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-black text-white py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">

        <p className="text-cyan-400 mb-2">My Services</p>

        <h2 className="text-4xl font-bold mb-14">
          What I Can Build
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-cyan-400 transition hover:shadow-lg hover:shadow-cyan-500/20"
            >
              <h3 className="text-2xl font-semibold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}