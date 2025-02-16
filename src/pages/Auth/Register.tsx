import React, { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Eye, EyeOff, UserPlus } from "lucide-react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

// ✅ Define validation schema
const formSchema = z
  .object({
    username: z.string().min(2, { message: "Username must be at least 2 characters." }),
    email: z.string().email({ message: "Invalid email address." }),
    password: z.string().min(6, { message: "Password must be at least 6 characters." }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });

const Register: React.FC = () => {
  const [showPasswords, setShowPasswords] = useState<{ [key: string]: boolean }>({});

  const togglePasswordVisibility = (field: string) => {
    setShowPasswords((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { username: "", email: "", password: "", confirmPassword: "" },
  });

  // Handle form submission
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-5">
        <h1 className="text-xl font-semibold text-center">Create an Account</h1>

        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="text" placeholder="Username" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="email" placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {['password', 'confirmPassword'].map((fieldName) => (
          <FormField
            key={fieldName}
            control={form.control}
            name={fieldName as "password" | "confirmPassword"}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showPasswords[fieldName] ? "text" : "password"}
                      placeholder={fieldName === "password" ? "Password" : "Confirm Password"}
                      {...field}
                    />
                    <button
                      type="button"
                      className="absolute right-2 cursor-pointer top-0 h-full flex items-center text-gray-500"
                      onClick={() => togglePasswordVisibility(fieldName)}
                    >
                      {showPasswords[fieldName] ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}

        <Button type="submit" className="w-full flex items-center gap-2 cursor-pointer">
          <UserPlus size={18} />
          Sign Up
        </Button>

        <div className="relative flex items-center justify-center text-sm text-gray-500">
          <span className="absolute bg-white dark:bg-gray-800 px-2">or</span>
          <div className="h-px w-full bg-gray-300 dark:bg-gray-700"></div>
        </div>

        {/* ✅ Social Register Button */}
        <Button variant="outline" className="w-full flex items-center justify-center gap-2 cursor-pointer">
          <FaGoogle size={18} className="text-red-500" /> Continue with Google
        </Button>

        <div className="text-center text-sm">
          Already have an account?{" "}
          <Link to="/auth/login" className="text-blue-500 hover:underline">
            Log in
          </Link>
        </div>
      </form>
    </Form>
  );
};

export default Register;
