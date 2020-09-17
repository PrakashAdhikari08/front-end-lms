import React from "react";
import "./MainFooter.css";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer_main">
      {/* <div className="title-container">
        <h1>Find Us on Social Media!!!</h1>
      </div> */}
      <div className="logo_container">
        <Link>
          <i className="fab fa-facebook facebook" />
        </Link>

        <Link>
          <i className="fab fa-instagram " />
        </Link>

        <Link>
          <i className="fab fa-linkedin" />
        </Link>
      </div>
      <div>
        <nav className="nav_main">
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/teach">BECOME A TUTOR</Link>
            </li>
            <li>
              <Link to="/learn">START LEARNING</Link>
            </li>
            <li>
              {" "}
              <Link to="/contact">CONTACT</Link>
            </li>
          </ul>
        </nav>
        <div className="last_div">
          <p>All Right Reserved @HACERCODE 2020</p>
          <small className="bottom_link">www.hacercode.com</small>
        </div>
      </div>
    </div>
  );
};

export default Footer;
