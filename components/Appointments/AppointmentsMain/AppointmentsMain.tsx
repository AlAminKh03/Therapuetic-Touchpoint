import React from 'react'
import {useState} from 'react'
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner'
import AppointmentCards from '../AvailableAppointments/AppointmentCards'

type Props = {}

const AppointmentsMain = (props: Props) => {
    const [selectedDate, setSelectedDate]= useState<Date>()
  return (
    <div>
        <AppointmentBanner selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
        <AppointmentCards selectedDate={selectedDate}/>
    </div>
  )
}

export default AppointmentsMain