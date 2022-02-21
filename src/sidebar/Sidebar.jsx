import React from "react";
import { useState } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import { NavLink } from "react-router-dom";
import logo from "../images/logos/black.svg";
const Sidebar = () => {
  let [dropDown, showDropDown] = useState(0);
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
                  <NavLink to='#' onClick={() => dropDown == 0 ? showDropDown(1) : showDropDown(0)}>
                    <span>MAIN MENU</span>
                  </NavLink>
                  {dropDown === 1 ? <ul className="sub-nav">
                    <li>
                      <NavLink to='/'>
                        Dashboard
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to='/market'>
                        Market
                      </NavLink>
                    </li>

                  </ul> : null}
                </li>
                <li>
                  <NavLink to='#' onClick={() => dropDown == 0 ? showDropDown(2) : showDropDown(0)}>

                    <span className="">CUSTOMERS</span>
                  </NavLink>
                  {dropDown === 2 ? <ul className="sub-nav">
                    <li>
                      <NavLink to='/customer'>
                        Customer List
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to='/customer/account'>
                        Account
                      </NavLink>
                    </li>

                  </ul> : null}
                </li>
                <li>
                  <NavLink to='#' onClick={() => dropDown == 0 ? showDropDown(3) : showDropDown(0)}>

                    <span className="">Trading</span>
                  </NavLink>
                  {dropDown === 3 ? <ul className="sub-nav">
                    <li>
                      <NavLink to='/trading/order'>
                        Add order
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to='/trading'>
                        Order list
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to='/trading/history'>
                        Trading history
                      </NavLink>
                    </li>

                  </ul> : null}

                </li>
                <li>
                  <NavLink to='#'>

                    <span className="">WITHDRAW</span>
                  </NavLink>

                </li>
                <li>
                  <NavLink to='#'>

                    <span className="">REPORT</span>
                  </NavLink>

                </li>
                <li>
                  <NavLink to='#'>

                    <span className="">IPO</span>
                  </NavLink>

                </li>
                <li>
                  <NavLink to='#'>
                    <span className="">CONTENT</span>
                  </NavLink>
                </li>
              </ul>
            </Scrollbars>
          </nav>
        </aside>
      </section >
    </>
  );
};
export default Sidebar;
