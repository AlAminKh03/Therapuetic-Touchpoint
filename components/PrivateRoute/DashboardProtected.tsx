import React, { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import Lottie from "lottie-react";
import loader from "../../public/data/Heart-2.json";

export interface BookingProps {
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

const DashboardProtected = () => {
  const { user } = useContext(AuthContext);

  const { data: bookings, isLoading } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const booking = await fetch(
        `https://thearpuetic-touchpoint-server-ppfa.vercel.app/booking?email=${user?.email}`,
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
      <div className="flex items-center justify-center min-h-screen">
        <div className=" w-[200px] h-[200px]">
          <Lottie animationData={loader} loop={true} />
        </div>
      </div>
    );
  }
  if (!bookings || bookings.length === 0) {
    return (
      <div className="text-center mt-10">
        <p> You don&rsquo;t have any Appointments</p>
      </div>
    );
  }
  return (
    <div>
      <div className="overflow-x-auto mt-10">
        <table className="table w-full">
          <thead>
            <tr>
              <th className="px-4 py-2"></th>
              <th className="px-4 py-2"> Name</th>
              <th className="px-4 py-2">Service Name</th>
              <th className="px-4 py-2">Date and Time</th>
              <th className="px-4 py-2">payment</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking: BookingProps, i: number) => {
              return (
                <React.Fragment key={booking._id}>
                  <tr className="border">
                    <th className="border px-4 py-2">{i + 1}</th>
                    <td className="border px-4 py-2">{booking.patient}</td>
                    <td className="border px-4 py-2">{booking.ServiceFor}</td>
                    <td className="border px-4 py-2">
                      {booking.AppointmentDate}
                      <br />
                      {booking.AppointmentTime}
                    </td>
                    <td className="border px-4 py-2">
                      {booking.price && !booking.paid && (
                        <Link
                          href={`dashboard/payment/${booking._id}`}
                          className="bg-green-600 p-1 px-2 text-white rounded-md "
                        >
                          pay
                        </Link>
                      )}
                      {booking.price && booking.paid && (
                        <p className="text-green-600">PAID</p>
                      )}
                    </td>
                  </tr>
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardProtected;
