import type React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2, ArrowLeft } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Link } from "react-router-dom"
import TransactionSummary from "@/components/Dashboard/Dashboard/TransactionSummary"
import { useTransactionStore } from "@/stores/transactionStore"

// Define Zod Schema
const formSchema = z.object({
  phone: z.string().min(11, "Phone number must be 11 digits").max(11, "Phone number must be 11 digits"),
  plan: z.string().min(1, "Data plan is required"),
  network: z.string().min(1, "Network is required"),
})

const networks = [
  { name: "MTN", value: "mtn" },
  { name: "Glo", value: "glo" },
  { name: "Airtel", value: "airtel" },
  { name: "9mobile", value: "9mobile" },
]

const dataPlans = [
  { name: "1GB - 1 Day", value: "1gb_1day", price: 300 },
  { name: "2GB - 7 Days", value: "2gb_7days", price: 500 },
  { name: "5GB - 30 Days", value: "5gb_30days", price: 1500 },
  { name: "10GB - 30 Days", value: "10gb_30days", price: 2500 },
]

const Data: React.FC = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phone: "",
      plan: "",
      network: "",
    },
  })

  const { isSubmitting } = form.formState
  const { setTransaction } = useTransactionStore()

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const selectedPlan = dataPlans.find((plan) => plan.value === values.plan)
    setTransaction({
      type: "Data",
      recipient: values.phone,
      amount: selectedPlan?.price || 0,
      network: values.network,
      plan: selectedPlan?.name || "",
    })
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex gap-5 items-center px-3 py-3 border rounded-xl">
        <Link to="/dashboard">
          <ArrowLeft />
        </Link>
        <h2 className="text-lg font-semibold">Buy Data</h2>
      </div>

      {/* Data Form */}
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

          {/* Select Data Plan */}
          <FormField
            control={form.control}
            name="plan"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Select Data Plan</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose Data Plan" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {dataPlans.map((plan) => (
                      <SelectItem key={plan.value} value={plan.value}>
                        {plan.name} - ₦{plan.price}
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
            {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : "Buy Data"}
          </Button>
        </form>
      </Form>

      {/* Order Summary Drawer */}
      <TransactionSummary />
    </div>
  )
}

export default Data

