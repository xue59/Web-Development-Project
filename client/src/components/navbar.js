import React from "react";
 
// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
 
// We import NavLink to utilize the react router.
import { Link} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

//import buttons
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

 
// Here, we display our Navbar
export default function Navbar() {
  const { isAuthenticated } = useAuth0();

  return (
    <div>
      <header className="navbar navbar-light bg-light sticky-top bg-light flex-md-nowrap p-0 shadow">
      <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="/">A shipment portal</a>
      <input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search"></input>
      <div className="temp-creat-record">
      </div>
      <div className="navbar-nav">
        <div className="nav-item">
            {isAuthenticated ? <Link to="/profile">My Profile</Link> : <></>}
            {isAuthenticated ? <LogoutButton /> : <LoginButton />}
        </div>
      </div>
      </header>
      <hr></hr>
    </div>
  );
}