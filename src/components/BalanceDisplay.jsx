import React from "react";
import formatNumber from "format-number";

function BalanceDisplay({ totalAmount }) {
  return (
    <div className="App__amount">
      {formatNumber({ prefix: "$" })(totalAmount)}
      <p className="App__amount--info">Total Amount</p>
    </div>
  );
}

export default BalanceDisplay;
