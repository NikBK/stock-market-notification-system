import mongoose from "mongoose";

const COLLECTION_NAME = process.env.STOCKS_COLLECTION;

const stockSchema = new mongoose.Schema({
    name: String,
    type: String,
    price: Number,
    timestamp: { type: Date, default: Date.now }
}, { collection: COLLECTION_NAME })

const Stocks = mongoose.model("Stocks", stockSchema);
export default Stocks;