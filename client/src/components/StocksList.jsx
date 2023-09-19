import StockCards from "./StockCards";

const StocksList = ({ title, stocks, subscriptions }) => {
    return (
        <section className="m-1 p-4 shadow-lg shadow-slate-500 relative">
            <h1 className="bg-white	font-bold text-lg text-orange-500 uppercase m-2 sticky top-14 ">{title}</h1>
            <StockCards stocks={stocks} subscriptions={subscriptions} />
        </section>
    )
}

export default StocksList;
