const express = require("express");
const Invoice = require("../models/Invoice");

const router = express.Router();

router.get("/", async (req, res) => {
  res.json({ success: true, message: "Invoices API is working" });
});

router.post("/", async (req, res) => {
  try {
    const invoice = await Invoice.create(req.body);

    res.status(201).json({
      success: true,
      message: "Invoice saved successfully",
      invoice,
    });
  } catch (error) {
    console.error("Invoice save error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;