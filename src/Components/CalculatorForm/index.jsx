import { useState } from "react"
import Input from "../Input"

const CalculatorForm = () => {

    const [inputErrorMode , setInputErrorMode] = useState(true)

    return (
        <>
            <div className="w-full h-auto bg-white px-4 py-8 rounded-2xl rounded-br-[4rem] flex flex-col justify-center md:justify-start items-center md:items-start">
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
            </div>
        </>
    )
}

export default CalculatorForm