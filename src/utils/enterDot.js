

export const enterDot = (state, clearAll) => {

    const enterDot = (value, collback) => {

        if(state.finish) clearAll();

        if(state.isValueA && !state.valueA.includes('.')) {
            state.valueA ? collback(value) : collback('0' + value);
            return;
        }

        if(state.isValueB && !state.valueB.includes('.')) {
            state.valueB ? collback(value) : collback('0' + value);
            return;
        }   
    }

    return enterDot;
}