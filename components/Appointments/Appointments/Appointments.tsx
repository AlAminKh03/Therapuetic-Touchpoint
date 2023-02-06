import React from 'react'
import {useState} from 'react'
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner'
import AvailableAppointment from '../AvailableAppointments/AvailableAppointment'

type Props = {}

const Appointments = (props: Props) => {
    const [selectedDate, setSelectedDate]= useState<Date>()
  return (
    <div>
        <AppointmentBanner selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
        <AvailableAppointment selectedDate={selectedDate}/>
    </div>
  )
}

export default Appointments