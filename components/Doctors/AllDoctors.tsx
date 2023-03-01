import { useQuery } from "@tanstack/react-query";
import React from "react";
import Doctor from "./Doctor";
import Lottie from "lottie-react";
import loader from "../../public/data/Heart-2.json";

export interface DoctorsProps {
  _id: string;
  name: string;
  email: string;
  appointmentsName: string;
  imageUrl: string;
}
[];

const AllDoctors = () => {
  const { data: doctors, isLoading } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      const doctors = await fetch(
        "https://thearpuetic-touchpoint-server-ppfa.vercel.app/doctors"
      );
      const data = await doctors.json();
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
      {doctors?.map((doctor: DoctorsProps) => {
        return (
          <div key={doctor._id}>
            <Doctor doctor={doctor} />
          </div>
        );
      })}
    </div>
  );
};

export default AllDoctors;
