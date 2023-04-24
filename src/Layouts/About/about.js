import React from "react";
import "../../Assets/Styles/about.css";
import git from "../../Assets/im/git.png";
import github from "../../Assets/im/gihub.png";
import node from "../../Assets/im/node.png";
import vector from "../../Assets/im/Vector.png";
import react from "../../Assets/im/react.png";
import html from "../../Assets/im/html.png";


function about() {
  return (
    <div className="about">
      <h1 className="title">
        Hi, I’m Tawanda Nhare <br />A Fullstack Web Developer
      </h1>
      <hr />
      <p>
        I provide value to your business by designing user interactions on
        websites, <br /> developing servers and databases for website
        functionality and coding for mobile platforms.
      </p>

      <div className="icons">
        <div className="git">
          <img src={git} alt=" git_image" />
          <img src={github} alt=" github_logo" />
        </div>
        <img src={node} alt=" node_logo" />
        <img src={vector} alt="  vector_logo" className="vec" />
        <img src={react} alt=" react_logo" />
        <img src={html} alt=" html_logo" />
      </div>

     
      
    </div>
  );
}

export default about;
