import express from "express";
import { createStock, getStocks, updateStock, deleteStock, createMultipleStocks, deleteAllStocks } from "../controllers/stocks.js";

const router = express.Router();

router.get("/getStocks", getStocks);
router.post("/createStock", createStock);
router.put("/updateStock", updateStock);
router.delete("/deleteStock/:name", deleteStock);
router.post("/createMultipleStocks", createMultipleStocks);
router.delete("/deleteAllStocks", deleteAllStocks);

export default router;