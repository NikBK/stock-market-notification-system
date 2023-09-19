import mongoose from 'mongoose';

const COLLECTION_NAME = process.env.SUBSCRIPTION_COLLECTION;

const subscriptionSchema = new mongoose.Schema({
    user: String,
    stockName: String,
    stockType: String,
    thresholdPrice: Number
}, { collection: COLLECTION_NAME });

const Subscription = mongoose.model('Subscription', subscriptionSchema);
export default Subscription;