import React from "react";
import { useState } from 'react';
import { useEffect } from "react";
import { useError } from "../hooks/useError";
import CalcScreen from "../components/CalcScreen";
import CalcKeyboard from "../components/CalcKeyboard";
import { clear } from "../utils/clear";

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
    const clearAll = clear(calc, setCalc);
    
    useEffect(() => {
        if(calc.result.length > 15){
            clearAll();
            showError('errorResult');
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