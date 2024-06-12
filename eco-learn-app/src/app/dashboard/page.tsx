"use client";

import Image from "next/image";
import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import CourseProgress from "@/components/dashboard/CourseProgress";
// import ProgressChart from "@/components/dashboard/ProgressChart";
import dynamic from 'next/dynamic';

import { Leaderboard } from "@/components/dashboard/Leaderboard";

import { useAppSelector } from "@/hooks/redux";
import usePeraWallet from "@/hooks/wallet";

import { MdOutlineChevronRight } from "react-icons/md";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { CiCalendarDate } from "react-icons/ci";
import { SlBookOpen } from "react-icons/sl";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { LiaCoinsSolid } from "react-icons/lia";

const ProgressChart = dynamic(() => import('@/components/dashboard/ProgressChart'), { ssr: false });

export default function Dashboard() {
  const user = useAppSelector((state) => state?.auth?.user);
  const { accountAddress, isConnectedToPeraWallet, handleConnectWalletClick, handleDisconnectWalletClick } = usePeraWallet();
  return (
    <div className="space-y-4">
      <div className="md:flex items-center justify-between space-y-3">
        <div>
          <h1 className="font-semibold text-xl">Welcome {user?.firstName}</h1>
          <p className="text-sm">Did you know? Recycling one ton of paper saves 17 trees</p>
        </div>
        <div className="">
          <Button className="bg-defaultgreen h-12 rounded-lg truncate max-w-[200px] block p-3 hover:bg-lime-600"
          onClick={() => isConnectedToPeraWallet ? handleDisconnectWalletClick() : handleConnectWalletClick()}
          >
            {isConnectedToPeraWallet ? accountAddress : "Connect Pera Wallet"}
          </Button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-[100%] md:space-x-4 justify-between">
        <div className="md:w-[65%] flex flex-wrap lg:flex-nowrap lg:space-x-4 justify-between mb-4">
          <div className="m-auto sm:mx-0 mb-4 md:my-0 w-[80%] sm:w-[48%] md:w-[33%] min-h-[115px] border border-gray-200 bg-white rounded-lg p-3 space-y-2">
            <h1 className="text-base">Courses Completed</h1>
            <div className="flex justify-between ">
              <div className="space-y-1">
                <h1 className="font-semibold text-2xl">3/20</h1>
                <div className="text-red-700 space-x-1">
                  <Badge className="bg-red-300 text-red-700 p-0 px-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3"
                      />
                    </svg>
                    <span>5%</span>
                  </Badge>
                  <span className="text-sm">Low</span>
                </div>
              </div>
              <div className="rounded-full h-10 w-10 border flex items-center justify-center border-gray-300">
              <SlBookOpen />
              </div>
            </div>
          </div>
          <div className="m-auto sm:mx-0 mb-4 md:my-0 w-[80%] sm:w-[48%] md:w-[33%] min-h-[115px] border border-gray-200 bg-white rounded-lg p-3 space-y-2">
            <h1 className="text-base">Quizzes Taken</h1>
            <div className="flex justify-between ">
              <div className="space-y-1">
                <h1 className="font-semibold text-2xl">4/40</h1>
                <div className="text-red-700 space-x-1">
                  <Badge className="bg-red-300 text-red-700 p-0 px-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3"
                      />
                    </svg>
                    <span>5%</span>
                  </Badge>
                  <span className="text-sm">Low</span>
                </div>
              </div>
              <div className="rounded-full h-10 w-10 border border-gray-300 flex items-center justify-center">
              <AiOutlineQuestionCircle className="size-6" />
              </div>
            </div>
          </div>
          <div className="m-auto sm:mx-0 mb-4 md:my-0 w-[80%] sm:w-[48%] md:w-[33%] min-h-[115px] border border-gray-200 bg-white rounded-lg p-3 space-y-2">
            <h1 className="text-base">Tokens Earned</h1>
            <div className="flex justify-between">
              <div className="space-y-1">
                <h1 className="font-semibold text-2xl">12000</h1>
                <div className="text-green-700 space-x-1">
                  <Badge className="bg-green-200 text-green-700 p-0 px-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18"
                      />
                    </svg>

                    <span>5%</span>
                  </Badge>
                  <span className="text-xs">Great job</span>
                </div>
              </div>
              <div className="rounded-full h-10 w-10 border border-gray-300 flex items-center justify-center">
              <LiaCoinsSolid className="size-6" />
              </div>
            </div>
          </div>
        </div>
        <div className="m-auto md:mx-0 mb-4 sm:mb-0 md:my-0 w-[80%] md:w-[35%]">
          <div className="w-[100%] border border-gray-200 bg-white min-h-[115px] rounded-lg p-3">
            <div className="flex justify-between">
              <div className="flex items-center space-x-1">
                <h1 className="font-semibold text-base text-gray-500">
                  Daily Streak
                </h1>
                <IoMdInformationCircleOutline className="size-4 stroke-1 fill-gray-500" />
              </div>
              <div className="flex items-center">
                <div className="relative">
                  <Image
                    src={"/lightning.svg"}
                    alt=""
                    className="w-full"
                    // layout="responsive"
                    width={100}
                    height={100}
                  />
                </div>
                <h1>56</h1>
              </div>
            </div>
            <div className="relative md:w-[80%]">
              <Image
                src={"/streaksgroup.svg"}
                alt=""
                className="w-full"
                // layout="responsive"
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-[100%] justify-between md:space-x-4 space-y-4 md:space-y-0">
        <div className="w-[80%] m-auto md:mx-0 md:w-[65%] border border-gray-200 bg-white rounded-lg p-4 space-y-3">
          <div className="flex justify-between">
            <div className="flex items-center space-x-1">
              <h1 className="font-semibold text-base">Overall Progress</h1>
              <IoMdInformationCircleOutline className="size-4 stroke-1 fill-gray-500" />
            </div>
            <div className="flex items-center">
              <CiCalendarDate className="size-5 stroke-1 fill-black" />
              <Select>
                <SelectTrigger className="p-1 py-0 focus-visible:ring-0 text-xs font-semibold border-none">
                  <SelectValue placeholder="May 24 - May 31" />
                </SelectTrigger>
                <SelectContent>green
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="w-[100%]">
            <ProgressChart />
          </div>
        </div>
        <div className="flex flex-col justify-between w-[80%] m-auto md:mx-0 md:w-[35%] border border-gray-200 bg-white rounded-lg">
          <div className="border-b border-gray-200 p-3">
            <h2 className="font-semibold">Mint NFTs</h2>
          </div>
          <div className="flex items-center">

          <div className="relative p-3 pb-0">
            <Image
              src={"/mintnfts.svg"}
              alt=""
              // layout="responsive"
              width={100}
              height={100}
              className="m-0 w-full"
            />
          </div>
          </div>
          <div className="border-t border-gray-200 p p-2 pt-5 flex flex-row md:flex-col lg:flex-row justify-evenly lg:justify-center items-center md:space-x-0 lg:space-x-4 md:space-y-3 lg:space-y-0">
            <Button className="border-2 bg-white border-defaultgreen text-defaultgreen hover:bg-gray-200">
              Earn Token
            </Button>
            <Button className="bg-defaultgreen text-white hover:bg-lime-600">Mint NFTs</Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-[100%] justify-between md:space-x-4 space-y-4 md:space-y-0">
        <div className="w-[80%] m-auto md:mx-0 md:w-[65%] border border-gray-200 bg-white rounded-lg p-4 space-y-3">
          <div className="flex justify-between">
            <h1 className="font-semibold text-base">Ongoing Courses</h1>
            <Link
              href="/dashboard/courses"
              className="flex items-center space-x-1"
            >
              <h1 className="text-sm">See all</h1>
              <MdOutlineChevronRight className="size-6" />
            </Link>
          </div>
          <CourseProgress
            course={"1"}
            title={"Understanding Climate Change"}
            progress={7}
          />
          <div className="border-b border-gray-50"></div>
          <CourseProgress
            course={"2"}
            title={"Our Environment Changes"}
            progress={6}
          />
        </div>
        <div className="w-[80%] m-auto md:mx-0 md:w-[35%] border border-gray-200 bg-white rounded-lg flex flex-col justify-between">
          <div className="border-b border-gray-200 p-3">
            <h2 className="font-semibold">Crypto Conversion</h2>
          </div>
          <div className="p-3">
            <div className="relative p-3 pb-0 w-[80%] m-auto">
              <Image
                src={"/cryptoconvert.svg"}
                alt=""
                // layout="responsive"
                width={100}
                height={100}
                className="m-0 w-full"
              />
            </div>
          </div>
          <div className="w-[100%] border-t border-gray-200 p p-2 pt-5 flex justify-center">
            <Button className="bg-defaultgreen text-white hover:bg-lime-600">
              Convert to Crypto
            </Button>
          </div>
        </div>
      </div>
      <div className="mb-5 flex flex-col md:flex-row w-[100%] justify-between md:space-x-4 space-y-4 md:space-y-0">
        <div className="w-[80%] m-auto md:mx-0 md:w-[65%] border border-gray-200 bg-white rounded-lg p-4 space-y-6">
          <div className="flex justify-between">
            <h1 className="font-semibold text-base">Leaderboard</h1>
            <Link
              href="/dashboard/leaderboard"
              className="flex items-center space-x-1"
            >
              <h1 className="text-sm">See all</h1>
              <MdOutlineChevronRight className="size-6" />
            </Link>
          </div>
          <div className="w-[100%] lg:w-[70%] m-auto flex items-end justify-evenly">
            <div className="text-center">
              <div className="relative">
                <div className="rounded-full w-[62px] h-[62px] lg:w-[71px] lg:h-[71px] bg-purple-800 flex items-center">
                  <Avatar className="w-[58px] h-[58px] lg:w-[67px] lg:h-[67px] m-auto">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
                <div className="absolute -bottom-2 right-9 rounded-full bg-purple-800 size-6 flex justify-center items-center">
                  <h1 className="m-auto text-sm text-white">2</h1>
                </div>
              </div>
              <h1 className="text-xs mt-2">James Maxwell</h1>
              <h2 className="text-xs">93,500</h2>
            </div>
            <div className="text-center">
              <div className="relative">
                <div className="rounded-full w-[70px] h-[70px]  lg:w-[84px] lg:h-[84px] bg-green-700 flex items-center">
                  <Avatar className="w-[66px] h-[66px] lg:w-[80px] lg:h-[80px] m-auto">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
                <div className="absolute -bottom-2 right-6 rounded-full bg-green-700 size-6 flex justify-center items-center">
                  <h1 className="m-auto text-sm text-white">1</h1>
                </div>
              </div>
              <h1 className="text-xs mt-2">Pearl Chidiuto</h1>
              <h2 className="text-xs">100,050</h2>
            </div>
            <div className="text-center">
              <div className="relative">
                <div className="rounded-full w-[62px] h-[62px] lg:w-[71px] lg:h-[71px] bg-orange-500 flex items-center">
                  <Avatar className="w-[58px] h-[58px] lg:w-[67px] lg:h-[67px] m-auto">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
                <div className="absolute right-5 -bottom-2 lg:right-6 rounded-full bg-orange-500 size-6 flex justify-center items-center">
                  <h1 className="m-auto text-sm text-white">3</h1>
                </div>
              </div>
              <h1 className="text-xs mt-2">Kim Hyeyoon</h1>
              <h2 className="text-xs">90,950</h2>
            </div>
          </div>
          <div className="w-[100%] p-3 border border-gray-100">
            <Leaderboard />
          </div>
        </div>
        <div className="flex flex-col w-[80%] m-auto md:mx-0 md:w-[35%] border border-gray-200 bg-white rounded-lg">
          <div className="p-3 border-b">
            <h2 className="font-semibold">Never Stop Learning!</h2>
          </div>
          <div className="p-3 flex flex-col justify-between h-full space-y-8">
            <h3 className="text-base text-gray-500">
              Learn and Earn wth our ever expanding course library
            </h3>
            <div className="relative pb-0">
              <Image
                src={"/lEARN.svg"}
                alt=""
                // layout="responsive"
                width={100}
                height={100}
                className="m-0 w-full"
              />
            </div>
          </div>
          <div className="p-2 pt-5 flex justify-center border-t border-gray-200 p">
            <Button asChild className="bg-defaultgreen text-white m-auto hover:bg-lime-600">
              <Link href="/dashboard/courses">Explore More Courses</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
