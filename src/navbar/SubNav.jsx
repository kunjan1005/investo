import React, { useState } from "react";
import { NavLink } from "react-router-dom";
const SubNav = ({ navigator, button, toggle, target }) => {

  return (
    <>
      <nav className="sub_menu">
        <div class="container">
          <div className="row">
            <div className="navbar-header col-lg-6 col-6">
              {navigator.map((each) => <><span className="top-navigate-link" ><NavLink to={each.link} className="top-navigate-link">{each.title}</NavLink></span>
                <span className="horizonatal-line"> | </span></>)}

            </div>

            <div className="navbar-menu col-lg-6 col-6" id="open-navbar1">
              <ul className="navbar-nav">

                {button?.map(each => {
                  return <div className="">
                    {button != undefined ? <button className="btn btn-primary add-btn"
                      type="button"
                      onClick={() => each.onModalClick(true)}
                    >{each.title}</button> : null}
                  </div>
                })}

              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default SubNav;
