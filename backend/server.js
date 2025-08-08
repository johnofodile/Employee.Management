const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database connection FIRST
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    
    // THEN load routes
    const employeeRoutes = require("./routes/employeeRoutes");
    const departmentRoutes = require("./routes/departmentRoutes");
    
    app.use("/api/employees", employeeRoutes);
    app.use("/api/departments", departmentRoutes);

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error("MongoDB connection error:", err);
    process.exit(1); // Exit if DB connection fails
  });

