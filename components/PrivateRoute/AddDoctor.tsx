import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface InputsProps {
  name: string;
  email: string;
  section: string;
  image: string;
  bloodGroup: string;
}
const AddDoctor = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputsProps>();
  const onSubmit: SubmitHandler<InputsProps> = (data) => {};
  return (
    <div>
      <div className="flex justify-center items-center min-h-[50vh]  ">
        <div className="relative top-20 mb-20">
          <form onSubmit={handleSubmit(onSubmit)} className=" z-[1]">
            <div>
              <label>Name* : </label>
              <br />
              <input
                type="text"
                {...register("name", { required: true, minLength: 3 })}
                className={`border p-2 outline-none ${
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
              <label>Section : </label>
              <br />
              <input
                type="password"
                {...register("section", {
                  required: true,
                })}
                className={`border p-2 outline-none ${
                  errors.section
                    ? "focus:border-red-500"
                    : "focus:border-green-500"
                }`}
              />
              {errors.section?.type === "required" && (
                <p className="text-red-600 text-center text-xs font-light">
                  {" "}
                  Please fillup the Password Input
                </p>
              )}
              {errors.section?.type === "pattern" && (
                <p className="text-red-600 text-center text-xs font-light">
                  {" "}
                  Insert atleast One capital letter one small letter <br />
                  and one special character[!@#$%^&*]
                </p>
              )}
            </div>
            <div className="flex justify-center items-center flex-col">
              <button
                type="submit"
                className="text-center text-white border bg-green-600 w-1/2 p-[10px] mt-5 hover:bg-white hover:text-black transition-all ease-in duration-300"
              >
                {" "}
                ADD
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddDoctor;
