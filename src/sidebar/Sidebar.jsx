import React from "react";
import { useState } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import { NavLink } from "react-router-dom";
import logo from "../images/logos/black.svg";
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import ListAltIcon from '@mui/icons-material/ListAlt';
import HistoryIcon from '@mui/icons-material/History';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import {sidebarLang} from '../content/language'
import i18next from "i18next";
import $ from 'jquery'
$(document).ready(function () {
  $(document).on('click', '#menu', function () {
    $(this.nextSibling).css('display') == 'none' ?
      $(this.nextSibling).css("display", 'block') :
      $(this.nextSibling).css("display", 'none')
  })
  let currentpath = window.location.pathname;
  let tabindex = currentpath.split('/')[1]
  console.log(tabindex)
  if (tabindex === '' || tabindex === 'market') {
    $('ul').children()[0].firstChild.nextSibling.style.display = "block"
  }
  else if (tabindex === 'customer') {
    $('ul').children()[1].firstChild.nextSibling.style.display = "block"
  } else if (tabindex === 'trading') {
    $('ul').children()[2].firstChild.nextSibling.style.display = "block"
  }
})

const Sidebar = (props) => {

  return (
    <>
      <section className="app col-lg-2">
        <aside className="sidebar">
          <header className="header-title d-flex  justify-content-between">
            <img src={logo} />
           {!props.isShow?<NavLink to="#" onClick={()=>props.show(false)}><p className="close">x</p></NavLink>:null }
          </header>
          <nav className="sidebar-nav">
            <Scrollbars>
              <ul>
                <li>
                  <NavLink to='#' classsName="menu" id='menu'>
                    <span>{i18next.t('main_menu')}</span>
                  </NavLink>
                  <ul className="sub-nav">
                    <li>
                      <NavLink to='/'>
                        <HomeOutlinedIcon className='side-bar-icons' /><span className="submenu">{i18next.t('sub_menu_dashboard')}</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to='/market'>
                        <AttachMoneyIcon className='side-bar-icons' /><span className="submenu">{i18next.t('sub_menu_market')}</span>
                      </NavLink>
                    </li>

                  </ul>
                </li>
                <li>
                  <NavLink to='#' id='menu'>

                    <span className="">{i18next.t('customer_menu')}</span>
                  </NavLink>
                  <ul className="sub-nav">
                    <li>
                      <NavLink to='/customer'>
                        <PeopleAltOutlinedIcon className="side-bar-icons" /><span className="submenu">{i18next.t('sub_customer_list')}</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to='/customer/account'>
                        <AccountBalanceWalletOutlinedIcon className="side-bar-icons" /><span className="submenu">{i18next.t('sub_customer_account')}</span>
                      </NavLink>
                    </li>

                  </ul>
                </li>
                <li>
                  <NavLink to='#' id='menu'>

                    <span className="">{i18next.t('trading_menu')}</span>
                  </NavLink>
                  <ul className="sub-nav">
                    <li>
                      <NavLink to='/trading/order'>
                        <PlaylistAddIcon className='side-bar-icons' /><span className="submenu">{i18next.t('sub_trading_addorder')}</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to='/trading'>
                        <ListAltIcon className="side-bar-icons" /><span className="submenu">{i18next.t('sub_trading_orderlist')}</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to='/trading/history'>
                        <HistoryIcon className="side-bar-icons" /> <span className="submenu">{i18next.t('sub_trading_history')}</span>
                      </NavLink>
                    </li>

                  </ul>

                </li>
                <li>
                  <NavLink to='#'>

                    <span className="">{i18next.t('withdraw')}</span>
                  </NavLink>

                </li>
                <li>
                  <NavLink to='#'>

                    <span className="">{i18next.t('report')}</span>
                  </NavLink>

                </li>
                <li>
                  <NavLink to='#'>

                    <span className="">{i18next.t('ipo')}</span>
                  </NavLink>

                </li>
                <li>
                  <NavLink to='#'>
                    <span className="">{i18next.t('content')}</span>
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
