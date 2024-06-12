import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

import { CiGlobe, CiImageOn } from "react-icons/ci";
import { LuPlaySquare } from "react-icons/lu";
import { BsCalendar4Week } from "react-icons/bs";

export default function CreatePost() {
  return (
    <div className="p-4 bg-white border-2 border-gray-100 rounded-2xl space-y-4">
      <div className="flex justify-between">
        <div className="flex items-center space-x-2">
          <div className="p-1 rounded-full size-12 bg-gradient-to-b from-defaultgreen to-lightpurple">
            <Avatar className="size-10">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div>
            <h1 className="font-semibold text-base">Gabriella Imelda</h1>
            <span className="text-sm">Gabby20@mail.com</span>
          </div>
        </div>
        <div>
          <Select>
            <SelectTrigger className="p-1 py-0 focus-visible:ring-0 text-sm border-none space-x-2 stroke-2 font-semibold text-gray-500">
              <SelectValue placeholder="Public" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem defaultChecked value="light">
                <div className="flex items-center space-x-2"><CiGlobe /> <h3>Public</h3></div>
              </SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="px-2 space-y-4">
      <div className="w-[100%]">
        <Input className="w-[100%] border-none bg-gray-50 p-3 focus-visible:ring-0" placeholder="What&apos;s on your mind?" />
      </div>
      <div className="w-[100%] border-b border-gray-200"></div>
      <div className="flex justify-between">
        <div className="flex items-center space-x-2">
        <Button variant="ghost" className="px-1"><CiImageOn className="size-7 text-gray-500" /></Button>
        <Button variant="ghost" className="px-1"><LuPlaySquare className="size-7 stroke-1 stroke-gray-500" /></Button>
        <Button variant="ghost" className="px-1"><BsCalendar4Week className="size-6 text-gray-500 font-light" /></Button>
        </div>
        <div>
            <Button className="bg-defaultgreen text-white">Create a Post</Button>
        </div>
      </div>
      </div>
    </div>
  );
}
