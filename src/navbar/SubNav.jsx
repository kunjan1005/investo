import React, { useState } from "react";
import { NavLink } from "react-router-dom";
const SubNav = () => {

  return (
    <>
        <nav className="navbar">
          <div class="container">
            <div className="navbar-header col-lg-4">
             <span  className="top-navigate-link"><NavLink to='/customer'   className="top-navigate-link">Customer</NavLink></span>
             <span className="horizonatal-line"> | </span> 
             <span className="top-navigate-link"><NavLink to='customer/list' className="top-navigate-link">List</NavLink></span>
            </div>

            <div className="navbar-menu col-lg-8" id="open-navbar1">
              <ul className="navbar-nav">
                <li className="navbar-dropdown">
                  <div className="">
                     <button className="btn btn-primary">Add Customer</button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    </>
  );
};
export default SubNav;
