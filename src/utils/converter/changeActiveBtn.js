
export const changeActiveBtn = (setState) => {
    
    const change = (value) => {

        if(value === '↓' || value === '↑') {
            setState(prev => ({
                ...prev,
                isValueA: value === '↑' ? true : false,
                isValueB: value === '↓' ? true : false,
            }));
            return;
        }

        if(value === 'temperature') {
            setState(prev => ({
                ...prev,
                isPlusMinus: false,
            }));
            return;
        } else {
            setState(prev => ({
                ...prev,
                isPlusMinus: true,
            }));
            return;
        }
    }

    return change;
}