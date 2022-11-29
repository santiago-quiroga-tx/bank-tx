import React from "react";

function UserProfile({ username }) {
  return (
    <>
      <img className="App__userpic" src={"https://image.ibb.co/nC8vGp/girl.png"} alt="photographer" />
      <p className="App__username">Hello, {username}! </p>
    </>
  );
}

export default UserProfile;
