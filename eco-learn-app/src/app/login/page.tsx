"use client";
import Image from "next/image";
import Link from "next/link";
import loginPic from "@/assets/login-pic.svg";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { useLoginMutation } from "@/redux/services/auth.service";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const Login = () => {
  const [login, { isLoading }] = useLoginMutation();
  const router = useRouter();

  const formSchema = z.object({
    email: z.string().email(),
    password: z.string(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const res = await toast.promise(login(data).unwrap(), {
        pending: "Logging in...",
        success: "Logged in successfully",
        error: "Something went wrong, Please try again",
      });

      if (res?.status === "success" && res?.statusCode === 200) {
        form.reset();
        router.push("/dashboard");
      }
    } catch (error: any | { data: { message: string } }) {
      // form.reset();
      console.log(error);
      toast.error(
        error?.data?.message || "Something went wrong, Please try again"
      );
    }
  };
  return (
    <div className=" p-20 flex justify-center gap-16">
      <div className="w-full max-w-lg">
        <h2 className="text-3xl font-bold">Welcome Back</h2>
        <p>Continue Learning with EcoLearning</p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className=" space-y-5 mt-5 text-sm"
          >
            <div>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="email" {...field} className="bg-white" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div>
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="password"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Link
              href="/reset-password"
              className="text-sm w-fit block text-gray-600 text-right ml-auto mt-4"
            >
              Forgot Password?
            </Link>
            <div>
              <Button
                type="submit"
                className="bg-custom-lime w-full text-white p-3 rounded hover:bg-lime-600"
                disabled={isLoading}
              >
               {isLoading ? "Signing in..." : "Sign in"}
              </Button>

              <div className="flex justify-between items-center mt-6">
                <hr className="h-[0.1em] w-[30%] ml-auto bg-slate-300" />
                <p className="text-center mx-5">or</p>
                <hr className="h-[0.1em] w-[30%] mr-auto bg-slate-300" />
              </div>
            </div>

            <Button
              type="button"
              className="bg-white w-full text-custom-lime p-3 rounded border border-custom-lime hover:bg-gray-200"
            >
              Sign in with Google
            </Button>
          </form>
        </Form>

        <p className="text-sm mt-5">
          New to Eco-learning?{" "}
          <Link href="/register" className="text-custom-lime">
            Register
          </Link>
        </p>
      </div>
      <div className="hidden xl:block">
        <Image
          src={loginPic.src}
          alt="Hero Frame"
          className="max-w-lg w-full"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
};
export default Login;
