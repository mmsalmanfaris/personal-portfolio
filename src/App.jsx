// App.jsx
import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Career from "./components/Career";
import Events from "./components/Events";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans scroll-smooth min-h-screen transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Career />
        <Events />
        <Contact />
      </main>
      <Footer />

    </div>
  );
}

export default App;
