import Link from "next/link";
import React, { useContext, useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { AuthContext } from "./Contexts/AuthProvider";
import Lottie from "lottie-react";
import loader from "../public/data/Heart-2.json";
import { useRouter } from "next/router";

const Navbar = () => {
  const [openMenuNav, setOpenMenuNav] = useState<boolean>(false);
  const { user, signOutUser, loading, setLoading } = useContext(AuthContext);
  const router = useRouter();
  if (loading) {
    return (
      <div className=" min-h-screen flex items-center justify-center felx-cols">
        <div className=" w-[200px] h-[200px]">
          <Lottie animationData={loader} loop={true} />
        </div>
      </div>
    );
  }

  const handleSignOut = () => {
    setLoading(true);
    signOutUser();
  };
  const menuItems = [
    {
      path: "/",
      content: "HOME",
    },
    {
      path: "/appointment",
      content: "APPOINTMENT",
    },
    {
      path: "/about",
      content: "ABOUT",
    },
    {
      path: "/dashboard",
      content: "DASHBOARD",
    },
    {
      path: "/login",
      content: "LOGIN",
    },
  ];
  const filteredMenuItems = user?.uid
    ? menuItems.filter((item) => item.content !== "LOGIN")
    : menuItems;

  return (
    <div className="relative ">
      <div className=" hidden md:block fixed m-0 bg-green-50 min-w-full py-5 px-5 z-40">
        <div className="grid grid-cols-2 ">
          <p className="tracking-widest">THERAPEUTIC TOUCHPOINT</p>
          
          <div className="flex justify-around">
            {filteredMenuItems.map(
              (menuItem: { content: string; path: string }) => {
                return (
                  <div key={menuItem.content}>
                    <Link
                      href={`${menuItem.path}`}
                      className={`text-xs hover:text-gray-400 hover:transition-all ease-in duration-100 tracking-widest cursor-pointer ${
                        menuItem.content === "LOGIN"
                          ? "border bg-black rounded-md text-white p-2 hover:bg-gray-200 hover:text-black"
                          : null
                      } ${
                        router.pathname === menuItem.path
                          ? "border-b border-gray-800 pb-2"
                          : ""
                      }`}
                    >
                      {menuItem.content}
                    </Link>
                  </div>
                );
              }
            )}
            {user?.uid ? (
              <button
                onClick={handleSignOut}
                className="text-xs  hover:transition-all ease-in duration-100 tracking-widest cursor-pointer border hover:bg-red-700  bg-red-500 p-2 text-white rounded-md"
              >
                SIGN OUT{" "}
              </button>
            ) : null}
          </div>
        </div>
      </div>

      {/* for mobile */}
      <div className="sm:block md:hidden fixed z-30 top-0 left-0 w-full ">
        <div className=" flex bg-white sticky min-w-full  px-5 gap-48 py-3 top-0 z-20">
          <div className="grow ">
            <p className="tracking-widest ">THERAPEUTIC TOUCHPOINT</p>
          </div>
          <div className="">
            <CgMenuRight
              className="text-3xl cursor-pointer hover:bg-gray-100   rounded"
              onClick={() => {
                setOpenMenuNav(!openMenuNav);
              }}
            />
          </div>
        </div>
        <div
          className={`bg-white w-full h-screen absolute ${
            openMenuNav ? "top-18" : "top-[-1000px]"
          } text-left pl-6 transition-all ease-in duration-700 delay:400 z-10 `}
        >
          {filteredMenuItems.map(
            (menuItem: { content: string; path: string }) => {
              return (
                <div
                  key={menuItem.content}
                  className="my-10 w-fit"
                  onClick={() => {
                    setOpenMenuNav(!openMenuNav);
                  }}
                >
                  <Link
                    href={`${menuItem.path}`}
                    className="text-xs hover:text-gray-400 hover:transition-all ease-in duration-100 tracking-widest cursor-pointer"
                  >
                    {menuItem.content}
                  </Link>
                </div>
              );
            }
          )}
          {user?.uid ? (
            <button
              onClick={handleSignOut}
              className="text-xs hover:text-gray-400 hover:transition-all ease-in duration-100 tracking-widest cursor-pointer "
            >
              Sign Out{" "}
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
