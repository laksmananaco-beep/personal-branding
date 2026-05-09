import { motion } from "framer-motion";

const projects = [
  {
    title: "Coffee Shop Landing Page",
    category: "Cafe Website",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
  },
  {
    title: "Creative Agency Website",
    category: "Company Profile",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
  },
  {
    title: "Personal Branding Portfolio",
    category: "Portfolio Website",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
  },
];

export default function Portfolio() {
  return (
   <section id="portfolio" className="bg-[#0a0a0a] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 mb-2">
            My Portfolio
          </p>

          <h2 className="text-4xl font-bold">
            Featured Projects
          </h2>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group bg-white/5 rounded-3xl overflow-hidden border border-white/10 hover:border-cyan-400 transition"
            >

              {/* IMAGE */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">

                <p className="text-cyan-400 text-sm mb-2">
                  {project.category}
                </p>

                <h3 className="text-2xl font-semibold mb-4">
                  {project.title}
                </h3>

                <button className="bg-cyan-400 hover:bg-cyan-500 text-black px-5 py-2 rounded-full font-medium transition shadow-lg shadow-cyan-500/20">
<a
  href="https://personal-branding-peach.vercel.app/"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-cyan-400 hover:bg-cyan-500 text-black px-5 py-2 rounded-full font-medium transition shadow-lg shadow-cyan-500/20 inline-block"
>
  Live Demo
</a>
                </button>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}