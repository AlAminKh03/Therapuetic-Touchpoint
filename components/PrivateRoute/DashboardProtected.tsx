import React, { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import { MdHealthAndSafety } from "react-icons/md";

interface BookingProps {
  ServiceFor: string;
  AppointmentDate: string;
  AppointmentTime: string;
  patient: string;
  email: string;
  phoneNumber: string;
  address: string;
}

const DashboardProtected = () => {
  const { user } = useContext(AuthContext);

  const { data: bookings, isLoading } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const booking = await fetch(
        `http://localhost:8000/booking?email=${user?.email}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      const data = await booking.json();
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
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th className="px-4 py-2"></th>
              <th className="px-4 py-2"> Name</th>
              <th className="px-4 py-2">Job</th>
              <th className="px-4 py-2">Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking: BookingProps, i: number) => {
              return (
                <tr className="border">
                  <th className="border px-4 py-2">{i + 1}</th>
                  <td className="border px-4 py-2">{booking.patient}</td>
                  <td className="border px-4 py-2">{booking.ServiceFor}</td>
                  <td className="border px-4 py-2">
                    {booking.AppointmentDate}
                    <br />
                    {booking.AppointmentTime}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardProtected;
