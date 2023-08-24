export class CalcFormula {
	static getCalcFormula(value = '=') {
		if (value === '=') {
			return (sign, valueA, valueB) => {
				switch (sign) {
					case '+':
						return +valueA + +valueB
					case '-':
						return valueA - valueB
					case '*':
						return valueA * valueB
					case '/':
						return valueA / valueB
					default: return +value
				}
			}
		}

		if (value === '%') {
			return (sign, valueA, valueB) => {
				if (!sign) return valueA / 100

				switch (sign) {
					case '+':
						return +valueA + (+valueA / 100) * valueB
					case '-':
						return valueA - (valueA / 100) * valueB
					case '*':
						return (valueA / 100) * valueB
					case '/':
						return (valueA * 100) / valueB
					default: return +value
				}
			}
		}
	}
}
