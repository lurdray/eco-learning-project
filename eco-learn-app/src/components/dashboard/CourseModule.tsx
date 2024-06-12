import Image from "next/image";
import Link from "next/link";

import { IoStar } from "react-icons/io5";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../ui/button";

export default function CourseModule({
  src,
  title,
  subhead,
  rating,
}: {
  src: any;
  title: String;
  subhead: String;
  rating: number;
}) {
  const goldStars = rating;
  const noStars = 5 - rating;

  return (
    <div className="w-[80%] m-auto sm:mx-0 sm:w-[45%] md:w-[31%] border border-gray-100 rounded-lg bg-white shadow-sm space-y-2 my-2 md:space-y-4 mb-8">
      <div className="w-[100%] relative">
        <Image
          src={src}
          alt=""
          // layout="responsive"
          width={500}
          height={500}
          className=" rounded-tr-lg rounded-tl-lg w-full"
        />
      </div>
      <div>
        <div className="p-3 pt-0 space-y-2 md:space-y-4">
          <div className="space-y-2">
            <h2 className="font-semibold text-base capitalize">{title}</h2>
            <p className="text-gray-500 text-sm">{subhead}</p>
          </div>
        </div>
        <div className="p-3 lg:flex items-center justify-between space-y-4">
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
          <div className="flex items-center space-x-1">
            <div className="flex items-center space-x-1">
            {Array.from({ length: goldStars }, (_, index) => (
              <IoStar key={"gold"+index} className="fill-yellow-500" />
            ))}
            {Array.from({ length: noStars }, (_, index) => (
              <IoStar key={"nogold"+index} className="fill-gray-600" />
            ))}
            </div>

            <h1 className="text-base">{rating + ".0"}</h1>
          </div>
        </div>
      </div>
      <div className="w-[100%] bottom-0">
        <Button asChild className="border-t-2 py-3 border-gray-100 w-[100%] bg-white text-defaultgreen rounded-t-none hover:bg-defaultgreen hover:text-white">
          <Link href={"/dashboard/courses/" + title}>Start Learning</Link>
        </Button>
      </div>
    </div>
  );
}
