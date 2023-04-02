export class Formula{
    
    static getCalcFormula(value) {
        if(value === '=') {
            const getFormula = (sign, valueA, valueB) => {

                switch(sign) {
                    case '+': return ((+valueA) + (+valueB)).toFixed(2);
                    case '-': return (valueA - valueB).toFixed(2);
                    case '*': return (valueA * valueB).toFixed(2);
                    case '/': return (valueA / valueB).toFixed(2);
                }
            }

            return getFormula;
        }

        if(value === '%') {
            const getFormula = (sign, valueA, valueB) => {

                if(!sign) return valueA / 100;

                switch(sign) {
                    case '+': return ((+valueA) + (+valueA) / 100 * valueB).toFixed(2);
                    case '-': return (valueA - valueA / 100 * valueB).toFixed(2);
                    case '*': return (valueA / 100 * valueB).toFixed(2);
                    case '/': return (valueA * 100 / valueB).toFixed(2);
                }

            }

            return getFormula;
        }
    }
    

    

}



