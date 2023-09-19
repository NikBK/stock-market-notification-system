import axios from "axios";
import { useEffect, useState } from "react";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const SUBSCRIBE_URL = `${BACKEND_URL}/subscribe/createSubscription`;
const UNSUBSCRIBE_URL = `${BACKEND_URL}/subscribe/deleteSubscription`;

const StockCard = ({ stock, subscriptions }) => {

    const [isSubscribed, setIsSubscribed] = useState(false);

    useEffect(() => {
        subscriptions.map(subscription => {
            const { stockType, stockName } = subscription;
            if (stock.type === stockType && stock.name === stockName) {
                setIsSubscribed(true);
            }
        })
    }, [])

    const handleStockAlert = () => {
        if (!isSubscribed) {
            axios
                .post(SUBSCRIBE_URL, {
                    "user": "TestUser",
                    "stockName": stock.name,
                    "stockType": stock.type,
                    "thresholdPrice": stock.price
                })
                .then(response => setIsSubscribed(prev => !prev))
                .catch(error => console.log(error))
        }
        else {
            axios
                .delete(UNSUBSCRIBE_URL, {
                    data: {
                        "user": "TestUser",
                        "stockName": stock.name,
                        "stockType": stock.type
                    }
                })
                .then(response => setIsSubscribed(prev => !prev))
                .catch(error => console.log(error))
        }
    }

    return (
        <div className='flex flex-col p-2 m-1 mb-2 border-2 border-solid border-slate-300 rounded-xl'>
            <h3 className='font-bold mb-4'>{stock.name}</h3>
            <div className='flex flex-row justify-between'>
                <div className='italic text-slate-600'>{stock.price}</div>
                <button
                    onClick={handleStockAlert}
                    className='px-2 rounded-full text-sm text-center text-white font-medium bg-sky-400 hover:bg-sky-500'
                >
                    {isSubscribed ? 'Remove Alert' : 'Get Alert'}
                </button>
            </div>
        </div>
    )
}

export default StockCard;
