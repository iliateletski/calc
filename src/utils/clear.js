export const clear = (state, setState) => {

    const clearAll = () => {
        setState({
            ...state,
            isValueA: true,
            isValueB: false,
            valueA: '',
            valueB: '',
            sign: '',
            result: '0',
        }); 
    }

    return clearAll;
} 