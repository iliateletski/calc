export const clear = (setState) => {

    const clearAll = () => {
        setState(prev => 
            ({...prev,
            isValueA: true,
            isValueB: false,
            finish: false,
            valueA: '',
            valueB: '',
            sign: '',
            result: '0',})
        ); 
    }


    return clearAll;
} 