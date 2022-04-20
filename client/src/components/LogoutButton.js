import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function LogoutButton() {
  const { logout } = useAuth0();

  return (
    <input
      className="btn btn-primary"
      value="Logout"
      onClick={() => logout({ returnTo: window.location.origin })}
      // { screen_hint: "signup" }
    />
  );
}
