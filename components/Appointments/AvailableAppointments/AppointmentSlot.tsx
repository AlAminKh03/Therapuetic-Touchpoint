import React from 'react'
import { AppointmentsProps, DateProps } from './AppointmentCards';
import Image from 'next/image';
import { BsArrowRight } from 'react-icons/bs';
import { useState } from 'react'
import Modal from '../../Modal/Modal';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'

export interface AppointmentSlotProps {
    slotData: AppointmentsProps;
    selectedDate: DateProps
  }

const AppointmentSlot = ({ slotData, selectedDate }: AppointmentSlotProps) => {
  const mySwl= withReactContent(Swal)
  const [isOpen, setIsOpen] = useState(false)


  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true})

const openModal=()=> {
    selectedDate.selectedDate  ? setIsOpen(true) : Toast.fire(
  {    icon:"error",
      title:"Please select a date before booking"}
    )
    
  }
  return (
    <div>
    <p className='text-2xl font-extralight py-3 uppercase text-center'>{slotData.name}</p>
    <div className='md:flex justify-evenly grid grid-cols-1  gap-2'>
      <div className='relative w-[250px] h-[200px] mx-auto md:mx-[0] '>
    {slotData.name === "dental" && <Image src="/brush.jpg" alt="dental" fill className='rounded mx-auto'></Image>}
    {slotData.name === "Neurology" && <Image src="/brain.jpg" alt="brain" fill className='rounded mx-auto'></Image>}
      </div>
     <div>
        <p>{slotData.slots[0]}</p>
        <p>{slotData.slots.length} spaces available</p>
        
     </div>
    </div>
    <div className='flex justify-center'>
    {/* <button className='bg-black p-1 text-white font-light h-full mt-3 w-full hover:-translate-y-0.5 transition-all ease-in duration-500 py-4 flex justify-center items-center gap-3'>Book Appointment for {slotData.name} </button> */}
    {/* <label htmlFor="my-modal-3" className="btn bg-black p-1 text-white font-light h-full mt-3 w-full hover:-translate-y-0.5 transition-all ease-in duration-500 py-4 flex justify-center items-center gap-3 cursor-pointer">open modal <BsArrowRight className='textwhite text-xl'/></label> 
    <div className="fixed inset-0 flex items-center justify-center"> */}
        <button
          type="button"
           onClick={openModal}
          className="btn bg-black p-1 text-white font-light h-full mt-3 w-full hover:-translate-y-0.5 transition-all ease-in duration-500 py-4 flex justify-center items-center gap-3 cursor-pointer"
        >
          Open dialog <BsArrowRight className='textwhite text-xl'/>
        </button>
      </div>
    { selectedDate && <Modal isOpen={isOpen} setIsOpen={setIsOpen} slotData={slotData} selectedDate={selectedDate}/>}
    </div>
    // </div>
  )
}

export default AppointmentSlot