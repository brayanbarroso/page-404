import React from "react";
import "./css/Body.css";
import image from "./img/Scarecrow.png";

const Body = () => {
  return (
    <section>
      <div className="contain-img">
        <img src={image} alt="Imagen" />
      </div>
      <div className="text-description">
        <h1>I have bad news for you</h1>
        <p>
          The page you are looking for might be removed or is temporarily
          unavailable
        </p>
      </div>
    </section>
  );
};

export default Body;
