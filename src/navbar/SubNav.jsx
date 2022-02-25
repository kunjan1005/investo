import React, { useState } from "react";
import { NavLink } from "react-router-dom";
const SubNav = ({ navigator, button, toggle, target }) => {

  return (
    <>
      <nav className="navbar">
        <div class="container">
          <div className="navbar-header col-lg-4">
            {navigator.map((each)=> <><span className="top-navigate-link" ><NavLink to={each.link} className="top-navigate-link">{each.title}</NavLink></span>
              <span className="horizonatal-line"> | </span></>)}
              
          </div>

          <div className="navbar-menu col-lg-8" id="open-navbar1">
            <ul className="navbar-nav">

              {button?.map(each => {
                return button != undefined ? <button className="btn btn-primary m-1"
                    type="button"
                    onClick={()=>each.onModalClick(true)}
                  >{each.title}</button> :null
              
              })}

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default SubNav;
