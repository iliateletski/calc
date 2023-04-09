import React from "react";
import CalcBtn from "./UI/calcBtn/CalcBtn";
import { backspaceBtn } from "../utils/backspaceBtn";
import { plusMinusBtn } from "../utils/plusMinusBtn";
import { changeValue } from "../utils/changeValue";
import { enterDot } from "../utils/enterDot";
import { enterZero } from "../utils/enterZero";
import { clear } from "../utils/clear";

const ConverterKeyboard = ({converter, setConverter, showError}) => {

    const backspace = backspaceBtn(converter, setConverter);
    const plusMinus = plusMinusBtn(converter, setConverter);
    const changeCalcValue = changeValue(converter, setConverter, showError);
    const inputDot = enterDot(converter);
    const inputZero = enterZero(converter);
    const clearAll = clear(converter, setConverter);

    return(
        <div className="calc__buttons">
        <hr/>
            <div className="buttons__inner">
                <CalcBtn value={7} onClick={value => changeCalcValue(value)}>7</CalcBtn>
                <CalcBtn value={8} onClick={value => changeCalcValue(value)}>8</CalcBtn>
                <CalcBtn value={9} onClick={value => changeCalcValue(value)}>9</CalcBtn>
                <CalcBtn value={'⌫'} className={'orange'} onClick={backspace}>⌫</CalcBtn>
                <CalcBtn value={4} onClick={value => changeCalcValue(value)}>4</CalcBtn>
                <CalcBtn value={5} onClick={value => changeCalcValue(value)}>5</CalcBtn>
                <CalcBtn value={6} onClick={value => changeCalcValue(value)}>6</CalcBtn>
                <CalcBtn value={'ac'} className={'orange'} onClick={clearAll}>ac</CalcBtn>
                <CalcBtn value={1} onClick={value => changeCalcValue(value)}>1</CalcBtn>
                <CalcBtn value={2} onClick={value => changeCalcValue(value)}>2</CalcBtn>
                <CalcBtn value={3} onClick={value => changeCalcValue(value)}>3</CalcBtn>
                <CalcBtn value={'↑'} className={'orange'} >↑</CalcBtn>
                <CalcBtn value={'+/-'} onClick={plusMinus}>+/-</CalcBtn>
                <CalcBtn value={0} onClick={value => inputZero(value, changeCalcValue)}>0</CalcBtn>
                <CalcBtn value={'.'} onClick={value => inputDot(value, changeCalcValue)}>.</CalcBtn>
                <CalcBtn value={'↓'} className={'orange'}>↓</CalcBtn>
            </div>
        </div>
    )
}

export default ConverterKeyboard;