import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import "./App.css";
import Dashboard from "./components/dashboard/dashboard";
import Sidebar from "./components/SideBar";

function App() {
  return (
    <>

    
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sidebar" element={<Sidebar />} />
        
      </Routes>
    </Router>
    </>
  );
}

export default App;
