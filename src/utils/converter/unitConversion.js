
export const unitConversion = (converter, setConverter, activeUnits, formula) => {

    const conversion = (value) => {

        if(value === '-') return;

        if(converter.isValueA && converter.valueA) {
            setConverter({
                ...converter,
                valueB: formula.formula(activeUnits.unitB, value).toFixed(2),
            });
        }

        if(converter.isValueB && converter.valueB) {
            setConverter({
                ...converter,
                valueA: formula.formula(activeUnits.unitA, value).toFixed(2),
            });
        }
        
        if(converter.isValueA && !converter.valueA || converter.isValueB && !converter.valueB) {
            setConverter({
                ...converter,
                valueA: '',
                valueB: '',
            });
        }
    }

    return conversion;
}