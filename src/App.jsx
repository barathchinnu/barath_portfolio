import { useState } from "react";
import Loader from "./components/Loader";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import AchievementTimeline from "./components/AchievementTimeline";
import Contact from "./components/Contact";
import CustomCursor from "./components/CustomCursor";
import PortfolioAI from "./components/PortfolioAI";

export default function App() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return (
      <Loader
        onFinish={() => setLoading(false)}
      />
    );
  }

  return (
    <div className="bg-vice-dark min-h-screen text-white">
            <CustomCursor />
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Education />
      <AchievementTimeline />
      <Contact />
      <PortfolioAI />
    </div>
  );
}