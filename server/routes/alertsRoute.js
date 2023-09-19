import express from "express";
import { checkStockUpdate } from "../controllers/alert.js";

const router = express.Router();

router.get("/checkStockUpdate", checkStockUpdate);

export default router;