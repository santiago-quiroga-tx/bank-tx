import React from "react";

function ButtonGroup({ onClick }) {
  
  function handleClick(e) {
    console.log(e.target.dataset.amount);
    onClick(e);
  }
  
  return (
    <section className="App__buttons">
      <button data-amount="10000" onClick={handleClick}>WITHDRAW $10,000</button>
      <button data-amount="5000" onClick={handleClick}>WITHDRAW $5,000</button>
    </section>
  );
}

export default ButtonGroup;
