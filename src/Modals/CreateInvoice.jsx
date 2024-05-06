import React, { useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import ShowItemsModal from "../Modals/ShowItemsModal";
import CountUp from "react-countup";

function CreateInvoiceModal({ isOpen, onClose }) {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleItemSelected = (selectedItems) => {
      setSelectedItems(selectedItems);
      console.log(selectedItems)
  };
  const grandTotal = selectedItems.reduce((total, item) => {
    return total + item.subtotal;
}, 0);
  const totalTax = selectedItems.reduce((total, item) => {
    return total + item.tax;
}, 0);
  const totalPrice = selectedItems.reduce((total, item) => {
    return total + item.price;
}, 0);
  useEffect(() => {
  console.log(grandTotal)
  
  
  }, [selectedItems])
  
  const [formData, setFormData] = useState({
    invoiceNumber: "",
    customerName: "",
    date: "",
    total: "",
    tax: "",
    grandTotal: ""
  });

  const [showSecondModal, setShowSecondModal] = useState(false); // State for second modal

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const newInvoice = {
      invoiceNumber: formData.invoiceNumber,
      customerName: formData.customerName,
      date: formData.date,
      total: totalPrice,
      tax: totalTax,
      grandTotal: grandTotal
    };
  
    const existingInvoices = JSON.parse(localStorage.getItem("invoiceData")) || [];
    console.log(existingInvoices)
  
    const updatedInvoices = [...existingInvoices, newInvoice];
    console.log(updatedInvoices)
  
    localStorage.setItem("invoiceData", JSON.stringify(updatedInvoices));
    console.log(updatedInvoices)
    onClose()
    // setFormData({ invoiceNumber: "",
    // customerName: "",
    // date: "",
    // total: "",
    // tax: "",
    // grandTotal: ""})

  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="bg-stone-100 w-[50%] h-[70%] bg-opacity-80  rounded-3xl relative z-10">
          <div className="w-full h-full bg-stone-800 bg-opacity-35 p-3"> 
            <h1 className="text-xl font-thin   text-custom p-2 bg-stone-900 rounded-full w-fit text-start">Create Invoice</h1>
            <button
              onClick={onClose}
              className="p-1 rounded-full text-stone-900 text-xl border border-stone-950 absolute top-3 right-3 hover:bg-gray-600"
            >
              <IoCloseOutline />
            </button>
            <div className="absolute right-52 top-3  flex gap-3">
            <button onClick={()=>    setShowSecondModal(true)} className="px-4 rounded-full  bg-black text-xs py-2 text-white  w-fit h-fit">Add items</button>
            <button onClick={()=>    setShowSecondModal(true)} className="px-4 rounded-full  bg-black text-xs py-2 text-white  w-fit h-fit">Add items</button>
            <button onClick={()=>    setShowSecondModal(true)} className="px-4 rounded-full  bg-black text-xs py-2 text-white  w-fit h-fit">Add items</button>

            </div>
            <form onSubmit={handleSubmit} className="mt-4">
              <div className="w-full flex gap-1 relative">
                <div>
                  <label className="block text-stone-100 text-sm font-thin mb-1">
                    Invoice Number
                  </label>
                  <input 
                  required
                    type="text"
                    name="invoiceNumber"
                    value={formData.invoiceNumber}
                    onChange={handleChange}
                    className="w-[100px] bg-stone-700 bg-opacity-45 rounded-full px-3 py-1   outline-none"
                  />
                </div>
                <div>
                  <label className="block  text-stone-100 text-sm font-thin mb-1">
                    Date
                  </label>
                  <input 
                  required
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-[150px] bg-stone-700 bg-opacity-45 rounded-full px-3 py-1   outline-none"
                  />
                </div>
                <div>
                  <label className="block  text-stone-100 text-sm font-thin mb-1">
                    Customer name
                  </label>
                  <input
                  required
                    type="text"
                    name="customerName"
                    value={formData.customerName}
                    onChange={handleChange}
                    className="w-[150px] bg-stone-700 bg-opacity-45 rounded-full px-3 py-1   outline-none"
                  />
                </div>
              </div>
              <div className="w-full  h-[70%] overflow-y-scroll p-1  gap-1 flex flex-col">
                        {selectedItems.map((item, index) => (
                            <div key={index} className="w-full bg-stone-500 px-3 rounded-full gap-4 py-2 flex">
                              
                                <div className="h-fit w-fit px-3 py-2 bg-stone-950 rounded-full text-white">{item.itemId}</div>
                                <div className="h-fit w-[100px] px-3 py-2 bg-stone-950 rounded-full text-white">{item.itemName}</div>
                                <div className="h-fit w-[65px] px-3 py-2 bg-stone-950 rounded-full text-red-400">{item.price}</div>
                                <div className="h-fit w-[65px] text-sm px-3 py-2 bg-stone-950 rounded-full text-stone-400 relative">
                                    <span className="absolute text-red-400 top-0 text-xs">Tax</span>
                                    {item.tax}.00%
                                </div>
                                <div className="h-fit w-[68px] flex items-end  px-3 py-2 bg-stone-950 rounded-full text-stone-400 relative">
                                    <span className="absolute text-red-400 top-0 text-xs">Sub</span>
                                    {item.subtotal}
                                </div>
                            </div>
                        ))}
              </div>
              <div className="w-full h-fit p-3 text-xs font-sans text-stone-100 flex justify-between ">
                <div style={{background:"#71A3C6  "}} className="py-10 w-[30%] h-28  relative justify-end items-start p-3 rounded-3xl flex flex-col">
                  <h1 className="absolute top-4 left-3 ">Total Price</h1>
                  <div className=" bg-opacity-40 text-[30px] font-bold "> <CountUp end={totalPrice} />.00</div>
                </div>
                <div style={{background:"#71A3C6  "}} className="py-10 w-[30%] h-28  relative justify-end  items-start p-3 rounded-3xl flex flex-col">
                  <h1 className="absolute top-4 left-3 ">Total tax</h1>
                  <div className=" bg-opacity-40 text-[30px] font-bold  "> <CountUp end={totalTax} /><span className="text-sm">%</span></div>
                </div>
                <div style={{background:"#71A3C6  "}} className="py-10 w-[30%] h-28  relative justify-end  items-start p-3 rounded-3xl flex flex-col">
                  <h1 className="absolute top-4 left-3 ">Grand total</h1>
                  <div className=" bg-opacity-40 text-[30px] font-bold "> <CountUp end={grandTotal} />.00</div>
                </div>
               
              </div>
              <button
                type="submit"
                className="bg-stone-950 hover:bg-stone-950 bg-opacity-80 rounded-full text-white py-2 px-4 absolute bottom-5 right-4"
              >
                Save
              </button>
            </form>
          </div>
        </div>
      </div>


      {
              <ShowItemsModal isOpen={showSecondModal} onClose={() => setShowSecondModal(false)}  onItemSelected={handleItemSelected}/>

      }
    </>
  );
}

export default CreateInvoiceModal;
