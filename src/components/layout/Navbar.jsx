import React, { useEffect, useState } from "react";
import { Code, Menu, X } from "lucide-react";
import { PROFILE_MODES } from "../../utils/constants";
import { useScrollSpy, scrollToSection } from "../../hooks/useScrollSpy";
export default function Navbar({ profileMode, setProfileMode, navLinks }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useScrollSpy(navLinks.map((link) => link.id));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleNavClick = (sectionID) => {
    scrollToSection(sectionID);
    setIsMenuOpen(false);
  };
  const handleProfileChange = (mode) => {
    if (mode !== profileMode) {
      setProfileMode(mode);
      setIsMenuOpen(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-1000 w-full py-4 transition-all duration-300 ${
        isScrolled ? "bg-black/30 backdrop-blur-lg" : "bg-transparent"
      }`}
      style={{ transform: "translate3d(0,0,0)" }}
    >
      <div className="max-w-330 mx-auto px-5">
        <div className="flex items-center justify-between">
          {/* logo */}
          <div className="flex items-center gap-4">
            <Code className="w-6 h-6 text-primary" />
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className=" text-2xl font bold bg-linear-to-r from-primary via-primary/50 to-primary/30 bg-clip-text text-transparent hover:opacity-80 transition-opacity "
              aria-label="home"
            >
              TaJwOnE
            </button>
          </div>
          {/* desktop navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-base font-medium transition-all duration-300 ${
                  activeSection === link.id
                    ? "text-white"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>
          {/* CTA Button */}

          <div className="hidden md:flex items-center gap-2">
            <div className="flex items-center rounded-full border border-white/10 bg-white/5 p-1">
              {Object.entries(PROFILE_MODES).map(([mode]) => (
                <button
                  key={mode}
                  onClick={() => handleProfileChange(mode)}
                  className={`px-3 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
                    profileMode === mode
                      ? "bg-primary text-black"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {mode === "research" ? "Research" : "Developer"}
                </button>
              ))}
            </div>
            <button
              className="px-7 py-3.5 bg-white text-[#212121] font-medium text-base rounded-[17px] border border-white hover:bg-white/90 transition-all duration-300"
              onClick={() => handleNavClick("contact")}
            >
              Hire Me
            </button>
          </div>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-4 text-white hover:text-white/80 transition-colors"
            aria-label="menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 " />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
      className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? "max-h-96 opacity-100" : 'max-h-0 opacity-0'}`}
      >
        <div className="bg-black/95 backdrop-blur-lg border-t border-white/10 px-5 py-6 space-y-3">
            <div className="flex gap-2 mb-4">
              {Object.entries(PROFILE_MODES).map(([mode, profile]) => (
                <button
                  key={mode}
                  onClick={() => handleProfileChange(mode)}
                  className={`flex-1 px-3 py-3 rounded-lg text-sm font-medium transition-all ${
                    profileMode === mode
                      ? "bg-primary text-black"
                      : "bg-white/5 text-white/60"
                  }`}
                >
                  {profile.label}
                </button>
              ))}
            </div>
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${activeSection===link.id?'text-white bg-white/10':'text-white/70 hover:text-white hover:bg-white/5'}`}
              >
                {link.label}
              </button>
            ))}
            <button
            onClick={()=>handleNavClick('contact')} className="w-full px-7 py-3.5 bg-white text-[#212121] font-medium text-base rounded-[17px] border border-white hover:bg-white/90 transition-all duration-300 mt-2">Hire Me</button>
        </div>
      </div>
    </nav>
  );
}
