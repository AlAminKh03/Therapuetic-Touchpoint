import { format } from 'date-fns'
import React from 'react'
import {useState,useEffect} from 'react'
import AppointmentSlot from './AppointmentSlot'

 export interface DateProps{
    selectedDate: Date | undefined
}
export interface AppointmentsProps{
    id:string,
    name:string,
    slots: string[]
}

const AppointmentCards = ({selectedDate}:DateProps) => {
    const [apointmentsData, setAppointmentsData]= useState<AppointmentsProps[]>([])
console.log(selectedDate)
    useEffect(() => {
    fetch("/data/appointmentsSlot.json")
    .then(res=> res.json())
    .then(data=>{
        console.log(data)
        setAppointmentsData(data)
    })
    .catch(err=>{
        console.log(err)
    })
    }, [])
    
  return (
    <div>
        <div>
        {selectedDate ? <p className='text-center text-xl'>You have selected your Appointment on <span className='font-bold'>{format(selectedDate, 'PP')}</span></p>: <p className='text-center text-xl '>You have No Appoinmetns</p>}
    </div>
        <div className='grid grid-cols-1 md:grid-cols-2  text-center col-start-2 mt-16 gap-7 mx-5'>
{
    apointmentsData.map(data=>{
        return(
            <div key={data.id as React.Key} className='border mx-12 shadow rounded'>
                <AppointmentSlot slotData={data} selectedDate={{selectedDate}}/>
            </div>
        )})
}
        </div>
    </div>
  )
}

export default AppointmentCards