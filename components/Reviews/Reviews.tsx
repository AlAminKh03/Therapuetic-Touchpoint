import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

type Props = {}

const Reviews = (props: Props) => {
  return (
    <div className='bg-amber-50 flex p-12 mx-16  rounded'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-44'>
            <div className='flex flex-col justify-center'>
                <p className='bg-white p-3 m-4 w-fit uppercase text-xs border'>What the say</p>
                <p className=' text-2xl md:text-4xl mt-16 tracking-wide font-light'>"Had an excellent dental checkup at the clinic. Professional and friendly staff, thorough exam, and a painless cleaning. Highly recommend!"</p>
                <div className='flex justify-center py-4 relative '>
        <Link href="/appointment" className=' absolute top-20 uppercase px-12  p-4 items-center border bg-black text-white  mt-4 hover:translate-x-1 transition-all ease-in duration-500 flex justify-evenly gap-2'>
        BOOK YOUR APPOINTMENT <BsArrowRight className='textwhite'/>
      </Link>
      
     </div>
            </div>
            <div>
                <Image src="/dentist2.jpg" alt="Dentist photo"  width="400" height="500"/>
            </div>
        </div>
    </div>
  )
}

export default Reviews