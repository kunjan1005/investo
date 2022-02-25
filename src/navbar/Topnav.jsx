import React, { useState } from "react";
import logo from "../images/logos/Б.png";
import NotificationDropDown from "../notification/NotificationDropDown";
import ProfileDropDown from "../profile/ProfileDropDown";
import Body from "../components/Body";
import SubNav from "./SubNav";
import $ from 'jquery'
import MenuIcon from '@mui/icons-material/Menu';
// import '../custom/topnav'
// import Button from '@mui/material/Button'
 

const Topnav = (props) => {
  let [show, setShow] = useState(false);
  let [showProfile, setShowProfile] = useState(false);

  return (
    <>
      <div className="col-lg-9">
        <nav className="navbar">
          <div class="container">
            <div className="navbar-header col-lg-4 col-2">
             <MenuIcon onClick={()=>props.isShow?props.show(false):props.show(true)}/>

            </div>
            {/* this is top navbar menu  */}
            <div className="navbar-menu col-lg-8">
              <ul className="navbar-nav d-flex">
                <li className="navbar-dropdown">
                  <div className="search-input">
                    <input placeholder="Search" />
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </div>
                </li>
                <li>
                  <a href="#">
                    <span onClick={() => (show ? setShow(false) : setShow(true))}>
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
                  <span
                    onClick={() => (showProfile ? setShowProfile(false) : setShowProfile(true))}
                  >
                    <img src={logo} className="profile-image" />
                  </span>
                  {showProfile ? <ProfileDropDown /> : null}
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Body />
      </div>
    </>
  );
};
export default Topnav;
