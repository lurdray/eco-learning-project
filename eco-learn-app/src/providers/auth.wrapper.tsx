"use client";
import { useRouter } from "next/navigation";
// import { useGetCurrentUserQuery } from "@/redux/services/users.service";
// import { usePathname } from "next/navigation";
import { useEffect , useState } from "react";
const publicRoutes = [
  "/login",
]

const AuthWrapper = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  // const pathname = usePathname();
  
    useEffect(() => {
      if (!localStorage.getItem("user")) router.push("/login");
    }, [router]);
    
    return (
      <div className="grid h-screen w-screen place-items-center">
        Loading...
      </div>
    );
};
export default AuthWrapper;