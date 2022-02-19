import React from "react";
import CustomerList from "./CustomerList";

const TopCustomer = () => {
  return (
    <>
      <div className="stock-list">
        <CustomerList />
        <CustomerList />
        <CustomerList />
        <CustomerList />
        <CustomerList />
        
      </div>
    </>
  );
};
export default TopCustomer;
