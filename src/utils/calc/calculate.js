import { CalcFormula } from "../../formula/CalcFormula";
import { clear } from "../clear";

export const calculate = (state, setState, showError) => {

    const clearAll = clear(state, setState);
    
    const calculation = (value) => { 

        if(value === '=' && !state.valueB) return;

        if(state.valueB === '-') {
            showError('errorInvalidFormat');
            return;
        }
        
        if(value === '%') {
            if( !state.valueA || (state.sign && !state.valueB) || (value === '%' && state.finish) ) {
                showError('errorInvalidFormat');
                return;
            }
        }

        if(state.sign === '/' && state.valueB === '0') {
            clearAll();
            showError('errorDivisionByZero');
            return;
        }

        const getFormula = CalcFormula.getCalcFormula(value);
        const result = getFormula(state.sign, state.valueA, state.valueB).toFixed(2);

        if(result.length > 15) {
            showError('errorResult');
            clearAll();
            return;
        } 
        
        value 
        ? setState({
            ...state,
            result: result, 
            valueA:  result,
            isValueA: true,
            isValueB: false,
            finish: true,
        })
        : setState({
            ...state,
            result: result, 
            valueA:  result,
            isValueA: true,
            isValueB: false,
        });
    }

    return calculation;
}
