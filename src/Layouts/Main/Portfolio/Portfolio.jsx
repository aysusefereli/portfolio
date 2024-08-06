import React, { useEffect } from "react";
import "./Portfolio.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Portfolio() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  return (
    <section id="portfolio" className="portfolioPage">
      <div className="portfolio">
        <h2 className="portText">MY PORTFOLIO</h2>
        <div class="wrapper">
          <div class="cols">
            <div
              data-aos="flip-up"
              class="col"
              ontouchstart="this.classList.toggle('hover');"
            >
              <div class="container">
                <div class="front" id="front1">
                  {/* <div class="inner">
                    <p>GAME INFO WEBSITE</p>
                    <span>Taj Mahal</span>
                  </div> */}
                </div>
                <div class="back">
                  <div class="inner">
                    <p className="nameW">GAME INFO WEBSITE</p>
                    <p className="info">
                      This is a gaming info website with many games, game
                      information and game genres.
                    </p>
                    <div className="wlink">
                      <a
                        href="https://cloux-game-info.netlify.app/"
                        target="_blank"
                        className="visit"
                      >
                        Visit Website
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-aos="flip-up"
              class="col"
              ontouchstart="this.classList.toggle('hover');"
            >
              <div class="container">
                <div class="front" id="front2">
                  {/* <div class="inner">
                    <p>RESTAURANT MENU</p>
                    <span>Burj Khalifa</span>
                  </div> */}
                </div>
                <div class="back">
                  <div class="inner">
                    <p className="nameW">RESTAURANT MENU</p>
                    <p className="info">
                      This is a restaurant's menu and order website.
                    </p>
                    <div className="wlink">Processing...</div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div class="col" ontouchstart="this.classList.toggle('hover');">
              <div class="container">
                <div class="front">
                  <div class="inner">
                    <p>Strizzes</p>
                    <span>Lorem ipsum</span>
                  </div>
                </div>
                <div class="back">
                  <div class="inner">
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Alias cum repellat velit quae suscipit c.
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
