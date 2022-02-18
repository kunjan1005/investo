import React from "react";
import StockList from "./StocksList";

const TopStocks = () => {
  return (
    <>
      <div className="stock-list">
        <StockList />
        <StockList />
        <StockList />
        <StockList />
        <StockList />

      </div>
    </>
  );
};
export default TopStocks;
