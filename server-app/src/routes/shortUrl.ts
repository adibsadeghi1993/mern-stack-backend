import express from "express";
import {
  createUrl,
  deleteUrl,
  getAllUrl,
  getUrl,
} from "../controllers/shortUrl";

const routre = express.Router();

routre.post("/shortUrl", createUrl);
routre.get("/shortUrl", getAllUrl);
routre.get("/shortUrl/:id", getUrl);
routre.delete("/shortUrl/:id", deleteUrl);

export default routre;
