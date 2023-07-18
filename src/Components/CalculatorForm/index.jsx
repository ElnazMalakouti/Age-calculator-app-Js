import { useEffect, useState } from "react"
import Input from "../Input"

const CalculatorForm = () => {

    const [inputErrorMode, setInputErrorMode] = useState(false)

    const [dayErrorMessage, setDayErrorMesaage] = useState('')
    const [monthErrorMessage, setMonthErrorMessage] = useState('')
    const [yearErrorMessage, setYearErrorMessage] = useState('')

    const [enteredDayValue, setEnteredDayValue] = useState(null)
    const [enteredMonthValue, setEnteredMonthValue] = useState(null)
    const [enteredYearValue, setEnteredYearValue] = useState(null)

    const [dayResult, setDayResult] = useState()
    const [monthResult, setMonthResult] = useState()
    const [yearResult, setYearResult] = useState()

    const [errorMode, setErrorMode] = useState(false)

    const months31days = ['1', '01', '3', '03', '5', '05', '7', '07', '8', '08', '10', '12']
    // const month30days = [4, 6, 9, 11]

    const now = new Date();
    const currentYear = now.getFullYear();

    function calculateAge(birthDate) {
        checkEnteredValues()

        if (enteredYearValue && enteredMonthValue && enteredDayValue) {
            if (checkEnteredValues()) {
                var today = new Date();
                var birthDate = new Date(birthDate);

                var years = today.getFullYear() - birthDate.getFullYear();
                var months = today.getMonth() - birthDate.getMonth();
                var days = today.getDate() - birthDate.getDate();

                // Check if the birth date hasn't occurred yet this year
                if (months < 0 || (months === 0 && days < 0)) {
                    years--;
                    months += 12;
                }

                // Check if the birth date hasn't occurred yet this month
                if (days < 0) {
                    months--;
                    var lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 0);
                    days += lastMonth.getDate();
                }

                setYearResult(years)
                setMonthResult(months)
                setDayResult(days)
            }
        }
    }


    const checkEnteredValues = () => {
        let result = true


        if (enteredDayValue == null || enteredDayValue == '') {
            // setErrorMode(true)
            setDayErrorMesaage('This field is required')
            setYearResult(null)
            setMonthResult(null)
            setDayResult(null)
            result = false
        }

        if (enteredDayValue == 31) {
            if (!(months31days.includes(enteredMonthValue))) {
                // setErrorMode(true)
                setDayErrorMesaage('Must be a valid date')
                setYearResult(null)
                setMonthResult(null)
                setDayResult(null)
                result = false
            }
        } else if (enteredDayValue < 1 || enteredDayValue > 31) {
            // setErrorMode(true)
            setDayErrorMesaage('Must be a valid day')
            setYearResult(null)
            setMonthResult(null)
            setDayResult(null)
            result = false
        } else {
            setDayErrorMesaage(null)
        }





        if (enteredMonthValue == null || enteredMonthValue == '') {
            // setErrorMode(true)
            setMonthErrorMessage('This field is required')
            setYearResult(null)
            setMonthResult(null)
            setDayResult(null)
            result = false
        } else if (enteredMonthValue < 1 || enteredMonthValue > 12) {
            // setErrorMode(true)
            setMonthErrorMessage('Must be a valid month')
            setYearResult(null)
            setMonthResult(null)
            setDayResult(null)
            result = false
        } else {
            setMonthErrorMessage(null)
        }




        if (enteredYearValue == null || enteredYearValue == '') {
            // setErrorMode(true)
            setYearErrorMessage('This field is required')
            setYearResult(null)
            setMonthResult(null)
            setDayResult(null)
            result = false
        } else if (enteredYearValue > currentYear) {
            // setErrorMode(true)
            setYearErrorMessage('Must be in the past')
            setYearResult(null)
            setMonthResult(null)
            setDayResult(null)
            result = false
        } else {
            setYearErrorMessage(null)
        }




        if ((+enteredYearValue % 4 == 0 && +enteredYearValue % 100 !== 0) || +enteredYearValue % 400 == 0) {
            if ((enteredMonthValue == 2) && (enteredDayValue == 30 || enteredDayValue == 31)) {
                setDayErrorMesaage('Must be a valid date')
                setYearResult(null)
                setMonthResult(null)
                setDayResult(null)
                result = false
            }
        } else if ((enteredMonthValue == 2) && (enteredDayValue == 29 || enteredDayValue == 30 || enteredDayValue == 31)) {
            // setErrorMode(true)
            setDayErrorMesaage('Must be a valid date')
            setYearResult(null)
            setMonthResult(null)
            setDayResult(null)
            result = false
        }

        return result

    }

    useEffect(() => {
        if (dayResult && monthResult && yearResult) {
            setDayErrorMesaage('')
            setMonthErrorMessage('')
            setYearErrorMessage('')
        }
    }, [dayResult, monthResult, yearResult])

    return (
        <>
            <div className="w-full md:w-[65%] xl:w-[45%] h-auto bg-white px-4 py-8 rounded-2xl rounded-br-[5rem] flex flex-col gap-12 2xl:gap-20 md:gap-8 justify-center md:justify-start items-center md:items-start">


                <div className="w-full md:w-auto md:mr-auto flex justify-between md:justify-center items-center gap-2 lg:gap-4 2xl:gap-8">
                    <Input
                        maxLength={2}
                        lableText={'Day'}
                        palceholder={'DD'}
                        errorMessage={dayErrorMessage}
                        setErrorMessage={setDayErrorMesaage}
                        value={enteredDayValue}
                        onChange={(e) => {
                            setDayErrorMesaage(null)
                            if (e.target.value[0] == 0 && e.target.value.length == 2) {
                                setEnteredDayValue(e.target.value.substring(1))
                            } else if (+e.target.value < 32) {
                                setEnteredDayValue(e.target.value)
                            }
                        }}
                    />
                    <Input
                        maxLength={2}
                        lableText={'Month'}
                        palceholder={'MM'}
                        errorMessage={monthErrorMessage}
                        setErrorMessage={setMonthErrorMessage}
                        value={enteredMonthValue}
                        onChange={(e) => {
                            setMonthErrorMessage(null)
                            if (e.target.value[0] == 0 && e.target.value.length == 2) {
                                setEnteredMonthValue(e.target.value.substring(1))
                            } else if (+e.target.value < 13) {
                                setEnteredMonthValue(e.target.value)
                            }
                        }}
                    />
                    <Input
                        maxLength={4}
                        lableText={'Year'}
                        palceholder={'YYYY'}
                        errorMessage={yearErrorMessage}
                        setErrorMessage={setYearErrorMessage}
                        value={enteredYearValue}
                        onChange={(e) => +e.target.value <= currentYear ? setEnteredYearValue(e.target.value) : 0}
                    />
                </div>

                <div className="w-full h-0.5 2xl:h-2 bg-[#EAEAEA]">
                    <button
                        onClick={() => calculateAge(`${enteredYearValue}-${enteredMonthValue?.length == 1 ? `0${enteredMonthValue}` : enteredMonthValue}-${enteredDayValue?.length == 1 ? `0${enteredDayValue}` : enteredDayValue}`)}
                        className="w-12 h-12 2xl:w-24 2xl:h-24 rounded-full bg-[#864CFF] hover:bg-[#151515] translate-y-[-50%] mx-auto md:mr-0 md:ml-auto flex justify-center items-center"
                    >
                        <img alt="arrow-icon" src="/pics/icon-arrow.svg" className="w-6 h-6 2xl:w-12 2xl:h-12" />
                    </button>
                </div>

                <div className="flex flex-col mr-auto font-[Bold-italic] text-[3rem] md:text-[4rem]">
                    <p className="flex gap-1 my-[-0.5rem]">
                        <span className="text-[#864CFF]">{yearResult > 0 ? yearResult : yearResult == 0 ? 0 : '--'}</span>
                        <span>years</span>
                    </p>
                    <p className="flex gap-1 my-[-0.5rem]">
                        <span className="text-[#864CFF]">{monthResult > 0 ? monthResult : monthResult == 0 ? 0 : '--'}</span>
                        <span>months</span>
                    </p>
                    <p className="flex gap-1 my-[-0.5rem]">
                        <span className="text-[#864CFF]">{dayResult > 0 ? dayResult : dayResult == 0 ? 0 : '--'}</span>
                        <span>days</span>
                    </p>
                </div>


            </div>
        </>
    )
}

export default CalculatorForm