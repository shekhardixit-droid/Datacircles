const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// ==================================================
// REGISTER
// ==================================================

const register = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    // Check required fields
    if (!fullName || !email || !password) {
      return res.status(400).json({
        message: "Full name, email and password are required.",
      });
    }

    // Normalize email
    const normalizedEmail = email.trim().toLowerCase();

    // Check if user already exists
    const existingUser = await User.findOne({
      email: normalizedEmail,
    });

    if (existingUser) {
      return res.status(409).json({
        message: "An account with this email already exists.",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create user
    const user = await User.create({
      fullName: fullName.trim(),
      email: normalizedEmail,
      password: hashedPassword,
    });

    // Send response
    return res.status(201).json({
      message: "Account created successfully.",
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Register error:", error);

    return res.status(500).json({
      message: "Server error while creating account.",
    });
  }
};


// ==================================================
// LOGIN
// ==================================================

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check required fields
    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required.",
      });
    }

    // Normalize email
    const normalizedEmail = email.trim().toLowerCase();

    // Find user
    const user = await User.findOne({
      email: normalizedEmail,
    });

    // User does not exist
    if (!user) {
      return res.status(401).json({
        message: "Incorrect username or password. Please try again.",
      });
    }

    // Compare password
    const passwordMatches = await bcrypt.compare(
      password,
      user.password
    );

    // Password incorrect
    if (!passwordMatches) {
      return res.status(401).json({
        message: "Incorrect username or password. Please try again.",
      });
    }

    // Check JWT secret
    if (!process.env.JWT_SECRET) {
      return res.status(500).json({
        message: "JWT_SECRET is not configured on the server.",
      });
    }

    // Create JWT
    const token = jwt.sign(
      {
        userId: user._id,
        email: user.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    // Successful login
    return res.status(200).json({
      message: "Login successful.",
      token,
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Login error:", error);

    return res.status(500).json({
      message: "Server error while logging in.",
    });
  }
};


// ==================================================
// EXPORT
// ==================================================

module.exports = {
  register,
  login,
};