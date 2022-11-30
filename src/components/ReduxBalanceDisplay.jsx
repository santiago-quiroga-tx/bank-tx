import React from "react";
import { useSelector } from 'react-redux'
import formatNumber from "format-number";

function ReduxBalanceDisplay() {
  const totalAmount = useSelector((state) => state.bank.totalAmount);
  return (
      <div className="App__amount">
        {formatNumber({ prefix: "$" })(totalAmount)}
        <p className="App__amount--info">Total Amount</p>
      </div>
    );
}

export default ReduxBalanceDisplay;
