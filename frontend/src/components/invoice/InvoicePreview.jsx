import React from "react";


const InvoicePreview = ({ data }) => {
  

  // -----------------------------
  // CALCULATIONS
  // -----------------------------

  const itemsSubtotal = data.items.reduce(
    (total, item) => total + item.quantity * item.rate,
    0
  );

  const shippingAmount = data.shippingCharges.amount;

  const taxableAmount = itemsSubtotal + shippingAmount;

  const cgst = taxableAmount * 0.025;
  const sgst = taxableAmount * 0.025;

  const totalTax = cgst + sgst;

  const grandTotal = taxableAmount + totalTax;

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* Invoice Paper */}
      <div className="mx-auto max-w-[1100px] bg-white text-[12px] text-gray-900 shadow-lg">

        {/* ================= HEADER ================= */}

        <div className="grid grid-cols-2 border border-black">

          {/* Seller */}
          <div className="border-r border-black p-4">

            <div className="mb-3 text-lg font-bold">
              {data.seller.name}
            </div>

            <div className="space-y-1 leading-tight">
              <p>
                <strong>GSTIN:</strong> {data.seller.gstin}
              </p>

              <p>
                <strong>PAN:</strong> {data.seller.pan}
              </p>

              <p>
                <strong>Registered Office:</strong>{" "}
                {data.seller.address}
              </p>

              <p>
                <strong>Mobile:</strong> {data.seller.mobile}
              </p>

              <p>
                <strong>Email:</strong> {data.seller.email}
              </p>

              <p>
                <strong>Website:</strong> {data.seller.website}
              </p>
            </div>
          </div>

          {/* Invoice information */}
          <div>

            <div className="border-b border-black p-3 text-center">
              <h1 className="text-lg font-bold tracking-widest">
                {data.type}
              </h1>
            </div>

            <div className="grid grid-cols-2">

              <div className="border-r border-black">

                <InfoRow
                  label="Pro Forma Invoice #"
                  value={data.invoiceNumber}
                />

                <InfoRow
                  label="Place of Supply"
                  value={data.placeOfSupply}
                />

                <InfoRow
                  label="Manufacturing Sheet"
                  value={data.manufacturingSheet}
                />

                <InfoRow
                  label="Customer Number"
                  value={data.customerNumber}
                />

              </div>

              <div>

                <InfoRow
                  label="Proforma Invoice Date"
                  value={data.invoiceDate}
                />

                <InfoRow
                  label="Due Date"
                  value={data.dueDate}
                />

                <InfoRow
                  label="Order Number"
                  value={data.orderNumber}
                />

              </div>

            </div>

          </div>
        </div>

        {/* ================= CUSTOMER ================= */}

        <div className="grid grid-cols-2 border-x border-b border-black">

          {/* Customer */}
          <div className="border-r border-black p-4">

            <h2 className="mb-2 font-bold">
              Customer Details:
            </h2>

            <p className="font-semibold">
              {data.customer.contactPerson}
            </p>

            <p className="font-semibold">
              {data.customer.companyName}
            </p>

            <p>
              <strong>GSTIN:</strong>{" "}
              {data.customer.gstin}
            </p>

            <p className="mt-2">
              <strong>Billing Address:</strong>
            </p>

            <p>
              {data.customer.address}
            </p>

            <p className="mt-1">
              <strong>Ph:</strong>{" "}
              {data.customer.phone}
            </p>

          </div>

          {/* Shipping */}
          <div className="p-4">

            <h2 className="mb-2 font-bold">
              Shipping Address:
            </h2>

            <p>{data.shippingAddress}</p>

            <h2 className="mt-4 font-bold">
              Dispatch From:
            </h2>

            <p>{data.dispatchFrom}</p>

          </div>

        </div>

        {/* ================= ITEMS TABLE ================= */}

        <table className="w-full border-collapse border-x border-black">

          <thead>

            <tr className="border-b border-black bg-gray-50">

              <th className="w-[40px] border-r border-black p-2">
                #
              </th>

              <th className="border-r border-black p-2 text-left">
                Item
              </th>

              <th className="w-[100px] border-r border-black p-2">
                HSN/SAC
              </th>

              <th className="w-[70px] border-r border-black p-2">
                Tax
              </th>

              <th className="w-[70px] border-r border-black p-2">
                Qty
              </th>

              <th className="w-[100px] border-r border-black p-2">
                Rate / Item
              </th>

              <th className="w-[70px] border-r border-black p-2">
                Per
              </th>

              <th className="w-[120px] p-2">
                Amount
              </th>

            </tr>

          </thead>

          <tbody>

            {data.items.map((item) => {

              const amount =
                item.quantity * item.rate;

              return (
                <tr
                  key={item.id}
                  className="border-b border-black align-top"
                >

                  <td className="border-r border-black p-2 text-center">
                    {item.id}
                  </td>

                  <td className="border-r border-black p-3">

                    <p className="font-semibold">
                      {item.name}
                    </p>

                    <ul className="mt-2 list-disc pl-5">
                      {item.description.map(
                        (description, index) => (
                          <li key={index}>
                            {description}
                          </li>
                        )
                      )}
                    </ul>

                  </td>

                  <td className="border-r border-black p-2 text-center">
                    {item.hsnSac}
                  </td>

                  <td className="border-r border-black p-2 text-center">
                    {item.taxRate}%
                  </td>

                  <td className="border-r border-black p-2 text-center">
                    {item.quantity}
                  </td>

                  <td className="border-r border-black p-2 text-right">
                    {formatMoney(item.rate)}
                  </td>

                  <td className="border-r border-black p-2 text-center">
                    {item.unit}
                  </td>

                  <td className="p-2 text-right font-medium">
                    {formatMoney(amount)}
                  </td>

                </tr>
              );

            })}

            {/* Shipping */}
            <tr className="border-b border-black">

              <td></td>

              <td className="p-3 font-semibold">
                Delivery / Shipping Charges
              </td>

              <td className="text-center">
                {data.shippingCharges.hsnSac}
              </td>

              <td className="text-center">
                {data.shippingCharges.taxRate}%
              </td>

              <td></td>

              <td></td>

              <td></td>

              <td className="p-2 text-right">
                {formatMoney(shippingAmount)}
              </td>

            </tr>

          </tbody>

          {/* TOTAL */}
          <tfoot>

            <tr className="font-semibold">

              <td
                colSpan="7"
                className="border-r border-black p-3 text-right"
              >
                Taxable Amount
              </td>

              <td className="p-3 text-right">
                {formatMoney(taxableAmount)}
              </td>

            </tr>

            <tr>

              <td
                colSpan="7"
                className="border-r border-black p-3 text-right"
              >
                CGST 2.5%
              </td>

              <td className="p-3 text-right">
                {formatMoney(cgst)}
              </td>

            </tr>

            <tr>

              <td
                colSpan="7"
                className="border-r border-black p-3 text-right"
              >
                SGST 2.5%
              </td>

              <td className="p-3 text-right">
                {formatMoney(sgst)}
              </td>

            </tr>

            <tr className="border-t border-black text-base font-bold">

              <td
                colSpan="7"
                className="border-r border-black p-3 text-right"
              >
                Total
              </td>

              <td className="p-3 text-right">
                ₹{formatMoney(grandTotal)}
              </td>

            </tr>

          </tfoot>

        </table>

        {/* ================= AMOUNT IN WORDS ================= */}

        <div className="border-x border-b border-black p-3">

          <strong>
            Amount Chargeable (in words):
          </strong>

          <span className="ml-2">
            INR One Thousand Two Hundred And Sixty
            Rupees Only.
          </span>

          <span className="ml-2 italic">
            E & O.E
          </span>

        </div>

        {/* ================= TAX SUMMARY ================= */}

        <div className="border-x border-b border-black">

          <div className="p-3 font-bold">
            HSN/SAC Tax Summary
          </div>

          <table className="w-full border-collapse border-t border-black">

            <thead>

              <tr className="border-b border-black">

                <th className="border-r border-black p-2">
                  HSN/SAC
                </th>

                <th className="border-r border-black p-2">
                  Taxable Value
                </th>

                <th
                  colSpan="2"
                  className="border-r border-black p-2"
                >
                  Central Tax
                </th>

                <th
                  colSpan="2"
                  className="border-r border-black p-2"
                >
                  State/UT Tax
                </th>

                <th className="p-2">
                  Total Tax
                </th>

              </tr>

            </thead>

            <tbody>

              {data.items.map((item) => {

                const taxable =
                  item.quantity * item.rate;

                const itemCgst =
                  taxable * (item.taxRate / 100 / 2);

                const itemSgst =
                  taxable * (item.taxRate / 100 / 2);

                return (
                  <TaxRow
                    key={item.id}
                    hsn={item.hsnSac}
                    taxable={taxable}
                    cgst={itemCgst}
                    sgst={itemSgst}
                  />
                );
              })}

              <TaxRow
                hsn={data.shippingCharges.hsnSac}
                taxable={shippingAmount}
                cgst={shippingAmount * 0.025}
                sgst={shippingAmount * 0.025}
              />

              <tr className="border-t border-black font-bold">

                <td className="border-r border-black p-2 text-center">
                  TOTAL
                </td>

                <td className="border-r border-black p-2 text-right">
                  {formatMoney(taxableAmount)}
                </td>

                <td></td>

                <td className="border-r border-black p-2 text-right">
                  {formatMoney(cgst)}
                </td>

                <td></td>

                <td className="border-r border-black p-2 text-right">
                  {formatMoney(sgst)}
                </td>

                <td className="p-2 text-right">
                  {formatMoney(totalTax)}
                </td>

              </tr>

            </tbody>

          </table>

        </div>

        {/* ================= BANK + SIGNATURE ================= */}

        <div className="grid grid-cols-2 border-x border-b border-black">

          <div className="border-r border-black p-4">

            <h2 className="mb-3 font-bold">
              Bank Details:
            </h2>

            <p>
              <strong>Bank:</strong>{" "}
              {data.bankDetails.bank}
            </p>

            <p>
              <strong>Account #:</strong>{" "}
              {data.bankDetails.accountNumber}
            </p>

            <p>
              <strong>IFSC Code:</strong>{" "}
              {data.bankDetails.ifsc}
            </p>

            <p>
              <strong>Branch:</strong>{" "}
              {data.bankDetails.branch}
            </p>

          </div>

          <div className="flex min-h-[180px] flex-col items-end justify-between p-4">

            <p className="font-semibold">
              For {data.seller.name}
            </p>

            <div className="text-center">

              <div className="mb-2 text-3xl italic">
                Signature
              </div>

              <p className="font-semibold">
                Authorized Signatory
              </p>

            </div>

          </div>

        </div>

        {/* ================= NOTES / TERMS ================= */}

        <div className="grid grid-cols-2 border-x border-b border-black">

          <div className="border-r border-black p-4">

            <h2 className="mb-2 font-bold">
              Notes:
            </h2>

            <p className="leading-relaxed">
              {data.notes}
            </p>

          </div>

          <div className="p-4">

            <h2 className="mb-2 font-bold">
              Terms and Conditions:
            </h2>

            <ol className="list-decimal space-y-1 pl-5">

              {data.terms.map((term, index) => (
                <li key={index}>
                  {term}
                </li>
              ))}

            </ol>

          </div>

        </div>

        {/* ================= FOOTER ================= */}

        <div className="border-x border-b border-black p-3 text-center text-gray-600">

          Page 1 / 1 • This is a digitally signed document.

        </div>

      </div>
    </div>
  );
};


// --------------------------------------
// HELPER COMPONENTS
// --------------------------------------

const InfoRow = ({ label, value }) => (
  <div className="border-b border-black p-2 last:border-b-0">

    <p className="font-semibold">
      {label}
    </p>

    <p>
      {value}
    </p>

  </div>
);


const TaxRow = ({
  hsn,
  taxable,
  cgst,
  sgst,
}) => (

  <tr className="border-b border-black">

    <td className="border-r border-black p-2 text-center">
      {hsn}
    </td>

    <td className="border-r border-black p-2 text-right">
      {formatMoney(taxable)}
    </td>

    <td className="p-2 text-center">
      2.5%
    </td>

    <td className="border-r border-black p-2 text-right">
      {formatMoney(cgst)}
    </td>

    <td className="p-2 text-center">
      2.5%
    </td>

    <td className="border-r border-black p-2 text-right">
      {formatMoney(sgst)}
    </td>

    <td className="p-2 text-right">
      {formatMoney(cgst + sgst)}
    </td>

  </tr>
);


const formatMoney = (amount) => {
  return Number(amount).toLocaleString("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

export default InvoicePreview;