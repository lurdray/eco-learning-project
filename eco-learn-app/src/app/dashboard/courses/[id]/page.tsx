import LessonModule from "@/components/dashboard/LessonModule";

import { FaArrowLeftLong } from "react-icons/fa6";


export default function Course({ params }: { params: { id: string } }) {
  const courseId = params.id;

  return (
    <div className="relative ">
      <div className="flex items-center justify-between py-2">
        <div>
          <h1 className="font-semibold text-xl">Understanding Climate Change</h1>
          <p>
            Review and complete quizzes to test your knowledge and earn rewards.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap m-auto w-[98%] py-8 gap-5">
          <LessonModule lesson={"1"} value={"50"} subhead={"the basics of climate change"} note={"Meaning, history, causes of climate change"} />
          <LessonModule lesson={"2"} value={"80"} subhead={"effects of climate change"} note={"Impact of climate change on weather patterns"} />
          {/* <LessonModule lesson={"3"} value={"100"} subhead={"The role of science and data"} note={"Climate models and the role of data collection in understanding climate trends"} />
          <LessonModule lesson={"3"} value={"100"} subhead={"The role of science and data"} note={"Climate models and the role of data collection in understanding climate trends"} />
          <LessonModule lesson={"1"} value={"50"} subhead={"the basics of climate change"} note={"Meaning, history, causes of climate change"} />
          <LessonModule lesson={"1"} value={"50"} subhead={"the basics of climate change"} note={"Meaning, history, causes of climate change"} /> */}
      </div>
    </div>
  );
}
