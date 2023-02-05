import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {FaTeethOpen} from 'react-icons/fa'
import {GiMedicines} from 'react-icons/gi'
import {FaBone} from 'react-icons/fa'
import {MdOutlineFaceRetouchingNatural} from 'react-icons/md'
import {GiBodyBalance} from 'react-icons/gi'
import {BiBrain} from 'react-icons/bi'
import {BsArrowRight} from 'react-icons/bs'

type Props = {}

const ServiceDetails = (props: Props) => {
  return (
<div className='mb-20'>
  <div className=" relative grid grid-cols-1 md:flex flex-row-reverse justify-center px-12 md:px-24 items-center ">
    <Image src="/doctor.jpg" alt='doctor image' width="400" height="500" />
    <div className=' md:mx-auto flex md:pr-32 flex-col mt-4'>
      <h1 className="font-light text-3xl ">One-Stop Doctor Shop:<br/> Simplifying the Medical Appointment Process!</h1>
      <p className="py-6 text-sm leading-6 text-gray-800 tracking-wider">Getting a doctor's appointment in public or private hospitals can be a hassle due to long wait times and overbooked schedules. Booking an appointment can also be time-consuming. Despite these challenges, prioritize your health and seek medical attention when necessary. Alternative options such as telemedicine or finding a primary care physician may help streamline the process.</p>
    <div className='grid grid-cols-2 md:grid-cols-3 gap-3 px-6'>
    <div className='flex flex-col items-center border border-b-2 p-4 '>
            <FaTeethOpen className='text-2xl'/>
            <p className='text-xs text-center'>Dental Care</p>
      </div>
    <div  className='flex flex-col items-center border border-b-2 p-4'>
            <GiMedicines className='text-2xl'/>
            <p className='text-xs text-center'>Medicine Special</p>
      </div>
    <div  className='flex flex-col items-center border border-b-2 p-4'>
            <FaBone className='text-2xl'/>
            <p className='text-xs text-center'>Orthopedics section</p>
      </div>
    <div  className='flex flex-col items-center border border-b-2 p-4'>
            <MdOutlineFaceRetouchingNatural className='text-2xl'/>
            <p className='text-xs text-center'>Child specialist</p>
      </div>
    <div  className='flex flex-col items-center border border-b-2 p-4'>
            <GiBodyBalance className='text-2xl'/>
            <p className='text-xs text-center'>physical therapy</p>
      </div>
    <div  className='flex flex-col items-center border border-b-2 p-4'>
            <BiBrain className='text-2xl'/>
            <p className='text-xs text-center'>Neurology</p>
      </div>
    </div>
     <div className='flex justify-center py-4 '>
        <Link href="/appointment" className='uppercase px-12  p-4 items-center border bg-black text-white  mt-4 hover:translate-x-1 transition-all ease-in duration-500 flex justify-evenly gap-2'>
        Discover More <BsArrowRight className='textwhite'/>
      </Link>
      
     </div>
    </div>
  </div>
</div>
  )
}

export default ServiceDetails