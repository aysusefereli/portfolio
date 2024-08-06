import React, { useEffect } from "react";
import "./MyInterests.css";
import {
  faCode,
  faMusic,
  faPaintBrush,
  faPencilAlt,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { faCompass } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AOS from "aos";
import "aos/dist/aos.css";

export default function MyInterests() {
  const interests = [
    { icon: faCode, text: "Coding", aos: "fade-down", duration: 3500 },
    { icon: faPencilAlt, text: "Drawing", aos: "fade-up", duration: 3500 },
    { icon: faCompass, text: "Travel", aos: "fade-down", duration: 3500 },
    { icon: faMusic, text: "Music", aos: "fade-up", duration: 3500 },
    { icon: faUtensils, text: "Cooking", aos: "fade-down", duration: 3500 },
    { icon: faPaintBrush, text: "Art", aos: "fade-up", duration: 3500 },
  ];

  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <section className="interestsPage">
      <div className="container">
        <h2 className="interest">My Interests</h2>
        <div className="icons">
          {interests.map((interest, index) => (
            <div
              key={index}
              id="icons"
              data-aos={interest.aos}
              data-aos-duration={interest.duration}
            >
              <FontAwesomeIcon id="icon" icon={interest.icon} />
              <p className="iconsText">{interest.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
