import Link from "next/link";

import { Button } from "@/components/ui/button";
import QuizHeader from "@/components/dashboard/QuizHeader";
import QuizFrame from "@/components/dashboard/QuizFrame";

import { FaArrowLeftLong } from "react-icons/fa6";

export default function Quiz({ params }: { params: { id: string } }) {
  const quizNo = params.id;

  return (
    <div className="w-[100%] px-1 space-y-7">
      <div>
        <Button asChild className="px-2 bg-gray-200 hover:bg-defaultgreen">
          <Link href="/dashboard/quizzes">
            <FaArrowLeftLong className="size-8 fill-defaultgreen hover:fill-white" />
          </Link>
        </Button>
      </div>
      <QuizHeader title={"understanding climate change"} />
      <QuizFrame />
    </div>
  );
}
