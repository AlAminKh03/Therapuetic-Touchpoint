// import React, { useContext, useEffect } from "react";
// import { AuthContext } from "../Contexts/AuthProvider";
// import Router from "next/router";

// const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
//   const { user, loading, setLoading } = useContext(AuthContext);

//   useEffect(() => {
//     setLoading(true);
//     if (!user) {
//       const from = Router.asPath;
//       Router.push(`/login?from=${from}`);
//     }
//   }, [user]);
//   if (user) {
//     return <React.Fragment>{children}</React.Fragment>;
//   }

//   console.log(user);

//   if (loading) {
//     return <p>Loading....</p>;
//   }

//   return null;
// };

// export default PrivateRoute;

import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
import Router from "next/router";
import Lottie from "lottie-react";
import loader from "../../public/data/Heart-2.json";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading, setLoading } = useContext(AuthContext);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!loading) {
      setIsReady(true);
    }
  }, [loading]);

  useEffect(() => {
    if (!user && isReady) {
      const from = Router.asPath;
      Router.push(`/login?from=${from}`);
    }
  }, [user, isReady]);

  if (!isReady) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className=" w-[100px] h-[100px]">
          <Lottie animationData={loader} loop={true} />
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return <React.Fragment>{children}</React.Fragment>;
};

export default PrivateRoute;
