
const PopUpError = ({ message }) => {
    return (
        <div className="flex flex-col items-start fixed top-[-100px] left-1/2 translate-x-[-50%] translate-y-[-50%] bg-white z-10 text-green-600 animate-slideDown p-2.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-red-600 after:animate-reduceTime">
            <h3 className="text-[#e52c2c] m-0">Note</h3>
            <div className="p-x-2">
                <div>{message}</div>
            </div>
        </div>
    )
}

export default PopUpError
