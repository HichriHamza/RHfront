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

// 🆕 Temporary dummy components (replace these with real ones later)
const Employees = () => <h1>Employee Management Page</h1>;
const Analytics = () => <h1>Mental Health Analytics Page</h1>;
const Assessments = () => <h1>Health Assessments Page</h1>;
const Interventions = () => <h1>Early Interventions Page</h1>;
const Scheduling = () => <h1>Scheduling Page</h1>;
const Reports = () => <h1>Reports & Insights Page</h1>;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />

        {/* Dashboard Route */}
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

        {/* Profile Route */}
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

        {/* 🆕 New Routes (matching Sidebar items) */}
        <Route
          path="/employees"
          element={
            <ProtectedRoute>
              <LayoutComponent>
                <Employees />
              </LayoutComponent>
            </ProtectedRoute>
          }
        />

        <Route
          path="/analytics"
          element={
            <ProtectedRoute>
              <LayoutComponent>
                <Analytics />
              </LayoutComponent>
            </ProtectedRoute>
          }
        />

        <Route
          path="/assessments"
          element={
            <ProtectedRoute>
              <LayoutComponent>
                <Assessments />
              </LayoutComponent>
            </ProtectedRoute>
          }
        />

        <Route
          path="/interventions"
          element={
            <ProtectedRoute>
              <LayoutComponent>
                <Interventions />
              </LayoutComponent>
            </ProtectedRoute>
          }
        />

        <Route
          path="/scheduling"
          element={
            <ProtectedRoute>
              <LayoutComponent>
                <Scheduling />
              </LayoutComponent>
            </ProtectedRoute>
          }
        />

        <Route
          path="/reports"
          element={
            <ProtectedRoute>
              <LayoutComponent>
                <Reports />
              </LayoutComponent>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
