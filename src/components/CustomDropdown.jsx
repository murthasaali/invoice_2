import React from 'react'
import { IoIosArrowDown } from "react-icons/io";

function CustomDropdown({headingname}) {
  return (
    <div className='w-fit  h-12 flex justify-start gap-20  bg-opacity-60 py-[3px] ps-3 items-center rounded-full border border-stone-500 border-opacity-20 bg-stone-100'>
        <div className='text-xs font-thin'>{headingname}</div>
        <button className='bg-stone-600  bg-opacity-10 w-12 h-12 rounded-full  flex justify-center items-center '><IoIosArrowDown/></button>
    </div>
  )
}

export default CustomDropdown