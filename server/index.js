import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from 'dotenv';
dotenv.config();

import { alertsRoute, stocksRoute, subscriptionRoute } from "./routes/index.js";

const app = express();
const MONGODB_CONECTION_URL = process.env.MONGODB_CONECTION_URL;
const DB_NAME = process.env.DB_NAME;
const PORT = process.env.PORT || 5500;

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/stocks", stocksRoute);
app.use("/subscribe", subscriptionRoute);
app.use("/alerts", alertsRoute);

mongoose.connect(`${MONGODB_CONECTION_URL}/${DB_NAME}`, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Listening to port ${PORT}`)))
    .catch((error) => console.log(`Error connecting to port ${PORT} with message: ${error.message}`))