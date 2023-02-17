import React from "react";
import NestedRoutingNav from "../../components/PrivateRoute/NestedRoutingNav";
import PrivateRoute from "../../components/PrivateRoute/PrivateRoute";
import { SubmitHandler, useForm } from "react-hook-form";
import AdminRoute from "../../components/PrivateRoute/AdminRoute";
import { useQuery } from "@tanstack/react-query";

interface InputsProps {
  name: string;
  email: string;
  appointmentsName: string;
  image: string;
  bloodGroup: string;
}

interface appointmentsNameProps {
  name: string;
  _id: string;
}

const managedoctor = () => {
  const ImageHostKey = process.env.NEXT_PUBLIC_IMAGE_BB_KEY;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputsProps>();

  const { data: appointmentsNames, isLoading } = useQuery({
    queryKey: ["names"],
    queryFn: async () => {
      const names = await fetch("http://localhost:8000/appointmentsName");
      const data = await names.json();
      return data;
    },
  });
  if (isLoading) {
    return <p>loading.....</p>;
  }
  const onSubmit: SubmitHandler<InputsProps> = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${ImageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        if (imageData.success) {
          const doctor = {
            name: data.name,
            email: data.email,
            appointmentsName: data.appointmentsName,
            imageUrl: imageData.data.url,
          };

          fetch("");
        }
      });
  };
  return (
    <PrivateRoute>
      <AdminRoute>
        <div className="relative top-20">
          <NestedRoutingNav />
        </div>
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
                  <label>Section :</label>
                  <br />
                  <select {...register("appointmentsName", { required: true })}>
                    {appointmentsNames.map(
                      (appointmentsName: appointmentsNameProps) => {
                        return (
                          <React.Fragment key={appointmentsName._id}>
                            <option>{appointmentsName.name}</option>
                          </React.Fragment>
                        );
                      }
                    )}
                  </select>
                </div>
                <div>
                  <label>Image* : </label>
                  <br />
                  <input
                    type="file"
                    {...register("image", { required: true })}
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
      </AdminRoute>
    </PrivateRoute>
  );
};

export default managedoctor;
