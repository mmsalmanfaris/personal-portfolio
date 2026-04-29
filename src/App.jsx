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
import Chatbot from "./components/Chatbot";

function App() {
  const [isChatMode, setIsChatMode] = useState(false);

  return (
    <div className="font-sans scroll-smooth min-h-screen transition-colors duration-300">
      <div className={isChatMode ? "hidden" : "block"}>
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

      <Chatbot isChatMode={isChatMode} setIsChatMode={setIsChatMode} />
    </div>
  );
}

export default App;
