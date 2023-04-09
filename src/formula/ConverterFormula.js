export class ConverterFormula {
    
    static getConverterFormula(unitFrom) {
        
        if(unitFrom === 't') {
            const tons = (unitTo, value) => {
                switch(unitTo) {
                    case 't': return value; 
                    case 'kg': return value = (value * 1000); 
                    case 'g': return value = (value * 1000000); 
                }
            }
            return tons;
        }

        if(unitFrom === 'kg') {
            const kilo = (unitTo, value) => {
                switch(unitTo) {
                    case 'kg': return value; 
                    case 't': return value = value / 1000; 
                    case 'g': return value = value * 1000; 
                }
            }
            return kilo;
        }

        if(unitFrom === 'g') {
            const gram = (unitTo, value) => {
                switch(unitTo) {
                    case 'g': return value; 
                    case 'kg': return value = value / 1000; 
                    case 't': return value = value / 1000000; 
                }
            }
            return gram;
        }
    }
}