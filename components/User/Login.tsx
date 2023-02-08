import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";

interface Inputs {
  name: string,
  password: string,
};

const Login = () => {
  const {register , handleSubmit} = useForm<Inputs>();
  const onSubmit:SubmitHandler<Inputs> = (data) =>console.log(data)
  
  return (
    <div className='flex justify-center items-center min-h-[50vh]'>
  <form onSubmit={handleSubmit(onSubmit)}>
   <div>
    <label>Name : </label>
    <input type='text' {...register('name',{required:true})} className='border p-2'/>
   </div>
   <div>
    <label>Name : </label>
    <input type="password"  {...register('password',{required:true})} className='border p-2'/>
   </div>
    <button type='submit'> Submit</button>
  </form>
  </div>
  )
}

export default Login