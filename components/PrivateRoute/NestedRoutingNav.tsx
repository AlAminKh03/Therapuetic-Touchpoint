import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import useAdmin from "../hooks/useAdmin";
import { AuthContext } from "../Contexts/AuthProvider";

type Props = {};

const NestedRoutingNav = (props: Props) => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const router = useRouter();
  return (
    <div className="flex items-center justify-center gap-3 ">
      <Link
        href="/dashboard"
        className={`border border-black p-2 rounded-full hover:shadow-md active:bg-black active:text-white ${
          router.pathname === "/dashboard" ? "bg-black text-white" : ""
        }`}
      >
        Dashboard1
      </Link>
      {isAdmin && (
        <Link
          href="/dashboard/managedoctor"
          className={`border border-black p-2 rounded-full hover:shadow-md active:bg-black active:text-white ${
            router.pathname === "/dashboard/manageDoctor"
              ? "bg-black text-white"
              : ""
          }`}
        >
          Manage Doctor
        </Link>
      )}
      {isAdmin && (
        <Link
          href="/dashboard/allUser"
          className={`border border-black p-2 rounded-full hover:shadow-md active:bg-black active:text-white ${
            router.pathname === "/dashboard/allUser"
              ? "bg-black text-white"
              : ""
          }`}
        >
          All User
        </Link>
      )}
    </div>
  );
};

export default NestedRoutingNav;
