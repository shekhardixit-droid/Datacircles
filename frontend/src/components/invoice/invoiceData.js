const invoiceData = {
  type: "PRO FORMA INVOICE",

  invoiceNumber: "CC/PI/26-27/42",
  invoiceDate: "26 Aug 2026",
  dueDate: "02 Sep 2026",
  placeOfSupply: "27-MAHARASHTRA",

  seller: {
    name: "Bacoola Apparels",
    gstin: "27GUFPM3357H1ZB",
    pan: "GUFPM3357H",
    address:
      "No. 721, Centura Square IT Park, Road No. 27, Wagle Estate, Thane West, Maharashtra, 400604",
    mobile: "+91 8879438577",
    email: "official.cottson@gmail.com",
    website: "www.cottson.com",
  },

  customer: {
    contactPerson: "Akshay",
    companyName: "Suvarna Craft",
    gstin: "27AKHPG4291L1ZT",
    address:
      "Office No:141, Survey Number : 83 84 85, Vision Flora, Kunal Icon Road, Pimpri Chinchwad, Pune, Maharashtra, 411027",
    phone: "8793591562",
  },

  manufacturingSheet: "CC/MS/26-27/140",
  orderNumber: "CC/ON/SUV/1",
  customerNumber: "CC/CNSUV",

  shippingAddress:
    "Office No:141, Survey Number : 83 84 85, Vision Flora, Kunal Icon Road, Pimpri Chinchwad, Pune, Maharashtra, 411027",

  dispatchFrom:
    "Registered Office No. 721, Centura Square IT Park, Road No. 27, Wagle Estate, Thane West, Maharashtra, 400604",

  items: [
    {
      id: 1,
      name: "Sample - Polo Neck T-Shirt",
      description: [
        "Polo Neck Collar",
        "Black T-Shirt",
        "220-35 GSM",
        "Poly Cotton Blend 40:60",
      ],
      hsnSac: "61091000",
      taxRate: 5,
      quantity: 1,
      unit: "NOS",
      rate: 1000,
    },
  ],

  shippingCharges: {
    hsnSac: "996819",
    taxRate: 5,
    amount: 200,
  },

  bankDetails: {
    bank: "HDFC Bank Ltd",
    accountNumber: "50200058015480",
    ifsc: "HDFC0009472",
    branch: "Kasarvadavli",
  },

  notes:
    "After receipt of the final payment, Bacoola Apparels will verify that all items in the order have been fulfilled from our end. This confirmation signifies the completion of the order, ensuring that all T-shirts and other goods have been produced, inspected for quality, and are ready for delivery as per our agreement.",

  terms: [
    "Ownership of goods remains with Bacoola Apparels until full payment is received.",
    "Products guaranteed to meet quality standards. Notify us within 48 hours of any defects.",
    "Any disputes shall be resolved in Thane, Maharashtra.",
    "Neither party shall be liable for delays or non-performance due to circumstances beyond their control.",
    "Invoice terms supersede any prior agreements or negotiations.",
  ],
};

export default invoiceData;