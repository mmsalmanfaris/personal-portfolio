// App.jsx
import { useState, useEffect } from "react";
import Animation from "./components/Animation";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Events from "./components/Events";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [showPortfolio, setShowPortfolio] = useState(false);

  useEffect(() => {
    // Show the portfolio after 3 seconds (duration of animation)
    const timer = setTimeout(() => {
      setShowPortfolio(true);
    }, 3000); // 3 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-gray-900 text-white font-sans scroll-smooth min-h-screen">
      {!showPortfolio ? (
        // Full-screen animation section
        <div className="flex flex-col items-center justify-center min-h-screen">
          <Animation />
        </div>
      ) : (
        // Portfolio sections
        <>
          <Navbar />

          <main className="pt-16">
            <Hero />
            <Skills />
            <Projects />
            <Education />
            <Events />
            <Contact />
          </main>

          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
