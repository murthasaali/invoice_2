import React, { useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import productData from "../Constants/Datas/ProductData";
import { FaSearch } from "react-icons/fa";

function ShowItemsModal({ isOpen, onClose, onItemSelected }) {
  const [selectedItems, setSelectedItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredInvoices, setFilteredInvoices] = useState([]);

  useEffect(() => {
    const filteredInvoice = productData.filter((invoice) =>
      invoice.itemName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredInvoices(filteredInvoice);
  }, [searchQuery]);
  const handleItemSelect = (itemId) => {
    const itemIndex = selectedItems.indexOf(itemId);
    if (itemIndex === -1) {
      setSelectedItems([...selectedItems, itemId]); // Add item to selected items
    } else {
      setSelectedItems(selectedItems.filter((item) => item !== itemId)); // Remove item from selected items
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="bg-stone-100 w-[50%] h-[60%] bg-opacity-80  rounded-lg relative z-10">
        <div className="w-full h-full bg-stone-800 bg-opacity-35 p-3 flex flex-col items-center">
          <h1 className="text-xl font-thin">Items table</h1>
          <div className="w-[300px] h-10 rounded-full border flex justify-between text-xl border-stone-200 border-opacity-40 items-center px-3">
            <input
              onChange={(e) => setSearchQuery(e.target.value)}
              type="text"
              className="w-full rounded-full bg-transparent outline-none px-3 text-white font-normal"
            />
            <FaSearch className="text-blue-200 text-opacity-35" />
          </div>
          <div className="w-full  h-[80%] overflow-y-scroll p-3 gap-3 flex flex-col items-center">
            {filteredInvoices.map((item, index) => (
              <div
                key={index}
                className=" gap-3 py-2 flex justify-center items-center bg-stone-800 bg-opacity-40 w-fit px-4 rounded-3xl "
              >
                <input
                  type="checkbox"
                  className=" h-6 rounded-full w-6  "
                  onChange={() => handleItemSelect(item)}
                  checked={selectedItems.includes(item)}
                />
                <div className="h-fit w-fit px-3 py-2 bg-stone-950 rounded-full text-white">
                  {item.itemId}
                </div>
                <div className="h-fit w-[100px] px-3 py-2 bg-stone-950 rounded-full text-white">
                  {item.itemName}
                </div>
                <div className="h-fit w-[65px] px-3 py-2 bg-stone-950 rounded-full text-red-400">
                  {item.price}
                </div>
                <div className="h-fit w-[65px] text-sm px-3 py-2 bg-stone-950 rounded-full text-stone-400 relative">
                  <span className="absolute text-red-400 top-0 text-xs">
                    Tax
                  </span>
                  {item.tax}.00%
                </div>
                <div className="h-fit w-[68px] flex items-end  px-3 py-2 bg-stone-950 rounded-full text-stone-400 relative">
                  <span className="absolute text-red-400 top-0 text-xs">
                    Sub
                  </span>
                  {item.subtotal}
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={() => {
              onItemSelected(selectedItems); // Pass selected items to parent
              onClose();
            }}
            className="p-2 rounded-full text-stone-900 text-xl border border-stone-950 absolute top-3 right-3 hover:bg-gray-600"
          >
            <IoCloseOutline />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShowItemsModal;
