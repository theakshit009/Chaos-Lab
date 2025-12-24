import { NavLink } from "react-router-dom";
// use lucide-react if you want icons
// import { Activity, Sliders, LineChart, FlaskConical, Settings } from "lucide-react";

const navItems = [
  { to: "/dashboard", label: "Dashboard" },
  { to: "/chaos-config", label: "Chaos Config" },
  { to: "/metrics", label: "Live Metrics" },
  { to: "/demo", label: "Demo App" },
];

const Sidebar = () => {
  return (
    <aside className="w-64 bg-[#070712] border-r border-zinc-800 flex flex-col">
      <div className="px-6 py-4 text-lg font-semibold tracking-tight flex items-center gap-2">
        <div className="h-7 w-7 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 font-bold">
          CL
        </div>
        ChaosLab
      </div>
      <nav className="flex-1 px-2 py-2 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-2 rounded-md text-sm ${
                isActive
                  ? "bg-cyan-500/10 text-cyan-300"
                  : "text-zinc-400 hover:bg-zinc-800/60 hover:text-zinc-100"
              }`
            }
          >
            {/* icon here */}
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="px-2 pb-4 border-t border-zinc-800 mt-auto">
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `flex items-center gap-2 px-3 py-2 rounded-md text-sm ${
              isActive
                ? "bg-zinc-800 text-zinc-100"
                : "text-zinc-500 hover:bg-zinc-800/60 hover:text-zinc-100"
            }`
          }
        >
          {/* <Settings className="w-4 h-4" /> */}
          <span>Settings</span>
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;
