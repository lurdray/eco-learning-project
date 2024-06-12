"use client";
import { useAppSelector } from "@/hooks/redux";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const routes = [
  {
    name: "Home",
    path: "/",
  },

  {
    name: "About Us",
    path: "/about",
  },

  {
    name: "Features",
    path: "/features",
  },

  {
    name: "Contact",
    path: "/contact",
  },

  {
    name: "Connect Wallet",
    path: "/connect-wallet",
  },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const user = useAppSelector((state) => state?.auth?.user);
  return (
    <header className="flex justify-between gap-[10vw] items-center px-5 md:px-20 py-5 bg-white">
      <Link href="/" className="font-bold text-lg">
        <Image
          src="/logo.svg"
          alt="logo"
          className="max-w-[310px] w-full"
          width={100}
          height={100}
        />
      </Link>

      <div>
          <AiOutlineMenu
            className="h-7 w-7 lg:hidden"
            onClick={() => setMenuOpen(true)}
          />
        </div>

      <nav className={`flex flex-col justify-center lg:justify-between transition-all gap-8 lg:flex-row lg:translate-x-0 lg:w-full lg:h-fit lg:shadow-none text-sm font-bold md:flex-row fixed lg:static top-0 right-0 z-50 w-fit p-10 lg:p-0 bg-white h-screen shadow-md ${
        menuOpen ? "translate-x-0" : "translate-x-[100%]"
          }`}>
        
        <div className="flex flex-col lg:flex-row w-auto lg:justify-between gap-6">
          {routes.map((route) => (
            <Link key={route.path} href={route.path}>
              {route.name}
            </Link>
          ))}
        </div>
        <div className="text-sm font-bold">
          {user && user?.email ? (
            <Link
              href="/dashboard"
              className="bg-custom-lime p-3  rounded text-white"
            >
              Dashboard
            </Link>
          ) : (
            <div className="flex gap-5">
              <Link href="/login" className="p-3 text-custom-lime ">
                Login
              </Link>
              <Link
                href="/register"
                className="bg-custom-lime p-3  rounded text-white"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </nav>
        {/* overlay */}
        <div 
        className={`z-10 absolute inset-0 bg-black opacity-50 w-screen h-screen ${
          menuOpen ? "block" : "hidden"
        }`}
        onClick={() => setMenuOpen(false)}
        >
          
        </div>
    </header>
  );
};
export default Header;
