const mongoose = require("mongoose");

const invoiceItemSchema = new mongoose.Schema(
  {
    item: { type: String, default: "", trim: true },
    description: { type: String, default: "", trim: true },
    rate: { type: Number, default: 0, min: 0 },
    quantity: { type: Number, default: 1, min: 1 },
  },
  { _id: false }
);

const invoiceSchema = new mongoose.Schema(
  {
    businessName: { type: String, default: "", trim: true },
    businessLogo: { type: String, default: "" },
    businessAddress: { type: String, default: "" },
    upiId: { type: String, default: "" },
    clientName: { type: String, default: "", trim: true },
    email: { type: String, default: "", trim: true },
    clientAddress: { type: String, default: "" },
    clientPhone: { type: String, default: "" },
    invoiceNumber: { type: String, default: "", trim: true },
    dueDate: { type: String, default: "" },
    items: { type: [invoiceItemSchema], default: [] },
    taxRate: { type: Number, default: 0, min: 0 },
    subtotal: { type: Number, default: 0 },
    taxAmount: { type: Number, default: 0 },
    total: { type: Number, default: 0 },
    notes: { type: String, default: "" },
    signedBy: { type: String, default: "" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Invoice", invoiceSchema);
