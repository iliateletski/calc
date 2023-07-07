import React from "react";
import { useState } from 'react';
import { useEffect } from "react";
import { useError } from "../hooks/useError";
import CalcScreen from "../components/CalcScreen";
import CalcKeyboard from "../components/CalcKeyboard";
import { clear } from "../utils/clear";
import { ERROR_RESULT } from "../utils/consts";

const Calculator = () => {
    
    const[calc, setCalc] = useState({
        isValueA: true,
        isValueB: false,
        finish: false,
        valueA: '',
        valueB: '',
        sign: '',
        result: '0',     
    });

    const[showError, error] = useError();
    const clearAll = clear(setCalc);
    
    useEffect(() => {
        if(calc.result.length > 15){
            clearAll();
            showError(ERROR_RESULT);
        }        
    },[calc.result]);

    return (
        <div className="calc">
            <CalcScreen 
                error={error}
            >
                {calc.result}
            </CalcScreen>
            <CalcKeyboard 
                calc={calc}
                setCalc={setCalc}
                showError={showError}
                clearAll={clearAll}
            />
        </div>
    )
}

export default Calculator;