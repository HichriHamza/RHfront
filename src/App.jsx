import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import "./App.css";
import Dashboard from "./components/dashboard/dashboard";
import Sidebar from "./components/SideBar";
import ProtectedRoute from "./components/ProtectedRoute";
import LayoutComponent from "./components/LayoutModel/LayoutComponent";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <LayoutComponent>
                <Dashboard />
              </LayoutComponent>
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <LayoutComponent>
                <Profile />
              </LayoutComponent>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
