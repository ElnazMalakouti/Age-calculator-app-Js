import { useState } from "react"
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

    const months31days = ['1', '3', '5', '7', '8', '10', '12']
    // const month30days = [4, 6, 9, 11]

    const moment = require('moment');

    const now = new Date();
    const currentYear = now.getFullYear();

    function calculateAge(birthDate) {
        checkEnteredValues()
        const today = moment();
        const birth = moment(birthDate, 'YYYY-MM-DD');

        if (enteredYearValue && enteredMonthValue && enteredDayValue) {
            const ageDuration = moment.duration(today.diff(birth));
            const years = ageDuration.years() > 0 ? ageDuration.years() : 0;
            const months = ageDuration.months() > 0 ? ageDuration.months() : 0;
            const days = ageDuration.days() > 0 ? ageDuration.days() : 0;
            setYearResult(years)
            setMonthResult(months)
            setDayResult(days)
        }

    }

    const checkEnteredValues = () => {



        if (enteredDayValue == null || enteredDayValue == '') {
            setDayErrorMesaage('This field is required')
            setYearResult(null)
            setMonthResult(null)
            setDayResult(null)
        }

        if (enteredDayValue == 31) {
            if (!(months31days.includes(enteredMonthValue))) {
                setDayErrorMesaage('Must be a valid date')
                setYearResult(null)
                setMonthResult(null)
                setDayResult(null)
            }
        } else if (enteredDayValue < 1 || enteredDayValue > 31) {
            setDayErrorMesaage('Must be a valid day')
            setYearResult(null)
            setMonthResult(null)
            setDayResult(null)
        } else {
            setDayErrorMesaage(null)
        }





        if (enteredMonthValue == null || enteredMonthValue == '') {
            setMonthErrorMessage('This field is required')
            setYearResult(null)
            setMonthResult(null)
            setDayResult(null)
        } else if (enteredMonthValue < 1 || enteredMonthValue > 12) {
            setMonthErrorMessage('Must be a valid month')
            setYearResult(null)
            setMonthResult(null)
            setDayResult(null)
        } else {
            setMonthErrorMessage(null)
        }




        if (enteredYearValue == null || enteredYearValue == '') {
            setYearErrorMessage('This field is required')
            setYearResult(null)
            setMonthResult(null)
            setDayResult(null)
        } else if (enteredYearValue > currentYear) {
            setYearErrorMessage('Must be in the past')
            setYearResult(null)
            setMonthResult(null)
            setDayResult(null)
        } else {
            setYearErrorMessage(null)
        }




        if ((+enteredYearValue % 4 == 0 && +enteredYearValue % 100 !== 0) || +enteredYearValue % 400 == 0) {
            if ((enteredMonthValue == 2) && (enteredDayValue == 30 || enteredDayValue == 31)) {
                setDayErrorMesaage('Must be a valid date')
                setYearResult(null)
                setMonthResult(null)
                setDayResult(null)
            }
        } else if ((enteredMonthValue == 2) && (enteredDayValue == 29 || enteredDayValue == 30 || enteredDayValue == 31)) {
            setDayErrorMesaage('Must be a valid date')
            setYearResult(null)
            setMonthResult(null)
            setDayResult(null)
        }


    }

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
                        onChange={(e) => +e.target.value < 32 ? setEnteredDayValue(e.target.value) : 0}
                    />
                    <Input
                        maxLength={2}
                        lableText={'Month'}
                        palceholder={'MM'}
                        errorMessage={monthErrorMessage}
                        setErrorMessage={setMonthErrorMessage}
                        value={enteredMonthValue}
                        onChange={(e) => +e.target.value < 13 ? setEnteredMonthValue(e.target.value) : 0}
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
                        onClick={() => calculateAge(`${enteredYearValue}${enteredMonthValue?.length == 1 ? `0${enteredMonthValue}` : enteredMonthValue}${enteredDayValue?.length == 1 ? `0${enteredDayValue}` : enteredDayValue}`)}
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