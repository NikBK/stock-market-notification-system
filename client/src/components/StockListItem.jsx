const StockListItem = ({ stock }) => {
    return (
        <>
            <li className="mx-3 min-w-fit cursor-pointer">{stock.name}</li>
            <li className="mx-3 min-w-fit cursor-pointer">{stock.currentValue}</li>
            <li className={`${stock.growthPercent > 0 ? "text-green-500" : "text-red-500"} mx-3 min-w-fit cursor-pointer`} >{stock.growthPercent}%</li>
        </>
    )
}

export default StockListItem;
