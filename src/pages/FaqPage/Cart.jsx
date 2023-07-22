/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React ,{useState} from 'react'

const Cart = ({title, details}) => {
    const [expanded, setExpanded] = useState(true)
  return (
    <div className='h-auto w-[790px] mb-[10px] bg-[#fff] pl-[25px] border-solid border-[1px] border-[#e9e9e9] rounded-[5px] '>
        <div onClick={() => setExpanded(!expanded)} className='flex flex-row justify-between py-[20px] pr-[25px]'>
            <p className='text-[16px] text-[#041436] font-medium   '>{title}</p>
             {/* <button className=' p-[0px] m-0 h-[20px] w-[20px] text-[18px]  relatives  text-[#fd7e14] border-solid border-[2px] border-[#fd7e14]  '>+</button>
              */}
             {/* <div className=' h-[20px] w-[20px] text-[18px] text-center   text-[#fd7e14] border-solid border-[2px] border-[#fd7e14] '>
                <p>+</p>
             </div> */}
             { expanded?
                <button  className={`px-[1px] text-[16px] font-bold border-solid border-[2px] text-[#fd7e14] border-[#fd7e14]  `}>+</button>:
                <button  className={`px-[1px] text-[16px] font-bold border-solid border-[2px] text-[#fd7e14] border-[#fd7e14]  `}>x</button>
             }
            
       </div>
            <p className={`pr-[25px] pb-[25px] text-[] text-[#676e7c]  ${expanded?'hidden':''} `}>{details}</p>
        
    </div>
  )
}

export default Cart