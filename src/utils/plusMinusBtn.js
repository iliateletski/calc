export const plusMinusBtn = (state, setState) => {
    
    const plusMinus = (noActive) => {
        
        if(noActive === true) return;

        if(state.isValueA) {
            state.valueA.includes('-')
            ? setState({
                ...state, 
                valueA: state.valueA.slice(1), 
                result: state.valueA.slice(1)
            })

            : setState({
                ...state, 
                valueA: '-' + state.valueA, 
                result: '-' + state.valueA
            });
        }

        if(state.isValueB) {
            state.valueB.includes('-')
            ? setState({
                ...state, 
                valueB: state.valueB.slice(1), 
                result: state.valueB.slice(1)
            })

            : setState({
                ...state, 
                valueB: '-' + state.valueB, 
                result: '-' + state.valueB
            });
        }
    }

    return plusMinus;
}