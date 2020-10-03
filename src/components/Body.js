import React from "react";
import "./css/Body.css";

const Body = () => {
  return (
    <section>
      <div className="contain-img">
        <img src="img/Scarecrow.png" />
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
