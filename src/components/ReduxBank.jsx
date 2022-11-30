import React from "react";
import "../App.css";
import ReduxUserProfile from "./ReduxUserProfile";
import ReduxBalanceDisplay from "./ReduxBalanceDisplay";
import ReduxATM from "./ReduxATM";
import { useSelector, useDispatch } from 'react-redux'
import { resetAmount, donateAll } from '../reducers/bankSlice';

function ReduxBank() {
  
  const dispatch = useDispatch();

  return (
    <div className="App">
      <ReduxUserProfile />
      <ReduxBalanceDisplay />
      <hr />
      <ReduxATM />
      <hr />
      <p className="App__giveaway" onClick={() => dispatch(donateAll())}>Give away all your cash to charity</p>
      <p className="App__giveaway" onClick={() => dispatch(resetAmount())}>Reset!</p>
    </div>
  );
}

export default ReduxBank;