import React from "react";

// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";

// We import NavLink to utilize the react router.
import { Link } from "react-router-dom";
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
        <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="/home">
          <img src="T3Logo.png" height={45} alt="T3 inventory logo"></img>
        </a>

        <div className="temp-creat-record"></div>
        <div className="navbar-nav">
          <div className="nav-item">
            <Link to="/profile">
              <button className="btn btn-success"><i className="fa fa-address-card-o" ></i> | Profile</button>
            </Link>
            {isAuthenticated ? <LogoutButton /> : <LoginButton />}
          </div>
        </div>
      </header>
      <hr></hr>
    </div>
  );
}
