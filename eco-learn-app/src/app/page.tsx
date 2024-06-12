import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Image from "next/image";
import earthImg from "@/assets/planet-green-earth.svg";

import card1 from "@/assets/cards/Card01.svg";
import card2 from "@/assets/cards/Card02.svg";
import card3 from "@/assets/cards/Card03.svg";

import earningFlow from "@/assets/flow.svg";
import orbitCollage from "@/assets/orbit-collage.svg";

import { GiFist } from "react-icons/gi";
import { BsGlobe } from "react-icons/bs";
import { GiWindTurbine } from "react-icons/gi";

const features = [
  {
    image: "primary-explorers.png",
    name: "Primary Explorers",
    description:
      "Colorful and engaging interface with animated characters and interactive lessons.",
  },
  {
    image: "junior-adventurers.png",
    name: "Junior Adventurers",
    description:
      "More advanced visuals and content with gamified challenges and quizzes.",
  },
  {
    image: "senior-champions.png",
    name: "Senior Champions",
    description:
      "In-depth modules, projects, and discussions on climate science and sustainability.",
  },
];

export default function Home() {
  return (
    <main>
      <div className="">
        <Header />
        <Hero />
      </div>

      <section className="flex flex-col md:flex-row bg-custom-lightgray justify-center gap-10 p-10 py-20">
        <div>
          <h2 className="text-5xl max-w-2xl font-bold">
            Why Climate Education Matters
          </h2>

          <p className="max-w-2xl mt-5">
            Our planet is sending us signals through changing weather patterns,
            rising temperatures, and extreme events. By understanding these
            changes, we can take meaningful action to address these urgent
            challenges.
          </p>

          <div className="mt-5 max-w-lg ">
            <div className="space-y-6">
              <div className="flex gap-5">
                <span className="p-3 bg-white h-fit shadow">
                  <BsGlobe className="text-3xl" />
                </span>
                <div>
                  <h3 className="text-2xl font-bold">Protect Our Planet</h3>
                  <p className="text-sm mt-2 text-gray-500">
                    Understand the profound impact of climate change on our
                    environment. Gain the knowledge to become a responsible
                    steward of our planet.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <span className="p-3 bg-white h-fit shadow">
                  <GiWindTurbine className="text-3xl" />
                </span>
                <div>
                  <h3 className="text-2xl font-bold">
                    Shape a Sustainable Future
                  </h3>
                  <p className="text-sm mt-2 text-gray-500">
                    By educating yourself and taking action, you can contribute
                    to building a more sustainable future for generations to
                    come. Your choices matter.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <span className="p-3 bg-white h-fit shadow">
                  <GiFist className="text-3xl" />
                </span>
                <div>
                  <h3 className="text-2xl font-bold">
                    Become a Climate Champion
                  </h3>
                  <p className="text-sm mt-2 text-gray-500">
                    Learn effective ways to reduce your carbon footprint,
                    influence others, and hold decision-makers accountable for a
                    sustainable future.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Image
            src={earthImg.src}
            alt="Image"
            className="max-w-sm w-full"
            width={1000}
            height={1000}
          />
        </div>
      </section>

      <section className="flex flex-col md:flex-row justify-center bg-custom-lightgray p-5 md:p-20 py-32 ">
        <div>
          <h2 className="text-5xl max-w-2xl font-bold">
            Learn More, Do More and Earn More
          </h2>

          <p className="max-w-md mt-5">
            Test your knowledge and earn rewards with interactive quizzes. Every
            completed quiz brings you closer to making a positive difference.
          </p>

          <Image
            src={card1.src}
            alt="Image"
            className="max-w-sm w-full mt-10"
            width={1000}
            height={1000}
          />
        </div>

        <div className="flex flex-col justify-center items-end relative">
          <Image
            src={card2.src}
            alt="Image"
            className="max-w-sm w-full"
            width={1000}
            height={1000}
          />

          <Image
            src={card3.src}
            alt="Image"
            className="max-w-3xl w-full pl-8 mt-9 relative"
            width={1000}
            height={1000}
          />
        </div>
      </section>

      <section className="bg-[#F9F8FE] p-5 md:p-20">
        <div className="relative max-w-7xl mx-auto">
          <Image
            src={earningFlow.src}
            alt="How you earn"
            className="w-full hidden md:block"
            width={100}
            height={100}
          />
          <div className="md:absolute  max-w-sm top-0 left-0">
            <h2 className="text-5xl font-bold">How You Earn</h2>
            <p className="mt-5 text-sm text-justify max-w-xs">
              Earning tokens is an exciting way to enhance your learning
              experience while gaining rewards for your progress.
            </p>

            <button className="p-3 rounded bg-custom-lime text-white mt-4">
              Start Earning
            </button>
          </div>
        </div>
      </section>

      <section className="p-5 md:p-40">
        {/* <Image
          src={orbitCollage.src}
          alt="How you earn"
          className="w-full"
          width={100}
          height={100}
        /> */}
        <div className="border rounded-full aspect-square p-5 md:p-20 max-w-5xl mx-auto relative">
          <div className="border border-dashed rounded-full aspect- p-5 md:p-20">
            <div className="border rounded-full border-dashed aspect-square text-center grid place-items-center">
              <div>
                <div className="text-center md:text-7xl font-bold">
                  Join the <span className="block">Eco-Learning Community</span>
                </div>
                <p className="max-w-lg mx-auto mt-6">
                  By joining us, you{"'"}ll collaborate with others, share
                  knowledge, and collectively contribute to a more sustainable
                  future.
                </p>

                <button className="p-4 rounded bg-custom-lime text-white font-bold  mt-4">
                  Join the community
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
