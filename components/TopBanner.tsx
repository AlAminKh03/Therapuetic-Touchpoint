import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import hero from '../public/sofa.jpg'

type Props = {}

const TopBanner = (props: Props) => {
  return (
    <div className='flex relative items-center justify-center max-w-screen h-screen mb-5 bg-fixed bg-center bg-cover z-[4] '>
        <Image src="/dentist.jpg" alt="hero Img" fill/>
        <div className='absolute top-0 left-0 bottom-0 right-0 bg-black/40 z-[2]'/>
        <div className='text-white lg:ml-[-50rem]  z-[2]'>
           <div className='flex'>
           <h1 className='text-6xl font-extralight grow shrink'>Be sitted <br/>  Be setteled</h1>
           </div>
            <p className='py-8'>At your service </p>
            <Link href="/appointment" className='px-8 py-4 border bg-white text-black'>Book your appointment </Link>
        </div>
    </div>
  )
}

export default TopBanner