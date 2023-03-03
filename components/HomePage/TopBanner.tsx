import Image from "next/image";
import Link from "next/link";
import React from "react";
import hero from "../public/sofa.jpg";
import { BsArrowRight } from "react-icons/bs";
import { FaGitSquare, FaGithub } from "react-icons/fa";

type Props = {};

const TopBanner = (props: Props) => {
  return (
    // <div className='flex relative items-center justify-center max-w-screen h-screen mb-5 bg-fixed bg-center bg-cover z-[4] '>
    //     <Image src="/dentist.jpg" alt="hero Img" fill/>
    //     <div className='absolute top-0 left-0 bottom-0 right-0 bg-black/40 z-[2]'/>
    //     <div className='text-white lg:ml-[-50rem]  z-[2]'>
    //        <div className='flex'>
    //        <h1 className='text-6xl font-extralight grow shrink'>Be sitted <br/>  Be setteled</h1>
    //        </div>
    //         <p className='py-8'>At your service </p>
    //         <Link href="/appointment" className='px-8 py-4  bg-white text-black hover:bg-black hover:text-white hover:translate-x-1 transition-all ease-in duration-300'>Book your appointment </Link>
    //     </div>
    // </div>
    <div className=" grid grid-cols-1 md:grid-cols-2 relative items-center justify-around max-w-screen h-screen mb-5 bg-fixed ">
      <div>
        <div className=" flex flex-col sm:pt-10 md:pt-3 justify-center items-center pl-10 ">
          <div className="">
            <Image
              src="/tott-4.png"
              alt="Hero Image"
              width={300}
              height={300}
            ></Image>
          </div>
          <div className="hidden lg:block absolute bottom-[10rem] left-[6rem]  -z-10">
            <Image
              src="/bandaid.png"
              alt="Hero Image"
              width={120}
              height={120}
              className=" transform -rotate-[90deg]"
            ></Image>
          </div>
          <h1 className="font-extrabold text-3xl tracking-wide ">
            Don&rsquo;t just fall, be seated and Experience the{" "}
            <span className="text-transparent   bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600  font-bold ">
              Healing
            </span>{" "}
            Power of Therapeutic Touchpoint
          </h1>
          <h3 className="text-md tracking-wide">
            We&rsquo;re a health organization dedicated to improving your
            physical, mental, and emotional well-being.
          </h3>
        </div>
        <div className="flex justify-start ml-6">
          <div>
            <Link
              href="/appointment"
              className="uppercase rounded-xl py-2 px-2 items-center border bg-black text-white  mt-4 hover:translate-x-1 transition-all ease-in duration-500 flex justify-evenly gap-2"
            >
              Join Now <BsArrowRight className="textwhite" />
            </Link>
          </div>
          <div className=" ml-2 py-4">
            <Link
              href="https://github.com/AlAminKh03/Therapuetic-Touchpoint"
              target="_blank"
              className="flex items-center border bg-transparent p-2 rounded-xl"
            >
              {" "}
              source code
              <FaGithub className=" ml-2 text-center text-xl hover:text-blue-600 cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>
      <div className="md:flex justify-end hidden">
        <Image
          src="/appointment-3.png"
          alt="Hero Image"
          width={600}
          height={600}
          className="flex items-end mt-20"
        ></Image>
      </div>
    </div>
  );
};

export default TopBanner;
