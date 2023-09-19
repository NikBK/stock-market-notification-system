import { useEffect, useState } from "react";
import axios from "axios";
import StocksList from "./StocksList";
import SomethingWrong from "./SomethingWrong";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const GET_STOCKS_URL = `${BACKEND_URL}/stocks/getStocks`;
const GET_SUBSCRIPTIONs_URL = `${BACKEND_URL}/subscribe/getSubscriptions`;

const Home = () => {
    const [stocks, setStocks] = useState([]);
    const [subscriptions, setSubscriptions] = useState([]);
    const [error, setError] = useState({ hasError: false, message: "" });

    const NSE_STOCKS = stocks?.filter(stock => stock.type.toLowerCase() === "nse");
    const BSE_STOCKS = stocks?.filter(stock => stock.type.toLowerCase() === "bse");

    useEffect(() => {
        axios
            .get(GET_STOCKS_URL)
            .then((response) => setStocks(response.data))
            .catch(error => setError({ hasError: true, message: error.message }))

        axios
            .get(GET_SUBSCRIPTIONs_URL)
            .then(response => setSubscriptions(response.data))
            .catch(error => setError({ hasError: true, message: error.message }))
    }, [])

    if (error.hasError) {
        return <SomethingWrong message={error.message} />;
    }

    return (
        <main className="flex flex-col sm:flex-row justify-evenly mb-2">
            <StocksList title="NSE" stocks={NSE_STOCKS} subscriptions={subscriptions} />
            <StocksList title="BSE" stocks={BSE_STOCKS} subscriptions={subscriptions} />
        </main>
    )
}

export default Home
