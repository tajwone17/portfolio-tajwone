import { useEffect, useState } from "react";
export const useScrollSpy = (sectionIds, offset = 100) => {
  const [activeSection, setActiveSection] = useState("");
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      // If we're near the top of the page, no section should be active
      if (window.scrollY < 100) {
        setActiveSection("");
        return;
      }

      //find the current location
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds, offset]);
  return activeSection;
};
//smooth scroll to section
export const scrollToSection = (sectionId, offset = 80) => {
  const section = document.getElementById(sectionId);
  if (section) {
    const top = section.offsetTop - offset;
    window.scrollTo({
      top,
      behavior: "smooth",
    });
  }
};
