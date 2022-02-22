import React from "react";
import { useState } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import { NavLink } from "react-router-dom";
import logo from "../images/logos/black.svg";
import market from "../images/logos/market.png"
import home from '../images/logos/Vectorhome.png'
import customer from "../images/logos/Vectorcustomer.png"
import account from "../images/logos/Vectoraccount.svg"
import addOrder from "../images/logos/VectoraddOrder.png"
import orderList from '../images/logos/VectororderList.png'
import orderhistory from '../images/logos/Vectororderhistory.png'
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
                        <img className='' src={home} />Dashboard
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to='/market'>
                        <img className='' src={market} />Market
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
                        <img className='' src={customer} />Customer List
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to='/customer/account'>
                        <img className='' src={account} />Account
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
                        <img className='' src={addOrder} /> Add order
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to='/trading'>
                        <img className='' src={orderList} /> Order list
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to='/trading/history'>
                        <img className='' src={orderhistory} /> Trading history
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
