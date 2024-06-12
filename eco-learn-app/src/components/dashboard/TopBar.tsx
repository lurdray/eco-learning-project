"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const formSchema = z.object({
  search: z.string(),
});

export default function TopBar() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      search: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <div className="mt-[15vh] border-t border-gray-200 sm:border-0 sm:mt-0 sm:fixed w-[100%] bg-white p-2 md:p-2 lg:p-3 sm:pl-[35%] md:pl-[30%] lg:pl-[25%] xl:pl-[20%] pr-[2%] flex items-centre justify-between z-50">
      <div className="h-[100%] w-[50%]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="relative">
            <FormField
              control={form.control}
              name="search"
              render={({ field }) => (
                <FormItem className="">
                  <FormControl>
                    <Input
                      placeholder="Search here..."
                      {...field}
                      className="pl-[30px] sm:pl-[15%] md:pl-[12%] lg:pl-[8%] bg-gray-50 border-none focus-visible:ring-0"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="absolute top-0 block p-2"
              variant="ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="size-5 fill-gray-800"
              >
                <path
                  fillRule="evenodd"
                  d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
          </form>
        </Form>
      </div>
      <div className="flex items-center h-[100%] space-x-4">
        <div>
          <Button className="rounded-full bg-gray-200 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="gray"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
              />
            </svg>
          </Button>
        </div>
        <div className="p-1 rounded-full bg-gradient-to-b from-defaultgreen to-lightpurple">
              <Avatar className="size-9">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
      </div>
    </div>
  );
}
