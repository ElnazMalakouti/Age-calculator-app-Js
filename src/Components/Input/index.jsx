const Input = ({ lableText, palceholder, errorMessage, setErrorMessage, value, onChange , maxLength }) => {
    return (
        <>
            <div className="flex flex-col justify-start items-start gap-2">
                <label className={`${errorMessage ? 'text-red-500' : 'text-[#6E6E6E]'} text-xs 2xl:text-2xl font-[Bold]`}>{lableText}</label>
                <input
                type="number"
                    maxLength={maxLength}
                    value={value}
                    onChange={onChange}
                    placeholder={palceholder}
                    className={`${errorMessage ? 'border-red-700' : ''} w-full max-w-[7rem] 2xl:max-w-[10rem] h-12 2xl:h-16 px-2 rounded-lg border text-[#8B8B8B] text-lg 2xl:text-3xl font-[Bold] focus:outline-[#7765A6]`}
                />
                <p className={`h-4 text-[11px] text-red-500`}>{errorMessage}</p>
            </div>
        </>
    )
}

export default Input