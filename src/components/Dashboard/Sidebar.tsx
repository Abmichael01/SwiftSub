import React from "react";
import { Home, DollarSign, Clock, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import Logo from "../Logo";
import { useSidebarStore } from "@/stores/sidebarStore";

const sidebarItems = [
  { name: "Dashboard", icon: <Home size={20} />, path: "/dashboard" },
  { name: "Pricing", icon: <DollarSign size={20} />, path: "/pricing" },
  { name: "Transactions", icon: <Clock size={20} />, path: "/transactions" },
  { name: "Profile", icon: <User size={20} />, path: "/profile" },
];

const Sidebar: React.FC = () => {
  const location = useLocation();
  const { isOpen } = useSidebarStore();
  return (
    <div
      className={cn(
        " border-r h-screen p-4 bg-background sticky top-0 shrink-0 md:flex flex-col gap-10 items-center hidden transition-[width] duration-500 overflow-hidden",
        isOpen ? "w-[78px]" : "w-[200px]"
      )}
    >
      <Logo icon={isOpen} />
      <nav className="space-y-4 w-full h-fit">
        {sidebarItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={cn(
              "flex relative items-center gap-3 p-3 text-foreground/90 dark:text-gray-200 rounded-lg transition",
              location.pathname === item.path ? "bg-primary/10 text-primary" : "hover:bg-primary/10"
            )}
          >
            {location.pathname === item.path && (
              <p className="h-full w-[5px] absolute top-0 left-[-9px] flex items-center">
                <p className="w-full h-[15px] bg-primary rounded-full "></p>
              </p>
            )}

            <div>{item.icon}</div>
            <span
              className={cn(
                "text-sm font-medium",
                isOpen ? "opacity-[0]" : "opacity-[1]"
              )}
            >
              {item.name}
            </span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
