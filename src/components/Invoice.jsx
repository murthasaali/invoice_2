import React, { useEffect, useState } from "react";
import InvoiceNavbar from "./InvoiceNavbar";
import { FaSearch } from "react-icons/fa";
import InvoiceTable from "./InvoiceTable";
import invoiceData from "../Constants/Datas/InvoiceDatas";
import CreateInvoiceModal from "../Modals/CreateInvoice";

function Invoice() {
  const [filteredInvoices, setFilteredInvoices] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {

    const filteredInvoice = invoiceData.filter((invoice) =>
      invoice.customerName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredInvoices(filteredInvoice);
  }, [searchQuery]);
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="h-full w-full flex flex-col gap-3 p-4">
      <InvoiceNavbar />
      <div className="w-full  h-[80%] bg-stone-950 bg-opacity-60 rounded-3xl flex flex-col">
        <div className="h-16 w-full rounded-3xl   flex justify-between px-10 items-center">
          <div className="text-xl font-thin text-white">Invoices </div>
          <div className="w-[300px] h-12 rounded-full border flex justify-between text-xl border-stone-200 border-opacity-40 items-center px-3">
            <input
                          onChange={(e) => setSearchQuery(e.target.value)}

              type="text"
              className="w-full rounded-full bg-transparent outline-none px-3 text-white font-normal"
            />
            <FaSearch className="text-blue-200 text-opacity-35" />
          </div>
          <div className="text-xl font-thin h-full w-[400px] rounded-b-2xl bg-stone-100 bg-opacity-15 justify-start items-center flex ">
            <div className="flex gap-3 w-full h-full  justify-center items-center ">
              <button className="px-4 bg-stone-100 bg-opacity-80 py-3 rounded-full h-fit text-xs">
                All Invoices
              </button>
              <button className="px-4 bg-stone-100 bg-opacity-80 py-3 rounded-full h-fit text-xs">
                Drafts
              </button>
              <button className="px-4 bg-stone-100 bg-opacity-80 py-3 rounded-full h-fit text-xs flex">
                Unpaid Invoices
              </button>{" "}
            </div>
          </div>
          <div className="text-xl font-thin text-white flex gap-1">
            <button className="p-3 h-fit rounded-full text-xl text-white border border-stone-200 border-opacity-40">
              {" "}
              <FaSearch />
            </button>
            <button
              onClick={openModal}
              className="p-3 flex h-fit  justify-center items-center rounded-full text-xs border-stone-200 border-opacity-40 text-white border"
            >
              {" "}
              <FaSearch className="text-xl" /> Create an invoice
            </button>
          </div>
        </div>
        <div className="w-full h-[90%] p-5 gap-4 flex overflow-hidden">
          <div className="w-[60%] h-full overflow-auto ">
            <InvoiceTable filteredInvoice={searchQuery.length>0&&filteredInvoices} />
          </div>

          <div className="w-[40%] h-[60%] bg-stone-950"></div>
        </div>
      </div>
      <CreateInvoiceModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default Invoice;
