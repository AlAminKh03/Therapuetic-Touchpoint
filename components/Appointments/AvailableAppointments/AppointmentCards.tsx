import { format } from "date-fns";
import React from "react";
import { useState, useEffect } from "react";
import AppointmentSlot from "./AppointmentSlot";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import AppointmentsMain from "../AppointmentsMain/AppointmentsMain";
import { MdHealthAndSafety } from "react-icons/md";
import appointment from "../../../pages/appointment";

export interface DateProps {
  selectedDate: Date | undefined;
}
export interface AppointmentsProps {
  id: string;
  name: string;
  slots: string[];
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
      <div className=" min-h-screen flex items-center justify-center felx-col">
        <MdHealthAndSafety className="text-7xl text-green-500 animate-spin animation-durationLd" />
        <p className="tracking-wider text-sm">Processing ....</p>
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
                key={data.id as React.Key}
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
