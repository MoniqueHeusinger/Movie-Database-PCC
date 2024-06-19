const ButtonFilled = ({ buttonText, onClick }) => {
    return (
        <button className="py-3 px-7 text-rose-50 bg-rose-700 cursor-pointer border-solid border-transparent border-2 rounded-lg sm:text-sm md:text-base hover:bg-[#690929] hover:border-[#690929] transition-all" onClick={onClick}>{buttonText}</button>
    );
}

export default ButtonFilled;