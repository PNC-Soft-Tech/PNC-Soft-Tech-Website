/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import img from './sabuj.jpg'


const ServiceCart = ({serviceDetail}) => {
  return (
    <div className='h-[400px] w-[360px] shadow-[0_5px_30px_0px_rgba(0,0,0,0.1)] rounded-[5px] flex flex-col gap-2  '>
       <div className='h-[210px] w-[360px] '>
            <img className='h-full w-full object-cover rounded-t-[5px] ' src ={serviceDetail.image} alt ='Service Image' />
       </div>
       <div className='py-[10px] px-[16px]  flex flex-col gap-2'>
            <h1 className='text-black text-[22px] font-bold leading-[40px] '>{serviceDetail.title}</h1>
            <p className=' text-[#676e7c] leading-[26px] font-normal text-[16px] '>{serviceDetail.details}</p>
       </div>
    </div>
  )
}

export default ServiceCart