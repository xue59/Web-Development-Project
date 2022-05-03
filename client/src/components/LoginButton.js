import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
const LOG_OUT_IN_URL = process.env.REACT_APP_AUTH0_LOG_OUT_IN_URL

export default function LoginButton() {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      type="button"
      className="btn btn-primary"
      onClick={() => {
        loginWithRedirect();
        // { screen_hint: "signup" }
      }}
    >
      Login
    </button>
  );
}
