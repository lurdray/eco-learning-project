import TopBar from "@/components/dashboard/TopBar";
import SideNav from "@/components/dashboard/SideNav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`bg-gray-50 relative p-0 m-0 min-h-screen `}>
      <TopBar />
      <SideNav />
      <div className="w-[100%] sm:pl-[253px] md:pl-[260px] min-h-screen px-6 mt-20px sm:mt-0 pt-[10px] sm:pt-[63px] md:pt-[75px] lg:pt-[85px] bg-gray-50 relative">
        {children}
      </div>
    </div>
  );
}
