import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
import Router, { useRouter } from "next/router";
import useAdmin from "../hooks/useAdmin";
import Lottie from "lottie-react";
import loader from "../../public/data/Heart-2.json";

const AdminRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading, setLoading } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin(user?.email);

  const router = useRouter();

  if (loading || isAdminLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className=" w-[200px] h-[200px]">
          <Lottie animationData={loader} loop={true} />
        </div>
      </div>
    );
  }

  if (user && isAdmin) {
    return <React.Fragment>{children}</React.Fragment>;
  }
  if (isAdmin === false) {
    router.push("/");
  }
  return null;
};

export default AdminRoute;
