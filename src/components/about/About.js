import React from "react";
import intro from "./intro.bmp"
const About = () => {
  return (
    <div className="about">
      <div className="hero">
        <h4>Welcome</h4>
        <h5>To SideHustle Internship react track</h5>
        <h3>Group37</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum cum
          odio maiores! Id ratione, Quod doloribus veniam repellat neque
          cupiditate!
        </p>
      </div>
      <div className="about">
        <h1 className="title">Discover</h1>
        <h1 className="subtitle">ABOUT US</h1>
        <img src={intro} />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, aliquid. Voluptatem dolor perspiciatis excepturi tempore incidunt dolorum exercitationem, ipsa ipsam necessitatibus cum, tenetur nisi quae.</p>
        <ul>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
        </ul>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, architecto.</p>
      </div>
    </div>
  );
};

export default About;
