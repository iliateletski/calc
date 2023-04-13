import { useEffect, useState } from "react"
import { ConverterFormula } from "../formula/ConverterFormula"

export const useConverterFormula = (converter, activeUnits) => {
    const[formula, setFormula] = useState({}) // formula: ConverterFormula.getConverterFormula(activeUnits.unitA)
    
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
    
