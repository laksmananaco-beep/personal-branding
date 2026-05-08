import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Portfolio from "./sections/Portfolio";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div className="bg-black overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
    </div>
  );
}