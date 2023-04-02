export const changeValue = (state, setState, showError) => {

    const change = (value) => {
        if(state.result.length === 15){
            showError('errorLengthString');
            return;
        }

        if(state.isValueA) {
            if(state.valueA === '0' && value !== '.') {
                setState({
                    ...state, 
                    valueA: value, 
                    result: value
                });
                return;
            }

            setState({
                ...state, 
                valueA: state.valueA + value, 
                result: state.valueA + value
            });
        }

        if(state.isValueB) {
            if(state.valueB === '0' && value !== '.') {
                setState({
                    ...state, 
                    valueB: value, 
                    result: value
                });
                return;
            }

            setState({
                ...state, 
                valueB: state.valueB + value, 
                result: state.valueB + value
            });
        }
    }

    return change;
}