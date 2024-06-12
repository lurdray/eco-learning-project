import { Button } from "../ui/button";
import { Progress } from "@/components/ui/progress";

export default function CourseProgress({
  course,
  title,
  progress,
}: {
  course: String;
  title: String;
  progress: number;
}) {
const value = ((progress/8) * 100)
  return (
    <div className="m-auto py-2 lg:flex items-center justify-between space-y-3 lg:space-y-0">
      <div className="">
        <h1 className="text-base font-semibold">Course {course}</h1>
        <h3 className="text-sm text-gray-500">{title}</h3>
      </div>
      <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-10">
        <div className="flex text-center items-center space-x-4">
        <Progress value={value} className="w-[150px] md:w-[90px] xl:w-[200px]" color="red" />
        <h3>{progress}/8</h3>
        </div>
        <div className="">
            <Button className="bg-defaultgreen text-white hover:bg-lime-600">Continue</Button>
        </div>
      </div>
    </div>
  );
}
