import React, { useEffect, useState } from "react";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const handleLinkClick = (event, targetId) => {
    event.preventDefault();
    if (targetId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
    setMenuOpen(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <img className="aysu" src="/src/assets/aysu.png" />
      </div>
      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="#home" onClick={(e) => handleLinkClick(e, "home")}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={(e) => handleLinkClick(e, "about")}>
              About
            </a>
          </li>
          <li>
            <a
              href="#education"
              onClick={(e) => handleLinkClick(e, "education")}
            >
              Education
            </a>
          </li>
          <li>
            <a
              href="#experience"
              onClick={(e) => handleLinkClick(e, "experience")}
            >
              Experience
            </a>
          </li>
          <li>
            <a href="#skills" onClick={(e) => handleLinkClick(e, "skills")}>
              Skills
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              onClick={(e) => handleLinkClick(e, "portfolio")}
            >
              Portfolio
            </a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => handleLinkClick(e, "contact")}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Header;
