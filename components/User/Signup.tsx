import React, { useContext, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { CgNotes } from "react-icons/cg";
import { BsSunFill } from "react-icons/bs";
import { CgTrees } from "react-icons/cg";
import { FaAmbulance } from "react-icons/fa";
import { BsFillPenFill } from "react-icons/bs";
import { BsTreeFill } from "react-icons/bs";
import { MdHealthAndSafety } from "react-icons/md";
import { BsFillShieldFill } from "react-icons/bs";
import Link from "next/link";
import { AuthContext } from "../Contexts/AuthProvider";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import useToken from "../hooks/useToken";
import Image from "next/image";
import Lottie from "lottie-react";
import loader from "../../public/data/Heart-2.json";

interface InputsProps {
  name: string;
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

const Signup = () => {
  const [createdUserEmail, setCreatedUserEmail] = useState<string>("");
  const [token] = useToken(createdUserEmail);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputsProps>();

  // importing essentials from useContext
  const { createUser, manageUser, user, loading, setLoading } =
    useContext(AuthContext);
  const router = useRouter();

  if (token) {
    router.push("/");
  }

  // form submit
  const onSubmit: SubmitHandler<InputsProps> = (data) => {
    Promise.resolve(createUser(data.email, data.password))
      .then((result) => {
        const user = result.user;
        console.log(result);
        const userInfo = {
          displayName: data.name,
        };
        Promise.resolve(manageUser(userInfo))
          .then((result) => {
            saveUser(data.name, data.email);
            setLoading(false);
            Toast.fire({
              icon: "success",
              title: `$account created successfully`,
            });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        setLoading(false);
        Toast.fire({ icon: "error", title: `${err.message}` });
        console.log(err);
      });
  };

  // postng credintial to backend
  const saveUser = (name: string, email: string) => {
    const user = {
      name,
      email,
    };
    fetch("https://thearpuetic-touchpoint-server-ppfa.vercel.app/user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCreatedUserEmail(email);
      });
  };
  // loading state
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className=" w-[200px] h-[200px]">
          <Lottie animationData={loader} loop={true} />
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="flex w-fit mx-auto shadow-2xl justify-center items-center rounded-2xl">
        <div className="relative w-[430px] h-[500px] hidden md:block">
          <p className=" absolute top-36 left-3 font-light text-white text-lg text-center z-10 ">
            Welcome to
          </p>
          <p className="font-bold top-44 left-3 absolute text-white text-lg text-center  uppercase z-10">
            Therapeutic Touchpoint
          </p>
          <Image
            src={"/signin.jpg"}
            alt={"loginImg"}
            fill
            className="grow border rounded-tl-xl rounded-bl-xl shadow-2xl shadow-pink-100"
          />
        </div>
        <div className="px-20 py-10 z-[10] bg-white">
          <p className="font-light text-xl text-center mb-5 ">
            Please Register
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className=" z-[1]">
            <div className="pb-2">
              <label className="uppercase text-xs">Name : </label>
              <br />
              <input
                type="text"
                {...register("name", { required: true, minLength: 3 })}
                className={`border-2 p-2 outline-none rounded-2xl ${
                  errors.name
                    ? "focus:border-red-500"
                    : "focus:border-green-500"
                }`}
              />
              {errors.name?.type === "required" && (
                <p className="text-red-600 text-center text-xs font-light">
                  {" "}
                  Please fillup the name Input
                </p>
              )}
            </div>
            <div className="pb-2">
              <label className="uppercase text-xs">Email : </label>
              <br />
              <input
                type="text"
                {...register("email", { required: true })}
                className={`border-2 p-2 outline-none rounded-2xl ${
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
              <label className="uppercase text-xs">Password : </label>
              <br />
              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                })}
                className={`border-2 p-2 outline-none  rounded-2xl ${
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
                  Insert atleast 6 character
                </p>
              )}
            </div>
            <div className="flex justify-center items-center flex-col">
              <button
                type="submit"
                className="w-full text-center text-white border bg-black p-[10px] mt-5  hover:-translate-y-0.5 transition-all ease-in duration-500 rounded-2xl"
              >
                {" "}
                signup
              </button>
              <p className="text-sm pt-2">
                Already have an account?{" "}
                <Link href={"/login"} className="text-green-600 font-light">
                  {" "}
                  Login{" "}
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
