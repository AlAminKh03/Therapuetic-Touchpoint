import Image from 'next/image'
import React from 'react'

type Props = {}

const Service = (props: Props) => {
  return (
<div>
<div className='border w-80 mx-auto'>
<p className=' text-center font-normal text-xl uppercase p-2'>Join our service portals</p>
</div>
<div className='relative h-[200px] w-[250px] mx-auto'>
       <Image className="mt-4 animate-spin animation-durationfr"src="/portal.png" alt='portal img' fill/>
   </div>
</div>
     
  )
}

export default Service