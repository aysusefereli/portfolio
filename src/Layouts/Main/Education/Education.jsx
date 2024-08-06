import React, { useEffect } from "react";
import "./Education.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Education() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  return (
    <section id="education" className="educationPage">
      <div className="education">
        <h2 className="eduText">education</h2>
        <div className="edu_options">
          <div className="capIcon">
            <FontAwesomeIcon
              className="educaton-content"
              icon={faGraduationCap}
            />
          </div>
          <div className="cd-timeline">
            <div className="line1"></div>
            <div className="timeline">
              <div className="dots">
                <span className="dot"></span>
              </div>
              <div className="content1">
                <div data-aos="fade-right" className="heading1">
                  <h2 className="degree">bachelors degree</h2>
                  <p className="uni">
                    Azerbaijan State University of Economics
                  </p>
                  <p className="unis">SEP 2020 - JUN 2024</p>
                </div>
                <span data-aos="fade-left" className="description1">
                  <div>
                    <span className="des">FACULTY:</span> Digital Economy
                  </div>
                  <div>
                    <span className="des">SPECIALTY:</span> Computer Science
                  </div>
                  {/* <div>
                    <span className="des">GPA:</span> 85
                  </div> */}
                </span>
              </div>
            </div>
            <div className="timeline">
              <div className="dots">
                <span className="dot"></span>
              </div>
              <div className="content2">
                <div data-aos="fade-left" className="heading2">
                  <h2 className="degree">Front-end Developer</h2>
                  <p className="uni">IT Brains Academy</p>
                  <p className="unis">JUN 2023 - OCT 2023</p>
                </div>
                <span data-aos="fade-right" className="description2">
                  <div className="des">Gold Level Diploma</div>
                  <div>
                    Awarded for completing the Front-End Developer Training at
                    IT Brains Academy.
                  </div>
                </span>
              </div>
            </div>
            <div className="lastDot"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
