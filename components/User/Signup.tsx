import React, { useContext } from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import {CgNotes} from "react-icons/cg"
import {BsSunFill} from "react-icons/bs"
import {CgTrees} from "react-icons/cg"
import {FaAmbulance} from "react-icons/fa"
import {BsFillPenFill} from "react-icons/bs"
import {BsTreeFill} from "react-icons/bs"
import {MdHealthAndSafety} from "react-icons/md"
import {BsFillShieldFill}from "react-icons/bs"
import Link from 'next/link';
import { AuthContext } from '../Contexts/AuthProvider';

interface Inputs {
  name:string,
  email: string,
  password: string,
};


const Signup = () => {

    const {register , handleSubmit, formState: { errors }} = useForm<Inputs>();
    const {createUser} = useContext(AuthContext)
  const onSubmit:SubmitHandler<Inputs> = (data) =>{
    Promise.resolve(createUser(data.email,data.password))
    .then(result=>{
        const user= result.user
        console.log(result)
    })
    .catch(err=>{
      console.log(err)
    })
  }
  
  return (
  <div className='grid sm:grid-cols-1 md:grid-cols-2 pb-[40px] pt-[100px] '>
    <div className='relative hidden md:block '>
        <BsSunFill className='text-7xl text-red-500 absolute top-20 left-20 animate-spin animation-durationfr'/>
      <CgNotes className='text-[15rem]  text-blue-500 absolute top-28 left-48 z-[1]'/>
      <MdHealthAndSafety className='text-8xl  text-green-700 absolute top-20 left-[370px]'/>
      <BsFillPenFill className='text-7xl text-pink-700 absolute top-[270px] left-[350px] z-[2] '/>
    </div>
<div className='relative top-20 mb-20'>
  <div className='lg:flex justify-center items-center sm:block md:hidden lg:show'>
  <BsFillShieldFill className='absolute text-[450px] text-green-50 justify-center items-center md:left-[30px] lg:left-[115px] -top-12 md:-top-10'/>
  </div>
<div className='flex justify-center items-center min-h-[40vh] md:min-h-[50vh] gap-2 mt-8 md:mt-1 '>

  <form onSubmit={handleSubmit(onSubmit)} className='absolute z-[1]'>
    <div>
      <label>Name* : </label><br/>
        <input type='text' {...register('name',{required:true,minLength:3})} 
           className={`border p-2 outline-none ${errors.name?"focus:border-red-500":"focus:border-green-500"}`}/>
        {errors.name?.type==="required" &&  <p className='text-red-600 text-center text-xs font-light'> Please fillup the name Input</p>}
   </div>
   <div>
      <label>Email* : </label><br/>
        <input type='text' {...register('email',{required:true})} 
          className={`border p-2 outline-none ${errors.email?"focus:border-red-500":"focus:border-green-500"}`}/>
        {errors.email?.type==="required" &&  <p className='text-red-600 text-center text-xs font-light'> Please fillup the email Input</p>}
   </div>
   <div>
      <label>Password : </label><br/>
        <input type="password"  {...register('password',{required:true,pattern:/^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])(.{6,})$/})} 
          className={`border p-2 outline-none ${errors.password?"focus:border-red-500":"focus:border-green-500"}`}/>
        {errors.password?.type==="required" &&  <p className='text-red-600 text-center text-xs font-light'> Please fillup the Password Input</p>}
      {errors.password?.type==="pattern" &&  <p className='text-red-600 text-center text-xs font-light'> Insert atleast One capital letter one small letter <br/>and one special character[!@#$%^&*]</p>}
   </div>
    <div className='flex justify-center items-center flex-col'>
        <button type='submit' className='text-center text-white border bg-green-600 w-1/2 p-[10px] mt-5 hover:bg-white hover:text-black transition-all ease-in duration-300'> signup</button>
        <p className='text-sm pt-2'>Already have an account? <Link href={"/login"} className='text-green-600 font-light' > Login </Link></p>
    </div>
  </form>
  
  </div>

  
</div>

  </div>
  )
}

export default Signup