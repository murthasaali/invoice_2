import React from 'react';

function InvoiceTable({ filteredInvoice }) {
  const invoiceDataString = localStorage.getItem("invoiceData");
  const invoiceData = invoiceDataString ? JSON.parse(invoiceDataString) : [];
  console.log("filtered", filteredInvoice);

  return (
    <table className="w-full">
      <thead>
        <tr className="font-thin text-xs">
          <th className="text-start py-2 text-red-500"><div className="rounded-full bg-stone-950 py-2 font-normal text-center">Invoice Number</div></th>
          <th className="text-start px-4 py-2 text-red-500"><div className="rounded-full bg-stone-950 py-2 font-normal text-center">Customer</div></th>
          <th className="text-start px-4 py-2 text-red-500"><div className="rounded-full bg-stone-950 py-2 font-normal text-center">Date</div></th>
          <th className="text-start px-4 py-2 text-red-500"><div className="rounded-full bg-stone-950 py-2 font-normal text-center">Total</div></th>
          <th className="text-start px-4 py-2 text-red-500"><div className="rounded-full bg-stone-950 py-2 font-normal text-center">Tax</div></th>
          <th className="text-start py-2 text-red-500"><div className="rounded-full bg-stone-950 py-2 font-normal text-center">Grand Total</div></th>
        </tr>
      </thead>

      <tbody className='p-4'>
        {
          filteredInvoice ? filteredInvoice.map((invoice, index) => (
            <tr key={index} className="text-white rounded-full h-16" style={{ marginBottom: '10px' }}>
              <td className="px-4 py-2 bg-stone-950 bg-opacity-40 rounded-s-full text-xs text-blue-200 text-opacity-70">{invoice.invoiceNumber}</td>
              <td className="px-4 py-2 bg-stone-950 bg-opacity-40"><img className="w-12 h-12 rounded-full" src={invoice.customerAvatar ? invoice.customerAvatar : "https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100205.jpg?size=626&ext=jpg&ga=GA1.1.922335369.1686896801&semt=ais"} alt={invoice.customerName} />{invoice.customerName}</td>
              <td className="px-4 py-2 bg-stone-950 bg-opacity-40">{invoice.date}</td>
              <td className="px-4 py-2 bg-stone-950 bg-opacity-40 text-xl font-thin text-stone-100 text-opacity-50">{invoice.total}</td>
              <td className="px-4 py-2 bg-stone-950 bg-opacity-40 text-sm font-thin text-stone-100 text-opacity-50">{invoice.tax}%</td>
              <td className="px-4 py-2 bg-stone-950 bg-opacity-40 rounded-e-full text-2xl font-thin text-stone-100 text-opacity-50">{invoice.grandTotal}</td>
            </tr>)) :
            invoiceData.reverse().map((invoice, index) => (
              <tr key={index} className="text-white rounded-full h-16" style={{ marginBottom: '10px' }}>
                <td className="px-4 py-2 bg-stone-950 bg-opacity-40 rounded-s-full text-xs text-blue-200 text-opacity-70">{invoice.invoiceNumber}</td>
                <td className="px-4 py-2 bg-stone-950 bg-opacity-40"><img className="w-12 h-12 rounded-full" src={invoice.customerAvatar ? invoice.customerAvatar : "https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100205.jpg?size=626&ext=jpg&ga=GA1.1.922335369.1686896801&semt=ais"} alt={invoice.customerName} />{invoice.customerName}</td>
                <td className="px-4 py-2 bg-stone-950 bg-opacity-40">{invoice.date}</td>
                <td className="px-4 py-2 bg-stone-950 bg-opacity-40 text-xl font-thin text-stone-100 text-opacity-50">{invoice.total}</td>
                <td className="px-4 py-2 bg-stone-950 bg-opacity-40 text-sm font-thin text-stone-100 text-opacity-50">{invoice.tax}%</td>
                <td className="px-4 py-2 bg-stone-950 bg-opacity-40 rounded-e-full text-2xl font-thin text-stone-100 text-opacity-50">{invoice.grandTotal}</td>
              </tr>
            ))
        }
      </tbody>
    </table>
  );
}

export default InvoiceTable;
