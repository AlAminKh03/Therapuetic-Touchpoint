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

   <React.Fragment>
      <div className='hidden lg:grid grid-cols-2 bg-white  min-w-full py-8 px-5'>
         <p className='tracking-widest'>THERAPEUTIC TOUCHPOINT</p>
         <div className='flex justify-around'>
           {menuItems.map(menuItem=>{
            return (
                <div key={menuItem.content} className=''>
                    <p className='text-sm tracking-widest'>{menuItem.content}</p>
                </div>
             )
            })}
        </div>
    </div>
 {/* for mobile */}
    <div className='sm:block md:hidden relative'>
       <div className='absolute flex bg-white  min-w-full py-6 px-5 gap-60 top-0'>
            <div className='grow'>
            <p className='tracking-widest'>THERAPEUTIC TOUCHPOINT</p>
            </div>
            <div className=''>
                <CgMenuRight className='text-3xl cursor-pointer' onClick={()=>{setOpenMenuNav(!openMenuNav)}}/>
            </div>
        </div>
        <div className= {`bg-white w-full h-32 absolute ${openMenuNav?"top-20" : "top-[-400px]"} text-left ml-6`}>
            {menuItems.map(menuItem=>{
                return (
                    <div key={menuItem.content} className='py-4'>
                        <p className='text-sm tracking-widest'>{menuItem.content}</p>         
                    </div>
                    )
                    })}
        </div>
    </div>
   </React.Fragment>

  )
}

export default Navbar
