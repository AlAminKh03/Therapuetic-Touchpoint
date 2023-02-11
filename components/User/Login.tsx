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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const [error, setError] = useState<string>("");

  const { signInUser, loading, setLoading } = React.useContext(AuthContext);

  if (loading) {
    return (
      <div className=" min-h-screen flex items-center justify-center felx-col">
        <MdHealthAndSafety className="text-7xl text-green-500 animate-spin animation-durationLd" />
        <p className="tracking-wider text-sm">Logging In ....</p>
      </div>
    );
  }

  const router = useRouter();
  const from = router.query.from || "/";

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    Promise.resolve(signInUser(data.email, data.password))
      .then((result) => {
        const user = result.user;
        Toast.fire({ icon: "success", title: `Successfully logged in` });
        router.push({
          pathname: `${from}`,
        });
        setLoading(false);
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
      <div className="grid sm:grid-cols-1 md:grid-cols-2 pb-[40px]">
        <div className="relative hidden md:block">
          <BsSunFill className="text-7xl text-red-500 absolute top-20 left-20 animate-spin animation-durationfr" />
          <CiHospital1 className="text-[15rem]  text-blue-500 absolute top-28 left-48 z-10" />
          <MdHealthAndSafety className="text-5xl  text-green-700 absolute top-20 left-72" />
          <CgTrees className="text-7xl text-green-600 absolute top-72 left-44 z-20" />

          <BsTreeFill className="text-7xl text-green-600 absolute top-72 left-96 z-20" />
          <div className="absolute top-72 left-20 left-15 w-[250px] h-[300px] transition-all duration-[5s] ease-in-out transform hover:translate-x-full z-10">
            <FaAmbulance className="text-5xl text-green-900 " />
          </div>
          <TbTrees className="text-7xl text-green-600 absolute top-60 left-[390px] " />
        </div>
        <div className="relative top-20 mb-20">
          <div className="flex justify-center items-center">
            <BsFillShieldFill className="absolute text-[400px] text-green-50 justify-center md:left-[30px] lg:left-[135px] -top-5" />
          </div>
          <div className="flex justify-center items-center min-h-[50vh]  gap-2 -mt-5  md:mt-1">
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
    </div>
  );
};

export default Login;
