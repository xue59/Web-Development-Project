import React from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";

export default function ProtectedRouter({ protectedComponent }) {
  const Component = withAuthenticationRequired(protectedComponent);
  return <Component />;
}
