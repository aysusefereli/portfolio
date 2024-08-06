import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const medias = [
    { icon: faGithub, text: "github", url: "https://github.com/aysusefereli" },
    {
      icon: faInstagram,
      text: "instagram",
      url: "https://www.instagram.com/aysusefereli/?igshid=YmMyMTA2M2Y%3D",
    },
    {
      icon: faLinkedin,
      text: "linkedin",
      url: "https://www.linkedin.com/in/aysu-sefereli-206504298/",
    },
    {
      icon: faXTwitter,
      text: "X",
      url: "https://x.com/i/flow/login?redirect_after_login=Aysusefereli",
    },
  ];

  return (
    <footer id="footer" className="footer">
      <div className="footer1">
        <h2 className="footerText">
          <i>Aysu Safarali, front-end developer</i>
        </h2>
        <div>
          <ul className="lists">
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
        </div>
        <div className="medias">
          {medias.map((media, index) => (
            <a
              key={index}
              href={media.url}
              target="_blank"
              rel="noopener noreferrer"
              id="medias"
            >
              <FontAwesomeIcon id="media" icon={media.icon} />
            </a>
          ))}
        </div>
      </div>
      <div className="footer2">
        <h3>Copyright ©2024 All rights reserved | by Aysu Safarali</h3>
      </div>
    </footer>
  );
}
