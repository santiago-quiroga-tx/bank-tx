import React from "react";

class ATM extends React.Component {
  state = { funds: 0 };

  handleDeposit = (event) => {
    const cantidad = parseInt(event.target.dataset.amount);
    console.log(typeof cantidad);
    const { funds } = this.state;
    const newBalance = funds + cantidad;
    console.log(newBalance);
    this.setState({ funds: newBalance });
    this.props.updateFunds((cantidad * -1));
  }

  handleWithdraw = (event) => {
    const cantidad = parseInt(event.target.dataset.amount);
    console.log(typeof cantidad);
    const { funds } = this.state;
    const newBalance = funds - cantidad;
    console.log(newBalance);
    this.setState({ funds: newBalance });
    this.props.updateFunds(cantidad);
  }

  render() {
    const message = `This chashier has ${this.state.funds} under its control!`
    return (
      <>
        <p>{message}</p>
        <hr />
        <section className="App__buttons">
          <button data-amount="5000" onClick={this.handleDeposit}>Deposit into ATM $5,000</button>
          <button data-amount="5000" onClick={this.handleWithdraw}>Withdraw from ATM $5,000</button>
        </section>
      </>
    );
  }
}

export default ATM;
