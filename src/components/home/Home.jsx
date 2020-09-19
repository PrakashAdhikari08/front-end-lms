import React from "react";
import "./Home.css";
import PageHeader from "../PageHeader";
import { withRouter, Link } from "react-router-dom";
const Home = (props) => {
  return (
    <PageHeader title="Home">
      <div className="home_main">
        <div className="photo_div">
          <div className="photo_left">
            <h2>Are you passionate about Software Development?</h2>
            <h3>Looking for a break through into the industry?</h3>
            <h4>Don't Worry We got all You need.</h4>
            <br></br>
            <h3>You might me the next DEVELOPER.</h3>
            <Link to="/login">
              <button className="join_btn">GET A COURSE</button>
            </Link>
          </div>
          <div className="photo_right">
            {/* <h1>BE SKILLED</h1>
          <h1>BE VALUABLE</h1> */}
          </div>
        </div>
        <div className="companyInfo">
          <div className="companyLogos">
            <br></br>
            <h2>Companies Logo here</h2>
            <br />
            <br />
          </div>
          <div className="companyInfo_text">
            <h2>
              Biggest Companies Are Powered by the aspiring DEVELOPERS just like
              you
            </h2>
            <br></br>
          </div>
        </div>
        <div className="programDiv">
          <div className="exploreText">
            <h1>Do You Want to be a Highly paid Developer?</h1>
            <h1>Explore our programs</h1>
          </div>
          <div className="programs">
            <h1>Cards of different programs</h1>
          </div>
        </div>

        <div className="secondImage_main">
          <div className="headingText">
            <br></br>
            <br></br>
            <h1>Proven Programs & Real Results</h1>
          </div>
          <div className="detailsText">
            <h3>
              No certification or awards here. We focus on giving you real
              developer skills that bring you real result: Clients, Jobs,
              Self-Improvement, and Profit. Our program participants aren't just
              satisfied.... They've gotten real results as developers.
            </h3>
            <br></br>
            <button className="review_btn">Acheiver's Review</button>
          </div>
        </div>
      </div>
    </PageHeader>
  );
};

export default withRouter(Home);
