import React from "react";

class ATM extends React.Component {
  state = { funds: 0 };

  handleDeposit = (event) => {
    const cantidad = parseInt(event.target.dataset.amount);
    const { funds } = this.state;
    const { bankFunds } = this.props;
    const newBalance = funds + cantidad;
    if (bankFunds < cantidad) {
      alert("Not enough funds to perform this action");
    } else {
      this.setState({ funds: newBalance });
      this.props.updateFunds((cantidad * -1));
    }
  }

  handleWithdraw = (event) => {
    const cantidad = parseInt(event.target.dataset.amount);
    const { funds } = this.state;
    const newBalance = funds - cantidad;
    if (newBalance < 0) {
      alert("Not enough funds to perform this action");
    } else {
      this.setState({ funds: newBalance });
      this.props.updateFunds(cantidad);
    }
  }

  render() {
    const message = `This ATM has ${this.state.funds} under its control!`
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
