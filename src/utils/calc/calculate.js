import { CalcFormula } from "../../formulas/CalcFormula";
import { clear } from "../clear";
import { ERROR_DIVISION_BY_ZERO, ERROR_INVALID_FORMAT, ERROR_RESULT } from "../consts";
import { roundNumber } from "../roundNumber";


export const calculate = (state, setState, showError) => {

    const clearAll = clear(setState);
    
    const calculation = (value) => { 

        if(value === '=' && !state.valueB) return;

        if(state.valueA === '-' || state.valueB === '-') {
            showError(ERROR_INVALID_FORMAT);
            return;
        }
        
        if(value === '%') {
            if( !state.valueA || (state.sign && !state.valueB) || (value === '%' && state.finish) ) {
                showError(ERROR_INVALID_FORMAT);
                return;
            }
        }

        if(state.sign === '/' && state.valueB === '0') {
            clearAll();
            showError(ERROR_DIVISION_BY_ZERO);
            return;
        }

        const getFormula = CalcFormula.getCalcFormula(value);
        const result = roundNumber(
            getFormula(state.sign, state.valueA, state.valueB)
        );

        if(result.length > 15) {
            showError(ERROR_RESULT);
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
