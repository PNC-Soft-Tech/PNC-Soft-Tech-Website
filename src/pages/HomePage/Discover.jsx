/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'

const Discover = () => {
  return (
    <div className='bg-[#f4f7fb] w-full h-auto flex flex-row justify-evenly gap-14 px-[80px] py-[130px] '>
            <div className=' h-screen w-[45%] '
                 style={{
                    backgroundImage: `https://images.pexels.com/photos/196659/pexels-photo-196659.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity:1
                  }}
            >
            </div>

            <div className='h-screen w-[55%] flex flex-col gap-4 '>
                <h1 className=' text-[50px] text-[#041436] font-bold leading-[70px] space-x-4 '>Discover <span className='text-[#ff5e14] '>The Best Way</span>  of Grow a Bussiness</h1>

                <p className=' text-[#041436] text-[18px] font-normal leading-[25px]  '>Simple Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.</p>
                
                <h1 className='text-black text-[22px] font-bold leading-[30px] mt-4 '>Our Mission</h1>
                <p className=' text-[#041436] text-[18px] font-normal leading-[25px]  '>Simple Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>

                <h1 className='text-black text-[22px] font-bold leading-[30px] mt-4 '>Our Vission</h1>
                <p className=' text-[#041436] text-[18px] mb-8 font-normal leading-[25px] '> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.</p>

                <button className='bg-[#ff5e14] text-[#fff] text-[22px] p-2 self-center h-[70px] w-[180px] rounded-full hover:bg-[#fff] hover:text-[#ff5e14] hover:border-solid border-[1px] border-[#ff5e14] transition ease-in duration-700' >Learn More</button>
            </div>
    </div>
  )
}

export default Discover