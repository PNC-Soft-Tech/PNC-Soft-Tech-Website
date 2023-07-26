/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React ,{useState} from 'react'
import { GrAddCircle } from 'react-icons/gr';
import {  MdOutlineRemoveCircleOutline , MdAddCircleOutline } from 'react-icons/md';

const Cart = ({title, details}) => {
    const [expanded, setExpanded] = useState(true)
  return (
    <div className='h-auto w-full mb-[10px] bg-[#fff] pl-[25px] border-solid border-[1px] border-[#e9e9e9] rounded-[5px] '>
        <div onClick={() => setExpanded(!expanded)} className='flex flex-row justify-between py-[20px] pr-[25px]'>
            <p className='text-[16px] text-[#041436] font-medium   '>{title}</p>
             {/* <button className=' p-[0px] m-0 h-[20px] w-[20px] text-[18px]  relatives  text-[#fd7e14] border-solid border-[2px] border-[#fd7e14]  '>+</button>
              */}
             {/* <div className=' h-[20px] w-[20px] text-[18px] text-center   text-[#fd7e14] border-solid border-[2px] border-[#fd7e14] '>
                <p>+</p>
             </div> */}
             { expanded?
                   <MdAddCircleOutline className='text-[22px] text-[#FF5E14] hover:text-black ' />
               :
                <MdOutlineRemoveCircleOutline className='text-[22px] hover:text-[#FF5E14] text-black ' />
             }
            
       </div>
            <p className={`pr-[25px] pb-[25px] text-[] text-[#676e7c]  ${expanded?'hidden':''} `}>{details}</p>
        
    </div>
  )
}

export default Cart