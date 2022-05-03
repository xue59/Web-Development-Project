import React from "react";
import "bootstrap/dist/css/bootstrap.css"; //import bootstrap for display -zack

// We use Route in order to define the different routes of our application
import { Route, Routes, Link } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./components/navbar";
import RecordList from "./components/recordList";
import Edit from "./components/edit";
import Create from "./components/create";
import Search from "./components/search";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./components/Profile";
import ProtectedRouter from "./components/ProtectedRouter";
import SideBarMenu from "./components/SideBarMenu";
import Details from "./components/Details";
import SearchRecordList from "./components/SearchRecordList";
import RequestAShipment from "./components/RequestAShipment";
import ApproveShipment from "./components/ApproveShipment";
import ShipmentDetails from "./components/ShipmentDetails";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";

const App = () => {
  const { isLoading } = useAuth0();
  return (
    <>
      {/* {isLoading ? (
        <p>Loading</p>
      ) : ( */}
      <div>
        <Navbar />
        <div className="container-fluid">
          <div className="row">
            <SideBarMenu />
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              <Routes>
                <Route
                  path="/profile"
                  element={<ProtectedRouter protectedComponent={Profile} />}
                />
                <Route exact path="/record" element={<RecordList />} />
                <Route exact path="/home" element={<Homepage />} />
                <Route exact path="/" element={<Homepage />} />
                <Route
                  path="/edit/:id"
                  element={<ProtectedRouter protectedComponent={Edit} />}
                />
                <Route path="/record/:id" element={<Details />} />
                <Route
                  path="/create"
                  element={<ProtectedRouter protectedComponent={Create} />}
                />
                <Route path="/search" element={<Search />} />
                <Route
                  path="/search/:itemName"
                  element={<SearchRecordList />}
                />
                <Route
                  path="/requestAShipment"
                  element={<RequestAShipment />}
                  // element={<ProtectedRouter protectedComponent={RequestAShipment} />}
                />
                <Route
                  path="/approveShipment"
                  element={
                    <ProtectedRouter protectedComponent={ApproveShipment} />
                  }
                />
                <Route
                  path="/shipmentDetails/:id"
                  element={<ShipmentDetails />}
                />
              </Routes>
              <Footer />
            </main>
          </div>
        </div>
      </div>
      {/* )} */}
    </>
  );
};

export default App;
