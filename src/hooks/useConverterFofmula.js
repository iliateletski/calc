import { useEffect, useState } from "react"
import { ConverterFormula } from "../formulas/ConverterFormula"

export const useConverterFormula = (converter, activeUnits) => {
    const[formula, setFormula] = useState({});
    
    useEffect(() => {
        if(converter.isValueA) {
            setFormula({
                formula: ConverterFormula.getConverterFormula(activeUnits.unitA)
            });
        }
        
        if(converter.isValueB) {
            setFormula({
                formula: ConverterFormula.getConverterFormula(activeUnits.unitB)
            });
        }
    }, [converter.isValueA, activeUnits]);
    
    return formula;
}
    
