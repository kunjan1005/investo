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
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import ListAltIcon from '@mui/icons-material/ListAlt';
import HistoryIcon from '@mui/icons-material/History';
import HomeIcon from '@mui/icons-material/Home';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import $ from 'jquery'

    $(document).on('click','#menu',function(){
   
        // console.log()
      $(this.nextSibling).css('display') =='none'?
      $(this.nextSibling).css("display",'block'):
      $(this.nextSibling).css("display",'none')
      
      })
  
const Sidebar = () => {

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
                  <NavLink to='#' classsName="menu" id='menu'>
                    <span>MAIN MENU</span>
                  </NavLink>
                   <ul className="sub-nav">
                    <li>
                      <NavLink to='/'>
                      <HomeIcon className='side-bar-icons'/><span className="submenu">Dashboard</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to='/market'>
                      <AttachMoneyIcon className='side-bar-icons'/><span className="submenu">Market</span>
                      </NavLink>
                    </li>

                  </ul> 
                </li>
                <li>
                  <NavLink to='#' id='menu'>

                    <span className="">CUSTOMERS</span>
                  </NavLink>
                   <ul className="sub-nav">
                    <li>
                      <NavLink to='/customer'>
                      <PeopleAltIcon className="side-bar-icons"/><span className="submenu">Customer List</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to='/customer/account'>
                      <AccountBalanceWalletIcon className="side-bar-icons"/><span className="submenu">Account</span>
                      </NavLink>
                    </li>

                  </ul> 
                </li>
                <li>
                  <NavLink to='#' id='menu'>

                    <span className="">TRADING</span>
                  </NavLink>
                  <ul className="sub-nav">
                    <li>
                      <NavLink to='/trading/order'>
                      <PlaylistAddIcon className='side-bar-icons'/><span className="submenu">Add order</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to='/trading'>
                        <ListAltIcon className="side-bar-icons"/><span className="submenu">Order list</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to='/trading/history'>
                        <HistoryIcon className="side-bar-icons"/> <span className="submenu">Trading history</span>
                      </NavLink>
                    </li>

                  </ul> 

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
