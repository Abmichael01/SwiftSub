import RecentTransactions from "@/components/Dashboard/Dashboard/RecentTransactions";
import Services from "@/components/Dashboard/Dashboard/Services";
import Wallet from "@/components/Dashboard/Dashboard/Wallet";
import React from "react";

const Dashboard: React.FC = () => {
  
  return (
    <div className="space-y-10 w-full">
      <Wallet />
      <Services />
      <RecentTransactions />
    </div>
  );
};

export default Dashboard;
