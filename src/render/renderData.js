import { calc, changeCalcSign } from "../utils/calc/calc";
import { backspaceBtn } from "../utils/backspaceBtn";
import { plusMinusBtn } from "../utils/plusMinusBtn";
import { changeValue } from "../utils/changeValue";
import { enterDot } from "../utils/enterDot";
import { enterZero } from "../utils/enterZero";
import { clear } from "../utils/clear";

export const getKeyboard = (state, setState, showError) => {
    
    const calculation = calc(state, setState, showError);
    const changeSign = changeCalcSign(state, setState, showError);
    const backspace = backspaceBtn(state, setState);
    const plusMinus = plusMinusBtn(state, setState);
    const changeCalcValue = changeValue(state, setState, showError);
    const inputDot = enterDot(state);
    const inputZero = enterZero(state);
    const clearAll = clear(state, setState);

    const calcKeyboard = [
        { value: 'ac', className: 'gray', onClick: clearAll },
        { value: '+/-', className: 'gray', onClick: plusMinus },
        { value: '%', className: 'gray', onClick: value => calculation(value) },
        { value: '/', className: 'orange', onClick: value => changeSign(value) },
        { value: 7, onClick: value => changeCalcValue(value) },
        { value: 8, onClick: value => changeCalcValue(value) },
        { value: 9, onClick: value => changeCalcValue(value) },
        { value: '*', className: 'orange', onClick: value => changeSign(value) },
        { value: 4, onClick: value => changeCalcValue(value) },
        { value: 5, onClick: value => changeCalcValue(value) },
        { value: 6, onClick: value => changeCalcValue(value) },
        { value: '-', className: 'orange', onClick: value => changeSign(value) },
        { value: 1, onClick: value => changeCalcValue(value) },
        { value: 2, onClick: value => changeCalcValue(value) },
        { value: 3, onClick: value => changeCalcValue(value) },
        { value: '+', className: 'orange', onClick: value => changeSign(value) },
        { value: 0, className: 'zero', onClick: value => inputZero(value, changeCalcValue) },
        { value: '.', onClick: value => inputDot(value, changeCalcValue) },
        { value: '=', className: 'orange', onClick: value => calculation(value) },
    ];

    const converterKeyboard = [
        { value: 7, onClick: value => changeCalcValue(value) },
        { value: 8, onClick: value => changeCalcValue(value) },
        { value: 9, onClick: value => changeCalcValue(value) },
        { value: '⌫', className: 'orange', onClick: backspace },
        { value: 4, onClick: value => changeCalcValue(value) },
        { value: 5, onClick: value => changeCalcValue(value) },
        { value: 6, onClick: value => changeCalcValue(value) },
        { value: 'ac', className: 'orange', onClick: clearAll },
        { value: 1, onClick: value => changeCalcValue(value) },
        { value: 2, onClick: value => changeCalcValue(value) },
        { value: 3, onClick: value => changeCalcValue(value) },
        { value: '↑', className: 'orange', onClick: value => console.log(value)},
        { value: '+/-', onClick: plusMinus },
        { value: 0, onClick: value => inputZero(value, changeCalcValue) },
        { value: '.', onClick: value => inputDot(value, changeCalcValue) },
        { value: '↓', className: 'orange', onClick: value => console.log(value) },
    ];

    return {calcKeyboard, converterKeyboard};
} 


export const getSelectOptions = (value) => {

    if(value === 'weight') {
        return [
            {name: 'Тонны (t)', value: 't',},
            {name: 'Килограммы (kg)', value: 'kg',},
            {name: 'Граммы (g)', value: 'g',},
        ];
    }

    if(value === 'temperature') {
        return [
            {name: 'Градус Цельсия (°C)', value: '°C',},
            {name: 'Градус Фаренгейта (°F)', value: '°F',},
            {name: 'Градус Кельвина (K)', value: 'K',},
        ];
    }

    if(value === 'time') {
        return [
            {name: 'Часы (h)', value: 'h',},
            {name: 'Минуты (min)', value: 'min',},
            {name: 'Секунды (s)', value: 's',},
        ];
    }

    if(value === 'speed') {
        return [
            {name: 'Киллометры в час(km/h)', value: 'km/h',},
            {name: 'Милм в час(mi/h)', value: 'mi/h',},
            {name: 'Метры в час(m/h)', value: 'm/h',},
            {name: 'Метры в секунду(m/s)', value: 'm/s',},
        ];
    }

    if(value === 'currency') {
        return [
            {name: 'Доллар(km/h)', value: '$',},
            {name: 'Евро(mi/h)', value: '€',},
            {name: 'Рубль(m/h)', value: '₽',},
        ];
    }
}