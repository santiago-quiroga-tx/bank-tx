import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { deposit, withdraw } from '../reducers/bankSlice';

function ReduxATM() {
  const [funds, setFunds] = useState(0);
  
  const message = `This ATM has ${funds} under its control!`;
  const dispatch = useDispatch();

  const bankFunds = useSelector((state) => state.bank.totalAmount);

  function handleDeposit (event) {
    const cantidad = parseInt(event.target.dataset.amount);
    const newBalance = funds + cantidad;

    if (bankFunds < cantidad) {
      alert("Not enough funds to perform this action");
    } else {
      setFunds(newBalance);
      dispatch(withdraw(cantidad));
    }
  }

  function handleWithdraw (event) {
    const cantidad = parseInt(event.target.dataset.amount);
    const newBalance = funds - cantidad;

    if (newBalance < 0) {
      alert("Not enough funds to perform this action");
    } else {
      setFunds(newBalance);
      dispatch(deposit(cantidad));
    }
  }


  return (
    <>
      <p>{message}</p>
      <hr />
      <section className="App__buttons">
        <button data-amount="5000" onClick={handleDeposit}>Deposit into ATM $5,000</button>
        <button data-amount="5000" onClick={handleWithdraw}>Withdraw from ATM $5,000</button>
      </section>
    </>
  );
}

export default ReduxATM;
