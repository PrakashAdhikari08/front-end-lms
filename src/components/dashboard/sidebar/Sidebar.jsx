import React, { useContext, useState, useEffect } from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import { Link, withRouter } from "react-router-dom";
import HomeIcon from "../../../assets/img/home-run.svg";
import StateContext from "../../../context/StateContext";
import { useRef } from "react";
import { uploadPicture } from "../../../api/API";
import DispatchContext from "../../../context/DispatchContext";
// import img from "";

const Sidebar = (props) => {
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);
  const userId = appState.user.userId;
  const [file, setFile] = useState(new FormData());

  const handleChange = async (e) => {
    setFile(e.target.files[0]);
    const data = {
      userId: userId,
      file: e.target.files[0],
    };
    await uploadPicture(data).then(
      (response) => {
        appDispatch({ type: "change" });
        console.log(response.data);
      },
      (error) => {
        console.log(error.response.data.message);
      }
    );
  };

  const inputFile = useRef(null);
  return (
    <div className="sidebar">
      <div className="userDetails">
        {appDispatch.picChanged ? (
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/${userId}.jpg`}
            alt="my"
          />
        ) : (
          ""
        )}
        {!appDispatch.picChanged ? (
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/${userId}.jpg`}
            alt="my"
          />
        ) : (
          ""
        )}

        <i
          class="fas fa-arrow-circle-up "
          onClick={() => inputFile.current.click()}
        />
        <input
          type="file"
          name="photo"
          id="photo"
          accept="image/png, image/jpeg"
          formEncType="multipart/form-data"
          ref={inputFile}
          style={{ display: "none" }}
          onChange={handleChange}
          required
        />
      </div>

      <Link to="/home">
        <SidebarOption active Icon={HomeIcon} text="Home" />
      </Link>
      <SidebarOption Icon={HomeIcon} text="Explore" />
      <SidebarOption Icon={HomeIcon} text="Notifications" />
      <SidebarOption Icon={HomeIcon} text="Messages" />
      <SidebarOption Icon={HomeIcon} text="Lists" />
      <Link to={`/profile/${userId}`}>
        <SidebarOption Icon={HomeIcon} text="Profile" />
      </Link>

      {/* Button -> Tweet */}
      <button
        className="sidebar__button"
        onClick={() => {
          appDispatch({ type: "logout" });
          props.history.push("/login");
        }}
      >
        <h3>SIGN OUT</h3>
      </button>
    </div>
  );
};

export default withRouter(Sidebar);
