const express = require("express");
const cors = require("cors");
const path = require("path");
const cardRoutes = require('./Routes/cardRoutes');
const cardModel = require("./Models/cardModel");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// API Routes
app.use("/api", cardRoutes);

// Start server
app.listen(port, async () => {
    await cardModel.connectDB();
    console.log(`App running on http://localhost:${port}`);
});
