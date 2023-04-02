export const backspaceBtn = (state, setState) => {
    const backspace = () => {
        if(!state.valueA) return;
        if(state.isValueA){
            setState({
                ...state,
                valueA: state.valueA.slice(0, -1), 
                result: state.valueA.slice(0, -1)
            });
        }

        if(state.isValueB){
            setState({
                ...state,
                valueB: state.valueB.slice(0, -1), 
                result: state.valueB.slice(0, -1)
            });
        }
    }

    return backspace;
}