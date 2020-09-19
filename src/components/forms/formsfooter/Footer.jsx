import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
const FormFooter = () => {
  return (
    <div className="footermain">
      <div className="div_footernav">
        <hr></hr>
        <ul>
          <Link to="/home">
            <li>Home</li>
          </Link>
          <Link to="/help">
            <li>Help</li>
          </Link>
          <Link to="/privacy">
            <li>Privacy </li>
          </Link>
        </ul>
      </div>
      <div className="div_last">
        <p>@ 1996-2020 www.hacercode.com, Inc or it affilates</p>
      </div>
    </div>
  );
};

export default FormFooter;
