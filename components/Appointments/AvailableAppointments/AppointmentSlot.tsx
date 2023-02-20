import React from "react";
import { AppointmentsProps, DateProps } from "./AppointmentCards";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { useState } from "react";
import Modal from "../../Modal/Modal";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { QueryObserverResult } from "@tanstack/query-core/build/lib/types";

type Refetch = () => Promise<QueryObserverResult<AppointmentsProps[], unknown>>;
export interface AppointmentSlotProps {
  slotData: AppointmentsProps;
  selectedDate: DateProps;
  refetch: Refetch;
}

const AppointmentSlot = ({
  slotData,
  selectedDate,
  refetch,
}: AppointmentSlotProps) => {
  const mySwl = withReactContent(Swal);
  const [isOpen, setIsOpen] = useState(false);

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
  });

  const openModal = () => {
    selectedDate.selectedDate
      ? setIsOpen(true)
      : Toast.fire({
          icon: "error",
          title: "Please select a date before booking",
        });
  };
  return (
    <div>
      <p className="text-2xl font-extralight py-3 uppercase text-center">
        {slotData.name}
      </p>
      <div className="md:flex justify-evenly items-center grid grid-cols-1  gap-2">
        <div className="relative w-[250px] h-[200px] mx-auto md:mx-[0] ">
          <Image
            src={`${slotData.imgUrl}`}
            alt="dental"
            fill
            className="rounded mx-auto"
          ></Image>
        </div>
        <div>
          <p className="text-xs">Appointment available from :</p>
          <p>{slotData.slots[0]}</p>
          <div className="text-center mt-2 relative border border-gray-400">
            <p className="bg-black text-white py-1 hover:-translate-y-2 hover:-translate-x-2 transform ease-in duration-500">
              {slotData.slots.length} spaces available
            </p>
            {/* {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className={`absolute bottom-0 left-${(i % 5) * 2} ${
                  i >= 15 && "left-7.5"
                } ${i === 16 && "w-9"} ${i === 17 && "w-11"} ${
                  i === 18 && "w-14"
                } border-t-2 border-yellow-500 transform -rotate-45 origin-top-left -z-10`}
              ></div>
            ))} */}
            <div className="absolute bottom-0 left-0 w-6 border-t-2 border-yellow-500 transform -rotate-45 origin-top-left -z-10" />
            <div className="absolute bottom-0 left-2 w-6 border-t-2 border-yellow-500 transform -rotate-45 origin-top-left -z-10" />
            <div className="absolute bottom-0 left-4 w-6 border-t-2 border-yellow-500 transform -rotate-45 origin-top-left -z-10" />
            <div className="absolute bottom-0 left-6 w-6 border-t-2 border-yellow-500 transform -rotate-45 origin-top-left -z-10" />
            <div className="absolute bottom-0 left-8 w-6 border-t-2 border-yellow-500 transform -rotate-45 origin-top-left -z-10" />
            <div className="absolute bottom-0 left-10 w-6 border-t-2 border-yellow-500 transform -rotate-45 origin-top-left -z-10" />
            <div className="absolute bottom-0 left-12 w-6 border-t-2 border-yellow-500 transform -rotate-45 origin-top-left -z-10" />
            <div className="absolute bottom-0 left-14 w-6 border-t-2 border-yellow-500 transform -rotate-45 origin-top-left -z-10" />
            <div className="absolute bottom-0 left-16 w-6 border-t-2 border-yellow-500 transform -rotate-45 origin-top-left -z-10" />
            <div className="absolute bottom-0 left-[4.5rem] w-6 border-t-2 border-yellow-500 transform -rotate-45 origin-top-left -z-10" />
            <div className="absolute bottom-0 left-20 w-6 border-t-2 border-yellow-500 transform -rotate-45 origin-top-left -z-10" />
            <div className="absolute bottom-0 left-[5.5rem] w-6 border-t-2 border-yellow-500 transform -rotate-45 origin-top-left -z-10" />
            <div className="absolute bottom-0 left-[6rem] w-6 border-t-2 border-yellow-500 transform -rotate-45 origin-top-left -z-10" />
            <div className="absolute bottom-0 left-[6.5rem] w-6 border-t-2 border-yellow-500 transform -rotate-45 origin-top-left -z-10" />
            <div className="absolute bottom-0 left-[7rem] w-6 border-t-2 border-yellow-500 transform -rotate-45 origin-top-left -z-10" />
            <div className="absolute bottom-0 left-[7.5rem] w-6 border-t-2 border-yellow-500 transform -rotate-45 origin-top-left -z-10" />
            <div className="absolute bottom-0 left-[7.5rem] w-9 border-t-2 border-yellow-500 transform -rotate-45 origin-top-left -z-10" />
            <div className="absolute bottom-0 left-[8rem] w-[43px] border-t-2 border-yellow-500 transform -rotate-45 origin-top-left -z-10" />
            <div className="absolute bottom-0 left-[8.5rem] w-[32px] border-t-2 border-yellow-500 transform -rotate-45 origin-top-left -z-10" />
            <div className="absolute bottom-0 left-[9rem] w-[22px] border-t-2 border-yellow-500 transform -rotate-45 origin-top-left -z-10" />
            <div className="absolute bottom-0 left-[9.5rem] w-3 border-t-2 border-yellow-500 transform -rotate-45 origin-top-left -z-10" />
          </div>
          <p className="mt-1">
            Booking price{" "}
            <span className="text-green-400 text-sm">${slotData.price}</span>
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          type="button"
          onClick={openModal}
          className="btn bg-black p-1 text-white font-light h-full mt-3 w-full hover:-translate-y-0.5 transition-all ease-in duration-500 py-4 flex justify-center items-center gap-3 cursor-pointer"
        >
          Book Appointment <BsArrowRight className="textwhite text-xl" />
        </button>
      </div>

      {selectedDate && (
        <Modal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          slotData={slotData}
          selectedDate={selectedDate}
          refetch={refetch}
        />
      )}
    </div>
    // </div>
  );
};

export default AppointmentSlot;
