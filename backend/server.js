require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const invoiceRoutes = require("./routes/invoiceRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

connectDB();

app.use(
  cors({
    origin: [
      "https://datacircles.vercel.app",
      "http://localhost:5173",
      "http://localhost:3000",
    ],
    credentials: true,
  })
);

app.use(express.json());

// Connect to DB on every request (cached after first connect)
app.use(async (req, res, next) => {
  await connectDB();
  next();
});

app.get("/", (req, res) => {
  res.json({ message: "DataCircles backend is running" });
});

// Invoice routes
app.use("/api/invoices", invoiceRoutes);
// Authentication routes
app.use("/api/auth", authRoutes);

if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}
// Authentication routes
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;

module.exports = app;
