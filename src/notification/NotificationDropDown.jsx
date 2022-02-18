import React from "react";
import NotificationList from "./NotificationList";
const NotificationDropDown = () => {
  return (
    <>
      <ul className="notification-dropDown p-3">
        <li>
          <div className="notification-top-button d-flex mb-5">
            <button className="top-notification-button">button1</button>
            <button className="top-notification-button">button1</button>
            <button className="top-notification-button">button1</button>
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
