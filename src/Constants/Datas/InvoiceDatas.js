const invoiceData = [
  {
    invoiceNumber: '#INV-001',
    customerName: 'Mahesh',
    customerAvatar: 'https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100205.jpg?size=626&ext=jpg&ga=GA1.1.922335369.1686896801&semt=ais',
    date: '2024-05-05',
    total: '$100.00',
    tax: '$10.00',
    grandTotal: '$2500.00'
  },
  // Additional dummy data
  {
    invoiceNumber: '#INV-002',
    customerName: 'John Doe',
    customerAvatar: 'https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100205.jpg?size=626&ext=jpg&ga=GA1.1.922335369.1686896801&semt=ais',
    date: '2024-05-06',
    total: '$150.00',
    tax: '$15.00',
    grandTotal: '$3000.00'
  },
  {
    invoiceNumber: '#INV-003',
    customerName: 'Jane Smith',
    customerAvatar: 'https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100205.jpg?size=626&ext=jpg&ga=GA1.1.922335369.1686896801&semt=ais',
    date: '2024-05-07',
    total: '$200.00',
    tax: '$20.00',
    grandTotal: '$3500.00'
  },
  {
    invoiceNumber: '#INV-004',
    customerName: 'Alice Johnson',
    customerAvatar: 'https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100205.jpg?size=626&ext=jpg&ga=GA1.1.922335369.1686896801&semt=ais',
    date: '2024-05-08',
    total: '$250.00',
    tax: '$25.00',
    grandTotal: '$4000.00'
  },
  {
    invoiceNumber: '#INV-005',
    customerName: 'Bob Brown',
    customerAvatar: 'https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100205.jpg?size=626&ext=jpg&ga=GA1.1.922335369.1686896801&semt=ais',
    date: '2024-05-09',
    total: '$300.00',
    tax: '$30.00',
    grandTotal: '$4500.00'
  },
  {
    invoiceNumber: '#INV-006',
    customerName: 'Emma Davis',
    customerAvatar: 'https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100205.jpg?size=626&ext=jpg&ga=GA1.1.922335369.1686896801&semt=ais',
    date: '2024-05-10',
    total: '$350.00',
    tax: '$35.00',
    grandTotal: '$5000.00'
  }
];

localStorage.setItem('invoiceData', JSON.stringify(invoiceData));

export default invoiceData;
