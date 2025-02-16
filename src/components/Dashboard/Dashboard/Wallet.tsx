import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Wallet: React.FC = () => {
    const [showBalance, setShowBalance] = useState(false);
  return (
    <div className="h-40 bg-primary text-white rounded-2xl relative overflow-hidden p-5 shadow-lg">
        <div className="size-100 rounded-full bg-primary border-30 border-white/50 absolute top-[-50%] left-[-9%] p-5 rotate-90"></div>

        <div className="flex justify-between items-center h-full">
          <div className="relative z-10 space-y-5">
            <div className="flex gap-5 items-center">
              <h1 className="text-xl font-semibold">Wallet Balance</h1>
              <div
                className="cursor-pointer"
                onClick={() => setShowBalance((prev) => !prev)}
              >
                {showBalance ? <Eye /> : <EyeOff />}
              </div>
            </div>
            <h1 className="text-2xl">
                 
                 {showBalance ? "N5000.00" :"********"} 
                </h1>
          </div>

          <Link
            to={"/"}
            className="px-6 py-3 rounded-full bg-white text-primary text-sm shadow-md"
          >
            Fund Wallet
          </Link>
        </div>
      </div>
  )
}

export default Wallet