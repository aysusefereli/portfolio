import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";
import Header from "./Layouts/Header/Header";
import About from "./Layouts/Main/About/About";
import Contact from "./Layouts/Main/Contact/Contact";
import Education from "./Layouts/Main/Education/Education";
import Experience from "./Layouts/Main/Experience/Experience";
import FirstSection from "./Layouts/Main/FirstSection/FirstSection";
import MyInterests from "./Layouts/Main/MyInterests/MyInterests";
import Portfolio from "./Layouts/Main/Portfolio/Portfolio";
import Skills from "./Layouts/Main/Skills/Skills";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import Footer from "./Layouts/Footer/Footer";

function App() {
  useEffect(() => {
    const scrollButton = document.getElementById("scroll");

    const handleScroll = () => {
      if (window.scrollY > 300) {
        scrollButton.style.display = "block";
      } else {
        scrollButton.style.display = "none";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    const scrollStep = -window.scrollY / 80;
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  };

  return (
    <>
      <div>
        <Header />
        <FirstSection />
        <About />
        <MyInterests />
        <Education />
        <Experience />
        <Skills />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
      <div
        id="scroll"
        data-toggle="tooltip"
        data-placement="top"
        title="Back To Top"
        onClick={scrollToTop}
      >
        <a className="toUp" href="#home">
          <FontAwesomeIcon className="up" icon={faAngleUp} />
        </a>
      </div>
    </>
  );
}

export default App;
