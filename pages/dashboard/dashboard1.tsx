import React from "react";
import NestedRoutingNav from "../../components/PrivateRoute/NestedRoutingNav";
import PrivateRoute from "../../components/PrivateRoute/PrivateRoute";

type Props = {};

const dashboard1 = (props: Props) => {
  return (
    <PrivateRoute>
      <div className="relative top-20">
        <NestedRoutingNav />
      </div>
    </PrivateRoute>
  );
};

export default dashboard1;
