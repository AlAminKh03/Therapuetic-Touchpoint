import React from 'react'
import { AppointmentsProps } from './AvailableAppointment';
import Image from 'next/image';

interface AppointmentSlotProps {
    slotData: AppointmentsProps;
  }

const AppointmentSlot = ({ slotData }: AppointmentSlotProps) => {
  return (
    <div>
    <p className='text-2xl font-extralight py-3 uppercase text-center'>{slotData.name}</p>
    <div className='flex justify-evenly'>
      <div className='relative w-[250px] h-[200px] '>
    {slotData.name === "dental" && <Image src="/brush.jpg" alt="dental" fill className='rounded'></Image>}
    {slotData.name === "Neurology" && <Image src="/brain.jpg" alt="brain" fill className='rounded'></Image>}
      </div>
     <div>
        <p>{slotData.slots[0]}</p>
        <p>{slotData.slots.length} spaces available</p>
        
     </div>
    </div>
    <button className='bg-black p-1 text-white h-full mt-3 w-full'>Book Appointment</button>
    </div>
  )
}

export default AppointmentSlot