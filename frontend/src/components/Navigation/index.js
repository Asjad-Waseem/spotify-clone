import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <div className="main">
      <div className="header">
        <div className="header-left">
          <div>
            <button className="airbnb-icon">
              <NavLink exact to="/" className="icon">
                <i className="fa-brands fa-airbnb fa-3x"></i>
              </NavLink>
              <NavLink exact to="/" className="icon-text">
                airbnb
              </NavLink>
            </button>
          </div>
        </div>
        <div>{isLoaded && sessionLinks}</div>
      </div>
    </div>
  );
}

export default Navigation;
