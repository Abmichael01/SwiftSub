import { CheckCircle, Clock, XCircle } from "lucide-react";
import React, { JSX } from "react";

const transactions = [
  {
    id: 1,
    name: "Airtime Purchase",
    amount: "₦500",
    status: "Success",
    time: "10:45 AM",
  },
  {
    id: 2,
    name: "Data Subscription",
    amount: "₦1,200",
    status: "Pending",
    time: "09:30 AM",
  },
  {
    id: 3,
    name: "Electricity Payment",
    amount: "₦5,000",
    status: "Failed",
    time: "08:15 AM",
  },
  {
    id: 4,
    name: "Exam Pin Purchase",
    amount: "₦2,500",
    status: "Success",
    time: "Yesterday",
  },
];

const statusColors: Record<string, string> = {
  Success: "text-green-500 bg-green-100",
  Pending: "text-yellow-500 bg-yellow-100",
  Failed: "text-red-500 bg-red-100",
};

const statusIcons: Record<string, JSX.Element> = {
  Success: <CheckCircle className="w-5 h-5 text-green-500" />,
  Pending: <Clock className="w-5 h-5 text-yellow-500" />,
  Failed: <XCircle className="w-5 h-5 text-red-500" />,
};

const RecentTransactions: React.FC = () => {
  return (
    <div className="space-y-6 shadow-lg border rounded-2xl p-6 bg-white">
      <h2 className="text-lg font-semibold text-gray-800">Recent Transactions</h2>
      <div className="space-y-4">
        {transactions.map((tx) => (
          <div key={tx.id} className="flex items-center justify-between p-4 rounded-lg bg-gray-50 hover:shadow transition">
            <div className="flex items-center gap-3">
              {statusIcons[tx.status]}
              <div>
                <p className="text-sm font-medium text-gray-800">{tx.name}</p>
                <p className="text-xs text-gray-500">{tx.time}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold">{tx.amount}</span>
              <span className={`text-xs font-medium px-2 py-1 rounded-lg ${statusColors[tx.status]}`}>
                {tx.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentTransactions;
