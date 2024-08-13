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
            {
              src: "https://res.cloudinary.com/ds92nfxnc/image/upload/v1723556273/html_lra86b.png",
              label: "HTML",
            },
            {
              src: "https://res.cloudinary.com/ds92nfxnc/image/upload/v1723556272/css_arntld.png",
              label: "CSS",
            },
            {
              src: "https://res.cloudinary.com/ds92nfxnc/image/upload/v1723556272/sass_o86hyz.png",
              label: "Sass",
            },
            {
              src: "https://res.cloudinary.com/ds92nfxnc/image/upload/v1723556273/javascript_qt2oyq.png",
              label: "JavaScript",
            },
            {
              src: "https://res.cloudinary.com/ds92nfxnc/image/upload/v1723556279/react_iez27g.svg",
              label: "React",
            },
            {
              src: "https://res.cloudinary.com/ds92nfxnc/image/upload/v1723556271/bootstrap_trdt92.png",
              label: "Bootstrap",
            },
            {
              src: "https://res.cloudinary.com/ds92nfxnc/image/upload/v1723556273/api_eeik9p.png",
              label: "Rest-API",
            },
            {
              src: "https://res.cloudinary.com/ds92nfxnc/image/upload/v1723556271/redux_lu2ft9.png",
              label: "Redux Toolkit",
            },
            {
              src: "https://res.cloudinary.com/ds92nfxnc/image/upload/v1723556274/github_u1g7wf.png",
              label: "Git",
            },
            {
              src: "https://res.cloudinary.com/ds92nfxnc/image/upload/v1723556271/responsive_ajgw75.png",
              label: "Responsive Web Design",
            },
            {
              src: "https://res.cloudinary.com/ds92nfxnc/image/upload/v1723556272/word_c2yrnz.png",
              label: "Microsoft Word",
            },
            {
              src: "https://res.cloudinary.com/ds92nfxnc/image/upload/v1723556274/office_tba9ek.png",
              label: "Microsoft Power Point",
            },
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
