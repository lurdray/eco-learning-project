"use client";

import Image from "next/image";
import { useState } from "react";

import { quizList } from "@/data/quiz";
import { Button } from "../ui/button";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function QuizFrame() {
  const [src1, setSrc1] = useState("/quizframe/greypolygon.svg");
  const [src2, setSrc2] = useState("/quizframe/greypolygon.svg");
  const [src3, setSrc3] = useState("/quizframe/greypolygon.svg");
  const [src4, setSrc4] = useState("/quizframe/greypolygon.svg");

  const router = useRouter();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(-1);

  const question = quizList[0].questions[currentQuestion];

  const handleNextQuestion = () => {
    if (selectedAnswer === -1) {
      toast.error("Please select an answer");
      return;
    }
    if (currentQuestion === quizList[0].questions.length-1) {
      toast.success("Quiz completed");
      router.push("/dashboard/quizzes/1/completed");
      return;
    };
    setCurrentQuestion((prev) => prev + 1);
    setSelectedAnswer(-1);
  };

  return (
    <div className="w-[100%] pb-20 relative">
      <div className="absolute w-[100%]">
        <div className="relative w-[40%] m-auto -mt-20">
          <Image
            src={"/quizbg.png"}
            alt=""
            // layout="responsive"
            className="w-full"
            width={100}
            height={100}
          />
        </div>
      </div>
      <div className="relative w-[100%] md:w-[90%] lg:w-[80%] m-auto text-center flex items-center justify-center">
        <div className="flex items-center">
          <div className="relative hidden md:block">
            <Image
              src={"/quizframe/Divider.svg"}
              alt=""
              // layout="responsive"
              className="w-full"
              width={100}
              height={100}
            />
          </div>
          <div className="relative">
            <Image
              src={"/quizframe/Polygon 3.svg"}
              alt=""
              // layout="responsive"
              className="w-full"
              width={100}
              height={100}
            />
          </div>

          <div className="relative hidden md:block">
            <Image
              src={"/quizframe/Dividers.svg"}
              alt=""
              // layout="responsive"
              className="w-full"
              width={100}
              height={100}
            />
          </div>
        </div>
        <div className="absolute top-0 text-center w-[70%] lg:w-[52%] h-[100%] flex flex-col items-center justify-center">
          <div className="space-y-1 lg:space-y-3 text-sm ">
            <h1 className="font-extrabold font-base md:text-xl text-center">
              {currentQuestion + 1}/5
            </h1>
            <p className="font-sm md:font-base font-semibold text-center">
              {question.question}
            </p>
          </div>
        </div>
      </div>
      <div className="w-[80%] m-auto space-y-6 pt-8">
        <div className="w-[100%] lg:flex justify-between space-y-5">
          <div
            className="w-[70%] sm:w-[90%] md:w-[70%] lg:w-[45%] m-auto lg:m-0 relative flex items-center"
            onMouseEnter={() => setSrc1("/quizframe/smallpoly.svg")}
            onMouseLeave={() => setSrc1("/quizframe/greypolygon.svg")}
            onClick={() => setSelectedAnswer(0)}
          >
            <div className="w-[100%] flex items-center">
              <div className="relative hidden md:block">
                <Image
                  src={"/quizframe/graydivide.svg"}
                  alt=""
                  // layout="responsive"
                  className="w-full"
                  width={100}
                  height={100}
                />
              </div>
              <div className="relative">
                <Image
                  src={selectedAnswer === 0 ? "/quizframe/smallpoly.svg" : src1}
                  alt=""
                  // layout="responsive"
                  className="w-full"
                  width={100}
                  height={100}
                />
              </div>
              <div className="absolute top-0 w-[100%] h-[100%] flex space-x-3 items-center justify-normal pl-10 md:pl-28">
                <h1 className="font-semibold">A:</h1>
                <h1>{question.options[0]}</h1>
              </div>
            </div>
          </div>
          <div
            className="w-[70%] sm:w-[90%] md:w-[70%]  lg:w-[45%] m-auto lg:m-0 relative flex items-center"
            onMouseEnter={() => setSrc2("/quizframe/smallpoly.svg")}
            onMouseLeave={() => setSrc2("/quizframe/greypolygon.svg")}
            onClick={() => setSelectedAnswer(1)}
          >
            <div className="w-[100%] flex items-center">
              <div className="relative">
                <Image
                  src={selectedAnswer === 1 ? "/quizframe/smallpoly.svg" : src2}
                  alt=""
                  // layout="responsive"
                  className="w-full"
                  width={100}
                  height={100}
                />
              </div>
              <div className="relative hidden md:block">
                <Image
                  src={"/quizframe/graydivide.svg"}
                  alt=""
                  // layout="responsive"
                  className="w-full"
                  width={100}
                  height={100}
                />
              </div>
              <div className="absolute top-0 w-[100%] h-[100%] flex space-x-3 items-center justify-normal pl-10">
                <h1 className="font-semibold">B:</h1>
                <h1>{question.options[1]}</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[100% lg:flex justify-between space-y-5">
          <div
            className="w-[70%] sm:w-[90%] md:w-[70%]  lg:w-[45%] m-auto lg:m-0 relative flex items-center"
            onMouseEnter={() => setSrc3("/quizframe/smallpoly.svg")}
            onMouseLeave={() => setSrc3("/quizframe/greypolygon.svg")}
            onClick={() => setSelectedAnswer(2)}
          >
            <div className="w-[100%] flex items-center">
              <div className="relative hidden md:block">
                <Image
                  src={"/quizframe/graydivide.svg"}
                  alt=""
                  // layout="responsive"
                  className="w-full"
                  width={100}
                  height={100}
                />
              </div>
              <div className="relative">
                <Image
                  src={selectedAnswer === 2 ? "/quizframe/smallpoly.svg" : src3}
                  alt=""
                  // layout="responsive"
                  className="w-full"
                  width={100}
                  height={100}
                />
              </div>
              <div className="absolute top-0 w-[100%] h-[100%] flex space-x-3 items-center justify-normal pl-10 md:pl-28">
                <h1 className="font-semibold">C:</h1>
                <h1>{question.options[2]}</h1>
              </div>
            </div>
          </div>
          <div
            className="w-[70%] sm:w-[90%] md:w-[70%]  lg:w-[45%] m-auto lg:m-0 relative flex items-center"
            onMouseEnter={() => setSrc4("/quizframe/smallpoly.svg")}
            onMouseLeave={() => setSrc4("/quizframe/greypolygon.svg")}
            onClick={() => setSelectedAnswer(3)}
          >
            <div className="w-[100%] flex items-center">
              <div className="relative">
                <Image
                  src={selectedAnswer === 3 ? "/quizframe/smallpoly.svg" : src4}
                  alt=""
                  // layout="responsive"
                  className="w-full"
                  width={100}
                  height={100}
                />
              </div>
              <div className="relative hidden md:block">
                <Image
                  src={"/quizframe/graydivide.svg"}
                  alt=""
                  // layout="responsive"
                  className="w-full"
                  width={100}
                  height={100}
                />
              </div>
              <div className="absolute top-0 w-[100%] h-[100%] flex space-x-3 items-center justify-normal pl-10">
                <h1 className="font-semibold">D:</h1>
                <h1>{question.options[3]}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Button
        className="w-[100%] bg-defaultgreen mt-8"
        onClick={() => handleNextQuestion()}
      >
        {currentQuestion === 4 ? "Submit" : "Next Question"}
      </Button>
    </div>
  );
}
