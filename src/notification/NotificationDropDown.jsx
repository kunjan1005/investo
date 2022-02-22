import React from "react";
import NotificationList from "./NotificationList";
const NotificationDropDown = () => {
  return (
    <>
      <ul className="notification-dropDown p-3">
        <li>
          <div className="notification-top-button d-flex mb-5">
            <button className="top-notification-button">Customer’s notification</button>
            <button className="top-notification-button">Error message</button>
            <button className="top-notification-button">Daily report</button>
          </div>
          <NotificationList />
          <NotificationList />
          <NotificationList />
          <NotificationList />
        </li>
      </ul>
    </>
  );
};
export default NotificationDropDown;
