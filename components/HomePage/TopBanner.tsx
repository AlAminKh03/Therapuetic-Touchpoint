import Image from "next/image";
import Link from "next/link";
import React from "react";
import hero from "../public/sofa.jpg";

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
    <div className=" grid grid-cols-2 relative items-center justify-around max-w-screen h-screen mb-5 bg-fixed ">
      <div className=" flex flex-col  justify-center items-center pl-10 ">
        <div className="">
          <Image
            src="/tott-4.png"
            alt="Hero Image"
            width={300}
            height={300}
            className="flex items-end mt-20"
          ></Image>
        </div>
        <div className=" absolute custom-img bg-cover w-[300px] h-[200px] -z-10"></div>
        <h1 className="font-extrabold text-5xl ">
          Experience the{" "}
          <span className="text-transparent   bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600  font-bold">
            Healing
          </span>{" "}
          <br />
          Power of Therapeutic Touchpoint
        </h1>
        <h3 className="text-md">
          We&rsquo;re a health organization dedicated to improving your
          physical, mental, and emotional well-being.
        </h3>
      </div>
      <div className="flex justify-end">
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
