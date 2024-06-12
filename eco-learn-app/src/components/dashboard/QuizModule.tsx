import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../ui/button";

import { MdDone } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";

export default function QuizModule({
  status,
  course,
  lesson,
  title,
}: {
  status: String;
  course: String;
  lesson: String;
  title: String;
}) {
  return (
    <div className="w-[80%] m-auto sm:mx-0 my-2 sm:w-[45%] lg:w-[31%] border border-gray-100 rounded-lg bg-white shadow-sm p-3 space-y-4 mb-8">
      <div className="w-[100%] flex items-center space-x-4">
        <div
          className={`rounded-full size-4 flex items-center justify-center ${
            status == "Completed" ? "bg-green-700" : "bg-yellow-500"
          }`}
        >
          {status == "Completed" ? (
            <MdDone className=" fill-white size-3" />
          ) : (
            <IoTimeOutline className="stroke-white stroke-2 size-3" />
          )}
        </div>

        <h1>{status}</h1>
      </div>
      <h1 className="uppercase font-semibold text-xl">Course {course}</h1>
      <div className="space-y-2">
        <div className="md:flex space-x-1 text-defaultgreen items-center font-semibold">
          <h1 className="uppercase">Lesson {lesson}</h1>
          <GoDotFill className="hidden md:block size-4 fill-defaultgreen" />
          <Link href="/dashboard/courses/1/1" className="block">
            <h1 className="uppercase underline">View Course</h1>
          </Link>
        </div>
        <h1 className="capitalize">{title}</h1>
      </div>
      <h3 className="text-sm text-gray-400">Test your knowledge on {title} and earn</h3>
      <div className="w-[100%] md:flex items-center">
        <div className="flex">
          <Avatar className="size-9 border-2 border-white">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>JB</AvatarFallback>
          </Avatar>
          <Avatar className="size-9 -left-3 border-2 border-white">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar className="size-9 -left-6 border-2 border-white">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar className="size-9 -left-9 border-2 border-white">
            <AvatarImage src="https://github.com/shdcn.png" />
            <AvatarFallback>+5</AvatarFallback>
          </Avatar>
        </div>

        <h2 className="text-xs text-gray-400">8 people took this quiz</h2>
      </div>
      <div>
          <Button className="w-[100%] border border-defaultgreen bg-white text-defaultgreen text-sm font-semibold hover:text-white hover:bg-defaultgreen">View Results</Button>
      </div>
    </div>
  );
}
