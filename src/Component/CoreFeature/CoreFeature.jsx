import React from "react";

const CoreFeature = ({ title, btntext, para }) => {
  return (
    <div className="core-feature-box">
      <div className="core-warpper">
        <button className="btn2">{btntext}</button>
        <h1 className="h1">{title}</h1>
        <p className="p2">{para}</p>
      </div>
    </div>
  );
};

export default CoreFeature;
