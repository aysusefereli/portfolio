import React, { useEffect, useRef, useState } from "react";
import "./Skills.css";
import { motion } from "framer-motion";

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section id="skills" className="skillsPage">
      <div className="skills">
        <h2 className="skillsText">PROFESSIONAL SKILLS</h2>
        <motion.div
          className="menu"
          ref={ref}
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{
            type: "spring",
            mass: 2,
            stiffness: 80,
            damping: 50,
            duration: 3,
          }}
        >
          {[
            { src: "/src/assets/html.png", label: "HTML" },
            { src: "/src/assets/css.png", label: "CSS" },
            { src: "/src/assets/sass.png", label: "Sass" },
            { src: "/src/assets/javascript.png", label: "JavaScript" },
            { src: "/src/assets/react.png", label: "React" },
            { src: "/src/assets/bootstrap.png", label: "Bootstrap" },
            { src: "/src/assets/api.png", label: "Rest-API" },
            { src: "/src/assets/redux.png", label: "Redux Toolkit" },
            { src: "/src/assets/github.png", label: "Git" },
            {
              src: "/src/assets/responsive.png",
              label: "Responsive Web Design",
            },
            { src: "/src/assets/word.png", label: "Microsoft Word" },
            { src: "/src/assets/office.png", label: "Microsoft Power Point" },
          ].map((skill, index) => (
            <div key={index} className="link">
              <img className="skillsIcon" src={skill.src} alt={skill.label} />
              <span className="link-title">{skill.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
