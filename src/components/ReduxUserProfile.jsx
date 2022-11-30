import React from "react";
import { useSelector } from 'react-redux'

function UserProfile() {
  const username = useSelector((state) => state.bank.username);
  return <p className="App__username">Hello, {username}! </p>
}

export default UserProfile;
