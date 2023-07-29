/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import img from '../../assets/img/banner.jpg'
const ReliablePart = () => {
  return (
    <div className='w-full h-auto bg-white flex flex-col  self-center py-10 '>
        <div className='self-center flex flex-col mt-20 mb-16 '>
            <h1 className='text-black text-[50px] leading-[70px] font-bold self-center pb-5 ' >Welcom to PNC Soft Tech</h1>
            <p className=' text-[18px] text-black font-normal self-center '>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>  
             <p className=' text-[18px] text-black font-normal self-center '> Lorem Ipsum has been the industry's standard</p>
        </div>

        <div className='mt-10 mx-20 text-[#fff] '>
            <div className=' bg-[#041436] flex flex-row w-full h-[370px] '>
                  <div className=' p-8 flex flex-col self-center '>
                       <div className='h-20 w-20 mb-2  self-center'>
                        <img src ={img} />
                       </div>
                            <h1 className='self-center text-[#fff] text-[22px] font-bold '>Reliable Solutions</h1>
                            <p className='text-center text-[16px] mt-2 text-gray-300 font-medium '>Printer took a galley of type and scrambled it to make a type specimenbook. It has survived not only five.
                            </p>
                   </div>

                  <div className=' py-[110px] px-[80px] flex flex-col self-center bg-[#FF5E14] w-[950px] h-[440px] z-40 '>
                          <div className='h-20 w-20 mb-2  self-center'>
                          <img src ={img} />
                          </div>
                            <h1 className='self-center text-[#fff] text-[22px] font-bold '>Reliable Solutions</h1>
                            <p className='text-center text-[16px] mt-2 text-gray-200 font-medium '>Printer took a galley of type and scrambled it to make a type specimenbook. It has survived not only five.
                            </p>
                   </div>

                   <div className=' p-8 flex flex-col self-center '>
                           <div className='h-24 w-24 mb-2 self-center'>
                           <img src ={img} className=' object-cover ' />
                           </div>
                            <h1 className='self-center text-[#fff] text-[22px] font-bold '>Reliable Solutions</h1>
                            <p className='text-center text-[16px] mt-2 text-gray-300 font-medium '>Printer took a galley of type and scrambled it to make a type specimenbook. It has survived not only five.
                            </p>
                   </div>
            </div>


        </div>

              
    </div>
        
  )
}

export default ReliablePart