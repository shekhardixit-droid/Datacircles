require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const invoiceRoutes = require("./routes/invoiceRoutes");

const app = express();

connectDB();

app.use(cors({
  origin: [
    "https://datacircles.vercel.app",
    "http://localhost:5173",
    "http://localhost:3000",
  ],
  credentials: true,
}));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "DataCircles backend is running",
  });
});

app.use("/api/invoices", invoiceRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});