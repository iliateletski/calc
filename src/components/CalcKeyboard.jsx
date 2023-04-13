import React from "react";
import CalcBtn from "./UI/calcBtn/CalcBtn";
import SpecialButtons from "./SpecialButtons";
import { backspaceBtn } from "../utils/backspaceBtn";
import { calculate } from "../utils/calc/calculate";
import { changeCalcSign } from "../utils/calc/changeCalcSign";
import { plusMinusBtn } from "../utils/plusMinusBtn";
import { changeValue } from "../utils/changeValue";
import { enterDot } from "../utils/enterDot";
import { enterZero } from "../utils/enterZero";

const CalcKeyboard = ({calc, setCalc, showError, clearAll}) => {

    const calculation = calculate(calc, setCalc, showError);
    const changeSign = changeCalcSign(calc, setCalc, showError);
    const plusMinus = plusMinusBtn(calc, setCalc);
    const inputDot = enterDot(calc, clearAll);
    const inputZero = enterZero(calc);
    const changeCalcValue = changeValue(calc, setCalc, showError, clearAll);
    const backspace = backspaceBtn(calc, setCalc);

    return (
        <div className="calc__buttons">
            <SpecialButtons backspace={backspace}/>    
            <hr/>
            <div className="buttons__inner">
                <CalcBtn value={'ac'} className={'gray'} onClick={clearAll}>ac</CalcBtn>
                <CalcBtn value={'+/-'} className={'gray'} onClick={plusMinus}>+/-</CalcBtn>
                <CalcBtn value={'%'} className={'gray'} onClick={value => calculation(value)}>%</CalcBtn>
                <CalcBtn value={'/'} className={'orange'} onClick={value => changeSign(value)} >/</CalcBtn>
                <CalcBtn value={7} onClick={value => changeCalcValue(value)}>7</CalcBtn>
                <CalcBtn value={8} onClick={value => changeCalcValue(value)}>8</CalcBtn>
                <CalcBtn value={9} onClick={value => changeCalcValue(value)}>9</CalcBtn>
                <CalcBtn value={'*'} className={'orange'} onClick={value => changeSign(value)}>x</CalcBtn>
                <CalcBtn value={4} onClick={value => changeCalcValue(value)}>4</CalcBtn>
                <CalcBtn value={5} onClick={value => changeCalcValue(value)}>5</CalcBtn>
                <CalcBtn value={6} onClick={value => changeCalcValue(value)}>6</CalcBtn>
                <CalcBtn value={'-'} className={'orange'} onClick={value => changeSign(value)}>-</CalcBtn>
                <CalcBtn value={1} onClick={value => changeCalcValue(value)}>1</CalcBtn>
                <CalcBtn value={2} onClick={value => changeCalcValue(value)}>2</CalcBtn>
                <CalcBtn value={3} onClick={value => changeCalcValue(value)}>3</CalcBtn>
                <CalcBtn value={'+'} className={'orange'} onClick={value => changeSign(value)}>+</CalcBtn>
                <CalcBtn value={0} className={'zero'} onClick={value => inputZero(value, changeCalcValue)}>0</CalcBtn>
                <CalcBtn value={'.'} onClick={value => inputDot(value, changeCalcValue)}>.</CalcBtn>
                <CalcBtn value={'='} className={'orange'} onClick={value => calculation(value)}>=</CalcBtn>
            </div>
        </div>
    );
}

export default CalcKeyboard;