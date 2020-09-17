import React, { useState, useContext } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import StateContext from "../../context/StateContext";
import DispatchContext from "../../context/DispatchContext";
import ReactToolTip from "react-tooltip";
const Header = () => {
  const [menu, setMenu] = useState(false);
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);
  const [iconClicked, setIconClicked] = useState(false);

  function handleLogout() {
    appDispatch({ type: "logout" });
  }
  return (
    <header>
      <div className="logo-container ">
        <Link to="/">
          <h3 className="logo">HacerCode</h3>
        </Link>
      </div>

      <nav>
        <div className="hamburger" onClick={() => setMenu(true)}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/services" className="nav-link">
              Services
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
          <li data-tip="About HacerCode" data-for="edit1">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <ReactToolTip id="edit1" className="custome-tooltip" />

          {appState.userLoggedIn ? (
            <li data-tip="Profile" data-for="edit">
              <i
                className="fas fa-user nav-link"
                onClick={() => {
                  setIconClicked(!iconClicked);
                }}
              />
              <ReactToolTip id="edit" className="custome-tooltip" />
              <div className={iconClicked ? "user-sub-menu1" : "user-sub-menu"}>
                <li>
                  <Link to={`/dashboard/${appState.user.userId}`}>
                    {" "}
                    {appState.user.name}{" "}
                  </Link>
                </li>

                <li>
                  <Link to="/login" onClick={handleLogout}>
                    Logout
                  </Link>
                </li>
              </div>
            </li>
          ) : (
            <li>
              <Link to="/login" className="nav-link">
                login
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
