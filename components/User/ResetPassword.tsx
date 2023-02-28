import React, { useContext, useState } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
import Swal from "sweetalert2";
import Lottie from "lottie-react";
import loader from "../../public/data/Heart-2.json";

type Props = {};
const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 5000,
  timerProgressBar: true,
});

const ResetPassword = (props: Props) => {
  const { loading, setLoading, resetPassword } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className=" w-[200px] h-[200px]">
          <Lottie animationData={loader} loop={true} />
        </div>
      </div>
    );
  }
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const emailInput = form.querySelector<HTMLInputElement>(
      'input[name="email"]'
    );
    console.log(emailInput);
    if (emailInput) {
      const email = emailInput.value;

      Promise.resolve(resetPassword(email))
        .then((result) => {
          console.log(result);
          Toast.fire({
            icon: "success",
            title: `Please Check Your Email`,
          });
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          Toast.fire({ icon: "error", title: `${err.message}` });
          setLoading(false);
        });
    }
  };
  return (
    <div className="relative top-40 ">
      <form
        onSubmit={handleSubmit}
        className="min-w-screen mb-[320px] flex-col flex justify-center items-center"
      >
        <label htmlFor="Email" className="pr-48 pb-3 uppercase font-light">
          Email :
        </label>
        <input
          type="email"
          name="email"
          className="p-3 outline-none border border-green"
        />
        <button
          type="submit"
          className="p-2 bg-green-500 text-white m-2 w-fit hover:bg-white hover:text-black transition-all ease-in duration-300 border border-green-500"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
