import React from "react";
import { Home, DollarSign, Clock, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import Logo from "../Logo";

const sidebarItems = [
  { name: "Dashboard", icon: <Home size={20} />, path: "/dashboard" },
  { name: "Pricing", icon: <DollarSign size={20} />, path: "/pricing" },
  { name: "History", icon: <Clock size={20} />, path: "/history" },
  { name: "Profile", icon: <User size={20} />, path: "/profile" },
];

const Sidebar: React.FC = () => {
    const location = useLocation()
  return (
    <div className="w-[200px] border-r h-screen p-4 bg-white dark:bg-gray-900 sticky top-0 shrink-0 flex flex-col gap-10 items-center">
        <Logo />
      <nav className="space-y-4 in-hover:bg-black w-full h-fit">
        {sidebarItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={cn(
                "flex relative items-center gap-3 p-3 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-800 transition",
                location.pathname === item.path && "bg-primary/10 text-primary"
            )}
          >
            {location.pathname === item.path  && (
                <p className="h-full w-[5px] absolute top-0 left-[-9px] flex items-center">
                <p className="w-full h-[15px] bg-primary rounded-full "></p>
            </p>
            )}
            
            {item.icon}
            <span className="text-sm font-medium">{item.name}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
