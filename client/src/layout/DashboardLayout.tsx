import { Outlet } from "react-router-dom";
import Sidebar from "../components/navigation/Sidebar";
import Topbar from "../components/navigation/Topbar";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen bg-[#05050a] text-gray-100 flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <main className="flex-1 px-8 py-6 overflow-y-auto">
          <Outlet />
        </main>
        <footer className="border-t border-zinc-800 text-xs text-zinc-500 px-8 py-3">
          © 2025 ChaosLab. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default DashboardLayout;
