import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import "./App.css";

//  import API services
import { adminLogin, getAdminDetails, updatePrice } from "./Services/api";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [adminData, setAdminData] = useState(null);

  useEffect(() => {
    // check if the user is already logged in
    const checkLoggedInStatus = async () => {
      try {
        // user is not logged in
        setLoggedIn(false);
      } catch (error) {
        console.error("Error checking login status:", error);
      }
    };

    checkLoggedInStatus();
  }, []);

  const handleLogin = async (username, password) => {
    try {
      const loginResponse = await adminLogin(username, password);
      console.log("Login Response:", loginResponse); //check krne ke liye

      setLoggedIn(true);

      // admin details after login
      const adminDetailsResponse = await getAdminDetails(loginResponse.data.id);
      setAdminData(adminDetailsResponse.data);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const handleUpdatePrice = async (updatedAmount) => {
    try {
      await updatePrice(adminData.id, updatedAmount);
      const updatedAdminDetails = await getAdminDetails(adminData.id);
      setAdminData(updatedAdminDetails);
    } catch (error) {
      console.error("Update price error:", error);
    }
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/admin"
          element={
            loggedIn ? (
              <AdminDashboard
                data={adminData}
                onUpdatePrice={handleUpdatePrice}
              />
            ) : (
              <Login onLogin={handleLogin} />
            )
          }
        />
        <Route path="/" element={<Login onLogin={handleLogin} />} />
      </Routes>
    </Router>
  );
}

export default App;
