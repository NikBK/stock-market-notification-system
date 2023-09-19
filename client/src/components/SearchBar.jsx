import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBar = () => {
    return (
        <div className="flex items-center px-4 md:w-5/12 sm:max-md:w-1/3 w-2/3">
            <button className="flex items-center px-1.5 h-10 w-full border-solid border-2 border-slate-300 bg-neutral-200 transition duration-300 focus-within:shadow-md focus-within:shadow-gray-400">
                <input
                    type="text"
                    className="text-base text-slate-500 p-2 w-full outline-none leading-tight bg-neutral-200"
                    placeholder="Search for a stock"
                />
                <FontAwesomeIcon icon={faSearch} className="w-4 h-6 inline-block" />
            </button>
        </div>
    )
}

export default SearchBar
