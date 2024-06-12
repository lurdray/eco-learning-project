"use client";
import Image from "next/image";
import Link from "next/link";
import registerPic from "@/assets/register-pic.svg";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useRegisterMutation } from "@/redux/services/auth.service";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const Register = () => {
  const [register, { isLoading }] = useRegisterMutation();
  const router = useRouter();

  const formSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email(),
    password: z.string(),
    // confirmPassword: z.string(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      // confirmPassword: "",
    },
  });
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    // const { confirmPassword, ...rest } = data;

    // if (confirmPassword !== rest.password) {
    //   toast.error("Passwords do not match");
    //   return;
    // }

    try {
      const res = await toast.promise(register(data).unwrap(), {
        pending: "Signing you Up...",
        success: "You're all set, Please log in",
        error: "Something went wrong, Please try again",
      });

      if (res?.status === "success" && res?.statusCode === 200) {
        form.reset();
        router.push("/login");
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
        <h2 className="text-xl font-bold">Welcome to Eco-learning</h2>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className=" space-y-5 mt-5 text-sm"
          >
            <div>
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input placeholder="First Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div>
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Last Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="email" type="email" {...field} />
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
                      <Input placeholder="Password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div>
              <Button
                disabled={isLoading}
                type="submit"
                className="bg-custom-lime w-full text-white p-3 rounded"
              >
                {isLoading ? "Signing up..." : "Continue"}
              </Button>

              <div className="flex justify-between items-center mt-6">
                <hr className="h-[0.1em] w-[30%] ml-auto bg-slate-300" />
                <p className="text-center mx-5">or</p>
                <hr className="h-[0.1em] w-[30%] mr-auto bg-slate-300" />
              </div>
            </div>

            <button
              type="button"
              className="bg-white w-full text-custom-lime p-3 rounded border border-custom-lime"
            >
              Sign in with Google
            </button>
          </form>
        </Form>

        <p className="text-sm mt-5">
          Already have an account?{" "}
          <Link href="/login" className="text-custom-lime">
            Sign in
          </Link>
        </p>
      </div>
      <div className="hidden xl:block">
        <Image
          src={registerPic.src}
          alt="Hero Frame"
          className="max-w-lg w-full"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
};
export default Register;
