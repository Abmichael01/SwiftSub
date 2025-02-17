import { create } from "zustand";

type OrderSummaryType = {
  type: string;
  phone: string;
  amount: number;
  network?: string;
};

interface OrderSummaryDrawerState {
  orderDetails: OrderSummaryType | null;
  isOpen: boolean;
  openDrawer: (details: OrderSummaryType) => void;
  closeDrawer: () => void;
}

export const useOrderSummaryDrawer = create<OrderSummaryDrawerState>((set) => ({
  orderDetails: null,
  isOpen: false,
  openDrawer: (details) => set({ orderDetails: details, isOpen: true }),
  closeDrawer: () => set({ orderDetails: null, isOpen: false }),
}));
