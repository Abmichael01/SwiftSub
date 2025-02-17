import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, ArrowLeft } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Link } from "react-router-dom";
import TransactionSummary from "@/components/Dashboard/Dashboard/TransactionSummary";
import { useTransactionStore } from "@/stores/transactionStore";

// Define Zod Schema
const formSchema = z.object({
  phone: z
    .string()
    .min(11, "Phone number must be 11 digits")
    .max(11, "Phone number must be 11 digits"),
  amount: z.coerce.number().min(50, "Minimum amount is ₦50"),
  network: z.string().min(1, "Network is required"),
});

const networks = [
  { name: "MTN", value: "mtn" },
  { name: "Glo", value: "glo" },
  { name: "Airtel", value: "airtel" },
  { name: "9mobile", value: "9mobile" },
];

const Airtime: React.FC = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phone: "",
      amount: 50,
      network: "",
    },
  });

  const { isSubmitting } = form.formState;
  const { setTransaction } = useTransactionStore()

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setTransaction({
        type: "Airtime",
        recipient: values.phone,
        amount: values.amount,
        network: values.network,
      });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex gap-5 items-center px-3 py-3 border rounded-xl">
        <Link to="/dashboard">
          <ArrowLeft />
        </Link>
        <h2 className="text-lg font-semibold">Airtime</h2>
      </div>

      {/* Airtime Form */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 p-5">
          {/* Phone Number */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="Enter phone number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Amount */}
          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Amount (₦)</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Enter amount" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Select Network */}
          <FormField
            control={form.control}
            name="network"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Select Network</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose Network" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {networks.map((net) => (
                      <SelectItem key={net.value} value={net.value}>
                        {net.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button type="submit" className="w-full flex items-center justify-center" disabled={isSubmitting}>
            {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : "Buy Airtime"}
          </Button>
        </form>
      </Form>

      {/* Order Summary Drawer */}
      <TransactionSummary />
    </div>
  );
};

export default Airtime;
