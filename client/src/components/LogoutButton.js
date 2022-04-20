import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function LogoutButton() {
  const { logout } = useAuth0();

  return (
    <button
      type="button"
      className="btn btn-primary"
      onClick={() => logout({ returnTo: window.location.origin })}
      // { screen_hint: "signup" }
    >
      Logout
    </button>
  );
}
