import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const ServiceDetails = (props: Props) => {
  return (
<div>
  <div className=" relative flex flex-row-reverse justify-center px-24 items-center ">
    <Image src="/doctor.jpg" alt='doctor image' width="400" height="500" />
    <div className='my-auto mx-auto flex pr-32 flex-col'>
      <h1 className="font-light text-3xl ">One-Stop Doctor Shop:<br/> Simplifying the Medical Appointment Process!</h1>
      <p className="py-6 text-sm leading-6 text-gray-800 tracking-wider">Getting a doctor's appointment in public or private hospitals can be a hassle due to long wait times and overbooked schedules. Booking an appointment can also be time-consuming. Despite these challenges, prioritize your health and seek medical attention when necessary. Alternative options such as telemedicine or finding a primary care physician may help streamline the process.</p>
      {/* <Link href="/appointment" className='uppercase px-8 py-4 border bg-white text-black'>
        Discover your Doctor
      </Link> */}
    </div>
  </div>
</div>
  )
}

export default ServiceDetails