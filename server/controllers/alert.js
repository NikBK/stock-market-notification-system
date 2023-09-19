import Stocks from "../models/stocks.js";
import Subscription from "../models/subscription.js";

export const checkStockUpdate = (req, res) => {
    try {
        Stocks.find()
            .then(stocks => {
                Subscription.find()
                    .then(subscriptions => {
                        const updatedStocks = [];
                        const promises = [];
                        subscriptions.forEach(subscription => {
                            const matchingStock = stocks.find(stock => (stock.name === subscription.stockName && stock.type === subscription.stockType));

                            if (matchingStock && matchingStock.price > subscription.thresholdPrice) {
                                console.log(`Alert! Price for ${subscription.stockName} crossed ${subscription.thresholdPrice}`);
                                updatedStocks.push({ name: matchingStock.name, price: matchingStock.price });
                                // Update the thresholdPrice in MongoDB
                                promises.push(
                                    Subscription.findByIdAndUpdate(
                                        subscription._id,
                                        { thresholdPrice: matchingStock.price },
                                        { new: true }
                                    )
                                );;
                            }
                        });
                        Promise.all(promises);
                        res.status(200).json(updatedStocks);
                    })
                    .catch(error => {
                        console.log("Error occurred while retrieving subscriptions " + error);
                        res.status(400).json({ message: error.message });
                    });
            })
            .catch(error => {
                console.log("Error occurred while retrieving stocks " + error);
                res.status(400).json({ message: error.message });
            });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}