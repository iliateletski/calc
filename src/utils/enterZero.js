export const enterZero = (state) => {

    const enterZero = (value, collback) => {
        if(state.isValueA && state.valueA === '0') return;
        if(state.isValueB && state.valueB === '0') return;
        collback(value);
    }

    return enterZero;
} 