import Link from "next/link";
import { CiLock } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../ui/button";

export default function LessonModule({
  lesson,
  value,
  subhead,
  note,
}: {
  lesson: string;
  value: String;
  subhead: String;
  note: String;
}) {
  return (
    <div className="w-[80%] m-auto sm:mx-0 my-2 sm:w-[45%] lg:w-[31%] border border-gray-100 rounded-lg bg-white shadow-sm p-3 space-y-4 mb-8 flex flex-col justify-between">
      <div>
      <div className="flex justify-end">
        <CiLock className="size-6 stroke-1" />
      </div>
      <div className="space-y-2">
        <div className="flex items-center space-x-1">
          <h1 className="uppercase">Lesson {lesson}</h1>
          <GoDotFill className="block size-4 fill-defaultgreen" />
          <h1 className="underline">{value + " coins"}</h1>
        </div>
        <h1 className="capitalize font-semibold">{subhead}</h1>
      </div>
        <h1 className="text-gray-400 text-sm">{note}</h1>
      </div>
      <div className="relative bottom-0">
      <div>
        <div className="md:flex items-center space-y-3">
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
          <h2 className="text-xs text-gray-400">8 people took this course</h2>
        </div>
      </div>
          <Button 
          asChild 
          className="w-[100%] border bg-defaultgreen text-white text-sm font-semibold hover:text-defaultgreen hover:ring-1 hover:ring-defaultgreen hover:bg-white"
          
          >
            <Link href={"/dashboard/courses/1/" + lesson}>Start Learning</Link>
            </Button>
      </div>
    </div>
  );
}
