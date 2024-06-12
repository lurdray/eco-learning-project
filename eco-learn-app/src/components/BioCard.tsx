import Image from "next/image";
import Link from "next/link";

import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


export default function BioCard({ src, name, role, instagram, twitter, linked, bio }: { src: any; name: String, role:String, instagram:any, twitter:any, linked:any, bio:any }) {
  return (
    <div className="w-[80%] sm:w-[40%] md:w-[30%] rounded-lg bg-white p-3 space-y-4 my-4 pb-10">
      <div className="relative">
        <Image src={src} alt="" 
        // layout="responsive" 
        className="w-full"
        width={500} height={500} />
      </div>
        <div className="flex flex-col items-center space-y-3">
        <h1 className="font-semibold text-base">{name}</h1>
        <h4 className="text-sm text-gray-500">{role}</h4>
        <div className="flex justify-evenly bg-gray-50 rounded-md w-[80%] md:w-[60%] xl:w-[40%] p-2">
            <Link href={instagram}>
            <FaInstagram className="size-6" />
            </Link>
            <Link href={twitter}>
            <FaLinkedin className="size-6" />
            </Link>
            <Link href={linked}>
            <FaXTwitter className="size-6" />
            </Link>
        </div>
        <div>{bio}</div>
        </div>
    </div>
  );
}
