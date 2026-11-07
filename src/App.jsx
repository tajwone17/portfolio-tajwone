import React, { useState } from "react";
import { Analytics } from "@vercel/analytics/react"
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Services from "./components/sections/Services";
import Research from "./components/sections/Research";
import Education from "./components/sections/Education";
import Experience from "./components/sections/Experience";
import Achievements from "./components/sections/Achievements";
import Certifications from "./components/sections/Certifications";
// import Testimonials from "./components/sections/Testimonials";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
import { PROFILE_MODES } from "./utils/constants";
function App() {
  const [profileMode, setProfileMode] = useState("research");
  const activeProfile = PROFILE_MODES[profileMode];

  return (
    <div className="min-h-screen bg-black ">
      <Navbar
        profileMode={profileMode}
        setProfileMode={setProfileMode}
        navLinks={activeProfile.navLinks}
      />
      <main>
        <Hero profileMode={profileMode} setProfileMode={setProfileMode} />
        <About />
        {profileMode === "research" ? (
          <>
            <Education />
            <Experience />
            <Research />
            <Achievements />
            <Certifications />
          </>
        ) : (
          <>
            <Skills />
            <Projects />
            <Services />
          </>
        )}
        {/* <Testimonials/> */}
        <Contact/>
      </main>
      <Footer navLinks={activeProfile.navLinks} />
    </div>
  );
}

export default App;
