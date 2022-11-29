import React from "react";
import "../App.css";
import UserProfile from "./UserProfile";
import BalanceDisplay from "./BalanceDisplay";
import ATM from "./ATM";

const initialState = {
  username: "Santiago",
  totalAmount: 250000
};

export default class Bank extends React.Component {
  state = {...initialState};

  withdrawFromBank = (event) => {
    const amount = event.target.dataset.amount;
    console.log('withdrawFromBank getting called with', amount);
    this.setState({ totalAmount: this.state.totalAmount - amount });
  }

  giveAwayToCharity = (event) => {
    this.setState({ totalAmount: 0 });
  }

  resetState = (event) => {
    this.setState(initialState);
  }

  updateFunds = (amount) => {
    console.log('calling update funds on bank!');
    this.setState({ totalAmount: this.state.totalAmount + amount });
  }

  render() {
    const { totalAmount, username } = this.state;
    return (
      <div className="App">
        <UserProfile username={username} />
        <BalanceDisplay totalAmount={totalAmount} />
        {/* <ButtonGroup onClick={this.withdrawFromBank}/> */}
        <hr />
        <ATM updateFunds={this.updateFunds} />
        <hr />
        <p className="App__giveaway" onClick={this.giveAwayToCharity}>Give away all your cash to charity</p>
        <p className="App__giveaway" onClick={this.resetState}>Reset!</p>
      </div>
    );
  }
}
