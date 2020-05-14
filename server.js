const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const cors = require("cors");
const app = express();

dotenv.config({ path: "./config/config.env" });
require("./config/db")();

app.use(cors());
app.use(express.json());

app.use("/api/v1/notes", require("./routes/notes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running on port ${PORT}`.yellow));