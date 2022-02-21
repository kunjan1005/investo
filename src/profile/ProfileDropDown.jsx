import React from "react";
import english from '../images/logos/english.png'

const ProfileDropDown = () => {
    return (
        <>
            <ul className="profile-dropDown p-3">
                <div className="profile-dropdown-container-1 d-flex">
                    <div className="profile-image">
                        <img src="" />
                    </div>
                    <div className="notification-title mt-1">
                        <h6 className="ml-2">kunjan </h6>
                        <p>Due in 2 Days</p>
                    </div>
                    <div className="profile-edit-btn">
                        <i class="fa-solid fa-pen-to-square"></i>
                    </div>
                </div>
                <hr className="mt-0"></hr>
                <div className="profile-dropdown-container-2">
                    <ul>
                        <li>Settings</li>
                        <li>Language <span style={{ fontSize: "12px" }}>English <img src={english} style={{ width: "2rem", height: "2rem" }} /></span></li>
                        <li>Sign out</li>

                    </ul>

                </div>
            </ul>

        </>
    );
};
export default ProfileDropDown;
