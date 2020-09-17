import React from "react";
import "./Intern.css";
import { Link } from "react-router-dom";

const InternOption = () => {
  return (
    <div className="intern">
      <div className="single-option">
        <h1>Basic</h1>
        <div className="price">
          <h2>$120</h2>
        </div>
        <div className="deals">
          <h4>this is for front end</h4>
          <h4>this is for front end</h4>
          <h4>this is for front end</h4>
          <h4>this is for front end</h4>
          <h4>this is for front end</h4>
          <h4>this is for front end</h4>
        </div>
        <Link>Select</Link>
      </div>
      <div className="single-option">
        <h1>Back-End</h1>
        <div className="price">
          <h2>$120</h2>
        </div>
        <div className="deals">
          <h4>this is for front end</h4>
          <h4>this is for front end</h4>
          <h4>this is for front end</h4>
          <h4>this is for front end</h4>
          <h4>this is for front end</h4>
          <h4>this is for front end</h4>
        </div>
        <Link>Select</Link>
      </div>
      <div className="single-option">
        <h1>Full-Stack</h1>
        <div className="price">
          <h2>$120</h2>
        </div>
        <div className="deals">
          <h4>this is for front end</h4>
          <h4>this is for front end</h4>
          <h4>this is for front end</h4>
          <h4>this is for front end</h4>
          <h4>this is for front end</h4>
          <h4>this is for front end</h4>
        </div>
        <Link>Select</Link>
      </div>
    </div>
  );
};

export default InternOption;
