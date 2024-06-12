"use client";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";

import { FaCheckSquare } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";

import LessonHeader from "@/components/dashboard/LessonHeader";
import { useRouter } from "next/navigation";
import usePeraWallet from "@/hooks/wallet";
import { toast } from "react-toastify";

export default function Lesson() {
  return (
    <div className="w-[100%] space-y-6 px-10 pb-20">
      <LessonHeader
        number={"1"}
        title={"the basics of climate change"}
        subhead="Meaning, history and causes of climate change"
      />
      <div className="space-y-3">
        <div className="flex flex-wrap justify-evenly sm:justify-normal sm:space-x-6 w-[100%] bg-white">
          <Link href={"#overview"} className="block">
            <div className="border-b-2 border-white font-semibold hover:text-defaultgreen hover:border-defaultgreen py-3 px-4">
              <h2>Overview</h2>
            </div>
          </Link>
          <Link href={"#objectives"} className="block">
            <div className="border-b-2 border-white font-semibold hover:text-defaultgreen hover:border-defaultgreen py-3 px-4">
              <h2>Objectives</h2>
            </div>
          </Link>
          <Link href={"#lecture"} className="block">
            <div className="border-b-2 border-white font-semibold hover:text-defaultgreen hover:border-defaultgreen py-3 px-4">
              <h2>Lecture</h2>
            </div>
          </Link>
          <Link href={"#reviews"} className="block">
            <div className="border-b-2 border-white font-semibold hover:text-defaultgreen hover:border-defaultgreen py-3 px-4">
              <h2>Reviews</h2>
            </div>
          </Link>
        </div>
        <div
          id="overview"
          className="px-4 py-8 space-y-4 bg-gray-200 rounded-md"
        >
          <h1 className="font-extrabold text-2xl">Overview</h1>
          <p className="text-gray-500">
            Welcome to your first step in becoming a climate hero!
          </p>
          <p className="text-gray-500">
            This lesson will take you through the fundamentals of climate
            change, including its causes, effects, and the importance of taking
            action. Ready to save the planet?
          </p>
          <p className="text-gray-500">Let{"'"}s dive in!</p>
        </div>
      </div>
      <div
        id="objectives"
        className="px-4 py-8 space-y-4 bg-lightgreen rounded-md"
      >
        <h1 className="font-extrabold text-2xl">Learning Objectives</h1>
        <div className="flex items-center space-x-1">
          <FaCheckSquare className="fill-defaultgreen" />
          <p>Understand what climate change is and why it matter</p>
        </div>
        <div className="flex items-center space-x-1">
          <FaCheckSquare className="fill-defaultgreen" />
          <p>Identify the main causes of climate change</p>
        </div>
        <div className="flex items-center space-x-1">
          <FaCheckSquare className="fill-defaultgreen" />
          <p>
            Recognize the effects of climate change on the environment and human
            life{" "}
          </p>
        </div>
        <div className="flex items-center space-x-1">
          <FaCheckSquare className="fill-defaultgreen" />
          <p>Explore solutions to combat climate change </p>
        </div>
      </div>
      <div id="lecture" className="px-3 py-5 space-y-4">
        <h1 className="font-extrabold text-2xl">What is Climate Change?</h1>
        <div className="relative w-[100%]">
          <Image
            src={"/environmentcollage.svg"}
            alt=""
            className="w-full"
            // layout="responsive"
            width={100}
            height={100}
          />
        </div>
        <p className="text-gray-500">
          Climate change refers to significant changes in global temperatures
          and weather patterns over time. And no, it{"'"}s not just your
          neighbor{"'"}s obsession with the thermostat.
        </p>

        <h1 className="font-extrabold text-2xl">Climate vs Weather</h1>
        <div className="relative w-[100%]">
          <Image
            src={"/climatevsweather.svg"}
            alt=""
            className="w-full"
            // layout="responsive"
            width={100}
            height={100}
          />
        </div>
      </div>
      <p>
        Weather is what you see outside your window (sunny, rainy, windy) ,
        while climate is what you pack for a two-week vacation. Think of weather
        as your mood and climate as your personality.{" "}
      </p>

      <h1 className="font-extrabold text-2xl">Climate vs Weather</h1>
      <p>
        From the Ice Age 🧊 to our current age of {'"'}too many ice cubes in our
        drinks,{'"'} the Earth{"'"}s climate has seen it all.
      </p>

      <h1 className="font-extrabold text-2xl">Causes of Climate Change:</h1>
      <div className="relative w-[100%]">
        <Image
          src={"/videoplayerpollution.svg"}
          alt=""
          className="w-full"
          // layout="responsive"
          width={100}
          height={100}
        />
      </div>
      <div className="space-y-4">
        <div>
          <h4 className="font-extrabold text-md">
            Greenhouse Gases and Their Sources:
          </h4>
          <p>
            Greenhouse gases, like carbon dioxide and methane, trap heat in the
            atmosphere. It{"'"}s like your car on a hot day, but for the entire
            planet.{" "}
          </p>
        </div>

        <div>
          <h4 className="font-extrabold text-md">
            Human Activities Contributing to Climate Change
          </h4>
          <p>
            Our love for cars, factories, and deforestation is doing more than
            just giving us cool gadgets and burgers. It{"'"}s heating up the
            planet faster than a microwave pizza.
          </p>
        </div>

        <div>
          <h4 className="font-extrabold text-md">Natural Factors:</h4>
          <p>
            While volcanic eruptions and solar variations ☀️ have their moments,
            they{"'"}re like the cameo appearances in the long-running soap
            opera of human-induced climate change.
          </p>
        </div>
      </div>
      <div id="reviews" className="px-4 py-8 space-y-4">
        <h1 className="font-extrabold text-2xl">Reviews</h1>
      </div>
      <div className="px-3 my-2">
        <Button className="bg-defaultgreen text-white w-[100%] space-x-2 flex py-2">
          <FaCheck className="" />
          <Link href="/dashboard/quizzes/1">
            <h4>Mark as completed</h4>
          </Link>
        </Button>
      </div>
    </div>
  );
}
