import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import talentRoutes from "./routes/talentRoutes.js";
import eventRoutes from "./routes/eventRoutes.js";
import requestRoutes from "./routes/requestRoutes.js";

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// Authentication Routes
app.use("/api/auth", authRoutes);
app.use("/api/talents", talentRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/requests", requestRoutes);

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Welcome to Eventra API 🚀",
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
});