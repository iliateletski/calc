import { Formula } from "../../formula/Formula";
import { clear } from "../clear";

export const calc = (state, setState, showError) => {

    const clearAll = clear(state, setState)
    
    const calculation = (value) => { 

        if(value === '=' && !state.valueB) return;
        
        if(value === '%') {
            if(!state.valueA || (state.sign && !state.valueB)) {
                showError('errorInvalidFormat');
                return;
            }
        }

        if(state.sign === '/' && state.valueB === '0') {
            clearAll();
            showError('errorDivisionByZero');
            return;
        }

        const getFormula = Formula.getCalcFormula(value);
        const result = getFormula(state.sign, state.valueA, state.valueB);

        if(result.length > 15) {
            showError('errorResult');
            clearAll();
            return;
        } 
        
        setState({
            ...state,
            result: result, 
            valueA:  result,
            isValueA: true,
            isValueB: false,
        });
    }

    return calculation;
}


export const changeCalcSign = (state, setState, showError) => {

    const calculation = calc(state, setState);

    const changeSign = (value) => {
        if(!state.valueA) {
            showError('errorInvalidFormat');
            return;
        }

        if(state.isValueB) {
            calculation('=');
        }

        setState(prev => 
            ({...prev,
                isValueA: false,
                isValueB: true,
                valueB: '',
                sign: value,
                result: value,    
            })
        );
    }

    return changeSign;
}