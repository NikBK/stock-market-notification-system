const SomethingWrong = ({ message }) => {
    return (
        <div className="fixed top-1/2 left-1/2 z-10 translate-x-[-50%] translate-y-[-50%] bg-white w-full">
            <div>Something went wrong. Please try again later. See below for more details</div>
            <div>{message}</div>
        </div>
    )
}

export default SomethingWrong;
