import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function LoginButton() {
  const { loginWithRedirect } = useAuth0();
  console.log("???");

  return (
    <button
      onClick={() => {
        loginWithRedirect();
        // { screen_hint: "signup" }
      }}
    >
      Login
    </button>
  );
}
