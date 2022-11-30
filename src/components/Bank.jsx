import React from "react";
import "../App.css";
import UserProfile from "./UserProfile";
import BalanceDisplay from "./BalanceDisplay";
import ATM from "./ATM";
import { INITIAL_STATE } from '../constants/shared';


export default class Bank extends React.Component {
  state = {...INITIAL_STATE};

  withdrawFromBank = (event) => {
    const amount = event.target.dataset.amount;
    this.setState({ totalAmount: this.state.totalAmount - amount });
  }

  giveAwayToCharity = (_) => {
    this.setState({ totalAmount: 0 });
  }

  resetState = (_) => {
    this.setState(INITIAL_STATE);
  }

  updateFunds = (amount) => {
    this.setState({ totalAmount: this.state.totalAmount + amount });
  }

  render() {
    const { totalAmount, username } = this.state;
    return (
      <div className="App">
        <UserProfile username={username} />
        <BalanceDisplay totalAmount={totalAmount} />
        <hr />
        <ATM updateFunds={this.updateFunds} bankFunds={this.state.totalAmount}/>
        <hr />
        <p className="App__giveaway" onClick={this.giveAwayToCharity}>Give away all your cash to charity</p>
        <p className="App__giveaway" onClick={this.resetState}>Reset!</p>
      </div>
    );
  }
}
