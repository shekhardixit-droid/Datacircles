import { useState } from "react";
import InvoicePreview from "./InvoicePreview";

const CreateInvoice = () => {
  const [invoice, setInvoice] = useState({
    invoiceNumber: "",
    invoiceDate: "",
    dueDate: "",
    placeOfSupply: "",

    seller: {
      name: "",
      gstin: "",
      pan: "",
      address: "",
      mobile: "",
      email: "",
      website: "",
    },

    customer: {
      contactPerson: "",
      companyName: "",
      gstin: "",
      address: "",
      phone: "",
    },

    manufacturingSheet: "",
    orderNumber: "",
    customerNumber: "",

    shippingAddress: "",
    dispatchFrom: "",

    items: [
      {
        id: Date.now(),
        name: "",
        description: [],
        hsnSac: "",
        taxRate: 5,
        quantity: 1,
        unit: "NOS",
        rate: 0,
      },
    ],

    shippingCharges: {
      hsnSac: "996819",
      taxRate: 5,
      amount: 0,
    },

    bankDetails: {
      bank: "",
      accountNumber: "",
      ifsc: "",
      branch: "",
    },

    notes: "",

    terms: [""],
  });

  // -----------------------------
  // SIMPLE FIELD UPDATE
  // -----------------------------

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInvoice((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // -----------------------------
  // NESTED FIELD UPDATE
  // -----------------------------

  const handleNestedChange = (section, field, value) => {
    setInvoice((prev) => ({
      ...prev,

      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  // -----------------------------
  // ITEM UPDATE
  // -----------------------------

  const handleItemChange = (id, field, value) => {
    setInvoice((prev) => ({
      ...prev,

      items: prev.items.map((item) =>
        item.id === id
          ? {
              ...item,
              [field]: value,
            }
          : item
      ),
    }));
  };

  // -----------------------------
  // ADD ITEM
  // -----------------------------

  const addItem = () => {
    setInvoice((prev) => ({
      ...prev,

      items: [
        ...prev.items,

        {
          id: Date.now(),
          name: "",
          description: [],
          hsnSac: "",
          taxRate: 5,
          quantity: 1,
          unit: "NOS",
          rate: 0,
        },
      ],
    }));
  };

  // -----------------------------
  // REMOVE ITEM
  // -----------------------------

  const removeItem = (id) => {
    setInvoice((prev) => ({
      ...prev,

      items: prev.items.filter(
        (item) => item.id !== id
      ),
    }));
  };

  // -----------------------------
  // SHIPPING CHANGE
  // -----------------------------

  const handleShippingChange = (field, value) => {
    setInvoice((prev) => ({
      ...prev,

      shippingCharges: {
        ...prev.shippingCharges,
        [field]: value,
      },
    }));
  };

  // -----------------------------
  // BANK DETAILS
  // -----------------------------

  const handleBankChange = (field, value) => {
    setInvoice((prev) => ({
      ...prev,

      bankDetails: {
        ...prev.bankDetails,
        [field]: value,
      },
    }));
  };

  // -----------------------------
  // TERMS
  // -----------------------------

  const handleTermChange = (index, value) => {
    setInvoice((prev) => ({
      ...prev,

      terms: prev.terms.map((term, i) =>
        i === index ? value : term
      ),
    }));
  };

  const addTerm = () => {
    setInvoice((prev) => ({
      ...prev,
      terms: [...prev.terms, ""],
    }));
  };

  // -----------------------------
  // SUBMIT
  // -----------------------------

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Invoice Data:", invoice);

    // Later:
    // axios.post("/api/invoices", invoice)
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <div className="mx-auto max-w-[1400px]">

        <h1 className="mb-6 text-2xl font-bold">
          Create Invoice
        </h1>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

          {/* ================================= */}
          {/* FORM */}
          {/* ================================= */}

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >

            {/* =============================== */}
            {/* INVOICE DETAILS */}
            {/* =============================== */}

            <Section title="Invoice Details">

              <div className="grid grid-cols-2 gap-4">

                <Input
                  label="Invoice Number"
                  name="invoiceNumber"
                  value={invoice.invoiceNumber}
                  onChange={handleChange}
                />

                <Input
                  label="Place of Supply"
                  name="placeOfSupply"
                  value={invoice.placeOfSupply}
                  onChange={handleChange}
                />

                <Input
                  label="Invoice Date"
                  type="date"
                  name="invoiceDate"
                  value={invoice.invoiceDate}
                  onChange={handleChange}
                />

                <Input
                  label="Due Date"
                  type="date"
                  name="dueDate"
                  value={invoice.dueDate}
                  onChange={handleChange}
                />

                <Input
                  label="Manufacturing Sheet"
                  name="manufacturingSheet"
                  value={invoice.manufacturingSheet}
                  onChange={handleChange}
                />

                <Input
                  label="Order Number"
                  name="orderNumber"
                  value={invoice.orderNumber}
                  onChange={handleChange}
                />

                <Input
                  label="Customer Number"
                  name="customerNumber"
                  value={invoice.customerNumber}
                  onChange={handleChange}
                />

              </div>

            </Section>

            {/* =============================== */}
            {/* SELLER */}
            {/* =============================== */}

            <Section title="Seller Details">

              <div className="space-y-4">

                <Input
                  label="Company Name"
                  value={invoice.seller.name}
                  onChange={(e) =>
                    handleNestedChange(
                      "seller",
                      "name",
                      e.target.value
                    )
                  }
                />

                <div className="grid grid-cols-2 gap-4">

                  <Input
                    label="GSTIN"
                    value={invoice.seller.gstin}
                    onChange={(e) =>
                      handleNestedChange(
                        "seller",
                        "gstin",
                        e.target.value
                      )
                    }
                  />

                  <Input
                    label="PAN"
                    value={invoice.seller.pan}
                    onChange={(e) =>
                      handleNestedChange(
                        "seller",
                        "pan",
                        e.target.value
                      )
                    }
                  />

                  <Input
                    label="Mobile"
                    value={invoice.seller.mobile}
                    onChange={(e) =>
                      handleNestedChange(
                        "seller",
                        "mobile",
                        e.target.value
                      )
                    }
                  />

                  <Input
                    label="Email"
                    value={invoice.seller.email}
                    onChange={(e) =>
                      handleNestedChange(
                        "seller",
                        "email",
                        e.target.value
                      )
                    }
                  />

                </div>

                <Textarea
                  label="Address"
                  value={invoice.seller.address}
                  onChange={(e) =>
                    handleNestedChange(
                      "seller",
                      "address",
                      e.target.value
                    )
                  }
                />

              </div>

            </Section>

            {/* =============================== */}
            {/* CUSTOMER */}
            {/* =============================== */}

            <Section title="Customer Details">

              <div className="grid grid-cols-2 gap-4">

                <Input
                  label="Contact Person"
                  value={invoice.customer.contactPerson}
                  onChange={(e) =>
                    handleNestedChange(
                      "customer",
                      "contactPerson",
                      e.target.value
                    )
                  }
                />

                <Input
                  label="Company Name"
                  value={invoice.customer.companyName}
                  onChange={(e) =>
                    handleNestedChange(
                      "customer",
                      "companyName",
                      e.target.value
                    )
                  }
                />

                <Input
                  label="GSTIN"
                  value={invoice.customer.gstin}
                  onChange={(e) =>
                    handleNestedChange(
                      "customer",
                      "gstin",
                      e.target.value
                    )
                  }
                />

                <Input
                  label="Phone"
                  value={invoice.customer.phone}
                  onChange={(e) =>
                    handleNestedChange(
                      "customer",
                      "phone",
                      e.target.value
                    )
                  }
                />

              </div>

              <Textarea
                label="Billing Address"
                value={invoice.customer.address}
                onChange={(e) =>
                  handleNestedChange(
                    "customer",
                    "address",
                    e.target.value
                  )
                }
              />

            </Section>

            {/* =============================== */}
            {/* SHIPPING */}
            {/* =============================== */}

            <Section title="Shipping">

              <Textarea
                label="Shipping Address"
                value={invoice.shippingAddress}
                onChange={(e) =>
                  handleChange(e)
                }
                name="shippingAddress"
              />

              <Textarea
                label="Dispatch From"
                value={invoice.dispatchFrom}
                onChange={(e) =>
                  handleChange(e)
                }
                name="dispatchFrom"
              />

            </Section>

            {/* =============================== */}
            {/* ITEMS */}
            {/* =============================== */}

            <Section title="Items">

              <div className="space-y-4">

                {invoice.items.map((item, index) => (

                  <div
                    key={item.id}
                    className="rounded-lg border bg-gray-50 p-4"
                  >

                    <div className="mb-3 flex items-center justify-between">

                      <h3 className="font-semibold">
                        Item {index + 1}
                      </h3>

                      {invoice.items.length > 1 && (
                        <button
                          type="button"
                          onClick={() =>
                            removeItem(item.id)
                          }
                          className="text-sm text-red-600"
                        >
                          Remove
                        </button>
                      )}

                    </div>

                    <div className="grid grid-cols-2 gap-4">

                      <Input
                        label="Item Name"
                        value={item.name}
                        onChange={(e) =>
                          handleItemChange(
                            item.id,
                            "name",
                            e.target.value
                          )
                        }
                      />

                      <Input
                        label="HSN / SAC"
                        value={item.hsnSac}
                        onChange={(e) =>
                          handleItemChange(
                            item.id,
                            "hsnSac",
                            e.target.value
                          )
                        }
                      />

                      <Input
                        label="Quantity"
                        type="number"
                        value={item.quantity}
                        onChange={(e) =>
                          handleItemChange(
                            item.id,
                            "quantity",
                            Number(e.target.value)
                          )
                        }
                      />

                      <Input
                        label="Rate"
                        type="number"
                        value={item.rate}
                        onChange={(e) =>
                          handleItemChange(
                            item.id,
                            "rate",
                            Number(e.target.value)
                          )
                        }
                      />

                      <Input
                        label="GST %"
                        type="number"
                        value={item.taxRate}
                        onChange={(e) =>
                          handleItemChange(
                            item.id,
                            "taxRate",
                            Number(e.target.value)
                          )
                        }
                      />

                      <Input
                        label="Unit"
                        value={item.unit}
                        onChange={(e) =>
                          handleItemChange(
                            item.id,
                            "unit",
                            e.target.value
                          )
                        }
                      />

                    </div>

                  </div>

                ))}

                <button
                  type="button"
                  onClick={addItem}
                  className="rounded-lg border border-dashed border-gray-400 px-4 py-3 text-sm font-medium hover:bg-gray-50"
                >
                  + Add Item
                </button>

              </div>

            </Section>

            {/* =============================== */}
            {/* SHIPPING CHARGES */}
            {/* =============================== */}

            <Section title="Shipping Charges">

              <div className="grid grid-cols-3 gap-4">

                <Input
                  label="HSN / SAC"
                  value={invoice.shippingCharges.hsnSac}
                  onChange={(e) =>
                    handleShippingChange(
                      "hsnSac",
                      e.target.value
                    )
                  }
                />

                <Input
                  label="GST %"
                  type="number"
                  value={invoice.shippingCharges.taxRate}
                  onChange={(e) =>
                    handleShippingChange(
                      "taxRate",
                      Number(e.target.value)
                    )
                  }
                />

                <Input
                  label="Amount"
                  type="number"
                  value={invoice.shippingCharges.amount}
                  onChange={(e) =>
                    handleShippingChange(
                      "amount",
                      Number(e.target.value)
                    )
                  }
                />

              </div>

            </Section>

            {/* =============================== */}
            {/* BANK DETAILS */}
            {/* =============================== */}

            <Section title="Bank Details">

              <div className="grid grid-cols-2 gap-4">

                {[
                  ["bank", "Bank"],
                  ["accountNumber", "Account Number"],
                  ["ifsc", "IFSC Code"],
                  ["branch", "Branch"],
                ].map(([field, label]) => (

                  <Input
                    key={field}
                    label={label}
                    value={invoice.bankDetails[field]}
                    onChange={(e) =>
                      handleBankChange(
                        field,
                        e.target.value
                      )
                    }
                  />

                ))}

              </div>

            </Section>

            {/* =============================== */}
            {/* NOTES */}
            {/* =============================== */}

            <Section title="Notes">

              <Textarea
                label="Notes"
                value={invoice.notes}
                onChange={(e) =>
                  handleChange(e)
                }
                name="notes"
              />

            </Section>

            {/* =============================== */}
            {/* TERMS */}
            {/* =============================== */}

            <Section title="Terms & Conditions">

              <div className="space-y-3">

                {invoice.terms.map((term, index) => (

                  <Input
                    key={index}
                    label={`Term ${index + 1}`}
                    value={term}
                    onChange={(e) =>
                      handleTermChange(
                        index,
                        e.target.value
                      )
                    }
                  />

                ))}

                <button
                  type="button"
                  onClick={addTerm}
                  className="text-sm font-medium text-blue-600"
                >
                  + Add Term
                </button>

              </div>

            </Section>

            {/* =============================== */}
            {/* SAVE */}
            {/* =============================== */}

            <button
              type="submit"
              className="w-full rounded-lg bg-black px-5 py-3 font-semibold text-white hover:bg-gray-800"
            >
              Save Invoice
            </button>

          </form>

          {/* ================================= */}
          {/* LIVE PREVIEW */}
          {/* ================================= */}

          <div className="lg:sticky lg:top-6 lg:h-fit">

            <InvoicePreview
              data={invoice}
            />

          </div>

        </div>

      </div>

    </div>
  );
};


// =======================================
// REUSABLE INPUT
// =======================================

const Input = ({
  label,
  type = "text",
  ...props
}) => (

  <div>

    <label className="mb-1 block text-sm font-medium text-gray-700">
      {label}
    </label>

    <input
      type={type}
      {...props}
      className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 outline-none transition focus:border-black"
    />

  </div>
);


// =======================================
// REUSABLE TEXTAREA
// =======================================

const Textarea = ({
  label,
  ...props
}) => (

  <div className="mt-4">

    <label className="mb-1 block text-sm font-medium text-gray-700">
      {label}
    </label>

    <textarea
      {...props}
      rows={3}
      className="w-full resize-none rounded-lg border border-gray-300 bg-white px-3 py-2 outline-none transition focus:border-black"
    />

  </div>
);


// =======================================
// SECTION
// =======================================

const Section = ({
  title,
  children,
}) => (

  <section className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">

    <h2 className="mb-5 text-lg font-semibold">
      {title}
    </h2>

    {children}

  </section>
);

export default CreateInvoice;