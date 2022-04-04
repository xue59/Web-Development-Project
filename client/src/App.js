import React from "react";

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

const App = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  return (
    <>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <div>
          <Navbar />
          <Link to="/profile">Profile</Link>
          {isAuthenticated ? <LogoutButton /> : <LoginButton />}
          <Routes>
            <Route
              path="/profile"
              element={<ProtectedRouter protectedComponent={Profile} />}
            />
            <Route exact path="/" element={<RecordList />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="/create" element={<Create />} />
          </Routes>
        </div>
      )}
    </>
  );
};

export default App;
