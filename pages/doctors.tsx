import React from "react";
import AllDoctors from "../components/Doctors/AllDoctors";

type Props = {};

const doctors = (props: Props) => {
  return (
    <div className="relative top-20">
      <AllDoctors />
    </div>
  );
};

export default doctors;
