import { format } from "date-fns";
import React from "react";
import AppointmentSlot from "./AppointmentSlot";
import { useQuery } from "@tanstack/react-query";
import Lottie from "lottie-react";
import loader from "../../../public/data/Heart-2.json";

export interface DateProps {
  selectedDate: Date | undefined;
}
export interface AppointmentsProps {
  _id: string;
  name: string;
  slots: string[];
  price: number;
  imgUrl: string;
}

const AppointmentCards = ({ selectedDate }: DateProps) => {
  const date = selectedDate && format(selectedDate, "PP");
  console.log(date);
  const {
    data: apointmentsData,
    isLoading,
    refetch,
  } = useQuery<AppointmentsProps[]>({
    queryKey: ["appointmentData", date],

    queryFn: async () => {
      const res = await fetch(
        `http://localhost:8000/appointments?date=${date}`
      );
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
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
      <div>
        {selectedDate ? (
          <p className="text-center text-xl">
            You have selected your Appointment on{" "}
            <span className="font-bold">{format(selectedDate, "PP")}</span>
          </p>
        ) : (
          <p className="text-center text-xl ">You have No Appoinmetns</p>
        )}
      </div>
      {apointmentsData && (
        <div className="grid grid-cols-1 md:grid-cols-2  text-center col-start-2 mt-16 gap-7 mx-5">
          {apointmentsData.map((data) => {
            return (
              <div
                key={data._id as React.Key}
                className="border mx-12 shadow rounded"
              >
                <AppointmentSlot
                  slotData={data}
                  refetch={refetch}
                  selectedDate={{ selectedDate }}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default AppointmentCards;
