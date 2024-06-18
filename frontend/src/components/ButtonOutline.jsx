const ButtonOutline = ({ buttonText, onClick }) => {
    return (
        <button className="py-3 px-7 bg-transparent cursor-pointer border-2 border-solid border-rose-700  rounded-lg hover:bg-[#fff] hover:border-[#fff] hover:text-[#242424] hover:font-poppinsSBd transition-all" onClick={onClick}>{buttonText}</button>
    );
}

export default ButtonOutline;