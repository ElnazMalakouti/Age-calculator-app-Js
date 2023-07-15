import { useState } from "react"
import Input from "../Input"

const CalculatorForm = () => {

    const [inputErrorMode, setInputErrorMode] = useState(false)

    return (
        <>
            <div className="w-full h-auto bg-white px-4 py-8 rounded-2xl rounded-br-[4rem] flex flex-col gap-12 justify-center md:justify-start items-center md:items-start">


                <div className="w-full flex justify-between md:justify-center items-center gap-2">
                    <Input
                        lableText={'Day'}
                        palceholder={'DD'}
                        inputErrorMode={inputErrorMode}
                        setInputErrorMode={setInputErrorMode}
                        errorMessage={'Must be a valid day'}
                    />
                    <Input
                        lableText={'Month'}
                        palceholder={'MM'}
                        inputErrorMode={inputErrorMode}
                        setInputErrorMode={setInputErrorMode}
                        errorMessage={'Must be a valid month'}
                    />
                    <Input
                        lableText={'Year'}
                        palceholder={'YYYY'}
                        inputErrorMode={inputErrorMode}
                        setInputErrorMode={setInputErrorMode}
                        errorMessage={'Must be in the past'}
                    />
                </div>

                <div className="w-full h-0.5 bg-[#EAEAEA]">
                    <button className="w-12 h-12 rounded-full bg-[#864CFF] translate-y-[-50%] mx-auto flex justify-center items-center">
                        <img alt="arrow-icon" src="/pics/icon-arrow.svg" className="w-6 h-6"/>
                    </button>
                </div>

                <div className="flex flex-col mr-auto font-[Bold-italic] text-[3rem]">
                    <p className="flex gap-1 my-[-0.5rem]">
                        <span className="text-[#864CFF]">--</span>
                        <span>years</span>
                    </p>
                    <p className="flex gap-1 my-[-0.5rem]">
                        <span className="text-[#864CFF]">--</span>
                        <span>months</span>
                    </p>
                    <p className="flex gap-1 my-[-0.5rem]">
                        <span className="text-[#864CFF]">--</span>
                        <span>days</span>
                    </p>
                </div>


            </div>
        </>
    )
}

export default CalculatorForm