import { ERROR_INVALID_FORMAT } from "../consts";
import { calculate } from "./calculate";

export const changeCalcSign = (state, setState, showError) => {

    const calculation = calculate(state, setState, showError);

    const changeSign = (value) => {
        if(!state.valueA || state.valueA === '-' || state.valueB === '-') {
            showError(ERROR_INVALID_FORMAT);
            return;
        }

        if(state.isValueB) {
            calculation();
        }

        setState(prev => 
            ({...prev,
                isValueA: false,
                isValueB: true,
                finish: false,
                valueB: '',
                sign: value,
                result: value,    
            })
        );
    }

    return changeSign;
}