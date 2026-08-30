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
        background: #fff !important;
        margin: 0 !important;
        padding: 0 !important;
        height: auto !important;
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
        position: absolute !important;
        left: 0 !important;
        top: 0 !important;
        margin: 0 !important;
        width: 210mm !important;
        min-height: 297mm !important;
        max-width: none !important;
        box-shadow: none !important;
        border: none !important;
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
        color-adjust: exact !important;
      }

      @page {
        size: A4;
        margin: 0;
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
  `}</style>
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
    businessName: "",
    businessLogo: "",
    businessAddress: "",
    clientName: "",
    email: "",
    clientAddress: "",
    clientPhone: "",
    invoiceNumber: "INV-2026-14",
    dueDate: "",
    notes: "",
    signedBy: "For Studio Nimbus",
    taxRate: "0",
    upiId: "",
  });

  const [items, setItems] = useState([
    { item: "", description: "", rate: "", quantity: 1 },
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

  /* ---- handlers ---- */

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
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
    setItems((prev) => [...prev, { item: "", description: "", rate: "", quantity: 1 }]);
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
          rate: parseFloat(String(item.rate).replace(/[^0-9.]/g, "")) || 0,
          quantity: parseFloat(item.quantity) || 1,
        })),
        subtotal,
        taxAmount,
        total,
      };

      const response = await fetch("http://localhost:5000/api/invoices", {
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
              width: 210mm;
              margin: 0 auto;
            }

            .invoice-paper {
              position: static !important;
              width: 210mm !important;
              max-width: 210mm !important;
              min-height: 0 !important;
              height: auto !important;
              margin: 0 !important;
              overflow: visible !important;
              box-shadow: none !important;
              border: none !important;
              page-break-inside: auto !important;
              break-inside: auto !important;
            }

            @page {
              size: A4;
              margin: 0;
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
      style={{ ...font, minHeight: "100vh", width: "100%", background: "#F8FAFC", padding: "16px 12px" }}
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
        <div className="sm-grid-2" style={{ marginTop: 12, display: "grid", gridTemplateColumns: "1fr", gap: 12 }}>
          <Field
            label="Business Name"
            placeholder="Enter Business Name"
            value={formData.businessName}
            onChange={(v) => handleChange("businessName", v)}
          />
          <Field
            label="Business Logo"
            placeholder="Paste logo image URL"
            value={formData.businessLogo}
            onChange={(v) => handleChange("businessLogo", v)}
            upload
          />
        </div>
        <div style={{ marginTop: 12 }}>
          <Field
            label="Address, GSTIN, Contact"
            placeholder="Enter business address"
            value={formData.businessAddress}
            onChange={(v) => handleChange("businessAddress", v)}
          />
        </div>
        <div style={{ marginTop: 12 }}>
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
          <Field label="Email" placeholder="email@company.com" value={formData.email} onChange={(v) => handleChange("email", v)} />
          <Field label="Client Address" placeholder="Enter Client Address" value={formData.clientAddress} onChange={(v) => handleChange("clientAddress", v)} />
          <Field label="Phone" placeholder="+91 123456789" value={formData.clientPhone} onChange={(v) => handleChange("clientPhone", v)} />
          <Field
            label={<>Invoice No. <span style={{ color: "#ef4444" }}>*</span></>}
            placeholder="INV-2026-14"
            value={formData.invoiceNumber}
            onChange={(v) => handleChange("invoiceNumber", v)}
          />
          <Field label="Due Date" placeholder="DD/MM/YYYY" value={formData.dueDate} onChange={(v) => handleChange("dueDate", v)} />
        </div>
      </div>

      {/* INVOICE ITEMS */}
      <div style={{ padding: "18px 12px 0" }}>
        <SectionTitle>Invoice Items</SectionTitle>

        <div style={{ marginTop: 8, overflowX: "auto", borderRadius: 8, border: "1px solid #DDE1E5" }}>
          <div style={{ minWidth: 640 }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "2fr 1.5fr 0.8fr 0.6fr 0.9fr 32px",
                alignItems: "center",
                height: 40,
                background: "#F4F6F8",
                padding: "0 12px",
              }}
            >
              <TableHeader>Item</TableHeader>
              <TableHeader>Description</TableHeader>
              <TableHeader>Rate</TableHeader>
              <TableHeader>Qty</TableHeader>
              <TableHeader>Amount</TableHeader>
              <span />
            </div>

            {items.map((item, index) => (
              <div
                key={index}
                style={{
                  display: "grid",
                  gridTemplateColumns: "2fr 1.5fr 0.8fr 0.6fr 0.9fr 32px",
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
          <div style={{ width: "100%", maxWidth: 240, borderRadius: 8, border: "1px solid #E5E5E5", background: "#FAFBFC", padding: 12 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "4px 0" }}>
              <span style={{ fontSize: 12, color: "#78788D" }}>Subtotal</span>
              <span style={{ fontSize: 12, color: "#000" }}>{currency(subtotal)}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "4px 0" }}>
              <span style={{ fontSize: 12, color: "#78788D" }}>Tax %</span>
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
              <span style={{ fontSize: 12, color: "#78788D" }}>Tax Amount</span>
              <span style={{ fontSize: 12, color: "#000" }}>{currency(taxAmount)}</span>
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

      {/* NOTES */}
      <div style={{ padding: "18px 12px 12px" }}>
        <SectionTitle>NOTES & SIGNATURE</SectionTitle>
        <div style={{ marginTop: 12 }}>
          <Field label="Notes / Items" placeholder="Add notes" value={formData.notes} onChange={(v) => handleChange("notes", v)} />
        </div>
        <div style={{ marginTop: 12 }}>
          <Field label="Signed By" placeholder="" value={formData.signedBy} onChange={(v) => handleChange("signedBy", v)} />
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
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M14 6.5H25L31 12.5V25" stroke="#171717" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M25 6.5V12.5H31" stroke="#171717" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M22 19V33" stroke="#171717" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M17.5 28.5L22 33L26.5 28.5" stroke="#171717" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15 37.5H29" stroke="#171717" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: "Share Link",
      type: "link",
      onClick: onShare,
      icon: (
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M18.5 25.5L25.5 18.5" stroke="#171717" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M16.5 29.5H14.5C11.4624 29.5 9 27.0376 9 24C9 20.9624 11.4624 18.5 14.5 18.5H20" stroke="#171717" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M24 15.5H29.5C32.5376 15.5 35 17.9624 35 21C35 24.0376 32.5376 26.5 29.5 26.5H27.5" stroke="#171717" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M29 11V18" stroke="#171717" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M25.5 14.5H32.5" stroke="#171717" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: "Email It",
      type: "email",
      onClick: onEmail,
      icon: (
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect x="9" y="13" width="22" height="17" rx="2" stroke="#171717" strokeWidth="1.8" />
          <path d="M10 15L20 22L30 15" stroke="#171717" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M27 28L34 21" stroke="#171717" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M30.5 21H34V24.5" stroke="#171717" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
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

const InvoicePreview = ({
  formData,
  items,
  selectedColor,
  selectedLayout,
  subtotal,
  taxAmount,
  total,
}) => {
  /*
   * The invoice data below intentionally uses ONLY fields that already
   * exist in the current InvoiceBuilder form:
   *
   * businessName, businessLogo, businessAddress,
   * clientName, email, clientAddress, clientPhone,
   * invoiceNumber, dueDate, notes, signedBy, taxRate, upiId,
   * items, subtotal, taxAmount, total.
   *
   * No new form fields are required for this template.
   */

  const previewColor =
    selectedColor === "rainbow" ? "#0085FF" : selectedColor;

  const borderColor = "#111827";
  const muted = "#4B5563";
  const lightBorder = "#D1D5DB";

  const taxRateValue = parseFloat(formData.taxRate) || 0;
  const halfTaxRate = taxRateValue / 2;

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
          justifyContent: "space-between",
          borderBottom: "1px solid #E5E5E5",
          padding: "0 16px",
        }}
      >
        <span style={{ fontSize: 14, fontWeight: 500, color: "#000" }}>
          Live Preview
        </span>

        <span
          style={{
            borderRadius: 999,
            background: "#F3F6F9",
            padding: "4px 12px",
            fontSize: 11,
            color: "#78788D",
          }}
        >
          A4 Pro Forma Invoice
        </span>
      </div>

      <div
        className="invoice-canvas"
        style={{
          background: "#F5F7F9",
          padding: 20,
        }}
      >
        {/* =========================================================
            A4 INVOICE PAPER
           ========================================================= */}
        <div
          className="invoice-paper"
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
              border: `1px solid ${borderColor}`,
              borderBottom: "none",
              textAlign: "center",
              padding: "9px 12px",
            }}
          >
            <h1
              style={{
                margin: 0,
                fontSize: 18,
                fontWeight: 700,
                letterSpacing: 2,
                color: previewColor,
              }}
            >
              PRO FORMA INVOICE
            </h1>

            <p
              style={{
                margin: "3px 0 0",
                fontSize: 9,
                color: muted,
                textTransform: "uppercase",
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

                  <p
                    style={{
                      margin: "5px 0 0",
                      whiteSpace: "pre-line",
                      fontSize: 10,
                      lineHeight: "15px",
                      color: muted,
                    }}
                  >
                    {formData.businessAddress ||
                      "Business address, GSTIN and contact details"}
                  </p>
                </div>
              </div>
            </div>

            {/* Invoice metadata */}
            <div>
              <InvoiceInfoRow
                label="Pro Forma Invoice #"
                value={formData.invoiceNumber || "INV-2026-14"}
              />

              <InvoiceInfoRow
                label="Proforma Invoice Date"
                value={formatInvoiceDate(new Date())}
              />

              <InvoiceInfoRow
                label="Due Date"
                value={formData.dueDate || "DD/MM/YYYY"}
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

              {formData.email && (
                <p
                  style={{
                    margin: "4px 0 0",
                    fontSize: 10,
                    color: muted,
                  }}
                >
                  Email: {formData.email}
                </p>
              )}

              {formData.clientPhone && (
                <p
                  style={{
                    margin: "3px 0 0",
                    fontSize: 10,
                    color: muted,
                  }}
                >
                  Ph: {formData.clientPhone}
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
            </div>

            {/* Shipping / business details available in existing form */}
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
                Invoice Details:
              </h3>

              <p
                style={{
                  margin: 0,
                  fontSize: 10,
                  lineHeight: "15px",
                  color: muted,
                }}
              >
                Invoice Number:{" "}
                <strong style={{ color: "#111827" }}>
                  {formData.invoiceNumber || "INV-2026-14"}
                </strong>
              </p>

              <p
                style={{
                  margin: "5px 0 0",
                  fontSize: 10,
                  lineHeight: "15px",
                  color: muted,
                }}
              >
                Due Date:{" "}
                <strong style={{ color: "#111827" }}>
                  {formData.dueDate || "DD/MM/YYYY"}
                </strong>
              </p>

              <p
                style={{
                  margin: "12px 0 0",
                  fontSize: 10,
                  fontWeight: 600,
                }}
              >
                Business Contact:
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
                {formData.businessAddress || "Business contact details"}
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
                      width: 35,
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
                      width: 105,
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
                      width: 60,
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
                      width: 115,
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
                      {item.quantity || 1}
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
                      colSpan={5}
                      style={{
                        height: 65,
                        borderBottom: `1px solid ${borderColor}`,
                      }}
                    />
                  </tr>
                )}

                {/* Shipping isn't a separate form field in the original code,
                    so no invented shipping amount is added here. */}
              </tbody>

              <tfoot>
                <tr>
                  <td
                    colSpan={4}
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
                    colSpan={4}
                    style={{
                      borderBottom: `1px solid ${borderColor}`,
                      borderRight: `1px solid ${borderColor}`,
                      padding: 8,
                      textAlign: "right",
                      fontSize: 10,
                    }}
                  >
                    Tax {taxRateValue}%
                  </td>

                  <td
                    style={{
                      borderBottom: `1px solid ${borderColor}`,
                      padding: 8,
                      textAlign: "right",
                      fontSize: 10,
                    }}
                  >
                    {currency(taxAmount)}
                  </td>
                </tr>

                <tr>
                  <td
                    colSpan={4}
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
            <div
              style={{
                padding: "8px 10px",
                fontWeight: 700,
                fontSize: 10,
                borderBottom: `1px solid ${borderColor}`,
              }}
            >
              Tax Summary
            </div>

            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
              }}
            >
              <thead>
                <tr>
                  <th style={taxHeaderStyle}>Taxable Value</th>
                  <th style={taxHeaderStyle}>Tax Rate</th>
                  <th style={taxHeaderStyle}>Tax Amount</th>
                  <th style={{ ...taxHeaderStyle, borderRight: "none" }}>Total Tax</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td style={taxCellStyle}>{currency(subtotal)}</td>
                  <td style={taxCellStyle}>{taxRateValue}%</td>
                  <td style={taxCellStyle}>{currency(taxAmount)}</td>
                  <td
                    style={{
                      ...taxCellStyle,
                      borderRight: "none",
                      fontWeight: 700,
                    }}
                  >
                    {currency(taxAmount)}
                  </td>
                </tr>

                <tr>
                  <td
                    colSpan={3}
                    style={{
                      ...taxCellStyle,
                      borderBottom: "none",
                      textAlign: "right",
                      fontWeight: 700,
                    }}
                  >
                    TOTAL
                  </td>

                  <td
                    style={{
                      ...taxCellStyle,
                      borderRight: "none",
                      borderBottom: "none",
                      fontWeight: 700,
                    }}
                  >
                    {currency(taxAmount)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ===================== PAYMENT + SIGNATURE ===================== */}

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              borderLeft: `1px solid ${borderColor}`,
              borderRight: `1px solid ${borderColor}`,
              borderBottom: `1px solid ${borderColor}`,
              minHeight: 155,
            }}
          >
            {/* Payment */}
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
                Payment Details:
              </h3>

              {formData.upiId ? (
                <>
                  <p
                    style={{
                      margin: 0,
                      fontSize: 10,
                    }}
                  >
                    <strong>Pay using UPI:</strong>{" "}
                    {formData.upiId}
                  </p>

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
                      marginTop: 8,
                    }}
                  />
                </>
              ) : (
                <p
                  style={{
                    margin: 0,
                    fontSize: 9,
                    color: muted,
                  }}
                >
                  Payment details can be added using the UPI ID field.
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
                  minWidth: 160,
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
                  {formData.signedBy ? "Signature" : ""}
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
                <li>Invoice terms apply as agreed between both parties.</li>
                <li>Products/services are subject to the agreed order.</li>
                <li>Please complete payment by the due date.</li>
                <li>Any additional requests may result in extra charges.</li>
                <li>Invoice information should be verified by the recipient.</li>
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

const InvoiceInfoRow = ({ label, value, last = false }) => (
  <div
    style={{
      borderBottom: last ? "none" : "1px solid #111827",
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

const Field = ({ label, placeholder, value, onChange, upload = false }) => {
  return (
    <div style={{ width: "100%" }}>
      <label style={{ marginBottom: 6, display: "block", fontSize: 12, fontWeight: 400, lineHeight: "16px", color: "#000" }}>{label}</label>
      <div style={{ position: "relative" }}>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          style={{
            height: 32,
            width: "100%",
            borderRadius: 999,
            border: "1px solid #E5E5E5",
            background: "#fff",
            padding: upload ? "0 36px 0 12px" : "0 12px",
            fontSize: 12,
            color: "#525252",
            outline: "none",
            boxSizing: "border-box",
            ...font,
          }}
        />
        {upload && (
          <span style={{ pointerEvents: "none", position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", fontSize: 16, color: "#525252" }}>↑</span>
        )}
      </div>
    </div>
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