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
        <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="/">
          NEU shipment
        </a>

        <div className="temp-creat-record"></div>
        <div className="navbar-nav">
          <div className="nav-item">
            <Link to="/profile">
              <button type="button" className="btn btn-success">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-person-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"></path>
                  <path
                    fillRule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                  ></path>
                </svg>
                {/* Profile */}
              </button>
            </Link>
            {isAuthenticated ? <LogoutButton /> : <LoginButton />}
          </div>
        </div>
      </header>
      <hr></hr>
    </div>
  );
}
