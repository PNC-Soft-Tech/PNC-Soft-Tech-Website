/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { BiLogoFacebook , BiLogoLinkedin, BiLogoGmail, BiLogoWhatsapp } from 'react-icons/bi';
import { BsTelephoneInbound } from 'react-icons/bs'

const Footer = () => {
  const [impLinks, setImpLinks] = useState([])
  const [contactInfo, setContactInfo] = useState({})



  return (
    <div className=" bg-gradient-to-r from-emerald-500 to-emerald-700 mt-[10px] text-white font-serif text-sm leading-4 sm:p-[0] sm:m-[0] sticky  ">
      <div className="flex flex-row justify-evenly py-10 gap-4">

          <div className="flex flex-col gap-4 ">
            <h1 className="text-[20px] text-[#ffff] font-bold leading-[30px] " >Contact Us</h1>
             <div className="flex flex-row gap-2 ">
                <h3 className=" flex flex-row gap-1 text-[15px] text-[#fff] font-bold p-0 m-0 ">
                  <p>
                    {" "}
                    <BsTelephoneInbound />{" "}
                  </p>
                  <p>মোবাইলঃ</p>
                </h3>
                <p>{contactInfo?.phone || '01712 154134'}</p>
              </div>

              <div className="flex flex-row gap-1 self-center ">
                <h3 className=" flex flex-row gap-1 text-[15px] text-[#fff] font-bold p-0 m-0 ">
                  <p>
                    {" "}
                    <BiLogoGmail />{" "}
                  </p>
                  <p>ই-মেইলঃ</p>
                </h3>
                <p> {contactInfo?.email || 'bholabarassociaton2k23@gmail.com'}</p>
              </div>
          </div>

          <div className=" flex flex-col  gap-4  sm:flex-row sm:justify-around   ">
            <div className="flex flex-col w-84 gap-4  box-border ">
              <h1 className="text-[25px] text-[#ffff] font-normal tracking-widest	" >PNC SOFT TECH</h1>

              <p className="text-[20px] text-[#ffff] leading-[25px] self-center ">Dhaka, Bangladesh</p>

              <div className="flex flex-row gap-2 sm:ml-0 self-center ">
                  <a href="https://www.facebook.com/pncsoft.tech" className='cursor-pointer bg-emerald-800  p-2 border-solid border-[0px] border-[#fff]  hover:bg-[#fff] rounded-full '>
                      <BiLogoFacebook className='text-[25px] text-[#fff] hover:text-[#ff5e14] ' />
                    </a>
              
                    <a href="https://www.linkedin.com/company/pnc-soft-tech/" className=' p-2 border-solid border-[0px] bg-emerald-800 border-[#fff] hover:bg-[#fff] rounded-full '>
                      <BiLogoLinkedin className='text-[25px] text-[#fff] hover:text-[#ff5e14] ' />
                    </a>

                    <div className=' p-2 bg-emerald-800 border-solid border-[0px] border-[#fff] hover:bg-[#fff] rounded-full '>
                      <BiLogoWhatsapp className='text-[25px] text-[#fff] hover:text-[#ff5e14] ' />
                    </div>
              </div>
            </div>
          </div>

          <div>
            <h1>Contact us bro</h1>
          </div>
      </div>

      <div className="bg-[#0b4738] p-[10px]  flex flex-col sm:flex-row justify-center lg:justify-between pl-[20px] sm:pl-[65px] sm:pr-[65px] text-[15px] text-[#f2f2f2] ">
        <p> Copyright © 2023 by PNC SOFT TECH </p>
        <p className="pl-[50px] ">Design and Develop by PNC SOFT TECH</p>
      </div>
    </div>
  )
}

export default Footer
