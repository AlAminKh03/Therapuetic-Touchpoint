import React from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { AppointmentsProps , DateProps } from '../Appointments/AvailableAppointments/AppointmentCards'
import { format } from 'date-fns'

 interface ModalProps{
  isOpen: boolean
  setIsOpen:  React.Dispatch<React.SetStateAction<boolean>>
  slotData: AppointmentsProps
  selectedDate:DateProps
 }

const Modal = ({isOpen, setIsOpen, slotData,selectedDate}:ModalProps) => {
 
  const closeModal=()=>{
    setIsOpen(false)
  }
  const date= selectedDate.selectedDate && format(selectedDate.selectedDate,"PP")


  const handleBooking :React.FormEventHandler<HTMLFormElement> = event  =>{
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const slotInput = form.querySelector<HTMLInputElement>('select[name="slot"]')
    if(!slotInput){
      throw new Error('Slot input is Not found')
    }
    const slot =slotInput.value
    const nameInput = form.querySelector<HTMLInputElement>('input[name="name"]');
    if (!nameInput) {
      throw new Error('Name input not found.');
    }
    const name = nameInput.value;
    const emailInput = form.querySelector<HTMLInputElement>('input[name="email"]');
    if (!emailInput) {
      throw new Error('Email input not found.');
    }
    const email = emailInput.value;
    const phoneNumberInput = form.querySelector<HTMLInputElement>('input[name="phoneNumber"]');
    if (!phoneNumberInput) {
      throw new Error('Phone number input not found.');
    }
    const phoneNumber = phoneNumberInput.value;
    const addressInput = form.querySelector<HTMLInputElement>('input[name="address"]');
    if (!addressInput) {
      throw new Error('Address input not found.');
    }
    const address = addressInput.value;
    const booking ={
      ServiceFor: slotData.name,
      AppointmentDate: date,
      AppointedFor : slot,
      patient:name,
      email,
      phoneNumber,
      address
    }
    console.log(booking);
  }
  return (
    <div>
   
   <Transition appear show={isOpen} as={Fragment} >
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
           
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <form onSubmit={handleBooking}>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex m-16 md:m-0 md:min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 uppercase"
                  >
                   {slotData.name}
                  </Dialog.Title>
                
                  <div className="mt-2 m-3 md:m-6 p-4">
                    <p className="text-sm text-gray-500">
                      configure your appointment time at our available time
                    </p>
                  
                    <input type='text' className= {`bg-black ${date?"text-white": "text-red-500"} w-full text-center p-2  text-xl`} disabled value={date? date :"Please choose a date"} ></input>
                    <select className='w-full  border py-2 mt-2' name="slot">
                      {slotData.slots.map(slot=>{
                        return ( 
                          <option className='text-center text-xl' value={slot}  >{slot}</option>
                        )
                      })}
                    </select>
                    <input type='text' name='name' placeholder='Enter your Name' className='w-full  border py-2 mt-2 pl-3'/><br/>
                    <input type='email' name='email' placeholder="Enter your email" className='w-full  border py-2 mt-2 pl-3'/><br/>
                    <input type='text' name='phoneNumber' placeholder='Enter your Phone Number' className='w-full  border py-2 mt-2 pl-3'/><br/>
                    <input type='text' name="address"  placeholder='Enter your Address' className='w-full  border py-2 mt-2 pl-3'/><br/>

                  </div>

                  <div className="mt-4">
                    <button
                      type="submit" value={"submit"}
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Book
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
          </form>
        </Dialog>
      </Transition>

    </div>
  )
}

export default Modal