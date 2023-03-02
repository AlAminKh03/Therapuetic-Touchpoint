import Image from "next/image";
import React from "react";
import { FaHeartbeat } from "react-icons/fa";
import { GiHealthNormal } from "react-icons/gi";
import { GiTooth } from "react-icons/gi";
import { FaBone } from "react-icons/fa";

type Props = {};

const Service = (props: Props) => {
  return (
    <div className="mb-12 relative ">
      <div className="border w-80 mx-auto">
        <p className=" text-center font-normal text-xl uppercase p-2">
          Join our service portals
        </p>
      </div>
      <div className="relative  h-[280px] w-[350px] mx-auto">
        <Image
          className="mt-4 animate-spin animation-durationfr"
          src="/portal.png"
          alt="portal img"
          fill
        />
        <div
          className="absolute top-[180px] right-[130px] animate-orbit-container"
          style={{
            animation: "orbit-container 20s linear infinite",
            transformOrigin: "center",
          }}
        >
          <FaHeartbeat className="text-rose-600 text-4xl absolute inset-0 m-auto animate-orbit" />
        </div>
        <div
          className="absolute left-[170px] top-[200px] animate-orbit-container"
          style={{
            animation: "orbit-container 20s linear infinite",
            transformOrigin: "center",
          }}
        >
          <GiHealthNormal className="  text-blue-900 text-4xl absolute inset-0 m-auto animate-orbit" />
        </div>
        <div
          className="absolute top-[120px] left-[180px] animate-orbit-container"
          style={{
            animation: "orbit-container 20s linear infinite",
            transformOrigin: "center",
          }}
        >
          <GiTooth className="  text-yellow-400 text-4xl absolute inset-0 m-auto animate-orbit" />
        </div>
        <div
          className="absolute top-[160px] left-[140px] animate-orbit-container"
          style={{
            animation: "orbit-container 20s linear infinite",
            transformOrigin: "center",
          }}
        >
          <FaBone className="  text-red-400 text-4xl absolute inset-0 m-auto animate-orbit" />
        </div>
      </div>
    </div>
  );
};

export default Service;
