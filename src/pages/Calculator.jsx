import React from "react";
import { useState } from 'react';
import { useEffect } from "react";
import { useError } from "../hooks/useError";
import CalcScreen from "../components/CalcScreen";
import Keyboard from "../components/Keyboard";
import { clear } from "../utils/clear";

const Calculator = () => {
    
    const[calc, setCalc] = useState({
        isValueA: true,
        isValueB: false,
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
            <Keyboard 
                calc={calc}
                setCalc={setCalc}
                showError={showError}
            />
        </div>
    )
}

export default Calculator;