import Header from "@/components/Header";
import BioCard from "@/components/BioCard";
import Footer from "@/components/Footer";

import Image from "next/image";

export default function AboutUs() {
  return (
    <main>
      <div className="">
        <Header />
        <div className="p-5 md:p-20 py-20 flex flex-col md:flex-row justify-evenly lg:justify-center relative overflow-hidden">
          <div className="text-center w-[90%] m-auto md:mx-0 md:w-[40%]">
            <h1 className="text-5xl font-bold">About</h1>
            <div className="m-auto">
              <Image
                src={"/eco-logo.png"}
                alt="Image"
                className="max-w-sm w-full m-auto"
                width={1000}
                height={1000}
              />
            </div>
          </div>
          <div className="w-[80%] m-auto md:mx-0 md:w-[40%] pb-16">
            <p className="text-xl max-w-2xl">
              We are a passionate team of blockchain developers, full-stack
              software engineers, product managers, designers,
              environmentalists, and geographers dedicated to creating engaging
              climate education.
            </p>

            <p className="text-xl max-w-2xl mt-5">
              Our mission is to make learning about climate change accessible
              and fun, empowering the next generation to take action for a
              sustainable future.
            </p>
            <p className="text-xl max-w-2xl mt-5">
              By combining our diverse expertise, we aim to build innovative
              tools that inspire students to understand and address climate
              issues.
            </p>
          </div>
          <div className="absolute -z-10 -bottom-[50em] bg-custom-lightgray right-[10em] rotate-[60deg] w-[40em] h-[100em]"></div>
          {/* <div className="absolute -z-10 -bottom-[110em] right-[15em] w-[45em] rotate-[60deg] md:h-[210em] xl:-bottom-[100em] xl:right-[0em] xl:rotate-[65deg] xl:w-[37em] xl:h-[205em] bg-custom-lightgray"></div> */}
          <div className="absolute -z-10 -bottom-[50em] right-[0em]">
            <div className="relative ">
              <Image
                src={"/shadow1.svg"}
                alt=""
                // layout="responsive"
                className="w-full"
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
      </div>
      <section className=" flex flex-col bg-gradient-to-b from-gradientdark to-gradientlight items-center justify-center gap-10 p-10 py-20 space-y-5">
        <div className="relative w-[70%] -mt-36">
          <Image
            src={"/groupphoto.png"}
            alt=""
            // layout="responsive"
            className="w-full"
            width={500}
            height={500}
          />
        </div>
        <div className="text-center w-[62%]">
          <h1 className="text-5xl text-white font-semibold">Meet the Team</h1>
          <p className="text-white">
            Our vision is to become the leading platform for climate change
            education by combining fun, interactivity, and rewards to foster
            environmental awareness and action
          </p>
        </div>
        <div className="flex flex-wrap justify-evenly w-[90%]">
          <BioCard
            src={"/eno.png"}
            name={"Eno Peters"}
            role={"Founder / Business developer"}
            instagram={"https://www.instagram.com/theenopeters?igsh=MTVrNHlhdThjbjJodQ=="}
            twitter={"https://x.com/enogift6?t=jWMspnjSAXoOLVWOT-KB2A&s=09"}
            linked={"https://www.linkedin.com/in/eno-peters?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}
            bio={
              <div className="text-gray-500 text-sm px-2">
                <p>
                  Eno is an Edtech specialist with over 7 years of experience, a
                  business developer, and a product manager with expertise in
                  instructional design and curriculum development.
                </p>
                <br />
                <p>
                  She holds a Mini MBA from Tekedia Institute, Boston, and is a
                  Climatech advocate raising awareness for sustainable IT
                  products.
                </p>
                <br />
                <p>
                  She has collaborated with organizations such as Tech4Dev,
                  Varsityscape, and Entrepreneur Game USA.
                </p>
              </div>
            }
          />
          <BioCard
            src={"/gabriella.png"}
            name={"Gabriella Echebiri"}
            role={"Product Designer"}
            instagram={"https://www.instagram.com/gabriella_blu.e?"}
            twitter={"https://x.com/yoursdesignerly?s=21"}
            linked={"https://www.linkedin.com/in/gabriella-echebiri?"}
            bio={
              <div className="text-gray-500 text-sm px-2">
                <p>
                  Gabriella Echebiri is a Product Designer with a diverse
                  background and a passion for innovation in the tech industry.
                </p>
                <br />
                <p>
                  With over 4,000 LinkedIn connections, she actively shares
                  design insights widely. Noteworthy achievements include
                  leading teams to create impactful products and representing a
                  global group of 300+ women.
                </p>
                <br />
                <p>
                  She is an avid reader and spearheads a thriving book club with
                  50 members across 8 countries, driven by her passion for
                  continuous learning and sharing new ideas.
                </p>
              </div>
            }
          />
          <BioCard
            src={"/judith.png"}
            name={"Judith Yusuf"}
            role={"Frontend Developer"}
            instagram={"https://www.instagram.com/judithyusuf__/"}
            twitter={"https://x.com/judithiscoding"}
            linked={"https://www.linkedin.com/in/judith-yusuf-21u14n/"}
            bio={
              <div className="text-gray-500 text-sm px-2">
                <p>
                  Judith is a front-end developer with over three years of
                  experience, skilled in JavaScript and JavaScript frameworks.
                  She excels at creating responsive, aesthetically pleasing, and
                  user-friendly webpages.
                </p>
                <br />
                <p>
                  As a curious individual, she is always eager to learn and
                  innovate, bringing creativity and a user-centric approach to
                  every project.
                </p>
                <br />
                <p>
                  She is currently pursuing a bachelor{"'"}s degree in Computer
                  Engineering.
                </p>
              </div>
            }
          />
          <BioCard
            src={"/joshua.png"}
            name={"Joshua Ajagbe"}
            role={"Backend Developer"}
            instagram={"#"}
            twitter={"#"}
            linked={"#"}
            bio={
              <div className="text-gray-500 text-sm px-2">
                <p>
                  Joshua Ajagbe is a seasoned backend software engineer with
                  over 4 years experience in building products across several
                  sectors such as education, health, agriculture, immigration,
                  political, finance, etc.
                </p>
                <br />
                <p>
                  He is also an avid community builder, where he has founded and
                  actively participated in the growth of various tech
                  communities.
                </p>
                <br />
                <p>
                  In addition to backend engineering, he is actively involved in
                  open source tooling and author of multiple npm packages.
                </p>
              </div>
            }
          />
          <BioCard
            src={"/raymond.png"}
            name={"Odiaga Raymond"}
            role={"Block-Chain Developer"}
            instagram={"#"}
            twitter={"http://x.com/@thepythondude"}
            linked={"https://ng.linkedin.com/in/odiaga-raymond"}
            bio={
              <div className="text-gray-500 text-sm px-2">
                <p>
                  Odiaga Raymond is a Python developer with a decade of
                  experience.
                </p>
                <br />
                <p>He is a CTO at helloonions.com and developer at Aibra.io.</p>
                <br />
                <p>
                  At masteringbackend.com, he shares his knowledge of backend
                  development.
                </p>
                <br />
                <p>
                  He holds a Bachelor{"'"}s degree in Physics and is pursuing a
                  Master{"'"}s in Nuclear Physics.{" "}
                </p>
                <br />
                <p>
                  Beyond his interest in Web3 and AI, he is a loving husband and
                  father.
                </p>
              </div>
            }
          />
        </div>
      </section>
      <Footer />
    </main>
  );
}
