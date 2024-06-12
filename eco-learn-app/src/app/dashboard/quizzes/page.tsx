import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import QuizModule from "@/components/dashboard/QuizModule";

export default function Quizzes() {
  return (
    <div>
      <div className="flex items-center justify-between py-2">
        <div>
          <h1 className="font-semibold text-xl">Your Quizzes</h1>
          <p>
            Review and complete quizzes to test your knowledge and earn rewards.
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
      <div className="flex flex-wrap m-auto w-[98%] py-8 justify-between">
        <QuizModule
          status={"Completed"}
          course={"1"}
          lesson={"1"}
          title={"the basics of climate change"}
        ></QuizModule>
        {/* <QuizModule status={"Pending"} course={"1"} lesson={"2"} title={"the greenhouse effect explained"}></QuizModule>
        <QuizModule status={"Completed"} course={"1"} lesson={"1"} title={"the basics of climate change"}></QuizModule>
        <QuizModule status={"Completed"} course={"1"} lesson={"1"} title={"the basics of climate change"}></QuizModule> */}
      </div>
    </div>
  );
}
