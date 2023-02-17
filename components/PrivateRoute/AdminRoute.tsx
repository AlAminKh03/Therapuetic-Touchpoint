import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
import Router, { useRouter } from "next/router";
import useAdmin from "../hooks/useAdmin";

const AdminRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading, setLoading } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin(user?.email);

  const router = useRouter();

  if (loading || isAdminLoading) {
    return <p className="relative top-40">Loading...</p>;
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
