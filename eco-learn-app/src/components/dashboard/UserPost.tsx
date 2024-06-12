import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

import Image from "next/image"

import { FaEllipsis } from "react-icons/fa6";
import { GoHeart, GoComment } from "react-icons/go";
import { PiShareNetwork } from "react-icons/pi";

export default function UserPost({
  username,
  time,
  likes,
  comments,
  post,
  image
}: {
  username: String;
  time: String;
  likes: String;
  comments: String;
  post: String;
  image: any;
}) {
  return (
    <div className="p-4 py-5 bg-white border-2 border-gray-100 rounded-2xl space-y-4">
      <div className="flex justify-between">
        <div className="flex items-center space-x-2">
          <Avatar className="size-11">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <div>
            <h1 className="font-semibold text-base">{username}</h1>
            <span className="text-sm">{time} ago</span>
          </div>
        </div>
        <div>
          <FaEllipsis className="fill-gray-500 size-6 stroke-1" />
        </div>
      </div>
      <div className="px-2 space-y-5">
        <div className="space-y-3">
          <p className="text-sm text-gray-500">
            {post}
          </p>
          <div className={`relative ${image == "none" ? "hidden" : "block"}`}>
            <Image src={image == 'none' ? "/default.png" : image} alt="" layout="responsive" width={100} height={100} />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
            <GoHeart className="size-5 text-gray-500" />
            <h4 className="text-sm text-gray-500">{likes} Likes</h4>
            </div>
            <div className="flex items-center space-x-2">
            <GoComment className="size-5 text-gray-500" />
            <h4 className="text-sm text-gray-500">{comments} Comments</h4>
            </div>
            
            
          </div>
          <div className="flex items-center space-x-2">
          <PiShareNetwork className="size-5 text-gray-500" />
          <h5 className="text-sm text-gray-500">Share</h5>
          </div>
        </div>
        <div className="w-[100%] flex space-x-3">
          <div className="p-1 rounded-full size-10 bg-gradient-to-b from-defaultgreen to-lightpurple">
            <Avatar className="size-8">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <Input
            className="w-[100%] border-none bg-gray-50 p-3 focus-visible:ring-0"
            placeholder="What&apos;s on your mind?"
          />
        </div>
      </div>
    </div>
  );
}
