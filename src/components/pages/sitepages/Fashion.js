import React from "react";
import Navbar from "../../layouts/navbar/Navbar";

function Fashion() {
  return (
    <div>
      <Navbar />

     
        <div className="container">
          <div className="fashion-title">
            <h2 className="fashion-h2">Latest Asoebi Styles</h2>
            <p>
              Are you attending a wedding soon? Get inspiration from this
              styles!
            </p>
          </div>
          <div className="fashion--image-1"></div>
          <div className="fashion--image-2"></div>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.bellanaija.com/2020/02/asoebibella-com-presents-the-latest-aso-ebi-styles-vol-323"
          >
            <button className="btn">See more...</button>
          </a>
        </div>
      </div>
   
  );
}

export default Fashion;
