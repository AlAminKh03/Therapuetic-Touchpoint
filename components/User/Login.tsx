import * as React from "react";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { MdHealthAndSafety } from "react-icons/md";
import Link from "next/link";
import { AuthContext } from "../Contexts/AuthProvider";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import useToken from "../hooks/useToken";
import Image from "next/image";
import Lottie from "lottie-react";
import loader from "../../public/data/Heart-2.json";

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
      <div className="flex items-center justify-center min-h-screen">
        <div className=" w-[100px] h-[100px]">
          <Lottie animationData={loader} loop={true} />
        </div>
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
    <div className="flex w-fit mx-auto shadow-2xl justify-center items-center rounded-2xl ">
      <div className="relative w-[400px] h-[500px] hidden md:block">
        <Image
          src={"/hospital.jpg"}
          alt={"loginImg"}
          fill
          className="grow border rounded-tl-xl rounded-bl-xl shadow-2xl shadow-gray-100"
        />
      </div>

      <div className=" px-20 py-10 z-[10] bg-white">
        <p className="font-light text-2xl text-center mb-5 uppercase">Login</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="pb-4">
            <label className="uppercase text-sm">Email : </label>
            <br />
            <input
              type="text"
              {...register("email", { required: true })}
              className={`border-2 p-2 outline-none rounded-2xl ${
                errors.email ? "focus:border-red-600" : "focus:border-pink-200"
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
            <label className="uppercase text-sm">Password : </label>
            <br />
            <input
              type="password"
              {...register("password", { required: true, minLength: 6 })}
              className={`border-2  p-2 outline-none rounded-2xl ${
                errors.password
                  ? "focus:border-red-600"
                  : "focus:border-pink-200"
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
                className="cursor-pointer text-pink-700"
              >
                Reset Password
              </Link>
            </label>
          </div>

          <div className="relative">
            <button
              type="submit"
              className=" w-full text-center text-white border bg-pink-600  p-[10px] mt-5  hover:-translate-y-0.5 transition-all ease-in duration-500 rounded-2xl"
            >
              {" "}
              Login
            </button>
            <p className="text-sm pt-2">
              New user?{" "}
              <Link href={"/signup"} className="text-pink-600 font-light">
                {" "}
                Create an account here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
