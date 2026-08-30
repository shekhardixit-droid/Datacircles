import { useMemo, useState } from "react";
import { InvoicePreview } from "../freetools/InvoiceBuilder";

// ─── Constants ─────────────────────────────────────────────────────────────────
const F = "Inter, Arial, sans-serif";

const COLOR_OPTIONS = [
  { label: "Blue",   value: "#0085FF" },
  { label: "Green",  value: "#22C55E" },
  { label: "Dark",   value: "#334155" },
  { label: "Purple", value: "#5147E8" },
  { label: "Violet", value: "#9235E5" },
  { label: "Teal",   value: "#159A8C" },
  { label: "Orange", value: "#C73F08" },
];

const LAYOUT_OPTIONS = ["Colour Band", "Side Accent", "Minimal"];

// ─── Initial state ─────────────────────────────────────────────────────────────
const initialItem = { item: "", description: "", rate: "", quantity: 1 };

const initialForm = {
  deal: "",
  invoiceStyle: "Colour Band",
  invoiceDate: new Date().toISOString().slice(0, 10),
  dueDate: "",
  receiverGSTIN: "",
  taxInvoice: false,
  upiId: "",
  recurringInvoice: false,
  recurringCycle: "",
  startFrom: "",
  items: [{ ...initialItem }],
};

// ─── Icons ─────────────────────────────────────────────────────────────────────
function SearchIco() {
  return (
    <svg viewBox="0 0 24 24" style={{ height: 17, width: 17, flexShrink: 0 }} fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>
    </svg>
  );
}
function CalIco() {
  return (
    <svg viewBox="0 0 24 24" style={{ height: 17, width: 17, flexShrink: 0 }} fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/>
    </svg>
  );
}
function ChevIco() {
  return (
    <svg viewBox="0 0 24 24" style={{ height: 13, width: 13, flexShrink: 0 }} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m6 9 6 6 6-6"/>
    </svg>
  );
}
function PlusIco() {
  return (
    <svg viewBox="0 0 24 24" style={{ height: 17, width: 17, flexShrink: 0 }} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 5v14M5 12h14"/>
    </svg>
  );
}
function TrashIco() {
  return (
    <svg viewBox="0 0 24 24" style={{ height: 17, width: 17, flexShrink: 0 }} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 7h16M9 7V4h6v3M7 7l1 14h8l1-14M10 11v6M14 11v6"/>
    </svg>
  );
}

// ─── Shared input style ────────────────────────────────────────────────────────
const baseInp = {
  height: 44, width: "100%", borderRadius: 999,
  border: "1px solid #e2e5e9", background: "#fff",
  padding: "0 16px", fontSize: 14, color: "#30343b",
  outline: "none", fontFamily: F, boxSizing: "border-box",
};
const disabledInp = { ...baseInp, background: "#f5f6f8", color: "#bbb", cursor: "not-allowed", borderColor: "#eee" };

function Label({ children, required }) {
  return (
    <label style={{ display: "block", fontSize: 14, fontWeight: 500, color: "#202124", marginBottom: 8, fontFamily: F }}>
      {children}{required && <span style={{ color: "#ff3b30", marginLeft: 4 }}>*</span>}
    </label>
  );
}

function SelectBox({ value, placeholder, onChange, icon, disabled, children }) {
  return (
    <div style={{ position: "relative" }}>
      {icon && (
        <div style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", pointerEvents: "none", color: "#8d95a1", display: "flex" }}>
          {icon}
        </div>
      )}
      <select value={value} onChange={e => onChange(e.target.value)} disabled={disabled}
        style={{ ...baseInp, appearance: "none", WebkitAppearance: "none", paddingLeft: icon ? 38 : 16, paddingRight: 36, cursor: disabled ? "not-allowed" : "pointer", ...(disabled ? { background: "#f5f6f8", color: "#bbb" } : {}) }}>
        <option value="">{placeholder}</option>
        {children}
      </select>
      <div style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", pointerEvents: "none", color: "#24282e", display: "flex" }}>
        <ChevIco />
      </div>
    </div>
  );
}

function DateField({ value, onChange, disabled }) {
  return (
    <div style={{ position: "relative" }}>
      <input type="date" value={value} onChange={e => onChange(e.target.value)} disabled={disabled}
        style={disabled ? { ...disabledInp, paddingRight: 44 } : { ...baseInp, paddingRight: 44 }} />
      <div style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", pointerEvents: "none", color: "#999", display: "flex" }}>
        <CalIco />
      </div>
    </div>
  );
}

// ─── Main component ────────────────────────────────────────────────────────────
export default function CreateInvoiceSection() {
  const [form, setForm]               = useState(initialForm);
  const [selectedColor, setColor]     = useState("#0085FF");
  const [selectedLayout, setLayout]   = useState("Colour Band");

  const set = (k, v) => setForm(p => ({ ...p, [k]: v }));
  const setItem = (i, k, v) =>
    setForm(p => ({ ...p, items: p.items.map((it, x) => x === i ? { ...it, [k]: v } : it) }));
  const addItem = () =>
    setForm(p => ({ ...p, items: [...p.items, { ...initialItem }] }));
  const removeItem = (i) =>
    setForm(p => ({ ...p, items: p.items.length === 1 ? p.items : p.items.filter((_, x) => x !== i) }));

  // ── Map form → InvoicePreview formData shape ──────────────────────────────
  const previewFormData = useMemo(() => ({
    businessName: "DataCircles",
    businessLogo: "",
    businessAddress: "",
    clientName: form.deal || "",
    email: "",
    clientAddress: "",
    clientPhone: "",
    invoiceNumber: "INV-001",
    dueDate: form.dueDate || "",
    notes: "",
    signedBy: "Authorized Signatory",
    taxRate: form.taxInvoice ? "18" : "0",
    upiId: form.upiId || "",
  }), [form]);

  // ── Map form items → InvoicePreview items shape (with amountValue) ────────
  const previewItems = useMemo(() =>
    form.items.map(it => {
      const rate = parseFloat(String(it.rate).replace(/[^0-9.]/g, "")) || 0;
      const qty  = parseFloat(it.quantity) || 0;
      return { ...it, amountValue: rate * qty };
    }),
  [form.items]);

  const subtotal  = useMemo(() => previewItems.reduce((s, it) => s + it.amountValue, 0), [previewItems]);
  const taxRate   = parseFloat(form.taxInvoice ? "18" : "0") || 0;
  const taxAmount = (subtotal * taxRate) / 100;
  const total     = subtotal + taxAmount;

  return (
    <div style={{ width: "100%", fontFamily: F, background: "#fafbfc" }}>

      {/* ── Top nav ───────────────────────────────────────────────────────── */}
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        flexWrap: "wrap", gap: 10, minHeight: 68, padding: "10px 24px",
        borderBottom: "1px solid #e7e9ec", background: "#fff", boxSizing: "border-box",
      }}>
        <div>
          <h1 style={{ fontSize: 19, fontWeight: 500, letterSpacing: "-0.4px", margin: 0, color: "#202124" }}>Vendors</h1>
          <p style={{ margin: "3px 0 0", fontSize: 13, color: "#68707d" }}>Manage your vendors.</p>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 8 }}>
          <button style={{ height: 40, padding: "0 20px", borderRadius: 999, border: "1px solid #1c5dc9", background: "#1f63d1", fontSize: 13, fontWeight: 500, color: "#fff", cursor: "pointer", fontFamily: F }}>Book a Call</button>
          <div style={{ display: "flex", alignItems: "center", gap: 6, height: 40, borderRadius: 999, border: "1px solid #dfe3e8", background: "#fff", padding: "0 14px", fontSize: 13, color: "#626974" }}>
            <span>◷</span> 7 Days Left!
          </div>
          <button style={{ height: 40, padding: "0 18px", borderRadius: 999, border: "none", background: "#1e62cf", fontSize: 13, fontWeight: 500, color: "#fff", cursor: "pointer", fontFamily: F }}>Upgrade Plan</button>
          <div style={{ display: "flex", alignItems: "center", gap: 8, height: 40, borderRadius: 999, border: "1px solid #dfe3e8", background: "#fff", padding: "0 14px", fontSize: 13, color: "#626974" }}>
            <SearchIco /> Search Companies, Deals, Contacts
          </div>
        </div>
      </div>

      {/* ── Two columns ───────────────────────────────────────────────────── */}
      <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(460px,1fr)", gap: 8, padding: 8, boxSizing: "border-box" }}>

        {/* ── LEFT: Form ──────────────────────────────────────────────────── */}
        <section style={{ borderRadius: 8, border: "1px solid #e2e5e9", background: "#fff", padding: "20px 20px 32px", overflowY: "auto", maxHeight: "calc(100vh - 88px)", boxSizing: "border-box" }}>

          <h2 style={{ fontSize: 17, fontWeight: 500, margin: 0, color: "#202124" }}>Create New Invoice</h2>
          <p style={{ margin: "4px 0 20px", fontSize: 14, color: "#68707d" }}>Fill in the details to create your invoice.</p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "18px 24px" }}>

            {/* Select Deal — free text */}
            <div>
              <Label required>Select Deal</Label>
              <div style={{ position: "relative" }}>
                <div style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", pointerEvents: "none", color: "#8d95a1", display: "flex" }}>
                  <SearchIco />
                </div>
                <input value={form.deal} onChange={e => set("deal", e.target.value)}
                  placeholder="Enter deal / company name"
                  style={{ ...baseInp, paddingLeft: 38 }} />
              </div>
            </div>

            {/* Invoice Style — layout picker */}
            <div>
              <Label>Invoice Style</Label>
              <SelectBox value={selectedLayout} onChange={v => { setLayout(v); set("invoiceStyle", v); }} placeholder="Select Invoice Style">
                {LAYOUT_OPTIONS.map(l => <option key={l} value={l}>{l}</option>)}
              </SelectBox>
            </div>

            {/* Invoice Date */}
            <div>
              <Label required>Invoice Date</Label>
              <DateField value={form.invoiceDate} onChange={v => set("invoiceDate", v)} />
            </div>

            {/* Due Date */}
            <div>
              <Label>Due Date</Label>
              <DateField value={form.dueDate} onChange={v => set("dueDate", v)} />
            </div>

            {/* Receiver GSTIN */}
            <div>
              <Label required>Receiver GSTIN</Label>
              <input value={form.receiverGSTIN} onChange={e => set("receiverGSTIN", e.target.value)}
                placeholder="Enter Receiver GSTIN" style={baseInp} />
            </div>

            {/* Tax Invoice */}
            <div>
              <Label>Tax Invoice</Label>
              <label style={{ display: "flex", alignItems: "center", gap: 10, height: 44, cursor: "pointer", fontSize: 14, color: "#555", fontFamily: F }}>
                <input type="checkbox" checked={form.taxInvoice} onChange={e => set("taxInvoice", e.target.checked)}
                  style={{ height: 20, width: 20, accentColor: "#1685f5", cursor: "pointer", flexShrink: 0 }} />
                Enable Tax Invoice
              </label>
            </div>

            {/* UPI ID — full width */}
            <div style={{ gridColumn: "1 / -1" }}>
              <Label>UPI ID <span style={{ fontSize: 12, fontWeight: 400, color: "#aaa" }}>(adds payment QR to invoice)</span></Label>
              <input value={form.upiId} onChange={e => set("upiId", e.target.value)}
                placeholder="yourname@upi" style={baseInp} />
            </div>

          </div>

          {/* Invoice Items */}
          <div style={{ marginTop: 24 }}>
            <Label>Invoice Items</Label>
            <div style={{ overflowX: "auto", borderRadius: 8, border: "1px solid #dfe3e8" }}>
              <div style={{ minWidth: 680 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1.3fr .65fr .5fr .7fr 40px", background: "#f4f6f8", padding: "10px 12px", fontSize: 13, color: "#50555d", fontFamily: F }}>
                  <span>Item</span><span>Description</span><span>Rate</span><span>Qty</span><span>Amount</span><span />
                </div>
                {form.items.map((item, i) => {
                  const rate = parseFloat(String(item.rate).replace(/[^0-9.]/g, "")) || 0;
                  const amt  = rate * (Number(item.quantity) || 0);
                  return (
                    <div key={i} style={{ display: "grid", gridTemplateColumns: "1.5fr 1.3fr .65fr .5fr .7fr 40px", alignItems: "center", gap: 6, borderTop: "1px solid #e3e6ea", padding: "8px 12px" }}>
                      <input value={item.item} onChange={e => setItem(i, "item", e.target.value)}
                        placeholder="Item name" style={{ ...baseInp, height: 38, fontSize: 13 }} />
                      <input value={item.description} onChange={e => setItem(i, "description", e.target.value)}
                        placeholder="Description" style={{ ...baseInp, height: 38, fontSize: 13 }} />
                      <div style={{ position: "relative" }}>
                        <span style={{ position: "absolute", left: 11, top: "50%", transform: "translateY(-50%)", color: "#9ba1aa", fontSize: 13, pointerEvents: "none" }}>₹</span>
                        <input type="number" value={item.rate} onChange={e => setItem(i, "rate", e.target.value)}
                          style={{ ...baseInp, height: 38, paddingLeft: 24, fontSize: 13 }} />
                      </div>
                      <input type="number" min="1" value={item.quantity} onChange={e => setItem(i, "quantity", e.target.value)}
                        style={{ ...baseInp, height: 38, textAlign: "center", padding: "0 6px", fontSize: 13 }} />
                      <div style={{ fontSize: 13, fontWeight: 500, color: "#535a64", whiteSpace: "nowrap" }}>
                        ₹{amt.toLocaleString("en-IN")}
                      </div>
                      <button type="button" onClick={() => removeItem(i)}
                        style={{ display: "flex", alignItems: "center", justifyContent: "center", height: 34, width: 34, background: "none", border: "none", color: "#ff2929", cursor: "pointer" }}>
                        <TrashIco />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
            <button type="button" onClick={addItem}
              style={{ marginTop: 10, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, height: 42, width: "100%", borderRadius: 8, border: "1px solid #a8d2ff", background: "#fff", fontSize: 14, fontWeight: 500, color: "#0085ff", cursor: "pointer", fontFamily: F }}>
              <PlusIco /> Add Another Item
            </button>
          </div>

          {/* Recurring Invoice */}
          <div style={{ marginTop: 24 }}>
            <Label>Recurring Invoice</Label>
            <label style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer", fontSize: 14, color: "#555", fontFamily: F }}>
              <input type="checkbox" checked={form.recurringInvoice} onChange={e => set("recurringInvoice", e.target.checked)}
                style={{ height: 20, width: 20, accentColor: "#1685f5", cursor: "pointer", flexShrink: 0 }} />
              Enable Recurring Invoice
            </label>
          </div>

          {/* Recurring options — only editable when ON */}
          <div style={{ marginTop: 16, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "18px 24px", opacity: form.recurringInvoice ? 1 : 0.4, pointerEvents: form.recurringInvoice ? "auto" : "none" }}>
            <div>
              <Label>Invoice Cycling</Label>
              <SelectBox value={form.recurringCycle} onChange={v => set("recurringCycle", v)} placeholder="Choose Recurring Cycle" disabled={!form.recurringInvoice}>
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
                <option value="Quarterly">Quarterly</option>
                <option value="Yearly">Yearly</option>
              </SelectBox>
            </div>
            <div>
              <Label>Start from</Label>
              <DateField value={form.startFrom} onChange={v => set("startFrom", v)} disabled={!form.recurringInvoice} />
            </div>
          </div>

        </section>

        {/* ── RIGHT: Live Preview ──────────────────────────────────────────── */}
        <section style={{ display: "flex", flexDirection: "column", borderRadius: 8, border: "1px solid #e2e5e9", background: "#fff", padding: 16, maxHeight: "calc(100vh - 88px)", boxSizing: "border-box" }}>

          {/* Preview header */}
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, flexWrap: "wrap", flexShrink: 0 }}>
            <div>
              <h2 style={{ fontSize: 14, fontWeight: 500, margin: 0, color: "#202124" }}>Invoice Preview</h2>
              <p style={{ margin: "3px 0 0", fontSize: 12, color: "#68707d" }}>This is how your invoice appears to the customer.</p>
            </div>
            {/* Change Template cycles layout */}
            <button type="button"
              onClick={() => {
                const idx = LAYOUT_OPTIONS.indexOf(selectedLayout);
                const next = LAYOUT_OPTIONS[(idx + 1) % LAYOUT_OPTIONS.length];
                setLayout(next);
                set("invoiceStyle", next);
              }}
              style={{ display: "flex", alignItems: "center", gap: 8, height: 38, borderRadius: 999, border: "none", background: "#0787f9", padding: "0 18px", fontSize: 13, fontWeight: 500, color: "#fff", cursor: "pointer", fontFamily: F, flexShrink: 0 }}>
              Change Template
            </button>
          </div>

          {/* Colour chips */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 10, flexShrink: 0 }}>
            {COLOR_OPTIONS.map(c => (
              <button key={c.value} onClick={() => setColor(c.value)}
                title={c.label}
                style={{
                  width: 28, height: 28, borderRadius: "50%", cursor: "pointer",
                  border: selectedColor === c.value ? "3px solid #111" : "2px solid transparent",
                  background: c.value, outline: "none", transform: selectedColor === c.value ? "scale(1.15)" : "scale(1)",
                  transition: "all 0.15s",
                }} />
            ))}
          </div>

          {/* Layout chips */}
          <div style={{ display: "flex", gap: 8, marginTop: 8, flexShrink: 0 }}>
            {LAYOUT_OPTIONS.map(l => (
              <button key={l} onClick={() => { setLayout(l); set("invoiceStyle", l); }}
                style={{
                  height: 30, padding: "0 14px", borderRadius: 999, cursor: "pointer",
                  border: selectedLayout === l ? "2px solid #0085FF" : "1px solid #e2e5e9",
                  background: selectedLayout === l ? "#f0f8ff" : "#fff",
                  fontSize: 12, fontWeight: 600,
                  color: selectedLayout === l ? "#0085FF" : "#555",
                  fontFamily: F,
                }}>
                {l}
              </button>
            ))}
          </div>

          {/* Scrollable preview — uses exact same InvoicePreview from InvoiceBuilder */}
          <div style={{ marginTop: 12, flex: 1, overflowY: "auto", overflowX: "hidden", borderRadius: 6, border: "1px solid #eee" }}>
            <InvoicePreview
              formData={previewFormData}
              items={previewItems}
              selectedColor={selectedColor}
              selectedLayout={selectedLayout}
              subtotal={subtotal}
              taxAmount={taxAmount}
              total={total}
            />
          </div>

        </section>
      </div>
    </div>
  );
}
