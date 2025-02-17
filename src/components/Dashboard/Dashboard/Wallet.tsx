

import type React from "react"
import { useState } from "react"
import { Eye, EyeOff, WalletIcon, ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const Wallet: React.FC = () => {
  const [showBalance, setShowBalance] = useState(false)
  const balance = 5000.0 // This should come from your state management or API

  return (
    <div className="h-48 bg-gradient-to-br from-primary to-purple-900 text-white rounded-3xl relative overflow-hidden p-6 shadow-lg">
      {/* Background decoration */}
      <div className="absolute top-[-30%] left-[-10%] w-3/4 h-3/4 bg-white/10 rounded-full transform rotate-45" />
      <div className="absolute bottom-[-20%] right-[-10%] w-1/2 h-1/2 bg-white/10 rounded-full" />

      <div className="relative z-10 h-full flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <WalletIcon className="w-6 h-6" />
            <h1 className="text-xl font-semibold">Wallet Balance</h1>
          </div>
          <motion.div
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer"
            onClick={() => setShowBalance((prev) => !prev)}
          >
            {showBalance ? <Eye className="w-6 h-6" /> : <EyeOff className="w-6 h-6" />}
          </motion.div>
        </div>

        <div className="my-4">
          <motion.h2
            className="text-3xl font-bold"
            initial={false}
            animate={{ opacity: showBalance ? 1 : 0.3 }}
            transition={{ duration: 0.3 }}
          >
            {showBalance
              ? `₦${balance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
              : "₦••••••••"}
          </motion.h2>
        </div>

        <div className="flex justify-between items-center">
          <div className="text-sm opacity-75">Last updated: {new Date().toLocaleDateString()}</div>
          <Link
            to="/fund-wallet"
            className="px-4 py-2 rounded-full bg-white text-primary text-sm font-medium shadow-md hover:bg-opacity-90 transition-colors duration-200 flex items-center space-x-1"
          >
            <span>Fund Wallet</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Wallet

