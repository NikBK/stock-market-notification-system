import StockCard from './StockCard';

const StockCards = ({ stocks, subscriptions }) => {
    return <>
        {stocks.map(stock => <StockCard stock={stock} subscriptions={subscriptions} key={stock._id} />)}
    </>
}

export default StockCards;
