import React from "react";
import "bootstrap/dist/css/bootstrap.css";//import bootstrap for display -zack

// We use Route in order to define the different routes of our application
import { Route, Routes, Link } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./components/navbar";
import RecordList from "./components/recordList";
import Edit from "./components/edit";
import Create from "./components/create";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./components/Profile";
import ProtectedRouter from "./components/ProtectedRouter";
import SideBarMenu from "./components/SideBarMenu";

const App = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  return (
    <>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <div>
          <Navbar isAuthenticated={isAuthenticated}/>
          {/* <Link to="/profile">Profile</Link>
          {isAuthenticated ? <LogoutButton /> : <LoginButton />} */}
          <div className="container-fluid">
            <div className="row">
              <SideBarMenu />
              <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <Routes>
                  <Route
                    path="/profile"
                    element={<ProtectedRouter protectedComponent={Profile} />}
                  />
                  <Route exact path="/" element={<RecordList />} />
                  <Route path="/edit/:id" element={<Edit />} />
                  <Route path="/create" element={<Create />} />
                </Routes>
              </main>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;

          // <Routes>
          //   <Route
          //     path="/profile"
          //     element={<ProtectedRouter protectedComponent={Profile} />}
          //   />
          //   <Route exact path="/" element={<RecordList />} />
          //   <Route path="/edit/:id" element={<Edit />} />
          //   <Route path="/create" element={<Create />} />
          // </Routes>