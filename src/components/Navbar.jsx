import React from 'react'
import { PiDotsNineBold } from "react-icons/pi";
import { GoArrowLeft } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { CiCreditCard1 } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";



function Nav() {
  return (
    <div className='w-full h-20 text-white fixed flex justify-between px-10  items-center'>

        <div className='p-4 b flex justify-center gap-3 items-center'>
                <h1>company name</h1>
                <div className='flex justify-center items-center gap-2'>
                    <button className='h-12 w-12 rounded-full bg-stone-100 bg-opacity-80 flex justify-center items-center text-black text-xl'><PiDotsNineBold/></button>
                    <button className='h-12 w-12 rounded-full bg-stone-100 bg-opacity-80 flex justify-center items-center text-black text-xl'><GoArrowLeft/></button>
                    <h1 className='text-white font-thin text-xl'>Invoices</h1>
                </div>
                
        </div>
        <div className='px-4 flex justify-center gap-10 items-center'>
                <div className='flex justify-center items-center gap-2'>
                    <button className='h-12 w-auto px-3 rounded-full bg-stone-100 bg-opacity-80 flex justify-center items-center gap-2 text-black '><CiCreditCard1 className='text-xl'/><span>issue credit</span></button>
                    <button className='h-12 w-auto px-3 rounded-full bg-stone-100 bg-opacity-80 flex justify-center items-center gap-2 text-black '><CiEdit className='text-xl'/><span>edit</span></button>
                    <button className='h-12 w-auto px-3 rounded-full bg-stone-100 bg-opacity-80 flex justify-center items-center gap-2 text-black '><MdDeleteOutline className='text-xl'/><span>delete</span></button>
                </div>
                <div className='flex justify-center items-center gap-2'>
                    <img className='h-12 w-12 rounded-full bg-stone-100 bg-opacity-80 flex justify-center items-center text-black text-xl' src='https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100205.jpg?size=626&ext=jpg&ga=GA1.1.922335369.1686896801&semt=ais'/>
                    <button className='h-12 w-12 rounded-full bg-stone-100 bg-opacity-80 flex justify-center items-center text-black text-xl'><CiSearch/></button>
                </div>


        </div>

    </div>
  )
}

export default Nav