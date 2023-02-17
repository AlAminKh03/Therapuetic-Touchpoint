import * as React from "react";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { CiHospital1 } from "react-icons/ci";
import { BsSunFill } from "react-icons/bs";
import { CgTrees } from "react-icons/cg";
import { FaAmbulance } from "react-icons/fa";
import { TbTrees } from "react-icons/tb";
import { BsTreeFill } from "react-icons/bs";
import { MdHealthAndSafety } from "react-icons/md";
import { BsFillShieldFill } from "react-icons/bs";
import Link from "next/link";
import { AuthContext } from "../Contexts/AuthProvider";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import useToken from "../hooks/useToken";

interface Inputs {
  email: string;
  password: string;
}

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 5000,
  timerProgressBar: true,
});

const Login = () => {
  const [error, setError] = useState<string>("");
  const [newLoggedInUser, setNewLoggedInUser] = useState<string>("");
  // registerform
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const { signInUser, loading, setLoading } = React.useContext(AuthContext);
  const [token] = useToken(newLoggedInUser);
  const router = useRouter();
  const from = router.query.from || "/";
  if (token) {
    router.push({
      pathname: `${from}`,
    });
  }

  if (loading) {
    return (
      <div className=" min-h-screen flex items-center justify-center felx-col">
        <MdHealthAndSafety className="text-7xl text-green-500 animate-spin animation-durationLd" />
        <p className="tracking-wider text-sm">Logging In ....</p>
      </div>
    );
  }

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    Promise.resolve(signInUser(data.email, data.password))
      .then((result) => {
        const user = result.user;
        setNewLoggedInUser(data.email);
        setLoading(false);
        Toast.fire({ icon: "success", title: `Successfully logged in` });
      })
      .catch((error) => {
        error && Toast.fire({ icon: "error", title: `${error}` });
        console.log(error.message);
        setLoading(false);
        setError(error.message);
      });
  };

  const handleReset = () => {};

  return (
    <div>
      <div className="flex justify-center items-center min-h-[50vh]  gap-2 -mt-5  md:mt-1">
        <div className="relative top-20 mb-20">
          <form onSubmit={handleSubmit(onSubmit)} className="z-[1]">
            <div>
              <label>Email* : </label>
              <br />
              <input
                type="text"
                {...register("email", { required: true })}
                className={`border p-2 outline-none ${
                  errors.email
                    ? "focus:border-red-500"
                    : "focus:border-green-500"
                }`}
              />
              {errors.email?.type === "required" && (
                <p className="text-red-600 text-center text-xs font-light">
                  {" "}
                  Please fillup the email Input
                </p>
              )}
            </div>

            <div>
              <label>Password : </label>
              <br />
              <input
                type="password"
                {...register("password", { required: true, minLength: 6 })}
                className={`border p-2 outline-none ${
                  errors.password
                    ? "focus:border-red-500"
                    : "focus:border-green-500"
                }`}
              />
              {errors.password?.type === "required" && (
                <p className="text-red-600 text-center text-xs font-light">
                  {" "}
                  Please fillup the Password Input
                </p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-600 text-center text-xs font-light">
                  {" "}
                  Please insert atleast 6 chracters
                </p>
              )}
              <br />

              <label className=" text-center text-xs font-light">
                Forget Password?{" "}
                <Link
                  href={"/resetPassword"}
                  className="cursor-pointer text-green-500"
                >
                  Reset Password
                </Link>
              </label>
            </div>

            <div className="flex justify-center items-center flex-col">
              <button
                type="submit"
                className="text-center text-white border bg-green-600 w-1/2 p-[10px] mt-5 hover:bg-white hover:text-black transition-all ease-in duration-300"
              >
                {" "}
                Login
              </button>
              <p className="text-sm pt-2">
                New user?{" "}
                <Link href={"/signup"} className="text-green-600 font-light">
                  {" "}
                  Create a account here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
