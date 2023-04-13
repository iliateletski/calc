export const changeValue = (state, setState, showError, clearAll) => {

    const change = (value) => {

        if(state.finish) clearAll();

        if(state.result.length === 15){
            showError('errorLengthString');
            return;
        }

        if(state.isValueA) {
            if(state.valueA === '0' && value !== '.') {
                setState(prev => ({
                    ...prev, 
                    valueA: value, 
                    result: value,
                }));
                return;
            }

            setState(prev => ({
                ...prev,
                valueA: prev.valueA + value, 
                result: prev.valueA + value,
            }))   
        }

        if(state.isValueB) {
            if(state.valueB === '0' && value !== '.') {
                setState(prev => ({
                    ...prev,
                    valueB: value, 
                    result: value,
                }))
                return;
            }

            setState(prev => ({
                ...prev,
                valueB: prev.valueB + value, 
                result: prev.valueB + value,
            })) 
        }
    }

    return change;
}