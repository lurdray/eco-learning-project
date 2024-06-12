"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";

import { VscLibrary } from "react-icons/vsc";
import { GoHome, GoQuestion } from "react-icons/go";
import { TbFileDescription, TbHeadset } from "react-icons/tb";
import { LuLogOut } from "react-icons/lu";
import { CiMedicalCross } from "react-icons/ci";
import { TbPhotoHexagon } from "react-icons/tb";
import { LiaCoinsSolid, LiaChartBarSolid } from "react-icons/lia";
import { PiUsersThree } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import { CgToolbox } from "react-icons/cg";
import { CiMenuBurger } from "react-icons/ci";
import { MdClose } from "react-icons/md";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAppSelector } from "@/hooks/redux";
import { Button } from "../ui/button";
import { toast } from "react-toastify";

export default function SideNav() {
  const path = usePathname();
  const [showNav, setShowNav] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setShowNav(false)
  }, [path])

  const user = useAppSelector((state:any) => state?.auth?.user);
  const handleLogout = () => {
    localStorage.clear();
    toast.success("Logged out successfully");
    router.push("/login");
  }
  return (
    <div
      className={`fixed top-0 ${
        showNav == true ? "h-full" : "h-fit sm:h-full"
      } w-[100%] sm:w-[34%] sm:max-w-[233px] md:w-[28%] md:max-w-[240px] lg:w-[22%] xl:w-[20%]  bg-white p-2 z-50`}
    >
      <div className="w-[100%] flex items-center justify-between p-2 mb-0 md:mb-2">
        <div className="w-[50%] sm:w-[100%] z-50">
          <Image
            src="/dashlogo.svg"
            alt="icon"
            width={100}
            height={100}
            className="w-[100%]"
          />
        </div>
        <div className="sm:hidden flex mr-5">
          <Button
            variant="ghost"
            className={`p-0 ${showNav == true ? "hidden" : "block"}`}
            onClick={() => setShowNav(!showNav)}
          >
            <CiMenuBurger className="size-6" />
          </Button>
          <Button
            variant="ghost"
            className={`p-0  ${showNav == false ? "hidden" : "block"}`}
            onClick={() => setShowNav(!showNav)}
          >
            <MdClose className="size-6" />
          </Button>
        </div>
      </div>
      <div className={`${showNav == true ? "block" : "hidden sm:block"}`}>
        <div className="space-y-2">
          <NavLink href="/dashboard">
            <div>
              <GoHome
                className={`size-6 ${
                  path == "/dashboard" ? "fill-black" : "fill-gray-600"
                }`}
              />
            </div>
            <h1>Dashboard</h1>
          </NavLink>
          <NavLink href="/dashboard/courses">
            <div>
              <VscLibrary
                className={`size-6 ${
                  path == "/dashboard/courses" ? "fill-black" : "fill-gray-600"
                }`}
              />
            </div>
            <h1>Courses</h1>
          </NavLink>

          <NavLink href="/dashboard/quizzes">
            <div>
              <GoQuestion
                className={`size-5 mr-1 ${
                  path == "/dashboard/quizzes" ? "fill-black" : "fill-gray-600"
                }`}
              />
            </div>
            <h1>Quizzes</h1>
          </NavLink>

          <NavLink href="#">
            <div>
              <TbFileDescription
                className={`size-5 stroke-2 mr-1 ${
                  path == "/dashboard/rewards"
                    ? "stroke-black"
                    : "stroke-gray-600"
                }`}
              />
            </div>
            <h1>Rewards</h1>
          </NavLink>

          <NavLink href="/dashboard/token-wallet">
            <div>
              <CiMedicalCross
                className={`size-6 stroke-1 mr-1 ${
                  path == "/dashboard/token-wallet"
                    ? "stroke-black"
                    : "stroke-gray-600"
                }`}
              />
            </div>
            <h1>Token Wallet</h1>
          </NavLink>

          {/* <NavLink href="#">
            <div>
              <TbPhotoHexagon
                className={`size-5 stroke-2 mr-1 ${
                  path == "/dashboard/mintnfts"
                    ? "stroke-black"
                    : "stroke-gray-600"
                }`}
              />
            </div>
            <h1>Mint NFTs</h1> */}
          {/* </NavLink> */}

          <NavLink href="#">
            <div>
              <LiaCoinsSolid
                className={`size-6 ${
                  path == "/dashboard/converttokens"
                    ? "fill-black"
                    : "fill-gray-600"
                }`}
              />
            </div>
            <h1>Convert Tokens</h1>
          </NavLink>

          <NavLink href="#">
            <div>
              <LiaChartBarSolid
                className={`size-5 ml-1 ${
                  path == "/dashboard/leaderboard"
                    ? "fill-black"
                    : "fill-gray-600"
                }`}
              />
            </div>
            <h1>Leaderboard</h1>
          </NavLink>

          <NavLink href="/dashboard/community">
            <div>
              <PiUsersThree
                className={`size-6 ${
                  path == "/dashboard/community"
                    ? "fill-black"
                    : "fill-gray-600"
                }`}
              />
            </div>
            <h1>Community</h1>
          </NavLink>
          <div className="pt-1 border-b border-gray-100"></div>
        </div>
        <div className="space-y-1 absolute bottom-0 w-[94%]">
          <NavLink href="#">
            <div>
              <IoSettingsOutline
                className={`size-6 ${
                  path == "/dashboard/settings" ? "fill-black" : "fill-gray-600"
                }`}
              />
            </div>
            <h1>Settings</h1>
          </NavLink>
          <NavLink href="#">
            <div>
              <TbHeadset
                className={`size-6 stroke-2 ${
                  path == "/dashboard/helpcenter"
                    ? "stroke-black"
                    : "stroke-gray-500"
                }`}
              />
            </div>
            <h1>Help Center</h1>
          </NavLink>
          <NavLink href="#">
            <div>
              <CgToolbox
                className={`size-6 stroke-1 ${
                  path == "/dashboard/refer"
                    ? "stroke-black"
                    : "stroke-gray-600"
                }`}
              />
            </div>
            <h1>Refer family & friends</h1>
          </NavLink>
          <div className="pt-2 cursor-pointer"
          onClick={()=> handleLogout()}
          >
            
              <div
                className={`flex items-center space-x-3 p-2 px-3 hover:bg-gray-100 rounded-md text-sm`}
              >
                <div className="p-1 rounded-full size-10 bg-gradient-to-b from-defaultgreen to-lightpurple">
                  <Avatar className="size-8">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
                <div className="truncate">
                  <h1 className="font-semibold text-sm">{`${user?.firstName} ${user?.lastName}`}</h1>
                  <span className="text-xs">{user?.email}</span>
                </div>
                <div>
                  <LuLogOut
                    className={`size-5 stroke-1 ${
                      path == "/dashboard/refer"
                        ? "stroke-black"
                        : "stroke-gray-600"
                    }`}
                  />
                </div>
              </div>

          </div>
        </div>
      </div>
    </div>
  );
}
