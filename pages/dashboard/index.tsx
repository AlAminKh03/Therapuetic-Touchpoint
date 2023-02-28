import React from "react";
import PrivateRoute from "../../components/PrivateRoute/PrivateRoute";
import DashboardProtected from "../../components/PrivateRoute/DashboardProtected";
import Link from "next/link";
import { useRouter } from "next/router";
import NestedRoutingNav from "../../components/PrivateRoute/NestedRoutingNav";

type Props = {};

const dashboard = (props: Props) => {
  const router = useRouter();
  return (
    <PrivateRoute>
      <div className="relative top-20 min-h-screen">
        <NestedRoutingNav />
        <DashboardProtected />
      </div>
    </PrivateRoute>
  );
};

export default dashboard;
