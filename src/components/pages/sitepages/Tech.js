import React from "react";
import Navbar from "../../layouts/navbar/Navbar";
import Fullstack from "../../../img/RectangleDe.png";
import Drone from "../../../img/RectangleDr.png";
import Watch from "../../../img/RectangleWS.png";
import Footer from "../../layouts/footer/Footer";

const Tech = () => {
  return (
    <div>
     

      <div className="container">
        <div className="tech--container">
          <div className="fullstack--box">
            <h4>How I landed a fullstack job without a degree</h4>
            <img src={Fullstack} alt="codes on computer" width="40%" />
            <p className="text">
              Six months ago, I got my first developer job as full stack web
              developer for a startup. I had no relevant work experience, no
              tech degree, and not even a year of active coding experience. And
              yet I managed to land my dream offer, and can today for the first
              time in my life say that I love my job. Here’s how I did it — the
              long version.
            </p>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.freecodecamp.org/news/how-i-landed-a-full-stack-developer-job-without-a-tech-degree-or-work-experience-6add97be2051/"
            >
              <button className="btn">See more...</button>
            </a>
          </div>
          <div className="drone--box">
            <h4>How drones can help manage the world's food supply</h4>
            <img src={Drone} alt="A drone" width="40%" />
            <p className="text">
              Precision agriculture, using GPS, GNSS and drones, maximizes the
              farm yield and helps the farmer to determine which crop is most
              suited as per the soil quality and geological conditions. The use
              of technology also warns the farmers in advance to take
              precautionary measures in case of unforeseen vagaries of nature.
            </p>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.geospatialworld.net/blogs/drones-to-boost-agricultural-production/"
            >
              <button className="btn">See more...</button>
            </a>
          </div>
          <div className="watch--box">
            <h4>Smart watches-wrists that talk</h4>
            <img src={Watch} alt="A smart watch" width="40%" />
            <p className="text">
              The technology,{" "}
              <a href="http://fingerio.cs.washington.edu/">
                <span className="span">FingerIO</span>
              </a>
              , tracks fine-grained finger movements by turning a smartphone or
              smartwatch into an active sonar system using the device’s own
              microphones and speakers. Because sound waves travel through
              fabric and do not require a line of sight, users can even interact
              with a phone inside a pocket or a smartwatch hidden under a
              sleeve.
            </p>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.futurity.org/sonar-smart-technology-httpwww-futurity-orgapple-watch-app-epilepsy-1026402-2/"
            >
              <button className="btn">See more...</button>
            </a>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Tech;
