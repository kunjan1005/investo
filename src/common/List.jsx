import React from "react";
import logo from "../images/logos/black.svg";
const List = () => {
  return (
    <>
      <div className="common-profile d-flex">
        <div className="common-image">
          <img src={logo} alt="common image" />
        </div>
        <div className="common-title">
          <h5 className="">Apu</h5>
          <p>XyZXY</p>
        </div>
        <div >
          <span className="common-count">1</span>
        </div>
      </div>
    </>
  );
};
export default List;
