import { roundNumber } from "../roundNumber";

export const unitConversion = (converter, setConverter, activeUnits, formula) => {

    const conversion = (value) => {
        
        if(value === '-') return;
        
        if(converter.isValueA && converter.valueA) {
            setConverter({
                ...converter,
                valueB: roundNumber(
                    formula.formula(activeUnits.unitB, value)
                ) 
            });
        }
        
        if(converter.isValueB && converter.valueB) {
            console.log(value)
            console.log(activeUnits.unitA)
            setConverter({
                ...converter,
                valueA: roundNumber(
                    formula.formula(activeUnits.unitA, value)
                )
            });
        }
        
        if((converter.isValueA && !converter.valueA) || (converter.isValueB && !converter.valueB)) {
            setConverter({
                ...converter,
                valueA: '',
                valueB: '',
            });
        }
    }

    return conversion;
}