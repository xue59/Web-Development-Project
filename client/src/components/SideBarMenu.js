import React from "react";
import "bootstrap/dist/css/bootstrap.css";
//import { NavLink, Link} from "react-router-dom";
import Create from "./create";
import "../stylesheet/SideBarMenu.css";
import { useAuth0 } from "@auth0/auth0-react";

export default function SideBarMenu() {
  const { isAuthenticated } = useAuth0();
  return (
    <>
      <nav
        id="sidebarMenu"
        className="col-md-3 col-lg-2 d-md-block bg-light sidebar"
      >
        <div className="position-sticky pt-3">
          <ul className="nav flex-column">
          <li className="list-group-item list-group-item-action list-group-item-light" >
              <a className="nav-link active" aria-current="page" href="/home">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-home"
                  aria-hidden="true"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                Home
              </a >
            </li>
            <li className="list-group-item list-group-item-action list-group-item-light" >
              <a className="nav-link active" aria-current="page" href="/record">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-table" viewBox="0 0 16 16"><path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 2h-4v3h4V4zm0 4h-4v3h4V8zm0 4h-4v3h3a1 1 0 0 0 1-1v-2zm-5 3v-3H6v3h4zm-5 0v-3H1v2a1 1 0 0 0 1 1h3zm-4-4h4V8H1v3zm0-4h4V4H1v3zm5-3v3h4V4H6zm4 4H6v3h4V8z"/></svg>
                Show Inventory
              </a >
            </li>
            <li className="list-group-item list-group-item-action list-group-item-light">
              <a className="nav-link" href="/search">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-activity"
                >
                  <circle cx="10.5" cy="10.5" r="7.5"></circle>
                  <line x1="21" y1="21" x2="15.8" y2="15.8"></line>
                </svg>
                Search Items
              </a >
            </li>

            <li>
              <hr></hr>
            </li>
            {/* If logined, it will show teh approvel feature to the user */}
            {isAuthenticated ? (
              <div>
                <li className="list-group-item list-group-item-action list-group-item-light">
                  <a className="nav-link" href="/create">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-file"
                      aria-hidden="true"
                    >
                      <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                      <polyline points="13 2 13 9 20 9"></polyline>
                    </svg>
                    Create Items
                  </a >
                </li>
                <li className="list-group-item list-group-item-action list-group-item-light">
                  <a className="nav-link" href="/requestAShipment">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-shopping-cart"
                      aria-hidden="true"
                    >
                      <circle cx="9" cy="21" r="1"></circle>
                      <circle cx="20" cy="21" r="1"></circle>
                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                    Request Shipment
                  </a >
                </li>
                <li className="list-group-item list-group-item-action list-group-item-light">
                  <a className="nav-link" href="/approveShipment">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="green"
                      className="bi bi-check-circle"
                      viewBox="0 0 16 16"
                    >
                      {" "}
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                      <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                    </svg>
                    View Records
                  </a >
                </li>
                <hr></hr>
              </div>
            ) : (
              <div>
                <li className="list-group-item list-group-item-light">
                  <div className="nav-link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="grey" className="bi bi-lock-fill" viewBox="0 0 16 16">
                      <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
                    </svg>
                    Create Items
                  </div >
                </li>
                <li className="list-group-item list-group-item-light">
                  <div className="nav-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="grey" className="bi bi-lock-fill" viewBox="0 0 16 16">
                      <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
                    </svg>
                    Request Shipment
                  </div >
                </li>
                <li className="list-group-item list-group-item-light">
                  <div className="nav-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="grey" className="bi bi-lock-fill" viewBox="0 0 16 16">
                      <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
                    </svg>
                    View Records
                  </div >
                </li>
                <hr></hr>
              </div>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
}