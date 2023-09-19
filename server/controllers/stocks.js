import Stocks from "../models/stocks.js";

export const getStocks = async (req, res) => {
    try {
        const stocks = await Stocks.find();
        res.status(200).json(stocks);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createStock = async (req, res) => {
    try {
        const stockDetail = req.body;
        const newStock = new Stocks(stockDetail);
        await newStock.save();
        res.status(201).json(newStock);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const updateStock = async (req, res) => {
    try {
        const filterBy = { name: req.body.name, type: req.body.type };
        const updateWith = { price: req.body.price };
        const updatedStock = await Stocks.findOneAndUpdate(filterBy, updateWith);
        updateStock ? res.status(200).json(updatedStock) : res.status(404).json({ message: "Stock doesn't exist" });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const deleteStock = async (req, res) => {
    try {
        const filterBy = { name: req.params.name };
        const deletedStock = await Stocks.findOneAndDelete(filterBy);
        deletedStock ? res.status(200).json(deletedStock) : res.status(404).json({ message: "Stock doesn't exist" });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const createMultipleStocks = async (req, res) => {
    try {
        const stocks = req.body;
        if (Array.isArray(stocks)) {
            stocks.map(async (stock) => {
                const newStock = new Stocks(stock);
                await newStock.save();
            })
            res.status(201).json({ message: "Stocks created successfully" });
        }
        else {
            res.status(400).json({ message: "Request has bad format, please provide array of objects" })
        }
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const deleteAllStocks = async (req, res) => {
    try {
        const deletedStock = await Stocks.deleteMany();
        deletedStock ? res.status(200).json(deletedStock) : res.status(404).json({ message: "Stock doesn't exist" });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}