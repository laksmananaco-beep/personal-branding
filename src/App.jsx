import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Portfolio from "./sections/Portfolio";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Navbar />

      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />

      <Footer />
    </div>
  );
}