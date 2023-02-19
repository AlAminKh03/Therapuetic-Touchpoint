import React from "react";
import Login from "../components/User/Login";
import Navbar from "../components/Navbar";

type Props = {};

const login = (props: Props) => {
  return (
    <div className="relative top-24 pb-10">
      <Login />
    </div>
  );
};
export default login;
