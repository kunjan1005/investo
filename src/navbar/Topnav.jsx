import React, { useState } from "react";
import logo from "../images/logos/black.svg";
import NotificationDropDown from "../notification/NotificationDropDown";
import Body from "../components/Body";
import SubNav from "./SubNav";
// import '../custom/topnav'
// import Button from '@mui/material/Button'
const Topnav = () => {
  let [show, setShow] = useState(false);
  return (
    <>
      <div className="col-lg-10">
        <nav className="navbar">
          <div class="container">
            <div className="navbar-header col-lg-4">
              <button className="navbar-toggler" data-toggle="open-navbar1">
                <span></span>
                <span></span>
                <span></span>
              </button>
              <a href="#">
                <h4>
                  Awesome<span>logo</span>
                </h4>
              </a>
            </div>

            <div className="navbar-menu col-lg-8" id="open-navbar1">
              <ul className="navbar-nav">
                <li className="navbar-dropdown">
                  <div className="search-input">
                    <input placeholder="Search" />
                    <i class="fa-solid fa-magnifying-glass"></i>
                  </div>
                </li>
                <li>
                  <a href="#">
                    <span
                      onClick={() => (show ? setShow(false) : setShow(true))}
                    >
                      <i className="fa-regular fa-bell"></i>
                      <span className="bedge">3</span>
                    </span>
                    {show ? <NotificationDropDown /> : null}
                  </a>
                </li>

                <li className="d-flex">
                  <a href="#" className="profile-title">
                    admin
                  </a>
                  <span>
                    <img src={logo} className="profile-image" />
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Body/>
      </div>
    </>
  );
};
export default Topnav;
