
export const changeActiveBtn = (state, setState) => {
    
    const change = (value) => {
        if(value === '↑') {
            setState({
                ...state,
                isValueA: true,
                isValueB: false,
            });
            return;
        }

        if(value === '↓') {
            setState({
                ...state,
                isValueA: false,
                isValueB: true,
            });
            return;
        }

        if(value === 'temperature') {
            setState({
                ...state,
                isPlusMinus: false,
            });
            return;
        } else {
            setState({
                ...state,
                isPlusMinus: true,
            });
            return;
        }
    }

    return change;
}