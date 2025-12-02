// App.jsx
import { useState, useEffect } from "react";
import Animation from "./components/Animation";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Career from "./components/Career";
import Events from "./components/Events";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";

function App() {
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [isChatMode, setIsChatMode] = useState(false);

  useEffect(() => {
    // Show the portfolio after 3 seconds (duration of animation)
    const timer = setTimeout(() => {
      setShowPortfolio(true);
    }, 3000); // 3 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="font-sans scroll-smooth min-h-screen transition-colors duration-300">
      {!showPortfolio ? (
        // Full-screen animation section
        <div className="flex flex-col items-center justify-center min-h-screen">
          <Animation />
        </div>
      ) : (
        // Portfolio sections
        <>
          {/* Hide portfolio content when in chat mode */}
          <div className={isChatMode ? "hidden" : "block"}>
            <Navbar />
            <main className="pt-16">
              <Hero />
              <Skills />
              <Projects />
              <Career />
              <Events />
              <Contact />
            </main>
            <Footer />
          </div>

          {/* AI Chatbot - Handles its own display modes (button vs full screen) */}
          <Chatbot isChatMode={isChatMode} setIsChatMode={setIsChatMode} />
        </>
      )}
    </div>
  );
}

export default App;
