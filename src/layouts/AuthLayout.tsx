import React from "react";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "@/components/Logo";



const AuthLayout: React.FC = () => {

  return (
    <div className=" flex min-h-screen items-center justify-center bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">

      {/* Glassmorphic Auth Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md p-8 rounded-3xl bg-white dark:bg-gray-800/40 shadow-2xl border border-white/20 backdrop-blur-xl space-y-6"
      >
        <div className="flex justify-center">
        <Logo icon />
        </div>
        <Outlet />
      </motion.div>
    </div>
  );
};

export default AuthLayout;
