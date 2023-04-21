import React from "react";
import "../../Assets/Styles/about.css";
import rec from "../../Assets/im/Rectangle.png";

function aboutMe() {
  return (
    <div className="container about-me">
      <div className="row">
        <div className="col-md-8">
          <div className="rec">
            <img src={rec} alt=" rec_logo" />
          </div>
        </div>
        <div className="col-md-4">
          <div className="about-me-text">
            <h2>About Me</h2>
            <hr />
            <p>
              I provide value to your business by designing user interactions on
              websites, developing servers and databases for website
              functionality and coding for mobile platforms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default aboutMe;
