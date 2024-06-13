const ButtonFilled = ({ buttonText, onClick }) => {
    return (
        <button className="my-6 py-3 px-7 text-rose-50 bg-rose-700 cursor-pointer border-solid border-transparent border-2 rounded-lg hover:bg-transparent hover:border-rose-700" onClick={onClick}>{buttonText}</button>
    );
}

export default ButtonFilled;