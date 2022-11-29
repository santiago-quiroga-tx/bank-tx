import React from "react";
import "../App.css";
import UserProfile from "./UserProfile";
import BalanceDisplay from "./BalanceDisplay";
import ATM from "./ATM";
import { useSelector, useDispatch } from 'react-redux'

function ReduxBank() {
  return (
    <div className="App">
      <UserProfile username="Santiago" />
      <BalanceDisplay totalAmount={250000} />
      <hr />
      <ATM updateFunds={this.updateFunds} />
      <hr />
      <p className="App__giveaway" onClick={this.giveAwayToCharity}>Give away all your cash to charity</p>
      <p className="App__giveaway" onClick={this.resetState}>Reset!</p>
    </div>
  );
}

export default ReduxBank;