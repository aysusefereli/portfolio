import React, { useEffect } from "react";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowDown } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    if (window.innerWidth > 1024) {
      AOS.init({
        duration: 1200,
      });
    }
  }, []);

  return (
    <section id="about" className="aboutPage">
      <div data-aos="fade-right" className="resume">
        <div className="myPhotoContainer">
          <img
            className="myPhoto"
            src="https://res.cloudinary.com/ds92nfxnc/image/upload/v1723556274/myPhoto_s0z1pd.jpg"
          />
        </div>
        <div class="resume-btn">
          <button href="#">
            <a href="/src/assets/CV.pdf" download="CV.pdf">
              <FontAwesomeIcon icon={faCloudArrowDown} /> Download Resume
            </a>
          </button>
        </div>
      </div>
      <div data-aos="fade-left" className="aboutMe">
        <div class="section-title">
          <h2 className="aboutMeText">About Me</h2>
        </div>
        <p className="text">
          Hello! I'm Aysu Safarali. I graduated from Azerbaijan State Economics
          University with a bachelor’s degree in computer sciences. I am
          developing myself in the field of front-end programming. My skills:
          HTML, CSS, Sass, Bootstrap, Javascript, Git, Json, Ajax,
          Redux-toolkit, Material UI, React, Art design.
        </p>
        <ul class="profile-menu">
          <li>
            <span>Name: </span> Aysu Safarali
          </li>
          <li>
            <span>Date of birth: </span> 14 August 2003
          </li>
          <li>
            <span>Nationality: </span> Azerbaijan
          </li>
          <li>
            <span>Address: </span>
             {/* 24 Nasraddin Tusi street, Khatai district, */}
            Baku, Azerbaijan
          </li>
          {/* <li>
            <span>Phone: </span> (+994) 77 366 51 51
          </li> */}
          <li>
            <span>E-Mail: </span> sefereliaysu2@gmail.com
          </li>
        </ul>
      </div>
    </section>
  );
}
