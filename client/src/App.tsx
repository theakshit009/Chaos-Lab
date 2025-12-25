import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import DashboardPage from "./pages/DashboardPage";
import ChaosConfigPage from "./pages/ChaosConfigPage";
import LiveMetricsPage from "./pages/LiveMetricsPage";
import DemoAppPage from "./pages/DemoAppPage";
import SettingsPage from "./pages/SettingsPage";
import LoginPage from "./pages/LoginPage";

import DashboardLayout from "./layout/DashboardLayout";
import type { JSX } from "react";
import RegisterPage from "./pages/RegisterPage";

// 🔐 Simple Protected Route
const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" replace />;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/chaos-config" element={<ChaosConfigPage />} />
          <Route path="/metrics" element={<LiveMetricsPage />} />
          <Route path="/demo" element={<DemoAppPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
