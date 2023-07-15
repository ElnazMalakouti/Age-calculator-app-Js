const Input = ({ lableText, palceholder, inputErrorMode, setInputErrorMode }) => {
    return (
        <>
            <div className="flex flex-col justify-start items-start gap-2">
                <label className={`${inputErrorMode ? 'text-red-500' : 'text-[#6E6E6E]'} text-xs font-[Bold]`}>{lableText}</label>
                <input placeholder={palceholder} className={`${inputErrorMode ? 'border-red-700' : ''} w-full h-12 px-2 rounded-lg border text-[#8B8B8B] text-lg font-[Bold] focus:outline-[#7765A6]`} />
                <p className={`${inputErrorMode ? 'block' : 'hidden'} text-[11px] text-red-500`}>{
                    lableText === 'Day' ? 'Must be a valid day' : lableText === 'Month' ? 'Must be a valid month' : lableText === 'Year' ? 'Must be in the past' : ''
                }</p>
            </div>
        </>
    )
}

export default Input