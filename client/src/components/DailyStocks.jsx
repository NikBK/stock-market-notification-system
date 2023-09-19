import { useRef } from "react";
import { dailyStocks } from "../utils/store/dailyStockData";
import { useHorizontalScrollAnimation } from "../utils/customHooks";
import StockListItem from "./StockListItem";

const ANIMATION_SPEED = 50;

const DailyStocks = () => {
    const scrollContentRef = useRef(null);

    useHorizontalScrollAnimation(scrollContentRef, ANIMATION_SPEED);

    return (
        <div className="bg-black scroll-container">
            <ul className="scroll-content flex space-evenly text-white bg-black mt-14 hidden_scroll_bar" ref={scrollContentRef}>
                {dailyStocks.map((stock, id) => (
                    <StockListItem stock={stock} key={`${stock.name}_${id}`} />
                ))}
            </ul>
        </div>
    )
}

export default DailyStocks;
