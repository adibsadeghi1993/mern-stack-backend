"use strict";
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
const port = process.env.PORT || 5000;
const app = express();
app.listen(port, () => {
    console.log(`app lisitining on port :${port}`);
});
