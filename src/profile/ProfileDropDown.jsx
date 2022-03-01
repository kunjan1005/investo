import React,{useState} from "react";
import english from '../images/logos/english.png'
import mongolian from '../images/logos/mongolian.png'
import logo from "../images/logos/Б.png";
import {NavLink} from 'react-router-dom'

const ProfileDropDown = () => {
    let [showLanguageDropDown,setShowLanguageDropDown]=useState(false)
    //chnage language function that change language 
    const changeLanguage=(status)=>{
        localStorage.setItem('lang',status) //set your language to your local storage
        setShowLanguageDropDown(false)// after set language the language dropdown
        window.location.reload()
    }
    return (
        <>
            <ul className="profile-dropDown p-3">
                <div className="profile-dropdown-container-1 d-flex">
                    <div className="profile-image">
                    <img src={logo} className="profile-image" />
                    </div>
                    <div className="notification-title mt-1">
                        <h6 className="ml-2">kunjan </h6>
                        <p>Due in 2 Days</p>
                    </div>
                    <div className="profile-edit-btn">
                        <i class="fa-solid fa-pen-to-square" style={{color:"#49CB67"}}></i>
                    </div>
                </div>
                <hr className="mt-0"></hr>
                <div className="profile-dropdown-container-2">
                    <ul>
                        <li>Settings</li>
                        <li onClick={()=>showLanguageDropDown?setShowLanguageDropDown(false):setShowLanguageDropDown(true)} style={{cursor:'pointer'}}>Language 
                        <span style={{ fontSize: "12px",marginLeft:"30px" }}>{
                        localStorage.getItem('lang')=="en"?
                        <>English <img src={english} style={{ width: "1.6rem", height: "1.6rem" }} /></>
                        :
                        <>Mongolian <img src={mongolian} style={{ width: "1.6rem", height: "1.6rem" }} /></>}</span></li>
                        {showLanguageDropDown?<ul className="profile-language-dropDown">
                            <li onClick={()=>changeLanguage('en')}><img src={english} style={{ width: "1.5rem", height: "1.5rem" }} /> English</li> 
                            <li onClick={()=>changeLanguage('mn')}><img src={mongolian} style={{ width: "1.5rem", height: "1rem" }} /> Mongolian</li> 
                        </ul>:null}
                        <li>Sign out</li>

                    </ul>

                </div>
            </ul>

        </>
    );
};
export default ProfileDropDown;
