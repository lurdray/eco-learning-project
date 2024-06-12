"use client"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import CourseModule from "@/components/dashboard/CourseModule";
import { useAppSelector } from "@/hooks/redux";

export default function Courses() {
  const user = useAppSelector((state) => state?.auth?.user);
  return (
    <div className="relative border border-transparent">
      <div className="flex items-center justify-between py-2">
        <div>
          <h1 className="font-semibold text-xl">Welcome {user?.firstName}</h1>
          <p>
            Start learning today!
          </p>
        </div>
        <div className="">
          <Select>
            <SelectTrigger className="p-1 py-0 focus-visible:ring-0 text-sm border-gray-100 text-gray-500">
              <SelectValue placeholder="Sort by: All Categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Environment</SelectItem>
              {/* <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem> */}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex flex-wrap m-auto w-[98%] py-8 justify-between mb-10">
        <CourseModule
          src={"/coursepic1.png"}
          title={"Impacts of climate change"}
          subhead={"Environmental and societal effects of climate change"}
          rating={4}
        />
        <CourseModule
          src={"/coursepic2.png"}
          title={"understanding climate change"}
          subhead={
            "Foundational concepts and causes - exploring climate change basics"
          }
          rating={5}
        />
        <CourseModule
          src={"/coursepic3.png"}
          title={"climate justice and equity"}
          subhead={"Addressing disparities - fairness in climate solutions"}
          rating={3}
        />
      </div>
      <div className="absolute bottom-0 right-1">
        {/* <Pagination>
          <PaginationContent className="">
            <PaginationItem className="size-9 bg-white shadow-sm rounded-md hover:ring-2 hover:ring-defaultgreen hover:border-0 text-gray-400">
              <PaginationLink href="#" className="size-9">1</PaginationLink>
            </PaginationItem>
            <PaginationItem className="size-9 bg-white shadow-sm rounded-md hover:ring-2 hover:ring-defaultgreen hover:border-0 text-gray-400">
              <PaginationLink href="#" className="size-9">2</PaginationLink>
            </PaginationItem>
            <PaginationItem className="size-9 bg-white shadow-sm rounded-md hover:ring-2 hover:ring-defaultgreen hover:border-0 text-gray-400">
              <PaginationLink href="#" className="size-9">3</PaginationLink>
            </PaginationItem>

            <PaginationItem className="size-9 bg-white shadow-sm rounded-full hover:ring-2 hover:ring-defaultgreen hover:border-0 text-gray-400">
              <PaginationEllipsis className="size-9" />
            </PaginationItem>
            <PaginationItem className="size-9 bg-white shadow-sm rounded-md hover:ring-2 hover:ring-defaultgreen hover:border-0 text-gray-400">
              <PaginationLink href="#" className="size-9">12</PaginationLink>
            </PaginationItem>
            <PaginationItem className="size-9 bg-white shadow-sm rounded-md hover:ring-2 hover:ring-defaultgreen hover:border-0 text-gray-400">
              <PaginationLink href="#" className="size-9">13</PaginationLink>
            </PaginationItem>
            <PaginationItem className="size-9 bg-white shadow-sm rounded-md hover:ring-2 hover:ring-defaultgreen hover:border-0 text-gray-400">
              <PaginationLink href="#" className="size-9">14</PaginationLink>
            </PaginationItem>
          </PaginationContent>
        </Pagination> */}
      </div>
    </div>
  );
}
