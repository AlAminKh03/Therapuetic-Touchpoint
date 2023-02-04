import React from 'react'
import {CiClock1} from 'react-icons/ci'
import {CiLocationOn} from 'react-icons/ci'
import {CiPhone} from 'react-icons/ci'
import {CiMoneyCheck1} from 'react-icons/ci'

type Props = {}

const MiddleBanner = (props: Props) => {
  return (
    <div className="relative flex items-center justify-center mb-12 h-48 z-[4] border-b-2">
        <div className='max-w-38 shrink mx-auto flex flex-col items-center hover:text-gray-500 ease-in duration-300'>
            <CiClock1 className='text-3xl  '/>
            <p className='text-xs py-3'>9 AM - 10 PM</p>
        </div>
        <div className='max-w-38  mx-auto flex flex-col items-center hover:text-gray-500 ease-in duration-300'>
            <CiLocationOn className='text-3xl  '/>
            <p className='text-xs pt-3'>THERAPEUTIC TOUCHPOINT</p>
            <p className='text-xs '>AVENUE-5,MIRPUR 11, DHAKA</p>
        </div>
        <div className='max-w-38   mx-auto flex flex-col items-center hover:text-gray-500 ease-in duration-300'>
            <CiPhone className='text-3xl  '/>
            <p className='text-xs pt-3'>01785676641 (toll free) </p>
            <p className='text-xs'>24/7</p>
        </div>
        <div className='max-w-38 shrink mx-auto hidden md:block  hover:text-gray-100 ease-in duration-500'>
            <div className='flex flex-col items-center'>
            <CiMoneyCheck1 className='text-3xl  '/>
            <p className='text-xs py-3'>Payment & Refund</p>
        </div>
    </div>
</div>
  )
}

export default MiddleBanner