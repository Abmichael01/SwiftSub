import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Mail, Send } from "lucide-react";
import { Link } from "react-router-dom";

// ✅ Define validation schema
const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
});

const ForgotPassword: React.FC = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: "" },
  });

  // Placeholder function (Replace with API call when backend is ready)
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values); // Simulating API request\
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-5">
        <h1 className="text-xl font-semibold text-center">Forgot Password?</h1>
        <p className="text-gray-600 text-center">Enter your email to receive a reset link.</p>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="relative">
                  <Input type="email" placeholder="Enter your email" {...field} />
                  <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full flex items-center gap-2 cursor-pointer">
          <Send size={18} />
          Send Reset Link
        </Button>

        <div className="text-center text-sm">
          Remember your password?{" "}
          <Link to="/auth/login" className="text-blue-500 hover:underline">
            Log in
          </Link>
        </div>
      </form>
    </Form>
  );
};

export default ForgotPassword;
