import Link from "next/link";
import React from "react";
import { FaFacebookSquare, FaTwitter } from "react-icons/fa";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="mt-28 md:mx-14 bg-gray-50 p-[70px]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
        <div>
          <Link href="/" className="uppercase">
            Therapeutic
            <br />
            touchpoint
            <br />
            .com
          </Link>
        </div>
        <div>
          <label htmlFor="email">
            <span className="text-xs uppercase mb-3">Email Address</span> <br />
            <input
              type="email"
              name="email"
              id="email"
              className="border py-4 outline-none px-14 bg-gray-100 w-[254px] md:w-fit"
            />
          </label>
          <br />
          <button className="mt-4 bg-black text-white text-center px-[6.10rem] py-4 hover:-translate-y-0.5 transition-all ease-in duration-500">
            Receive health tips
          </button>
        </div>
        <div>
          <p className="text-center">Social Networks</p>
          <div className="flex justify-center gap-6 mt-3">
            <Link
              href="https://www.facebook.com/profile.php?id=100008742093722 "
              target="_blank"
            >
              <FaFacebookSquare className="text-center text-xl hover:text-blue-600 cursor-pointer" />
            </Link>
            <FaTwitter className="text-center text-xl hover:text-blue-600 cursor-pointer" />
          </div>
          <div className="mt-5 flex justify-center">
            <Link href="#" className="px-3 text-xs">
              privacy policy
            </Link>
            <Link href="#" className="px-3 text-xs">
              Returns policy
            </Link>
            <Link href="#" className="px-3 text-xs">
              Terms of service
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
