import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function Profile() {
  const { user } = useAuth0();
  return (
    <div>
      <h4>Avatar:</h4>
      <img src={user.picture}></img>
      <p></p>
      <h4>Nick Name:</h4>
      <p>{user.nickname}</p>
      <h4>User Name:</h4>
      <p>{user.name}</p>
      <h4>Email:</h4>
      <p>{user.name}</p>
      {/* <h4>Details:</h4>
      <div>{JSON.stringify(user)}</div> */}
    </div>
  );
}
