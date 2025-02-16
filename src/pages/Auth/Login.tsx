import React, { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Eye, EyeOff, LogIn } from "lucide-react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa"; // ✅ Import Social Icons

// ✅ Define validation schema
const formSchema = z.object({
  username: z.string().min(2, { message: "Username must be at least 2 characters." }),
  password: z.string().min(6, { message: "Password must be at least 6 characters." }),
});

// ✅ Define form fields dynamically
const formFields = [
  { name: "username", type: "text", placeholder: "Username" },
  { name: "password", type: "password", placeholder: "Password" },
];

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { username: "", password: "" },
  });

  // Handle form submission
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-5">
        <h1 className="text-xl font-semibold text-center">Welcome Back</h1>

        {formFields.map((field) => (
          <FormField
            key={field.name}
            control={form.control}
            name={field.name as "username" | "password"}
            render={({ field: inputField }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={field.name === "password" ? (showPassword ? "text" : "password") : field.type}
                      placeholder={field.placeholder}
                      {...inputField}
                    />
                    {field.name === "password" && (
                      <button
                        type="button"
                        className="absolute right-2 cursor-pointer top-0 h-full flex items-center text-gray-500"
                        onClick={() => setShowPassword((prev) => !prev)}
                      >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    )}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}

        <div className="text-right text-sm">
          <Link to="/auth/forgot-password" className="text-blue-500 hover:underline">
            Forgot password?
          </Link>
        </div>

        <Button type="submit" className="w-full flex items-center gap-2 cursor-pointer">
          <LogIn size={18} />
          Login
        </Button>

        <div className="relative flex items-center justify-center text-sm text-gray-500">
          <span className="absolute bg-white dark:bg-gray-800 px-2">or</span>
          <div className="h-px w-full bg-gray-300 dark:bg-gray-700"></div>
        </div>

        {/* ✅ Updated Social Login Buttons */}
        <Button variant="outline" className="w-full flex items-center justify-center gap-2 cursor-pointer">
          <FaGoogle size={18} className="text-red-500" /> Continue with Google
        </Button>
        

        <div className="text-center text-sm">
          Don't have an account?{" "}
          <Link to="/auth/register" className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </div>
      </form>
    </Form>
  );
};

export default Login;
