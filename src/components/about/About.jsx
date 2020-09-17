import React from "react";
import "./About.css";
import PageHeader from "../PageHeader";

const About = () => {
  return (
    <PageHeader title="About Us">
      <div className="about">
        <div className="about_header">
          <h1>About Us</h1>
        </div>
        <div className="about_get">
          <div className="about_picture">
            <h3>Images moving</h3>
          </div>
          <div className="pic_side_text">
            <h1>Get Into Industry</h1>
            <h2>You are at the right place.</h2>
          </div>
        </div>
        <div className="about_changeText">
          <h1>Be the part of Change.</h1>
        </div>
        <div className="about_goal">
          <div>
            <p>Our Goal -------</p>
          </div>
          <div className="goal_photos">
            <p>photos here</p>
          </div>
        </div>
        <div className="about_team">
          <div className="team_head">
            <h2>Team</h2>
            <h1>OUR MEMBERS</h1>
          </div>
          <div className="allImage">
            <div className="teams">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/1.jpg`}
                alt="my"
              />
              <h2>MR. PRAKASH</h2>
              <p>CEO, THE HELLSCODE</p>
              <h5>
                This is the loerem iosum. I am developing this for the test.
                Thanks
              </h5>
            </div>
            <div className="teams">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/1.jpg`}
                alt="my"
              />
              <h2>MR. PRAKASH</h2>
              <p>CEO, THE HELLSCODE</p>
              <h5>
                This is the loerem iosum. I am developing this for the test.
                Thanks
              </h5>
            </div>
            <div className="teams">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/1.jpg`}
                alt="my"
              />
              <h2>MR. PRAKASH</h2>
              <p>CEO, THE HELLSCODE</p>
              <h5>
                This is the loerem iosum. I am developing this for the test.
                Thanks
              </h5>
            </div>
            <div className="teams">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/1.jpg`}
                alt="my"
              />
              <h2>MR. PRAKASH</h2>
              <p>CEO, THE HELLSCODE</p>
              <h5>
                This is the loerem iosum. I am developing this for the test.
                Thanks
              </h5>
            </div>
          </div>
        </div>
      </div>
    </PageHeader>
  );
};

export default About;
