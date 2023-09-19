import Subscription from "../models/subscription.js";

export const getSubscriptions = async (req, res) => {
    try {
        const subscriptions = await Subscription.find();
        res.status(200).json(subscriptions);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createSubscription = async (req, res) => {
    try {
        const subscriptionDetail = req.body;
        const newSubscription = new Subscription(subscriptionDetail);
        await newSubscription.save();
        res.status(201).json(newSubscription);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const deleteSubscription = async (req, res) => {
    try {
        const filterBy = { user: req.body.user, stockName: req.body.stockName, stockType: req.body.stockType }
        const response = await Subscription.deleteOne(filterBy);
        res.status(201).json({ response, message: "Removed subscription" });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const deleteAllSubscriptions = async (req, res) => {
    try {
        const response = await Subscription.deleteMany();
        res.status(201).json({ response, message: "Removed all subscriptions" });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}