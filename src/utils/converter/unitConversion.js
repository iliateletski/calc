
export const unitConversion = (converter, setConverter, activeUnits, formula, showError) => {

    const conversion = (value) => {

        if(converter.isValueA && converter.valueA) {
            setConverter({
                ...converter,
                valueB: formula.formula(activeUnits.unitB, value),
            });
        }

        if(converter.isValueB && converter.valueB) {
            setConverter({
                ...converter,
                valueA: formula.formula(activeUnits.unitA, value),
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