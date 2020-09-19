import React from "react";
import "./Services.css";
import { Link } from "react-router-dom";
import Payment from "../../assets/img/payment.svg";
import PageHeader from "../PageHeader";

const Servies = () => {
  return (
    <PageHeader title="Services">
      <div className="services">
        <div className="service_types">
          <p>Our Services</p>
          <div className="allServices">
            <div className="service1">
              <img src={Payment} alt="pay" />
              <strong>Communication</strong>
              <small>
                This is the communication of the blog od the my name is prakash.
                And I love and java progarmming is my fav
              </small>
              <Link>Read More</Link>
            </div>
            <div className="service1">
              <img src={Payment} alt="" />
              <strong>Communication</strong>
              <small>
                This is the communication of the blog od the my name is prakash.
                And I love and java progarmming is my fav
              </small>
              <Link>Read More</Link>
            </div>
            <div className="service1">
              <img src={Payment} alt="" />
              <strong>Communication</strong>
              <small>
                This is the communication of the blog od the my name is prakash.
                And I love and java progarmming is my fav
              </small>
              <Link>Read More</Link>
            </div>
          </div>
          <div className="allServices">
            <div className="service1">
              <img src={Payment} alt="" />
              <strong>Communication</strong>
              <small>
                This is the communication of the blog od the my name is prakash.
                And I love and java progarmming is my fav
              </small>
              <Link>Read More</Link>
            </div>
            <div className="service1">
              <img src={Payment} alt="" />
              <strong>Communication</strong>
              <small>
                This is the communication of the blog od the my name is prakash.
                And I love and java progarmming is my fav
              </small>
              <Link>Read More</Link>
            </div>
            <div className="service1">
              <img src={Payment} alt="" />
              <strong>Communication</strong>
              <small>
                This is the communication of the blog od the my name is prakash.
                And I love and java progarmming is my fav
              </small>
              <Link>Read More</Link>
            </div>
          </div>
          <div className="service-bottom">
            <div className="bottom_question">
              <p>Are you ready to get started?</p>
            </div>
            <div className="bottom_botton">
              <Link to="/login">
                <button>LET's GO</button>
              </Link>
            </div>
          </div>
          <div className="last">
            <p>Not quite sure yet?</p>
            <small>
              Why not visit our{" "}
              <Link to="/contact">
                <strong>contact page</strong>
              </Link>
              , we would love to chat with you!
            </small>
          </div>
        </div>
      </div>
    </PageHeader>
  );
};

export default Servies;
