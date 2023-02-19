import React from "react";
import { DoctorsProps } from "./AllDoctors";
import Image from "next/image";

interface DoctorProps {
  doctor: DoctorsProps;
}
const Doctor = ({ doctor }: DoctorProps) => {
  console.log(doctor);
  return (
    <div>
      <div>
        <Image
          src={doctor.imageUrl}
          alt="doctors pic"
          width={"500"}
          height={"500"}
        />
      </div>
      <h1 className="text-5xl">{doctor.name}</h1>
      <h2>{doctor.email}</h2>
    </div>
  );
};

export default Doctor;
