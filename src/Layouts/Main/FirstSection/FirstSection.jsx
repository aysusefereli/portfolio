import React, { useEffect } from "react";
import "./FirstSection.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function FirstSection() {
  useEffect(() => {
    if (window.innerWidth > 1024) {
      AOS.init({
        duration: 1200,
      });
    }
  }, []);

  return (
    <section className="firstSection">
      <div className="mainHeader">
        <div data-aos="fade-up" className="headerTexts">
          <h1 className="hello">Hello!</h1>
          <h1 className="AS">I’m Aysu Safarali</h1>
          <h2 className="FD">Front-end Developer</h2>
        </div>
      </div>
    </section>
  );
}
