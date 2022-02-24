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
const Sidebar = (props) => {
  let [dropDown, showDropDown] = useState(0);
  return (
    <>
      <section className="app col-lg-3">
        <aside className="sidebar">
          <header className="header-title d-flex  justify-content-between">
            <img src={logo} />
            {/* <NavLink to="#" onClick={()=>props.setShow(false)}><p className="close">x</p></NavLink>  */}
          </header>
          <nav className="sidebar-nav">
            <Scrollbars>
              <ul>
                <li>
                  <NavLink to='#' classsName="menu" onClick={() => dropDown == 0 ? showDropDown(1) : showDropDown(0)}>
                    <span>MAIN MENU</span>
                  </NavLink>
                  {dropDown === 1 ? <ul className="sub-nav">
                    <li>
                      <NavLink to='/'>
                        <img className='home' src={home} /> <span className="submenu">Dashboard</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to='/market'>
                        <img className='dollar' src={market} /> <span className="submenu">Market</span>
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
                        <img className='customer' src={customer} /> <span className="submenu">Customer List</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to='/customer/account'>
                        <img className='account' src={account} /> <span className="submenu">Account</span>
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
                        <img className='order' src={addOrder} /> <span className="submenu">Add order</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to='/trading'>
                        <img className='order-list' src={orderList} /> <span className="submenu">Order list</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to='/trading/history'>
                        <img className='trandinghistory' src={orderhistory} /> <span className="submenu">Trading history</span>
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
