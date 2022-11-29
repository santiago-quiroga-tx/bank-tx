import React, { userState, useState } from "react";

function ReduxATM(props) {
  const [funds, setFunds] = useState('0');
  
  const message = `This chashier has ${funds} under its control!`;

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

export default ReduxATM;
