import Image from "next/image";
import React from "react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";

interface DateProps {
  selectedDate: Date | undefined;
  setSelectedDate: (date: Date) => void;
}

const AppointmentBanner = ({ selectedDate, setSelectedDate }: DateProps) => {
  const disabledDays = {
    before: new Date(),
  };
  console.log(disabledDays);
  return (
    <div>
      <div className="mb-20 pt-10">
        <div className=" relative grid grid-cols-1 md:flex flex-row-reverse justify-center px-12 md:px-24 items-center ">
          <Image
            src="/appointment2.jpg"
            alt="appointment image"
            width="400"
            height="500"
          />
          <div className="mx-auto flex  md:pr-32 flex-col mt-8">
            <h1 className=" font-bold md:font-light text-xl md:text-3xl ">
              Select your appointment date
            </h1>

            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={(day, selectedDay, activeModifiers, e) =>
                setSelectedDate(day as Date)
              }
              disabled={disabledDays}
            />
            {selectedDate ? (
              <p className="text-sm pl-2">
                You have selected {format(selectedDate, "PP")}
              </p>
            ) : (
              <p>Book your appointment on available day</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
