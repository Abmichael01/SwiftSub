import Navbar from "@/components/Dashboard/Dashboard/Navbar";
import NetworkUssdCodes from "@/components/Dashboard/NetworkUssdCodes";
import Sidebar from "@/components/Dashboard/Sidebar";
import { useThemeStore } from "@/stores/themeStore";
import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";

const DashboardLayout: React.FC = () => {
  const theme = useThemeStore((state) => state.theme);

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      document.documentElement.classList.add(systemTheme);
    } else {
      document.documentElement.classList.add(theme);
    }
  }, [theme]);

  return (
    <div className={`flex min-h-[100vh] ${theme}`}>
      <Sidebar />
      <div className="shrink-0 w-full md:w-[700px] relative">
        <Navbar />
        <div className="p-5">
          <Outlet />
        </div>
      </div>
      <NetworkUssdCodes />
    </div>
  );
};

export default DashboardLayout;
