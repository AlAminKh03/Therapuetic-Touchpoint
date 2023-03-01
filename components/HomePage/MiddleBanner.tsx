import React from "react";
import { RxClock } from "react-icons/rx";
import { CiLocationOn } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { CiMoneyCheck1 } from "react-icons/ci";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

type Props = {};

const MiddleBanner = (props: Props) => {
  return (
    // <div className="relative grid grid-cols-3 md:flex items-center justify-center mb-12 h-48 z-[4] border-b-2 ">
    //   <div className="max-w-38 shrink mx-auto flex flex-col items-center hover:text-gray-500 ease-in duration-300">
    //     <RxClock className="text-3xl  " />
    //     <p className="text-xs py-3">9 AM - 10 PM</p>
    //   </div>
    // {/* <div className='max-w-38  mx-auto flex flex-col items-center justify-center hover:text-gray-500 ease-in duration-300'>
    //       <CiLocationOn className='text-3xl  '/>
    //       <p className='text-xs pt-3 text-center'>THERAPEUTIC TOUCHPOINT</p>
    //       <p className='text-xs text-center'>AVENUE-5,MIRPUR 11, DHAKA</p>
    //   </div> */}
    // <div className="max-w-38   mx-auto flex flex-col items-center hover:text-gray-500 ease-in duration-300">
    //   <CiPhone className="text-3xl  " />
    //   <p className="text-xs pt-3 text-center">
    //     01785676641 <br />
    //     (toll free) 24/7{" "}
    //   </p>
    // </div>
    // <div className="max-w-38 shrink mx-auto hidden md:block  hover:text-gray-100 ease-in duration-500">
    //   <div className="flex flex-col items-center">
    //     <CiMoneyCheck1 className="text-3xl  " />
    //     <p className="text-xs py-3">Payment & Refund</p>
    //   </div>
    // </div>
    // </div>
    <div className="relative grid grid-cols-1 md:grid-cols-3 m-8">
      <div className="flex flex-col items-center my-auto gap-8">
        {" "}
        <div className="max-w-38 shrink mx-auto flex flex-col items-center hover:text-gray-500 ease-in duration-300">
          <RxClock className="text-3xl  " />
          <p className="text-xs py-3">9 AM - 10 PM</p>{" "}
        </div>
        <div className="max-w-38  mx-auto flex flex-col items-center justify-center hover:text-gray-500 ease-in duration-300">
          <CiLocationOn className="text-3xl  " />
          <p className="text-xs pt-3 text-center">THERAPEUTIC TOUCHPOINT</p>
          <p className="text-xs text-center">AVENUE-5,MIRPUR 11, DHAKA</p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center m-5">
        <div className="justify center items-center">
          <p className="font-xl">
            This is how{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 uppercase  font-bold">
              therapuetic touchpoint
            </span>{" "}
            works
          </p>
        </div>
        <div className="jutify-center  items-center">
          <Image
            src="/community.png"
            alt="community pic"
            width={400}
            height={400}
          ></Image>
        </div>
        <Link
          href="/appointment"
          className="uppercase px-12  p-4 items-center border bg-black text-white  mt-4 hover:translate-x-1 transition-all ease-in duration-500 flex justify-evenly gap-2"
        >
          Discover More <BsArrowRight className="textwhite" />
        </Link>
      </div>
      <div className="flex flex-col items-center my-auto gap-8">
        <div className="max-w-38   mx-auto flex flex-col items-center hover:text-gray-500 ease-in duration-300">
          <CiPhone className="text-3xl  " />
          <p className="text-xs pt-3 text-center">
            01785676641 <br />
            (toll free) 24/7{" "}
          </p>
        </div>
        <div className="max-w-38 shrink mx-auto block  hover:text-gray-500 ease-in duration-500">
          <div className="flex flex-col items-center">
            <CiMoneyCheck1 className="text-3xl  " />
            <p className="text-xs py-3">Payment & Refund</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleBanner;
