import React, { useState, useMemo } from "react";

/* ============================================================= */
/* SHARED TOKENS (kept as JS objects so nothing depends on a      */
/* Tailwind JIT compiler resolving arbitrary-value classes)       */
/* ============================================================= */

const colorsPalette = [
  "#008F70",
  "#2864E5",
  "#334155",
  "#5147E8",
  "#9235E5",
  "#159A8C",
  "#C73F08",
  "rainbow",
];

const layouts = [
  { name: "Colour Band", type: "band" },
  { name: "Side Accent", type: "side" },
  { name: "Minimal", type: "minimal" },
];

const font = { fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif" };

const currency = (n) =>
  `₹${(Number.isFinite(n) ? n : 0).toLocaleString("en-IN", {
    maximumFractionDigits: 2,
  })}`;

const num = (n) =>
  (Number.isFinite(n) ? n : 0).toLocaleString("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

/* ============================================================= */
/* PRINT STYLES                                                   */
/* Only elements marked .invoice-paper survive @media print.      */
/* Everything else (builder panel, preview chrome, page padding)  */
/* is explicitly hidden via .no-print so "Download Invoice"       */
/* produces just the A4 sheet when the user chooses               */
/* "Save as PDF" in the print dialog.                              */
/* ============================================================= */

const PrintStyles = () => (
  <style>{`
    @media print {
      html, body {
              margin: 0 !important;
              padding: 0 !important;
              width: auto !important;
              background: #fff !important;
            }

      /* Bulletproof isolation: hide every single element in the
         document, then explicitly re-show only the invoice sheet
         and everything inside it. This works regardless of what
         wrapper divs surround it, unlike hiding specific ancestors
         one by one. */
      body * {
        visibility: hidden !important;
      }

      .invoice-paper,
      .invoice-paper * {
        visibility: visible !important;
      }

      .invoice-paper {
              position: static !important;
              width: 100% !important;
              max-width: none !important;
              min-height: 0 !important;
              height: auto !important;
              margin: 0 !important;
              padding: 0 !important;
              overflow: visible !important;
              box-shadow: none !important;
              border: none !important;
              box-sizing: border-box !important;
              page-break-inside: avoid !important;
              break-inside: avoid !important;
              line-height: 1.22 !important;
              font-size: 9.5px !important;
            }

      @page {
              size: A4;
              margin: 10mm;
            }
    }

    @media (min-width: 1024px) {
      .lg-row { flex-direction: row !important; align-items: flex-start !important; }
      .lg-col { width: 604px !important; }
      .lg-sticky { position: sticky !important; top: 20px !important; }
    }
    @media (min-width: 640px) {
      .sm-grid-2 { grid-template-columns: 1fr 1fr !important; }
      .sm-grid-3 { grid-template-columns: 1fr 1fr 1fr !important; }
    }
  
.invoice-paper table {
              width: 100% !important;
              margin: 4px 0 !important;
              border-collapse: collapse !important;
            }

            .invoice-paper th,
            .invoice-paper td {
              padding: 4px 6px !important;
              line-height: 1.2 !important;
              vertical-align: middle !important;
            }

            .invoice-paper p {
              margin-top: 2px !important;
              margin-bottom: 2px !important;
              line-height: 1.22 !important;
            }

            .invoice-paper h1,
            .invoice-paper h2,
            .invoice-paper h3 {
              margin-top: 0 !important;
              margin-bottom: 4px !important;
              line-height: 1.15 !important;
            }

            .invoice-paper img {
              max-height: 42px !important;
              width: auto !important;
              object-fit: contain !important;
            }

            .invoice-paper tr,
            .invoice-paper > div {
              page-break-inside: avoid !important;
              break-inside: avoid !important;
            }

            .invoice-download-paper {
              page-break-after: avoid !important;
              break-after: avoid-page !important;
            }
`}
            
</style>
);

/* ============================================================= */
/* ROOT */
/* ============================================================= */

const InvoiceBuilder = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const [selectedColor, setSelectedColor] = useState("#0085FF");
  const [selectedLayout, setSelectedLayout] = useState("Colour Band");
  const [selectedAction, setSelectedAction] = useState(null);

  const [formData, setFormData] = useState({
    // Seller
    businessName: "",
    businessLogo: "",
    businessAddress: "",
    businessGSTIN: "",
    businessPAN: "",
    businessWebsite: "",
    businessContact: "",
    businessPhone: "",
    businessMail: "",

    // Buyer
    clientName: "",
    clientCompany: "",
    clientGSTIN: "",
    email: "",
    clientAddress: "",
    clientPhone: "",
    shippingAddress: "",
    dispatchFrom: "",

    // Invoice meta
    invoiceNumber: "",
    placeOfSupply: "",
    manufacturingSheet: "",
    dueDate: "",
    customerNumber: "",
    orderNumber: "",

    // Footer
    notes: "",
    signedBy: "",
    signatureImage: "",
    taxRate: "0",

    // Payment
    upiId: "",
    bankName: "",
    bankAccount: "",
    ifscCode: "",
    branch: "",
  });

  // Holds the human-readable file name for any uploaded image so the
  // input field can display "logo.png" instead of the long base64
  // data URL that actually gets stored in formData for rendering.
  const [uploadedFileNames, setUploadedFileNames] = useState({
    businessLogo: "",
    signatureImage: "",
  });

  const [items, setItems] = useState([
    { item: "", description: "", hsn: "", unit: "NOS", rate: "", quantity: 1 },
  ]);

  const steps = [
    { number: 1, title: "Write Content" },
    { number: 2, title: "Theme & Colour" },
    { number: 3, title: "Download & Share" },
  ];

  /* ---- derived totals ---- */

  const computedItems = useMemo(
    () =>
      items.map((it) => {
        const rate = parseFloat(String(it.rate).replace(/[^0-9.]/g, "")) || 0;
        const qty = parseFloat(it.quantity) || 0;
        return { ...it, amountValue: rate * qty };
      }),
    [items]
  );

  const subtotal = useMemo(
    () => computedItems.reduce((sum, it) => sum + it.amountValue, 0),
    [computedItems]
  );

  const taxRateValue = parseFloat(formData.taxRate) || 0;
  const taxAmount = (subtotal * taxRateValue) / 100;
  const total = subtotal + taxAmount;

  // CGST + SGST are always an even split of the overall tax rate,
  // matching the "2.5% + 2.5% = 5%" style used on the reference invoice.
  const halfTaxRate = taxRateValue / 2;
  const cgstAmount = taxAmount / 2;
  const sgstAmount = taxAmount / 2;

  // Group items by HSN/SAC so the Tax Summary table can show one row
  // per HSN code, the same way the reference invoice does.
  const hsnSummary = useMemo(() => {
    const groups = {};
    computedItems.forEach((it) => {
      const key = it.hsn?.trim() || "—";
      if (!groups[key]) groups[key] = { hsn: key, taxableValue: 0 };
      groups[key].taxableValue += it.amountValue;
    });
    return Object.values(groups);
  }, [computedItems]);

  /* ---- handlers ---- */

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleImageUpload = (field, file) => {
    if (!file) {
      setUploadedFileNames((prev) => ({ ...prev, [field]: "" }));
      handleChange(field, "");
      return;
    }

    if (!file.type.startsWith("image/")) {
      window.alert("Please select an image file.");
      return;
    }

    setUploadedFileNames((prev) => ({ ...prev, [field]: file.name }));

    const reader = new FileReader();
    reader.onload = (event) => {
      handleChange(field, event.target?.result || "");
    };
    reader.readAsDataURL(file);
  };

  const handleItemChange = (index, field, value) => {
    setItems((prev) =>
      prev.map((it, i) => (i === index ? { ...it, [field]: value } : it))
    );
  };

  const removeItem = (index) => {
    setItems((prev) => (prev.length > 1 ? prev.filter((_, i) => i !== index) : prev));
  };

  const addItem = () => {
    setItems((prev) => [
      ...prev,
      { item: "", description: "", hsn: "", unit: "NOS", rate: "", quantity: 1 },
    ]);
  };

  const handleNext = () => currentStep < 3 && setCurrentStep((p) => p + 1);
  const handlePrevious = () => currentStep > 1 && setCurrentStep((p) => p - 1);
  const handleStepClick = (step) => step <= currentStep && setCurrentStep(step);

  const handleSaveInvoice = async () => {
    try {
      const invoiceData = {
        ...formData,
        items: items.map((item) => ({
          item: item.item,
          description: item.description,
          hsn: item.hsn,
          unit: item.unit,
          rate: parseFloat(String(item.rate).replace(/[^0-9.]/g, "")) || 0,
          quantity: parseFloat(item.quantity) || 1,
        })),
        subtotal,
        taxAmount,
        total,
      };

      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/invoices`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(invoiceData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to save invoice");
      }

      window.alert("Invoice saved successfully!");
      console.log("Saved invoice:", data.invoice);
    } catch (error) {
      console.error("Save invoice error:", error);
      window.alert("Failed to save invoice.");
    }
  };

  /* ---- download / share / email actions ---- */

  const handleDownloadPDF = () => {
    setSelectedAction("download");

    const invoice = document.querySelector(".invoice-paper");

    if (!invoice) {
      window.alert("Invoice preview not found.");
      return;
    }

    const printWindow = window.open("", "_blank", "width=900,height=1100");

    if (!printWindow) {
      window.alert("Please allow popups to download the invoice.");
      return;
    }

    printWindow.document.open();
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>${formData.invoiceNumber || "Invoice"}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <style>
            * {
              box-sizing: border-box;
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
            }

            html,
            body {
              margin: 0;
              padding: 0;
              background: #fff;
            }

            body {
              width: auto;
              margin: 0;
              padding: 0;
            }

            .invoice-paper {
              position: static !important;
              width: 100% !important;
              max-width: none !important;
              min-height: 0 !important;
              height: auto !important;
              margin: 0 !important;
              box-sizing: border-box !important;
              overflow: visible !important;
              box-shadow: none !important;
              border: none !important;
              page-break-inside: auto !important;
              break-inside: auto !important;
              line-height: 1.35 !important;
            }

            /* Keep the downloaded invoice visually compact and aligned. */
            .invoice-paper p,
            .invoice-paper h1,
            .invoice-paper h2,
            .invoice-paper h3 {
              margin-block-start: 0;
            }

            .invoice-paper table {
              margin: 0 !important;
            }

            .invoice-paper th,
            .invoice-paper td {
              vertical-align: middle !important;
            }

            .invoice-paper img {
              display: block;
              max-width: 100%;
            }

            .invoice-download-paper > div,
            .invoice-download-paper > table {
              break-inside: avoid;
            }

            .invoice-download-paper tr {
              break-inside: avoid;
              page-break-inside: avoid;
            }

            .invoice-download-paper td,
            .invoice-download-paper th {
              padding-top: 7px !important;
              padding-bottom: 7px !important;
            }

            @page {
              size: A4;
              margin: 14mm;
            }
          </style>
        </head>
        <body>
          ${invoice.outerHTML}
        </body>
      </html>
    `);
    printWindow.document.close();

    const startPrint = () => {
      setTimeout(() => {
        printWindow.focus();
        printWindow.print();
      }, 300);
    };

    if (printWindow.document.readyState === "complete") {
      startPrint();
    } else {
      printWindow.onload = startPrint;
    }
  };

  const handleShareLink = async () => {
    setSelectedAction("link");

    const shareData = {
      title: formData.businessName ? `${formData.businessName} Invoice` : "Invoice",
      text: `Invoice ${formData.invoiceNumber || "INV-2026-14"}`,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(window.location.href);
        window.alert("Invoice link copied to clipboard.");
      } else {
        window.prompt("Copy this invoice link:", window.location.href);
      }
    } catch (error) {
      if (error?.name !== "AbortError") {
        window.prompt("Copy this invoice link:", window.location.href);
      }
    }
  };

  const handleEmailInvoice = () => {
    setSelectedAction("email");

    const subject = encodeURIComponent(`Invoice ${formData.invoiceNumber || "INV-2026-14"}`);

    const body = encodeURIComponent(
      `Hello ${formData.clientName || "there"},\n\nPlease find the invoice ${
        formData.invoiceNumber || "INV-2026-14"
      } from ${formData.businessName || "our business"}.\n\nTotal: ${currency(
        total
      )}\n\nThank you.`
    );

    window.location.href = `mailto:${formData.email || ""}?subject=${subject}&body=${body}`;
  };

  return (
    <div
  className="app-shell"
  style={{
    ...font,
    minHeight: "100vh",
    width: "100%",
    background: `url("https://ik.imagekit.io/qiap0iq38/DATACIRCLES_PROJECT/Platform2/Hero%20Sction%20(3).png?updatedAt=1787977487476") center -180px / cover no-repeat`,
    padding: "16px 12px",
  }}
>
      <div
        className="lg-row"
        style={{
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: 20,
          width: "100%",
          maxWidth: 1240,
        }}
      >
        <PrintStyles />

        {/* LEFT - BUILDER (hidden entirely when printing) */}
        <div className="lg-col no-print" style={{ width: "100%" }}>

          {/* STEP NAVIGATION */}
          <div
            style={{
              display: "flex",
              minHeight: 66,
              width: "100%",
              alignItems: "center",
              overflowX: "auto",
              borderRadius: 33,
              border: "1px solid #E5E5E5",
              background: "#fff",
              padding: "0 10px",
            }}
          >
            {steps.map((step, index) => {
              const isActive = currentStep === step.number;
              return (
                <React.Fragment key={step.number}>
                  <button
                    type="button"
                    onClick={() => handleStepClick(step.number)}
                    style={{
                      display: "flex",
                      flexShrink: 0,
                      alignItems: "center",
                      gap: 8,
                      height: 42,
                      borderRadius: 999,
                      padding: "0 12px",
                      transition: "all 0.2s",
                      border: isActive ? "1px solid #89C7FF" : "1px solid transparent",
                      background: isActive ? "#E5F3FF" : "transparent",
                      cursor: "pointer",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        flexShrink: 0,
                        height: 30,
                        width: 30,
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "50%",
                        fontSize: 14,
                        background: isActive ? "#0085FF" : "#FAFAFA",
                        color: isActive ? "#fff" : "#525252",
                        border: isActive ? "none" : "1px solid #E5E5E5",
                      }}
                    >
                      {step.number}
                    </span>
                    <span
                      style={{
                        whiteSpace: "nowrap",
                        fontSize: 14,
                        fontWeight: isActive ? 500 : 400,
                        color: isActive ? "#000" : "#525252",
                      }}
                    >
                      {step.title}
                    </span>
                  </button>

                  {index < steps.length - 1 && (
                    <span style={{ margin: "0 8px", flexShrink: 0, fontSize: 22, lineHeight: 1, color: "#000" }}>
                      ›
                    </span>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {currentStep === 1 && (
            <WriteContent
              formData={formData}
              handleChange={handleChange}
              items={computedItems}
              handleItemChange={handleItemChange}
              addItem={addItem}
              removeItem={removeItem}
              subtotal={subtotal}
              taxAmount={taxAmount}
              total={total}
              onSave={handleSaveInvoice}
              onImageUpload={handleImageUpload}
              uploadedFileNames={uploadedFileNames}
            />
          )}

          {currentStep === 2 && (
            <ThemeAndColor
              selectedColor={selectedColor}
              setSelectedColor={setSelectedColor}
              selectedLayout={selectedLayout}
              setSelectedLayout={setSelectedLayout}
            />
          )}

          {currentStep === 3 && (
            <DownloadAndShare
              selectedAction={selectedAction}
              onDownload={handleDownloadPDF}
              onShare={handleShareLink}
              onEmail={handleEmailInvoice}
            />
          )}

          {/* BOTTOM NAVIGATION */}
          <div
            style={{
              marginTop: 8,
              display: "flex",
              minHeight: 72,
              width: "100%",
              alignItems: "center",
              borderRadius: 36,
              border: "1px solid #E5E5E5",
              background: "#fff",
              padding: "0 16px",
            }}
          >
            {currentStep > 1 && (
              <button
                type="button"
                onClick={handlePrevious}
                style={{
                  display: "flex",
                  height: 40,
                  alignItems: "center",
                  gap: 8,
                  borderRadius: 999,
                  border: "1px solid rgba(39,112,121,0.3)",
                  padding: "0 20px",
                  fontSize: 14,
                  color: "#1F2937",
                  background: "#fff",
                  cursor: "pointer",
                }}
              >
                ← Back
              </button>
            )}

            <div style={{ marginLeft: "auto" }}>
              {currentStep < 3 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  style={{
                    display: "flex",
                    height: 40,
                    alignItems: "center",
                    gap: 8,
                    borderRadius: 999,
                    background: "#0085FF",
                    padding: "0 20px",
                    fontSize: 14,
                    fontWeight: 500,
                    color: "#fff",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Next: {currentStep === 1 ? "Theme & Colour" : "Download & Share"}
                  <span style={{ fontSize: 18 }}>→</span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleDownloadPDF}
                  style={{
                    display: "flex",
                    height: 40,
                    alignItems: "center",
                    gap: 8,
                    borderRadius: 999,
                    background: "#0085FF",
                    padding: "0 20px",
                    fontSize: 14,
                    fontWeight: 500,
                    color: "#fff",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Download Invoice <span>↓</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* RIGHT - LIVE PREVIEW (this is the only thing left visible when printing) */}
        <div className="lg-col lg-sticky" style={{ width: "100%" }}>
          <InvoicePreview
            formData={formData}
            items={computedItems}
            selectedColor={selectedColor}
            selectedLayout={selectedLayout}
            subtotal={subtotal}
            taxAmount={taxAmount}
            cgstAmount={cgstAmount}
            sgstAmount={sgstAmount}
            halfTaxRate={halfTaxRate}
            hsnSummary={hsnSummary}
            total={total}
          />
        </div>
      </div>
    </div>
  );
};

/* ============================================================= */
/* WRITE CONTENT */
/* ============================================================= */

const WriteContent = ({
  formData,
  handleChange,
  items,
  handleItemChange,
  addItem,
  removeItem,
  subtotal,
  taxAmount,
  total,
  onSave,
  onImageUpload,
  uploadedFileNames,
}) => {
  return (
    <div
      style={{
        marginTop: 8,
        width: "100%",
        overflow: "hidden",
        borderRadius: 10,
        border: "1px solid #E5E5E5",
        background: "#fff",
      }}
    >
      <div style={{ padding: "12px 12px 0" }}>
        <h2 style={{ fontSize: 14, fontWeight: 500, lineHeight: "20px", color: "#000", margin: 0 }}>
          Create New Invoice
        </h2>
        <p style={{ marginTop: 2, fontSize: 12, lineHeight: "18px", color: "#78788D" }}>
          Fill in the details to create your invoice.
        </p>
      </div>

      {/* YOUR BUSINESS */}
      <div style={{ padding: "16px 12px 0" }}>
        <SectionTitle>YOUR BUSINESS</SectionTitle>

        <div
          className="sm-grid-2"
          style={{
            marginTop: 12,
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: 12,
          }}
        >
          <Field
            label="Business Name"
            placeholder="Enter Business Name"
            value={formData.businessName}
            onChange={(v) => handleChange("businessName", v)}
          />

          <Field
            label="Business Logo"
            placeholder="Paste logo image URL or upload an image"
            value={uploadedFileNames.businessLogo || formData.businessLogo}
            onChange={(v) => handleChange("businessLogo", v)}
            upload
            onUpload={(file) => onImageUpload("businessLogo", file)}
          />
        </div>

        {/* Address / GSTIN / PAN / Website / Contact / UPI */}
        <div
          style={{
            marginTop: 12,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 12,
          }}
        >
          <Field
            label="Registered Address"
            placeholder="Enter business address"
            value={formData.businessAddress}
            onChange={(v) => handleChange("businessAddress", v)}
          />

          <Field
            label="GSTIN"
            placeholder="Enter GSTIN"
            value={formData.businessGSTIN || ""}
            onChange={(v) => handleChange("businessGSTIN", v)}
          />

          <Field
            label="PAN"
            placeholder="Enter PAN"
            value={formData.businessPAN || ""}
            onChange={(v) => handleChange("businessPAN", v)}
          />

          <Field
            label="Website"
            placeholder="www.example.com"
            value={formData.businessWebsite || ""}
            onChange={(v) => handleChange("businessWebsite", v)}
          />

          <div>
            <label
              style={{
                display: "block",
                marginBottom: 6,
                fontSize: 13,
                fontWeight: 500,
                color: "#111827",
              }}
            >
              Contact Details
            </label>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 8,
              }}
            >
              <input
                type="tel"
                required
                placeholder="Phone number"
                value={formData.businessPhone || ""}
                onChange={(e) => {
                  const value = e.target.value;
                  handleChange("businessPhone", value);
                  handleChange("businessContact", value);
                }}
                style={{
                  width: "100%",
                  height: 46,
                  boxSizing: "border-box",
                  borderRadius: 999,
                  border: "1px solid #DDE5EF",
                  background: "#fff",
                  padding: "0 14px",
                  fontSize: 14,
                  outline: "none",
                  color: "#111827",
                }}
              />

              <input
                type="email"
                required
                placeholder="Email address"
                value={formData.businessMail || ""}
                onChange={(e) =>
                  handleChange("businessMail", e.target.value)
                }
                style={{
                  width: "100%",
                  height: 46,
                  boxSizing: "border-box",
                  borderRadius: 999,
                  border: "1px solid #DDE5EF",
                  background: "#fff",
                  padding: "0 14px",
                  fontSize: 14,
                  outline: "none",
                  color: "#111827",
                }}
              />
            </div>
          </div>

          <Field
            label="UPI ID for Payment QR"
            placeholder="yourupi@bank"
            value={formData.upiId}
            onChange={(v) => handleChange("upiId", v)}
          />
        </div>
      </div>

      {/* BILL TO */}
      <div style={{ padding: "18px 12px 0" }}>
        <SectionTitle>BILL TO</SectionTitle>
        <div className="sm-grid-2" style={{ marginTop: 12, display: "grid", gridTemplateColumns: "1fr", gap: 12 }}>
          <Field label="Client Name" placeholder="Enter Client Name" value={formData.clientName} onChange={(v) => handleChange("clientName", v)} />
          <Field label="Client Company" placeholder="Enter Company Name" value={formData.clientCompany} onChange={(v) => handleChange("clientCompany", v)} />
          <Field label="Client GSTIN" placeholder="Enter Client GSTIN" value={formData.clientGSTIN} onChange={(v) => handleChange("clientGSTIN", v)} />
          <Field label="Email" placeholder="email@company.com" value={formData.email} onChange={(v) => handleChange("email", v)} />
          <Field label="Billing Address" placeholder="Enter Client Address" value={formData.clientAddress} onChange={(v) => handleChange("clientAddress", v)} />
          <Field label="Phone" placeholder="+91 123456789" value={formData.clientPhone} onChange={(v) => handleChange("clientPhone", v)} />
          <Field label="Shipping Address" placeholder="Enter Shipping Address" value={formData.shippingAddress} onChange={(v) => handleChange("shippingAddress", v)} />
          <Field label="Dispatch From" placeholder="Enter Dispatch Address" value={formData.dispatchFrom} onChange={(v) => handleChange("dispatchFrom", v)} />
          <Field
            label={<>Invoice No. <span style={{ color: "#ef4444" }}>*</span></>}
            placeholder="CC/PI/26-27/42"
            value={formData.invoiceNumber}
            onChange={(v) => handleChange("invoiceNumber", v)}
          />
          <Field
            label="Place of Supply"
            placeholder="27-MAHARASHTRA"
            value={formData.placeOfSupply}
            onChange={(v) => handleChange("placeOfSupply", v)}
          />
          <Field
            label="Manufacturing Sheet"
            placeholder="CC/MS/26-27/140"
            value={formData.manufacturingSheet}
            onChange={(v) => handleChange("manufacturingSheet", v)}
          />
          <Field
            label="Customer Number"
            placeholder="Customer Number"
            value={formData.customerNumber}
            onChange={(v) => handleChange("customerNumber", v)}
          />
          <Field
            label="Order Number"
            placeholder="Order Number"
            value={formData.orderNumber}
            onChange={(v) => handleChange("orderNumber", v)}
          />
          <div>
  <label
    style={{
      display: "block",
      marginBottom: 6,
      fontSize: 13,
      fontWeight: 500,
      color: "#111827",
    }}
  >
    Due Date
  </label>

  <input
    type="date"
    value={formData.dueDate}
    onChange={(e) => handleChange("dueDate", e.target.value)}
    style={{
      width: "100%",
      height: 46,
      boxSizing: "border-box",
      borderRadius: 999,
      border: "1px solid #DDE5EF",
      background: "#fff",
      padding: "0 14px",
      fontSize: 14,
      outline: "none",
      color: "#111827",
      ...font,
    }}
  />
</div>
        </div>
      </div>

      {/* INVOICE ITEMS */}
      <div style={{ padding: "18px 12px 0" }}>
        <SectionTitle>Invoice Items</SectionTitle>

        <div style={{ marginTop: 8, overflowX: "auto", borderRadius: 8, border: "1px solid #DDE1E5" }}>
          <div style={{ minWidth: 780 }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1.6fr 1.3fr 0.8fr 0.6fr 0.7fr 0.6fr 0.9fr 32px",
                alignItems: "center",
                height: 40,
                background: "#F4F6F8",
                padding: "0 12px",
              }}
            >
              <TableHeader>Item</TableHeader>
              <TableHeader>Description</TableHeader>
              <TableHeader>HSN/SAC</TableHeader>
              <TableHeader>Rate</TableHeader>
              <TableHeader>Qty</TableHeader>
              <TableHeader>Per</TableHeader>
              <TableHeader>Amount</TableHeader>
              <span />
            </div>

            {items.map((item, index) => (
              <div
                key={index}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1.6fr 1.3fr 0.8fr 0.6fr 0.7fr 0.6fr 0.9fr 32px",
                  alignItems: "center",
                  gap: 8,
                  minHeight: 58,
                  padding: "10px 12px",
                  borderTop: "1px solid #EEF1F4",
                }}
              >
                <TextInput
                  value={item.item}
                  onChange={(v) => handleItemChange(index, "item", v)}
                  placeholder="Search items"
                />
                <TextInput
                  value={item.description}
                  onChange={(v) => handleItemChange(index, "description", v)}
                  placeholder="Description"
                />
                <TextInput
                  value={item.hsn}
                  onChange={(v) => handleItemChange(index, "hsn", v)}
                  placeholder="HSN/SAC"
                />
                <TextInput
                  value={item.rate}
                  onChange={(v) => handleItemChange(index, "rate", v)}
                  placeholder="₹0"
                  inputMode="decimal"
                />
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => handleItemChange(index, "quantity", e.target.value)}
                  style={{
                    height: 34,
                    minWidth: 0,
                    borderRadius: 999,
                    border: "1px solid #E5E5E5",
                    padding: "0 8px",
                    textAlign: "center",
                    fontSize: 12,
                    outline: "none",
                    ...font,
                  }}
                />
                <TextInput
                  value={item.unit}
                  onChange={(v) => handleItemChange(index, "unit", v)}
                  placeholder="NOS"
                />
                <span style={{ whiteSpace: "nowrap", fontSize: 13, fontWeight: 500, color: "#111827" }}>
                  {currency(item.amountValue)}
                </span>
                <button
                  type="button"
                  onClick={() => removeItem(index)}
                  aria-label="Remove item"
                  style={{
                    display: "flex",
                    height: 24,
                    width: 24,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                    color: "#9CA3AF",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    fontSize: 16,
                  }}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={addItem}
          style={{
            marginTop: 12,
            display: "flex",
            height: 32,
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 999,
            border: "1px solid rgba(0,133,255,0.4)",
            fontSize: 13,
            color: "#0085FF",
            background: "#fff",
            cursor: "pointer",
          }}
        >
          <span style={{ marginRight: 8, fontSize: 18 }}>+</span>
          Add Another Item
        </button>

        {/* TOTALS */}
        <div style={{ marginTop: 16, display: "flex", justifyContent: "flex-end" }}>
          <div style={{ width: "100%", maxWidth: 260, borderRadius: 8, border: "1px solid #E5E5E5", background: "#FAFBFC", padding: 12 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "4px 0" }}>
              <span style={{ fontSize: 12, color: "#78788D" }}>Taxable Amount</span>
              <span style={{ fontSize: 12, color: "#000" }}>{currency(subtotal)}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "4px 0" }}>
              <span style={{ fontSize: 12, color: "#78788D" }}>Total Tax % (CGST+SGST)</span>
              <input
                type="number"
                min="0"
                value={formData.taxRate}
                onChange={(e) => handleChange("taxRate", e.target.value)}
                style={{
                  height: 26,
                  width: 64,
                  borderRadius: 999,
                  border: "1px solid #E5E5E5",
                  padding: "0 8px",
                  textAlign: "right",
                  fontSize: 12,
                  outline: "none",
                  ...font,
                }}
              />
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "4px 0" }}>
              <span style={{ fontSize: 12, color: "#78788D" }}>CGST {(parseFloat(formData.taxRate) || 0) / 2}%</span>
              <span style={{ fontSize: 12, color: "#000" }}>{currency(taxAmount / 2)}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "4px 0" }}>
              <span style={{ fontSize: 12, color: "#78788D" }}>SGST {(parseFloat(formData.taxRate) || 0) / 2}%</span>
              <span style={{ fontSize: 12, color: "#000" }}>{currency(taxAmount / 2)}</span>
            </div>
            <div
              style={{
                marginTop: 4,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderTop: "1px solid #E5E5E5",
                paddingTop: 8,
              }}
            >
              <span style={{ fontSize: 13, fontWeight: 600, color: "#000" }}>Total</span>
              <span style={{ fontSize: 13, fontWeight: 600, color: "#0085FF" }}>{currency(total)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* PAYMENT DETAILS */}
      <div style={{ padding: "18px 12px 0" }}>
        <SectionTitle>PAYMENT DETAILS</SectionTitle>
        <div
          className="sm-grid-2"
          style={{ marginTop: 12, display: "grid", gridTemplateColumns: "1fr", gap: 12 }}
        >
          <Field label="Bank Name" placeholder="e.g. HDFC Bank Ltd" value={formData.bankName} onChange={(v) => handleChange("bankName", v)} />
          <Field label="Account Number" placeholder="Enter account number" value={formData.bankAccount} onChange={(v) => handleChange("bankAccount", v)} />
          <Field label="IFSC Code" placeholder="Enter IFSC code" value={formData.ifscCode} onChange={(v) => handleChange("ifscCode", v)} />
          <Field label="Branch" placeholder="Enter branch" value={formData.branch} onChange={(v) => handleChange("branch", v)} />
        </div>
      </div>

      {/* NOTES */}
      <div style={{ padding: "18px 12px 12px" }}>
        <SectionTitle>NOTES & SIGNATURE</SectionTitle>
        <div style={{ marginTop: 12 }}>
          <Field label="Notes / Items" placeholder="Add notes" value={formData.notes} onChange={(v) => handleChange("notes", v)} />
        </div>
        <div style={{ marginTop: 12 }}>
          <Field
            label="Signed By"
            placeholder=""
            value={formData.signedBy}
            onChange={(v) => handleChange("signedBy", v)}
          />
        </div>
        <div style={{ marginTop: 12 }}>
          <Field
            label="Signature Image"
            placeholder="Upload signature image"
            value={uploadedFileNames.signatureImage || formData.signatureImage}
            onChange={(v) => handleChange("signatureImage", v)}
            upload
            onUpload={(file) => onImageUpload("signatureImage", file)}
          />
        </div>

        <button
          type="button"
          onClick={onSave}
          style={{
            marginTop: 16,
            height: 40,
            width: "100%",
            borderRadius: 999,
            border: "none",
            background: "#0085FF",
            color: "#fff",
            fontSize: 13,
            fontWeight: 500,
            cursor: "pointer",
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
};

/* ============================================================= */
/* THEME & COLOR */
/* ============================================================= */

const ThemeAndColor = ({ selectedColor, setSelectedColor, selectedLayout, setSelectedLayout }) => {
  return (
    <div
      style={{
        marginTop: 8,
        width: "100%",
        overflow: "hidden",
        borderRadius: 10,
        border: "1px solid #E5E5E5",
        background: "#fff",
      }}
    >
      <div style={{ padding: "12px 12px 0" }}>
        <h3 style={{ fontSize: 14, fontWeight: 500, color: "#000", margin: 0 }}>COLOR</h3>

        <div style={{ marginTop: 12, display: "flex", flexWrap: "wrap", gap: 12 }}>
          {colorsPalette.map((color, index) => {
            const isSelected = selectedColor === color;
            return (
              <button
                key={index}
                type="button"
                onClick={() => setSelectedColor(color)}
                aria-label={color === "rainbow" ? "Rainbow" : color}
                style={{
                  display: "flex",
                  height: 36,
                  width: 36,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50%",
                  border: "none",
                  background: "transparent",
                  cursor: "pointer",
                  boxShadow: isSelected ? "0 0 0 2px #fff, 0 0 0 4px #0085FF" : "none",
                }}
              >
                <span
                  style={{
                    height: 30,
                    width: 30,
                    borderRadius: "50%",
                    background:
                      color === "rainbow"
                        ? "conic-gradient(#0085FF,#8B5CF6,#EC4899,#F59E0B,#22C55E,#0085FF)"
                        : color,
                  }}
                />
              </button>
            );
          })}
        </div>
      </div>

      <div style={{ padding: "20px 12px" }}>
        <h3 style={{ fontSize: 14, fontWeight: 500, color: "#000", margin: 0 }}>LAYOUT STYLE</h3>

        <div className="sm-grid-3" style={{ marginTop: 12, display: "grid", gridTemplateColumns: "1fr", gap: 12 }}>
          {layouts.map((layout) => {
            const isSelected = selectedLayout === layout.name;
            const bandColor = selectedColor === "rainbow" ? "#0085FF" : selectedColor;
            return (
              <button
                key={layout.name}
                type="button"
                onClick={() => setSelectedLayout(layout.name)}
                style={{
                  textAlign: "left",
                  borderRadius: 8,
                  border: isSelected ? "1px solid #0085FF" : "1px solid #DDE5EF",
                  background: isSelected ? "#F5FAFF" : "#fff",
                  padding: 12,
                  cursor: "pointer",
                }}
              >
                <div style={{ position: "relative", margin: "0 auto", height: 34, width: "100%", overflow: "hidden", borderRadius: 4, background: "#F4F6F8" }}>
                  {layout.type === "band" && (
                    <div style={{ position: "absolute", left: 0, top: 8, height: 25, width: "100%", background: bandColor }} />
                  )}
                  {layout.type === "side" && (
                    <div style={{ position: "absolute", left: 0, top: 8, height: 25, width: 45, background: bandColor }} />
                  )}
                  {layout.type === "minimal" && (
                    <div style={{ position: "absolute", left: 0, top: 8, height: 5, width: "100%", background: bandColor }} />
                  )}
                </div>
                <span style={{ marginTop: 8, display: "block", fontSize: 13, color: "#5C6F89" }}>{layout.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

/* ============================================================= */
/* DOWNLOAD & SHARE */
/* ============================================================= */

const DownloadAndShare = ({ selectedAction, onDownload, onShare, onEmail }) => {
  const actions = [
  {
    title: "Download PDF",
    type: "download",
    onClick: onDownload,
    icon: (
      <svg
        width="44"
        height="44"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M18 17.6443L21.644 14L20.6 12.9557L18.75 14.8057V10.275H17.25V14.8057L15.4 12.9557L14.3557 14L18 17.6443ZM14.25 20.75V19.25H21.75V20.75H14.25ZM6.0577 16.75C5.5654 16.75 5.1411 16.5718 4.7847 16.2153C4.4282 15.8589 4.25 15.4346 4.25 14.9423V1.0577C4.25 0.5654 4.4282 0.1411 4.7847 -0.2152C5.1411 -0.5717 5.5654 -0.75 6.0577 -0.75H13L18.75 5V8.0828H17.25V5.75H12.25V0.75H6.0577C5.9807 0.75 5.9102 0.7821 5.8462 0.8462C5.7821 0.9102 5.75 0.9807 5.75 1.0577V14.9423C5.75 15.0192 5.7821 15.0898 5.8462 15.1538C5.9102 15.2179 5.9807 15.25 6.0577 15.25H12.0577V16.75H6.0577Z"
          fill="#1C1B1F"
          transform="translate(1.75 4)"
        />
      </svg>
    ),
  },

  {
    title: "Share Link",
    type: "link",
    onClick: onShare,
    icon: (
      <svg
        width="44"
        height="44"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M17.038 19.5V16.5385H14.077V15.0385H17.038V12.077H18.538V15.0385H21.5V16.5385H18.538V19.5H17.038ZM10.808 16.5385H7.039C5.783 16.5385 4.713 16.096 3.828 15.211C2.943 14.3262 2.5 13.256 2.5 12.0005C2.5 10.745 2.943 9.6747 3.828 8.7895C4.713 7.9042 5.783 7.4615 7.039 7.4615H10.808V8.9615H7.039C6.199 8.9615 5.482 9.258 4.89 9.851C4.297 10.444 4 11.1603 4 12C4 12.8397 4.297 13.556 4.89 14.149C5.482 14.742 6.199 15.0385 7.039 15.0385H10.808V16.5385ZM8.25 12.75V11.25H15.75V12.75H8.25ZM21.5 12H20C20 11.1603 19.704 10.444 19.111 9.851C18.518 9.258 17.801 8.9615 16.962 8.9615H13.192V7.4615H16.962C18.217 7.4615 19.288 7.904 20.173 8.789C21.058 9.674 21.5 10.7443 21.5 12Z"
          fill="#1C1B1F"
          transform="translate(-1.5 -1)"
        />
      </svg>
    ),
  },

  {
    title: "Email It",
    type: "email",
    onClick: onEmail,
    icon: (
      <svg
        width="44"
        height="44"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M18 17.6443L16.956 16.6L18.771 14.75H14.25V13.25H18.771L16.956 11.4L18 10.3558L21.644 14L18 17.6443ZM4.058 14.75C3.561 14.75 3.135 14.573 2.781 14.219C2.427 13.865 2.25 13.4394 2.25 12.9423V3.0577C2.25 2.5606 2.427 2.135 2.781 1.781C3.135 1.427 3.561 1.25 4.058 1.25H16.942C17.439 1.25 17.865 1.427 18.219 1.781C18.573 2.135 18.75 2.5606 18.75 3.0577V8.3115C18.625 8.291 18.5 8.2757 18.375 8.2655C18.25 8.2552 18.125 8.25 18 8.25C17.875 8.25 17.75 8.2526 17.625 8.2578C17.5 8.2629 17.375 8.2757 17.25 8.2962V3.823L10.4 8.6923L3.75 3.8385V12.9423C3.75 13.0321 3.779 13.1058 3.836 13.1635C3.894 13.2212 3.968 13.25 4.058 13.25H12.296C12.276 13.375 12.263 13.5 12.258 13.625C12.253 13.75 12.25 13.875 12.25 14C12.25 14.125 12.255 14.25 12.265 14.375C12.276 14.5 12.291 14.625 12.311 14.75H4.058ZM4.796 2.75L10.4 6.8577L16.173 2.75H4.796Z"
          fill="#1C1B1F"
          transform="translate(0.75 4)"
        />
      </svg>
    ),
  },
];
  return (
    <div
      style={{
        marginTop: 8,
        width: "100%",
        overflow: "hidden",
        borderRadius: 10,
        border: "1px solid #E5E5E5",
        background: "#fff",
      }}
    >
      <div style={{ padding: "12px 12px 0" }}>
        <h2 style={{ fontSize: 14, fontWeight: 500, color: "#000", margin: 0 }}>Your Invoice is Ready</h2>
       
      </div>

      <div className="sm-grid-3" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 12, padding: "12px 12px 0" }}>
        {actions.map((action) => {
          const isSelected = selectedAction === action.type;
          return (
            <button
              key={action.type}
              type="button"
              onClick={action.onClick}
              style={{
                display: "flex",
                height: 110,
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 8,
                border: isSelected ? "1px solid #0085FF" : "1px solid #DDE5EF",
                background: isSelected ? "#F5FAFF" : "#fff",
                cursor: "pointer",
              }}
            >
              <span style={{ display: "flex", height: 44, width: 44, alignItems: "center", justifyContent: "center", marginBottom: 8 }}>
                {action.icon}
              </span>
              <span style={{ fontSize: 14, color: "#000" }}>{action.title}</span>
            </button>
          );
        })}
      </div>

      <div
        style={{
          margin: 12,
          marginTop: 20,
          borderRadius: 10,
          background: "linear-gradient(to right, #0A55AF, #0085FF)",
          padding: "28px 24px",
          color: "#fff",
        }}
      >
        <span style={{ display: "inline-flex", borderRadius: 999, background: "rgba(255,255,255,0.15)", padding: "4px 12px", fontSize: 11 }}>
          10% Off when you Sign up Now
        </span>
        <h2 style={{ marginTop: 28, fontSize: 18, fontWeight: 500 }}>Make Invoices like this, Automatically</h2>
        <p style={{ marginTop: 12, fontSize: 13, lineHeight: "19px", color: "#fff" }}>
          You just built this by hand. DataCircles remembers your clients and items, chases payments for you, and keeps every invoice in one place. Plans from ₹199 a month.
        </p>
        <div style={{ marginTop: 28, display: "flex", flexWrap: "wrap", gap: 8 }}>
          <button
            type="button"
            style={{ height: 40, borderRadius: 999, background: "#fff", padding: "0 28px", fontSize: 13, fontWeight: 500, color: "#00527A", border: "none", cursor: "pointer" }}
          >
            Start Free
          </button>
          <button
            type="button"
            style={{ height: 40, borderRadius: 999, background: "transparent", padding: "0 24px", fontSize: 13, fontWeight: 500, color: "#fff", border: "1px solid #fff", cursor: "pointer" }}
          >
            Book a Demo
          </button>
        </div>
      </div>
    </div>
  );
};

/* ============================================================= */
/* LIVE INVOICE PREVIEW */
/* ============================================================= */

export const InvoicePreview = ({
  formData,
  items,
  selectedColor,
  selectedLayout,
  subtotal,
  taxAmount,
  cgstAmount,
  sgstAmount,
  halfTaxRate,
  hsnSummary,
  total,
}) => {
  const previewColor =
    selectedColor === "rainbow" ? "#0085FF" : selectedColor;

  const borderColor = "#111827";
  const muted = "#4B5563";
  const lightBorder = "#D1D5DB";

  const taxRateValue = parseFloat(formData.taxRate) || 0;
  const half = Number.isFinite(halfTaxRate) ? halfTaxRate : taxRateValue / 2;
  const cgst = Number.isFinite(cgstAmount) ? cgstAmount : taxAmount / 2;
  const sgst = Number.isFinite(sgstAmount) ? sgstAmount : taxAmount / 2;
  const summary = hsnSummary && hsnSummary.length ? hsnSummary : [];

  const paperBorder =
    selectedLayout === "Side Accent"
      ? { borderLeft: `8px solid ${previewColor}` }
      : selectedLayout === "Minimal"
      ? { borderTop: `6px solid ${previewColor}` }
      : {};

  const amountInWords = numberToWordsIndian(total);

  return (
    <div
      className="invoice-preview-shell"
      style={{
        width: "100%",
        overflow: "hidden",
        borderRadius: 14,
        border: "1px solid #E1E5EA",
        background: "#fff",
        boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
      }}
    >
      {/* Preview chrome - not included in PDF */}
      <div
  className="no-print"
  style={{
    display: "flex",
    height: 54,
    alignItems: "center",
    borderBottom: "1px solid #E5E5E5",
    padding: "0 16px",
  }}
>
  <div>
    <span
      style={{
        fontSize: 14,
        fontWeight: 500,
        color: "#000",
      }}
    >
      Invoice Preview
    </span>

    <p
      style={{
        margin: "2px 0 0",
        fontFamily: "Inter",
        fontWeight: 400,
        fontStyle: "normal",
        fontSize: 10,
        lineHeight: "120%",
        letterSpacing: "0px",
        verticalAlign: "middle",
        color: "#595454",
      }}
    >
      This is how your invoice appears to the customer.
    </p>
  </div>
</div>

      <div
        className="invoice-canvas"
        style={{
        background: "#FFFFFF",
          padding: 20,
        }}
      >
        {/* =========================================================
            A4 INVOICE PAPER
           ========================================================= */}
        <div
          className="invoice-paper invoice-download-paper"
          style={{
            margin: "0 auto",
            width: "100%",
            maxWidth: 794,
            minHeight: 1123,
            overflow: "hidden",
            background: "#fff",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            fontFamily: "Inter, Arial, sans-serif",
            fontSize: 11,
            color: "#111827",
            ...paperBorder,
          }}
        >
          {/* ===================== TITLE ===================== */}

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              border: `1px solid ${borderColor}`,
              borderBottom: "none",
              padding: "9px 12px",
            }}
          >
            <span style={{ fontSize: 8, color: muted, visibility: "hidden" }}>spacer</span>
            <h1
              style={{
                margin: 0,
                fontSize: 18,
                fontWeight: 700,
                letterSpacing: 2,
                color: previewColor,
                textAlign: "center",
                flex: 1,
              }}
            >
              PROFORMA INVOICE
            </h1>

            <p
              style={{
                margin: 0,
                fontSize: 9,
                color: muted,
                textTransform: "uppercase",
                whiteSpace: "nowrap",
              }}
            >
              ORIGINAL FOR RECIPIENT
            </p>
          </div>

          {/* ===================== SELLER + INVOICE INFO ===================== */}

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.15fr 0.85fr",
              border: `1px solid ${borderColor}`,
            }}
          >
            {/* Seller */}
            <div
              style={{
                borderRight: `1px solid ${borderColor}`,
                padding: 14,
                minHeight: 150,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 12,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    height: 55,
                    width: 55,
                    flexShrink: 0,
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                    border: `1px solid ${lightBorder}`,
                    borderRadius: 4,
                    background: "#fff",
                  }}
                >
                  {formData.businessLogo ? (
                    <img
                      src={formData.businessLogo}
                      alt="Business logo"
                      style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "contain",
                      }}
                    />
                  ) : (
                    <span
                      style={{
                        fontSize: 20,
                        fontWeight: 700,
                        color: previewColor,
                      }}
                    >
                      {formData.businessName
                        ? formData.businessName.charAt(0).toUpperCase()
                        : "B"}
                    </span>
                  )}
                </div>

                <div style={{ minWidth: 0 }}>
                  <h2
                    style={{
                      margin: 0,
                      fontSize: 16,
                      fontWeight: 700,
                      color: "#111827",
                    }}
                  >
                    {formData.businessName || "Your Business Name"}
                  </h2>

                  <div
                    style={{
                      marginTop: 5,
                      fontSize: 10,
                      lineHeight: "15px",
                      color: muted,
                    }}
                  >
                    <p style={{ margin: 0 }}>
                      <strong style={{ color: "#111827" }}>GSTIN:</strong>{" "}
                      {formData.businessGSTIN || "GSTIN"}
                    </p>
                    <p style={{ margin: "3px 0 0" }}>
                      <strong style={{ color: "#111827" }}>PAN:</strong>{" "}
                      {formData.businessPAN || "PAN"}
                    </p>
                    <p style={{ margin: "3px 0 0", whiteSpace: "pre-line" }}>
                      {formData.businessAddress || "Registered office address"}
                    </p>
                    <p style={{ margin: "3px 0 0" }}>
                      <strong style={{ color: "#111827" }}>Mobile:</strong>{" "}
                      {formData.businessPhone || "Phone number"}
                    </p>
                    <p style={{ margin: "3px 0 0" }}>
                      <strong style={{ color: "#111827" }}>Email:</strong>{" "}
                      {formData.businessMail || "Email address"}
                    </p>
                    {formData.businessWebsite && (
                      <p style={{ margin: "3px 0 0" }}>
                        <strong style={{ color: "#111827" }}>Website:</strong>{" "}
                        {formData.businessWebsite}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Invoice metadata */}
            <div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                <InvoiceInfoRow
                  label="Pro Forma Invoice #"
                  value={formData.invoiceNumber || "INV-2026-14"}
                  borderRight
                />
                <InvoiceInfoRow
                  label="Proforma Invoice Date"
                  value={formatInvoiceDate(new Date())}
                />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                <InvoiceInfoRow
                  label="Place of Supply"
                  value={formData.placeOfSupply || "State - MAHARASHTRA"}
                  borderRight
                />
                <InvoiceInfoRow
                  label="Due Date"
                  value={formData.dueDate || "DD/MM/YYYY"}
                />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                <InvoiceInfoRow
                  label="Manufacturing Sheet"
                  value={formData.manufacturingSheet || "—"}
                  borderRight
                />
                <InvoiceInfoRow
                  label="Order Number"
                  value={formData.orderNumber || "—"}
                />
              </div>
              <InvoiceInfoRow
                label="Customer Number"
                value={formData.customerNumber || "—"}
                last
              />
            </div>
          </div>

          {/* ===================== CUSTOMER + SHIPPING ===================== */}

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              borderLeft: `1px solid ${borderColor}`,
              borderRight: `1px solid ${borderColor}`,
              borderBottom: `1px solid ${borderColor}`,
            }}
          >
            {/* Customer */}
            <div
              style={{
                borderRight: `1px solid ${borderColor}`,
                padding: 14,
                minHeight: 135,
              }}
            >
              <h3
                style={{
                  margin: "0 0 8px",
                  fontSize: 11,
                  fontWeight: 700,
                  color: "#111827",
                }}
              >
                Customer Details:
              </h3>

              <p
                style={{
                  margin: 0,
                  fontSize: 12,
                  fontWeight: 700,
                }}
              >
                {formData.clientName || "Client Name"}
              </p>

              {formData.clientCompany && (
                <p style={{ margin: "2px 0 0", fontSize: 11, fontWeight: 700 }}>
                  {formData.clientCompany}
                </p>
              )}

              {formData.clientGSTIN && (
                <p style={{ margin: "3px 0 0", fontSize: 10, color: muted }}>
                  GSTIN: {formData.clientGSTIN}
                </p>
              )}

              <p
                style={{
                  margin: "8px 0 0",
                  fontSize: 10,
                  fontWeight: 600,
                }}
              >
                Billing Address:
              </p>

              <p
                style={{
                  margin: "3px 0 0",
                  whiteSpace: "pre-line",
                  fontSize: 10,
                  lineHeight: "15px",
                  color: muted,
                }}
              >
                {formData.clientAddress || "Client address"}
              </p>

              {formData.clientPhone && (
                <p
                  style={{
                    margin: "6px 0 0",
                    fontSize: 10,
                    color: muted,
                  }}
                >
                  Ph: {formData.clientPhone}
                </p>
              )}
            </div>

            {/* Shipping */}
            <div
              style={{
                padding: 14,
                minHeight: 135,
              }}
            >
              <h3
                style={{
                  margin: "0 0 8px",
                  fontSize: 11,
                  fontWeight: 700,
                }}
              >
                Shipping Address:
              </h3>

              <p
                style={{
                  margin: 0,
                  whiteSpace: "pre-line",
                  fontSize: 10,
                  lineHeight: "15px",
                  color: muted,
                }}
              >
                {formData.shippingAddress || "Shipping address"}
              </p>

              <p
                style={{
                  margin: "10px 0 0",
                  fontSize: 10,
                  fontWeight: 600,
                }}
              >
                Dispatch From:
              </p>

              <p
                style={{
                  margin: "3px 0 0",
                  whiteSpace: "pre-line",
                  fontSize: 10,
                  lineHeight: "15px",
                  color: muted,
                }}
              >
                {formData.dispatchFrom || "Dispatch address"}
              </p>
            </div>
          </div>

          {/* ===================== ITEMS TABLE ===================== */}

          <div
            style={{
              borderLeft: `1px solid ${borderColor}`,
              borderRight: `1px solid ${borderColor}`,
            }}
          >
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                tableLayout: "fixed",
              }}
            >
              <thead>
                <tr style={{ background: "#F8FAFC" }}>
                  <th
                    style={{
                      width: 26,
                      borderBottom: `1px solid ${borderColor}`,
                      borderRight: `1px solid ${borderColor}`,
                      padding: "8px 6px",
                      textAlign: "center",
                      fontSize: 9,
                    }}
                  >
                    #
                  </th>

                  <th
                    style={{
                      borderBottom: `1px solid ${borderColor}`,
                      borderRight: `1px solid ${borderColor}`,
                      padding: "8px",
                      textAlign: "left",
                      fontSize: 9,
                    }}
                  >
                    Item
                  </th>

                  <th
                    style={{
                      width: 62,
                      borderBottom: `1px solid ${borderColor}`,
                      borderRight: `1px solid ${borderColor}`,
                      padding: "8px 6px",
                      textAlign: "center",
                      fontSize: 9,
                    }}
                  >
                    HSN/SAC
                  </th>

                  <th
                    style={{
                      width: 38,
                      borderBottom: `1px solid ${borderColor}`,
                      borderRight: `1px solid ${borderColor}`,
                      padding: "8px 6px",
                      textAlign: "center",
                      fontSize: 9,
                    }}
                  >
                    Tax
                  </th>

                  <th
                    style={{
                      width: 55,
                      borderBottom: `1px solid ${borderColor}`,
                      borderRight: `1px solid ${borderColor}`,
                      padding: "8px 6px",
                      textAlign: "center",
                      fontSize: 9,
                    }}
                  >
                    Qty
                  </th>

                  <th
                    style={{
                      width: 90,
                      borderBottom: `1px solid ${borderColor}`,
                      borderRight: `1px solid ${borderColor}`,
                      padding: "8px 6px",
                      textAlign: "right",
                      fontSize: 9,
                    }}
                  >
                    Rate / Item
                  </th>

                  <th
                    style={{
                      width: 34,
                      borderBottom: `1px solid ${borderColor}`,
                      borderRight: `1px solid ${borderColor}`,
                      padding: "8px 6px",
                      textAlign: "center",
                      fontSize: 9,
                    }}
                  >
                    Per
                  </th>

                  <th
                    style={{
                      width: 95,
                      borderBottom: `1px solid ${borderColor}`,
                      padding: "8px 6px",
                      textAlign: "right",
                      fontSize: 9,
                    }}
                  >
                    Amount
                  </th>
                </tr>
              </thead>

              <tbody>
                {items.map((item, index) => (
                  <tr key={index}>
                    <td
                      style={{
                        verticalAlign: "top",
                        borderBottom: `1px solid ${borderColor}`,
                        borderRight: `1px solid ${borderColor}`,
                        padding: 8,
                        textAlign: "center",
                        fontSize: 10,
                      }}
                    >
                      {index + 1}
                    </td>

                    <td
                      style={{
                        verticalAlign: "top",
                        borderBottom: `1px solid ${borderColor}`,
                        borderRight: `1px solid ${borderColor}`,
                        padding: 8,
                      }}
                    >
                      <p
                        style={{
                          margin: 0,
                          fontSize: 10,
                          fontWeight: 700,
                          color: "#111827",
                        }}
                      >
                        {item.item || "Item name"}
                      </p>

                      {item.description && (
                        <p
                          style={{
                            margin: "4px 0 0",
                            whiteSpace: "pre-line",
                            fontSize: 9,
                            lineHeight: "14px",
                            color: muted,
                          }}
                        >
                          {item.description}
                        </p>
                      )}
                    </td>

                    <td
                      style={{
                        verticalAlign: "top",
                        borderBottom: `1px solid ${borderColor}`,
                        borderRight: `1px solid ${borderColor}`,
                        padding: 8,
                        textAlign: "center",
                        fontSize: 10,
                      }}
                    >
                      {item.hsn || "—"}
                    </td>

                    <td
                      style={{
                        verticalAlign: "top",
                        borderBottom: `1px solid ${borderColor}`,
                        borderRight: `1px solid ${borderColor}`,
                        padding: 8,
                        textAlign: "center",
                        fontSize: 10,
                      }}
                    >
                      {taxRateValue}%
                    </td>

                    <td
                      style={{
                        verticalAlign: "top",
                        borderBottom: `1px solid ${borderColor}`,
                        borderRight: `1px solid ${borderColor}`,
                        padding: 8,
                        textAlign: "center",
                        fontSize: 10,
                      }}
                    >
                      {item.quantity || 1} {item.unit || "NOS"}
                    </td>

                    <td
                      style={{
                        verticalAlign: "top",
                        borderBottom: `1px solid ${borderColor}`,
                        borderRight: `1px solid ${borderColor}`,
                        padding: 8,
                        textAlign: "right",
                        fontSize: 10,
                      }}
                    >
                      {currency(
                        parseFloat(
                          String(item.rate).replace(/[^0-9.]/g, "")
                        ) || 0
                      )}
                    </td>

                    <td
                      style={{
                        verticalAlign: "top",
                        borderBottom: `1px solid ${borderColor}`,
                        borderRight: `1px solid ${borderColor}`,
                        padding: 8,
                        textAlign: "center",
                        fontSize: 10,
                      }}
                    >
                      {item.unit || "NOS"}
                    </td>

                    <td
                      style={{
                        verticalAlign: "top",
                        borderBottom: `1px solid ${borderColor}`,
                        padding: 8,
                        textAlign: "right",
                        fontSize: 10,
                        fontWeight: 600,
                      }}
                    >
                      {currency(item.amountValue)}
                    </td>
                  </tr>
                ))}

                {/* Empty space to preserve the invoice-style item area */}
                {items.length < 3 && (
                  <tr>
                    <td
                      colSpan={8}
                      style={{
                        height: 55,
                        borderBottom: `1px solid ${borderColor}`,
                      }}
                    />
                  </tr>
                )}
              </tbody>

              <tfoot>
                <tr>
                  <td
                    colSpan={6}
                    style={{
                      borderBottom: `1px solid ${borderColor}`,
                      borderRight: `1px solid ${borderColor}`,
                      padding: 9,
                      textAlign: "right",
                      fontWeight: 600,
                      fontSize: 10,
                    }}
                  >
                    Taxable Amount
                  </td>

                  <td
                    colSpan={2}
                    style={{
                      borderBottom: `1px solid ${borderColor}`,
                      padding: 9,
                      textAlign: "right",
                      fontWeight: 600,
                      fontSize: 10,
                    }}
                  >
                    {currency(subtotal)}
                  </td>
                </tr>

                <tr>
                  <td
                    colSpan={6}
                    style={{
                      borderBottom: `1px solid ${borderColor}`,
                      borderRight: `1px solid ${borderColor}`,
                      padding: 8,
                      textAlign: "right",
                      fontSize: 10,
                    }}
                  >
                    CGST {half}%
                  </td>

                  <td
                    colSpan={2}
                    style={{
                      borderBottom: `1px solid ${borderColor}`,
                      padding: 8,
                      textAlign: "right",
                      fontSize: 10,
                    }}
                  >
                    {currency(cgst)}
                  </td>
                </tr>

                <tr>
                  <td
                    colSpan={6}
                    style={{
                      borderBottom: `1px solid ${borderColor}`,
                      borderRight: `1px solid ${borderColor}`,
                      padding: 8,
                      textAlign: "right",
                      fontSize: 10,
                    }}
                  >
                    SGST {half}%
                  </td>

                  <td
                    colSpan={2}
                    style={{
                      borderBottom: `1px solid ${borderColor}`,
                      padding: 8,
                      textAlign: "right",
                      fontSize: 10,
                    }}
                  >
                    {currency(sgst)}
                  </td>
                </tr>

                <tr>
                  <td
                    colSpan={6}
                    style={{
                      borderBottom: `1px solid ${borderColor}`,
                      borderRight: `1px solid ${borderColor}`,
                      padding: 10,
                      textAlign: "right",
                      fontWeight: 700,
                      fontSize: 12,
                    }}
                  >
                    Total
                  </td>

                  <td
                    colSpan={2}
                    style={{
                      borderBottom: `1px solid ${borderColor}`,
                      padding: 10,
                      textAlign: "right",
                      fontWeight: 700,
                      fontSize: 13,
                    }}
                  >
                    {currency(total)}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>

          {/* ===================== AMOUNT IN WORDS ===================== */}

          <div
            style={{
              border: `1px solid ${borderColor}`,
              borderTop: "none",
              padding: "9px 10px",
              lineHeight: "15px",
            }}
          >
            <strong style={{ fontSize: 9 }}>
              Amount Chargeable (in words):
            </strong>

            <span
              style={{
                marginLeft: 6,
                fontSize: 9,
              }}
            >
              INR {amountInWords} Rupees Only.
            </span>

            <span
              style={{
                marginLeft: 6,
                fontSize: 9,
                fontStyle: "italic",
              }}
            >
              E & O.E
            </span>
          </div>

          {/* ===================== TAX SUMMARY ===================== */}

          <div
            style={{
              borderLeft: `1px solid ${borderColor}`,
              borderRight: `1px solid ${borderColor}`,
              borderBottom: `1px solid ${borderColor}`,
            }}
          >
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
              }}
            >
              <thead>
                <tr>
                  <th style={taxHeaderStyle}>HSN/SAC</th>
                  <th style={taxHeaderStyle}>Taxable Value</th>
                  <th style={{ ...taxHeaderStyle }} colSpan={2}>
                    Central Tax
                  </th>
                  <th style={{ ...taxHeaderStyle }} colSpan={2}>
                    State/UT Tax
                  </th>
                  <th style={{ ...taxHeaderStyle, borderRight: "none" }}>Total Tax</th>
                </tr>
                <tr>
                  <th style={taxHeaderStyle}></th>
                  <th style={taxHeaderStyle}></th>
                  <th style={taxHeaderStyle}>Rate</th>
                  <th style={taxHeaderStyle}>Amount</th>
                  <th style={taxHeaderStyle}>Rate</th>
                  <th style={taxHeaderStyle}>Amount</th>
                  <th style={{ ...taxHeaderStyle, borderRight: "none" }}></th>
                </tr>
              </thead>

              <tbody>
                {summary.map((row) => {
                  const rowCgst = (row.taxableValue * half) / 100;
                  const rowSgst = (row.taxableValue * half) / 100;
                  return (
                    <tr key={row.hsn}>
                      <td style={taxCellStyle}>{row.hsn}</td>
                      <td style={taxCellStyle}>{num(row.taxableValue)}</td>
                      <td style={taxCellStyle}>{half}%</td>
                      <td style={taxCellStyle}>{num(rowCgst)}</td>
                      <td style={taxCellStyle}>{half}%</td>
                      <td style={taxCellStyle}>{num(rowSgst)}</td>
                      <td style={{ ...taxCellStyle, borderRight: "none", fontWeight: 700 }}>
                        {num(rowCgst + rowSgst)}
                      </td>
                    </tr>
                  );
                })}

                <tr>
                  <td
                    colSpan={2}
                    style={{
                      ...taxCellStyle,
                      textAlign: "left",
                      fontWeight: 700,
                    }}
                  >
                    TOTAL
                  </td>
                  <td style={taxCellStyle}></td>
                  <td style={taxCellStyle}>{num(cgst)}</td>
                  <td style={taxCellStyle}></td>
                  <td style={taxCellStyle}>{num(sgst)}</td>
                  <td
                    style={{
                      ...taxCellStyle,
                      borderRight: "none",
                      fontWeight: 700,
                    }}
                  >
                    {num(cgst + sgst)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ===================== BANK + PAYMENT + SIGNATURE ===================== */}

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              borderLeft: `1px solid ${borderColor}`,
              borderRight: `1px solid ${borderColor}`,
              borderBottom: `1px solid ${borderColor}`,
              minHeight: 155,
            }}
          >
            {/* Bank Details */}
            <div
              style={{
                borderRight: `1px solid ${borderColor}`,
                padding: 12,
              }}
            >
              <h3
                style={{
                  margin: "0 0 10px",
                  fontSize: 10,
                  fontWeight: 700,
                }}
              >
                Bank Details:
              </h3>

              <p style={{ margin: 0, fontSize: 9, lineHeight: "15px", color: muted }}>
                Bank: <strong style={{ color: "#111827" }}>{formData.bankName || "—"}</strong>
              </p>
              <p style={{ margin: "3px 0 0", fontSize: 9, lineHeight: "15px", color: muted }}>
                Account #: <strong style={{ color: "#111827" }}>{formData.bankAccount || "—"}</strong>
              </p>
              <p style={{ margin: "3px 0 0", fontSize: 9, lineHeight: "15px", color: muted }}>
                IFSC Code: <strong style={{ color: "#111827" }}>{formData.ifscCode || "—"}</strong>
              </p>
              <p style={{ margin: "3px 0 0", fontSize: 9, lineHeight: "15px", color: muted }}>
                Branch: <strong style={{ color: "#111827" }}>{formData.branch || "—"}</strong>
              </p>
            </div>

            {/* UPI Payment */}
            <div
              style={{
                borderRight: `1px solid ${borderColor}`,
                padding: 12,
              }}
            >
              <h3
                style={{
                  margin: "0 0 10px",
                  fontSize: 10,
                  fontWeight: 700,
                }}
              >
                Pay using UPI:
              </h3>

              {formData.upiId ? (
                <img
                  src={`https://quickchart.io/qr?size=140&text=${encodeURIComponent(
                    `upi://pay?pa=${formData.upiId}&pn=${
                      formData.businessName || "Business"
                    }&am=${Number(total || 0).toFixed(2)}&cu=INR`
                  )}`}
                  alt="UPI payment QR code"
                  style={{
                    display: "block",
                    height: 90,
                    width: 90,
                  }}
                />
              ) : (
                <p
                  style={{
                    margin: 0,
                    fontSize: 9,
                    color: muted,
                  }}
                >
                  Add a UPI ID to show a payment QR code.
                </p>
              )}
            </div>

            {/* Signature */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "flex-end",
                padding: 12,
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: 10,
                  fontWeight: 700,
                }}
              >
                For {formData.businessName || "Your Business"}
              </p>

              <div
                style={{
                  textAlign: "center",
                  minWidth: 140,
                }}
              >
                <div
                  style={{
                    height: 45,
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "center",
                    fontSize: 20,
                    fontStyle: "italic",
                    color: "#374151",
                  }}
                >
                  {formData.signatureImage ? (
                    <img
                      src={formData.signatureImage}
                      alt="Signature"
                      style={{ maxHeight: 42, maxWidth: 140, objectFit: "contain" }}
                    />
                  ) : (
                    formData.signedBy ? "Signature" : ""
                  )}
                </div>

                <div
                  style={{
                    borderTop: `1px solid ${borderColor}`,
                    paddingTop: 6,
                  }}
                >
                  <p
                    style={{
                      margin: 0,
                      fontSize: 9,
                      color: muted,
                    }}
                  >
                    {formData.signedBy || "Authorized Signatory"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ===================== NOTES + TERMS ===================== */}

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              borderLeft: `1px solid ${borderColor}`,
              borderRight: `1px solid ${borderColor}`,
              borderBottom: `1px solid ${borderColor}`,
            }}
          >
            {/* Notes */}
            <div
              style={{
                borderRight: `1px solid ${borderColor}`,
                padding: 12,
                minHeight: 125,
              }}
            >
              <h3
                style={{
                  margin: "0 0 7px",
                  fontSize: 10,
                  fontWeight: 700,
                }}
              >
                Notes:
              </h3>

              <p
                style={{
                  margin: 0,
                  whiteSpace: "pre-line",
                  fontSize: 9,
                  lineHeight: "14px",
                  color: muted,
                }}
              >
                {formData.notes || "No notes added."}
              </p>
            </div>

            {/* Terms */}
            <div
              style={{
                padding: 12,
                minHeight: 125,
              }}
            >
              <h3
                style={{
                  margin: "0 0 7px",
                  fontSize: 10,
                  fontWeight: 700,
                }}
              >
                Terms and Conditions:
              </h3>

              <ol
                style={{
                  margin: 0,
                  paddingLeft: 17,
                  fontSize: 9,
                  lineHeight: "14px",
                  color: muted,
                }}
              >
              
              </ol>
            </div>
          </div>

          {/* ===================== FOOTER ===================== */}

          <div
            style={{
              borderLeft: `1px solid ${borderColor}`,
              borderRight: `1px solid ${borderColor}`,
              borderBottom: `1px solid ${borderColor}`,
              padding: "7px 10px",
              textAlign: "center",
              fontSize: 8,
              color: muted,
            }}
          >
            Page 1 / 1 • This is a digitally generated document.
          </div>
        </div>
      </div>
    </div>
  );
};

/* =============================================================
   INVOICE PREVIEW HELPERS
   ============================================================= */

const InvoiceInfoRow = ({ label, value, last = false, borderRight = false }) => (
  <div
    style={{
      borderBottom: last ? "none" : "1px solid #111827",
      borderRight: borderRight ? "1px solid #111827" : "none",
      padding: "8px 10px",
    }}
  >
    <p
      style={{
        margin: 0,
        fontSize: 9,
        fontWeight: 700,
      }}
    >
      {label}
    </p>

    <p
      style={{
        margin: "3px 0 0",
        fontSize: 10,
      }}
    >
      {value}
    </p>
  </div>
);

const taxHeaderStyle = {
  borderRight: "1px solid #111827",
  borderBottom: "1px solid #111827",
  padding: "6px 5px",
  fontSize: 8,
  textAlign: "center",
};

const taxCellStyle = {
  borderRight: "1px solid #111827",
  borderBottom: "1px solid #111827",
  padding: "7px 5px",
  fontSize: 9,
  textAlign: "right",
};

const formatInvoiceDate = (date) => {
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) {
    return "DD/MM/YYYY";
  }

  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

const numberToWordsIndian = (number) => {
  const value = Math.round(Number(number) || 0);

  if (value === 0) return "Zero";

  const ones = [
    "",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
  ];

  const tens = [
    "",
    "",
    "Twenty",
    "Thirty",
    "Forty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety",
  ];

  const twoDigits = (num) => {
    if (num < 20) return ones[num];

    return `${tens[Math.floor(num / 10)]}${
      num % 10 ? ` ${ones[num % 10]}` : ""
    }`;
  };

  const convert = (num) => {
    if (num < 100) return twoDigits(num);

    if (num < 1000) {
      return `${ones[Math.floor(num / 100)]} Hundred${
        num % 100 ? ` ${convert(num % 100)}` : ""
      }`;
    }

    if (num < 100000) {
      return `${convert(Math.floor(num / 1000))} Thousand${
        num % 1000 ? ` ${convert(num % 1000)}` : ""
      }`;
    }

    if (num < 10000000) {
      return `${convert(Math.floor(num / 100000))} Lakh${
        num % 100000 ? ` ${convert(num % 100000)}` : ""
      }`;
    }

    return `${convert(Math.floor(num / 10000000))} Crore${
      num % 10000000 ? ` ${convert(num % 10000000)}` : ""
    }`;
  };

  return convert(value);
};

/* ============================================================= */
/* SHARED PRIMITIVES */
/* ============================================================= */

const Field = ({ label, placeholder, value, onChange, upload, onUpload, type = "text" }) => {
  return (
    <label style={{ display: "block", marginTop: 12 }}>
      <span
        style={{
          display: "block",
          marginBottom: 6,
          fontSize: 13,
          fontWeight: 500,
          color: "#111827",
        }}
      >
        {label}
      </span>

      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          width: "100%",
          minHeight: 46,
          boxSizing: "border-box",
          borderRadius: 999,
          border: "1px solid #DDE5EF",
          background: "#fff",
          paddingLeft: 14,
          paddingRight: upload ? 76 : 14,
          overflow: "hidden",
        }}
      >
        <input
          type={type}
          value={value || ""}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          style={{
            display: "block",
            width: "100%",
            minWidth: 0,
            height: 42,
            border: "none",
            outline: "none",
            background: "transparent",
            fontSize: 14,
            color: "#111827",
          }}
        />

        {upload && (
          <div
            style={{
              position: "absolute",
              right: 8,
              top: "50%",
              transform: "translateY(-50%)",
              display: "flex",
              alignItems: "center",
              gap: 2,
              height: 34,
              padding: 2,
              borderRadius: 999,
              background: "#fff",
              zIndex: 2,
            }}
          >
            {value && (
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  if (onUpload) onUpload(null);
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 30,
                  height: 30,
                  border: "none",
                  borderRadius: "50%",
                  background: "transparent",
                  cursor: "pointer",
                  fontSize: 18,
                  lineHeight: 1,
                  color: "#78788D",
                }}
                title="Remove uploaded image"
                aria-label="Remove uploaded image"
              >
                ×
              </button>
            )}

            <label
              onClick={(e) => e.stopPropagation()}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 30,
                height: 30,
                border: "none",
                borderRadius: "50%",
                background: "transparent",
                cursor: "pointer",
                fontSize: 15,
                lineHeight: 1,
                color: "#78788D",
              }}
              title="Upload image"
            >
              ↑
              <input
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file && onUpload) onUpload(file);
                  e.target.value = "";
                }}
              />
            </label>
          </div>
        )}
      </div>
    </label>
  );
};

const TextInput = ({ value, onChange, placeholder, inputMode }) => (
  <input
    value={value}
    onChange={(e) => onChange(e.target.value)}
    placeholder={placeholder}
    inputMode={inputMode}
    style={{
      height: 34,
      minWidth: 0,
      borderRadius: 999,
      border: "1px solid #E5E5E5",
      padding: "0 12px",
      fontSize: 12,
      outline: "none",
      boxSizing: "border-box",
      width: "100%",
      ...font,
    }}
  />
);

const SectionTitle = ({ children }) => (
  <h3 style={{ fontSize: 14, fontWeight: 500, lineHeight: "20px", color: "#000", margin: 0 }}>{children}</h3>
);

const TableHeader = ({ children }) => <span style={{ fontSize: 12, color: "#525252" }}>{children}</span>;


export default InvoiceBuilder;