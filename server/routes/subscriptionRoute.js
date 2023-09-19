import express from "express";
import { getSubscriptions, createSubscription, deleteSubscription, deleteAllSubscriptions } from "../controllers/subscription.js";

const router = express.Router();

router.get("/getSubscriptions", getSubscriptions);
router.post("/createSubscription", createSubscription);
router.delete("/deleteSubscription", deleteSubscription);
router.delete("/deleteAllSubscriptions", deleteAllSubscriptions);

export default router;