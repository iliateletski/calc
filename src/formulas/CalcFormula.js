export class CalcFormula{
    
    static getCalcFormula(value = '=') {
        if(value === '=') {
            const getFormula = (sign, valueA, valueB) => {

                switch(sign) {
                    case '+': return ((+valueA) + (+valueB))
                    case '-': return (valueA - valueB)
                    case '*': return (valueA * valueB)
                    case '/': return (valueA / valueB)
                }
            }

            return getFormula;
        }

        if(value === '%') {
            const getFormula = (sign, valueA, valueB) => {

                if(!sign) return (valueA / 100)

                switch(sign) {
                    case '+': return ((+valueA) + (+valueA) / 100 * valueB)
                    case '-': return (valueA - valueA / 100 * valueB)
                    case '*': return (valueA / 100 * valueB)
                    case '/': return (valueA * 100 / valueB)
                }

            }

            return getFormula;
        }
    }
}



