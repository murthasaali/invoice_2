import React from 'react'
import CustomDropdown from './CustomDropdown'

function invoiceNavbar() {
  return (
    <div className='w-full h-20  flex justify-start gap-3 p-3'>
            <CustomDropdown headingname={"Active filters"}/>
            <CustomDropdown headingname={"All Customers"}/>
            <CustomDropdown headingname={"All Statuses"}/>
            <CustomDropdown headingname={"November 2023"}/>
            <CustomDropdown headingname={"Enter Invoice #"}/>
            <CustomDropdown headingname={"Enter Invoice #"}/>
    </div>
  )
}

export default invoiceNavbar