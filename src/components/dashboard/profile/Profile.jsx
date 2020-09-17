import React from "react";
import "./Profile.css";
import { withRouter } from "react-router-dom";
import { useContext } from "react";
import StateContext from "../../../context/StateContext";
const Profile = (props) => {
  const appState = useContext(StateContext);
  const { id } = props.match.params;
  console.log(id);
  return (
    <div className="profile">
      <div className="profile_image">
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/${id}.jpg`}
          alt="my"
        />
        <h2>{appState.user.name}</h2>
        <i class="fas fa-map-marker-alt"> {appState.user.username}</i>
        <button>
          <i class="fas fa-camera "></i>
        </button>
      </div>
      <div className="profile_about">
        <div className="profile_header">
          <h2>About Me</h2>
          <h2>Blogs</h2>
          <h2>Communities</h2>
        </div>
        <div className="about">
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Profile);
