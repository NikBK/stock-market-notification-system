import { useEffect, useState } from "react";
import axios from "axios";
import StocksList from "./StocksList";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const Home = () => {
    const [stocks, setStocks] = useState([]);
    const [subscriptions, setSubscriptions] = useState([]);

    const NSE_STOCKS = stocks?.filter(stock => stock.type.toLowerCase() === "nse");
    const BSE_STOCKS = stocks?.filter(stock => stock.type.toLowerCase() === "bse");

    useEffect(() => {
        axios
            .get(`${BACKEND_URL}/stocks/getStocks`)
            .then((response) => setStocks(response.data))
            .catch(error => console.log(error))
    }, [])

    useEffect(() => {
        axios
            .get(`${BACKEND_URL}/subscribe/getSubscriptions`)
            .then(response => setSubscriptions(response.data))
            .catch(error => console.log(error))
    }, [])

    return (
        <main className="flex flex-col sm:flex-row justify-evenly mb-2">
            <StocksList title="NSE" stocks={NSE_STOCKS} subscriptions={subscriptions} />
            <StocksList title="BSE" stocks={BSE_STOCKS} subscriptions={subscriptions} />
        </main>
    )
}

export default Home
