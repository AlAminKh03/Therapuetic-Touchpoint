import Link from 'next/link'
import React, { useState } from 'react'
import {CgMenuRight} from "react-icons/cg"

const Navbar = () => {
    const [openMenuNav, setOpenMenuNav]= useState<boolean>(false)
    const menuItems=[
        {
        path:"/",
        content:"HOME"
        },
        {
        path:"/appointment",
        content:"APPOINTMENT"
        },
        {
        path:"/about",
        content:"ABOUT"
        },
        {
        path:"/login",
        content:"LOGIN"
        },
    ]
  return (


<div className='relative'>
   <div className=' hidden md:block fixed  bg-white min-w-full py-5 px-5 z-10'>
   <div className='grid grid-cols-2 '>
         <p className='tracking-widest'>THERAPEUTIC TOUCHPOINT</p>
         <div className='flex justify-around'>
           {menuItems.map(menuItem=>{
            return (
                <div key={menuItem.content} className=''>
                    <Link href={`${menuItem.path}`} className='text-xs hover:text-black hover:transition-all ease-in duration-100 tracking-widest cursor-pointer  hover:border-b-2 hover:border-black active:border-b-2 '>{menuItem.content}</Link>
                </div>
             )
            })}
        </div>
    </div>
   </div>

 {/* for mobile */}
    <div className='sm:block md:hidden fixed z-30 top-0 left-0 w-full '>
       <div className=' flex bg-white sticky min-w-full  px-5 gap-48 py-3 top-0 z-20'>
            <div className='grow '>
            <p className='tracking-widest '>THERAPEUTIC TOUCHPOINT</p>
            </div>
            <div className=''>
                <CgMenuRight className='text-3xl cursor-pointer hover:bg-gray-100   rounded' onClick={()=>{setOpenMenuNav(!openMenuNav)}}/>
            </div>
        </div>
        <div className= {`bg-white w-full h-screen absolute ${openMenuNav?"top-18" : "top-[-1000px]"} text-left pl-6 transition-all ease-in duration-700 delay:400 z-10 `}>
            {menuItems.map(menuItem=>{
                return (
                    <div key={menuItem.content} className='my-10 w-fit' onClick={()=>{setOpenMenuNav(!openMenuNav)}}>
                        <Link href={`${menuItem.path}`} className='text-xs hover:text-gray-400 hover:transition-all ease-in duration-100 tracking-widest cursor-pointer ' >{menuItem.content}</Link>         
                    </div>
                    )
                    })}
        </div>
    </div>
</div>

  )
}

export default Navbar
