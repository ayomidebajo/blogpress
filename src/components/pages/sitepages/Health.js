import React from "react";
import Navbar from "../../layouts/navbar/Navbar";

function Health() {
  return (
    <div>
  

      <div className="container">
        <h2 className="health-h2">
          These Purifying plants will make you sleep better
        </h2>
        <div className="health--container">
          <div>
            <div className="health-image-1"></div>
            <p>Jasmine</p>
          </div>
          <div>
            <div className="health-image-2"></div>
            <p>Lavender</p>
          </div>
          <div>
            <div className="health-image-3"></div>
            <p>Snake plant</p>
          </div>
          <div>
            <div className="health-image-4"></div>
            <p>Aloe vera</p>
          </div>
          <div className="button">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://dailyhealthpost.com/put-these-10-air-purifying-plants-next-to-your-bed-for-better-sleep/?utm_source=link&utm_medium=fb&utm_campaign=sq&utm_content=dhp&fbclid=IwAR1NuIfA06AqN4Z6a080doVWprNgD7mLHmjj2qDeUh7pu79X1jWhlYyi8m4"
            >
              <button className="btn">See more...</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Health;
