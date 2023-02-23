import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOut from "../../../components/Payment/CheckOut";
import Image from "next/image";

const stripePromise = loadStripe(
  "pk_test_51MWAjzJ7hs3mHdQrWKZY7V1DoLVxQ05DtW9fIAQD267DTekGdqsUQrDQkRbMPCA3Q7f8ZljNyyt1UxZhkfTbtfWJ00WXSwPJZN"
);
export interface ClientInfromationProps {
  _id: string;
  ServiceFor: string;
  AppointmentDate: string;
  AppointmentTime: string;
  patient: string;
  email: string;
  phoneNumber: string;
  address: string;
  price: number;
  paid: boolean;
}

const Id = () => {
  const [clientInformation, setClientInformation] =
    useState<ClientInfromationProps>();
  const router = useRouter();
  const { _id } = router.query;
  useEffect(() => {
    fetch(`http://localhost:8000/booking/payment/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setClientInformation(data);
      });
  }, []);

  return (
    <div className=" relative top-28  pb-10">
      <div className="flex w-fit mx-auto justify-center items-center rounded-2xl">
        <div className="relative w-[450px] h-[500px] hidden md:block">
          <Image
            src={"/card.png"}
            alt="Card img"
            fill
            className="grow rounded-tl-xl rounded-bl-xl shadow-2xl shadow-gray-100"
          />
        </div>
        <div className=" px-20 py-10 z-[10] bg-gray-100 h-[500px] pt-20  w-[450px]">
          <Elements stripe={stripePromise}>
            <p className=" bg-white p-4 text-center text-lg uppercase">
              Payment Information
            </p>
            <p className="pt-1">
              Service Name :{" "}
              <span className="text-gray-500 text-sm">
                {clientInformation?.ServiceFor}
              </span>
            </p>
            <p className="pt-1">
              Patient Name :{" "}
              <span className="text-gray-500 text-sm">
                {clientInformation?.patient}
              </span>
            </p>
            <p className="pt-1">
              Email :{" "}
              <span className="text-gray-500 text-sm">
                {clientInformation?.email}
              </span>
            </p>
            <p className="pt-1">
              Phone Number :{" "}
              <span className="text-gray-500 text-sm">
                {clientInformation?.phoneNumber}
              </span>
            </p>
            <p className="pt-1 pb-10">
              Pay :{" "}
              <span className="text-green-500 text-sm">
                ${clientInformation?.price}
              </span>
            </p>
            {clientInformation && (
              <CheckOut clientInformation={clientInformation} />
            )}
          </Elements>
        </div>
      </div>
    </div>
  );
};
export default Id;
