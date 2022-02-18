import React from "react";
import logo from "../images/logos/black.svg";
const NotificationList = () => {
  return (
    <>
      <div className="notification-profile d-flex justify-content-around">
        <div className="profile-image">
          <img src={logo} alt="profile image" />
        </div>
        <div className="notification-title mt-1">
          <h6 className="ml-2">kunjan </h6>
          <p>Due in 2 Days</p>
        </div>
        <div className="notification-profile-btn">
          <button className="notification-profile-button" type="submit">
            Small
          </button>
        </div>
      </div>
    </>
  );
};
export default NotificationList;
