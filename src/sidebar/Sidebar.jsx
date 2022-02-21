import React from "react";
import { useState } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import { NavLink } from "react-router-dom";
import logo from "../images/logos/black.svg";
const Sidebar = () => {
  let [dropDown,showDropDown]=useState(0);
  return (
    <>
      <section className="app col-lg-2">
        <aside className="sidebar">
          <header className="header-title">
            <img src={logo} />
          </header>
          <nav className="sidebar-nav">
            <Scrollbars>
              <ul>
                <li>
                  <NavLink to='#' onClick={()=>dropDown==0?showDropDown(1):showDropDown(0)}>
                    <i className="ion-bag"></i> <span>MAIN MENU</span>
                  </NavLink>
                  {dropDown===1?<ul className="sub-nav">
                    <li>
                      <NavLink to='/'>
                        <i className="ion-ios-color-filter-outline"></i>Dashboard
                      </NavLink>
                    </li>
                    <li>
                    <NavLink to='/market'>
                        <i className="ion-ios-clock-outline"></i>Market
                      </NavLink>
                    </li>
                   
                  </ul>:null}
                </li>
                <li>
                  <NavLink to='#'  onClick={()=>dropDown==0?showDropDown(2):showDropDown(0)}>
                    <i className="ion-ios-settings"></i>{" "}
                    <span className="">CUSTOMERS</span>
                  </NavLink>
                  {dropDown===2?<ul className="sub-nav">
                    <li>
                      <NavLink to='/customer'>
                        <i className="ion-ios-color-filter-outline"></i>Customer List
                      </NavLink>
                    </li>
                    <li>
                    <NavLink to='/customer/account'>
                        <i className="ion-ios-clock-outline"></i>Account
                        </NavLink>
                    </li>
                   
                  </ul>:null}
                </li>
                <li>
                  <a herf='#'>
                    <i className="ion-ios-briefcase-outline"></i>{" "}
                    <span className="">TRADING</span>
                  </a>
                  {/* <ul className="nav-flyout">
                    <li>
                      <a href="#">
                        <i className="ion-ios-flame-outline"></i>Burn
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ion-ios-lightbulb-outline"></i>Bulbs
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ion-ios-location-outline"></i>Where You
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ion-ios-locked-outline"></i>On Lock
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ion-ios-navigate-outline"></i>Ghostface
                      </a>
                    </li>
                  </ul> */}
                </li>
                <li>
                  <a herf='#'>
                    <i className="ion-ios-analytics-outline"></i>{" "}
                    <span className="">WITHDRAW</span>
                  </a>
                  {/* <ul className="nav-flyout">
                    <li>
                      <a href="#">
                        <i className="ion-ios-timer-outline"></i>Timers
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ion-arrow-graph-down-left"></i>You Lose
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ion-ios-partlysunny-outline"></i>Stormy
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ion-ios-timer-outline"></i>Lookie Look
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ion-ios-game-controller-a-outline"></i>
                        Dork Mfer
                      </a>
                    </li>
                  </ul> */}
                </li>
                <li>
                  <a herf='#'>
                    <i className="ion-ios-paper-outline"></i>{" "}
                    <span className="">REPORT</span>
                  </a>
                  {/* <ul className="nav-flyout">
                    <li>
                      <a href="#">
                        <i className="ion-ios-filing-outline"></i>File Cab
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ion-ios-information-outline"></i>Infos
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ion-ios-paperplane-outline"></i>Planes
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ion-android-star-outline"></i>Shop
                      </a>
                    </li>
                  </ul> */}
                </li>
                <li>
                  <a herf='#'>
                    <i className="ion-ios-navigate-outline"></i>{" "}
                    <span className="">IPO</span>
                  </a>
               
                </li>
                <li>
                  <a herf='#'>
                    <i className="ion-ios-medical-outline"></i>{" "}
                    <span className="">CONTENT</span>
                  </a>
                </li>
              </ul>
            </Scrollbars>
          </nav>
        </aside>
      </section>
    </>
  );
};
export default Sidebar;
