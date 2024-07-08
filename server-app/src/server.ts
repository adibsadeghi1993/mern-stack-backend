const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectToMongoDB = require("./config/dbContection");
import shortUrl from "./routes/shortUrl";

dotenv.config();
connectToMongoDB();
const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use("/api/", shortUrl);

app.listen(port, () => {
  console.log(`app lisitining on port :${port}`);
});
