import React from "react";
import PrivateRoute from "../../components/PrivateRoute/PrivateRoute";
import DashboardProtected from "../../components/PrivateRoute/DashboardProtected";
import Link from "next/link";

type Props = {};

const dashboard = (props: Props) => {
  return (
    <div className="relative top-20">
      <PrivateRoute>
        <div className="flex items-center justify-center gap-3 ">
          <Link
            href="/dashboard/dashboard1"
            className="border border-black p-2 rounded-full hover:shadow-md active:bg-black active:text-white"
          >
            Dashboard1
          </Link>
          <Link
            href="/dashboard/dashboard2"
            className="border border-black p-2 rounded-full hover:shadow-md active:bg-black active:text-white"
          >
            Dashboard2
          </Link>
          <Link
            href="/dashboard/dashboard3"
            className="border border-black p-2 rounded-full hover:shadow-md active:bg-black active:text-white"
          >
            Dashboard3
          </Link>
        </div>
        <DashboardProtected />
      </PrivateRoute>
    </div>
  );
};

export default dashboard;
