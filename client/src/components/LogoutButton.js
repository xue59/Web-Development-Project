import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
const LOG_OUT_IN_URL = process.env.REACT_APP_AUTH0_LOG_OUT_IN_URL

export default function LogoutButton() {
  const { logout } = useAuth0();

  return (
    <button
      type="button"
      className="btn btn-danger"
      onClick={() => logout({ returnTo: LOG_OUT_IN_URL })}
      // { screen_hint: "signup" }
    >
      Logout
    </button>
  );
}
