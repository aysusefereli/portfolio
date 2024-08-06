import React, { useEffect } from "react";
import "./Experience.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuildingColumns } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Experience() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  return (
    <div>
      <section id="experience" className="experiencePage">
        <div className="education">
          <h2 className="workText">WORK EXPERIENCE</h2>
          <div className="edu_options">
            <div className="capIcon">
              <FontAwesomeIcon
                className="educaton-content"
                icon={faBuildingColumns}
              />
            </div>
            <div class="cd-timeline">
              <div className="line1"></div>
              <div className="timeline">
                <div className="dots">
                  <span className="dot"></span>
                </div>
                <div className="content1">
                  <div data-aos="fade-right" class="heading1">
                    <h2 className="degree">FRONT-END DEVELOPER</h2>
                    <p className="uni">ITB Techno</p>
                    <p className="unis">MAY 2024 - PRESENT</p>
                  </div>
                  <span data-aos="fade-left" className="description1">Internship Program</span>
                </div>
              </div>
              <div className="lastDot"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
