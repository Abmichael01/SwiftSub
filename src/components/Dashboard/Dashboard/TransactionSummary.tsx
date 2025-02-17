import type React from "react"
import { useTransactionStore } from "@/stores/transactionStore"
import { motion } from "framer-motion"
import { X, Wallet } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useWalletStore } from "@/stores/walletStore"

const TransactionSummary: React.FC = () => {
  const { transaction, closeTransaction } = useTransactionStore()
  const { balance } = useWalletStore()

  if (!transaction) return null

  const hasInsufficientFunds = balance < transaction.amount

  return (
    <div className="absolute inset-0 bg-black/40 flex items-end z-50 overflow-hidden">
      <div className="absolute inset-0" onClick={closeTransaction} />

      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
        className="relative w-full bg-white rounded-t-2xl p-6 shadow-lg"
      >
        <button
          onClick={closeTransaction}
          className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 hover:bg-gray-300"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-lg font-semibold text-center mb-4">Confirm Transaction</h2>

        {/* Custom Wallet Balance Card */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-4 mb-6 text-white shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Wallet Balance</span>
            <Wallet className="h-5 w-5" />
          </div>
          <div className="text-2xl font-bold">₦{balance.toLocaleString()}</div>
        </div>

        <div className="space-y-3 text-gray-700 text-sm p-4 border shadow-lg rounded-xl">
          <div className="flex justify-between">
            <span className="font-medium">Type:</span>
            <span>{transaction.type}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Recipient:</span>
            <span>{transaction.recipient}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Amount:</span>
            <span className={hasInsufficientFunds ? "text-red-500 font-semibold" : ""}>
              ₦{transaction.amount.toLocaleString()}
            </span>
          </div>
          {transaction.network && (
            <div className="flex justify-between">
              <span className="font-medium">Network:</span>
              <span>{transaction.network.toUpperCase()}</span>
            </div>
          )}
        </div>

        {hasInsufficientFunds && (
          <p className="mt-4 text-red-500 text-sm">Insufficient funds. Please top up your wallet.</p>
        )}

        <div className="mt-6 flex gap-4">
          <Button variant="secondary" className="flex-1" onClick={closeTransaction}>
            Cancel
          </Button>
          <Button className="flex-1" disabled={hasInsufficientFunds}>
            Confirm
          </Button>
        </div>
      </motion.div>
    </div>
  )
}

export default TransactionSummary

