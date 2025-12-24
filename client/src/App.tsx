import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import ChaosConfigPage from "./pages/ChaosConfigPage";
import LiveMetricsPage from "./pages/LiveMetricsPage";
import DemoAppPage from "./pages/DemoAppPage";
import SettingsPage from "./pages/SettingsPage";
import DashboardLayout from "./layout/DashboardLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/chaos-config" element={<ChaosConfigPage />} />
          <Route path="/metrics" element={<LiveMetricsPage />} />
          <Route path="/demo" element={<DemoAppPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
