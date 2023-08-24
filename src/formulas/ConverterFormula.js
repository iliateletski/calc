export class ConverterFormula {
	static getConverterFormula(unitFrom) {
		if (unitFrom === 't') {
			const tons = (unitTo, value) => {
				switch (unitTo) {
					case 't':
						return +value
					case 'kg':
						return (value = value * 1000)
					case 'g':
						return (value = value * 1000000)
					default: return +value
				}
			}
			return tons
		}

		if (unitFrom === 'kg') {
			const kilo = (unitTo, value) => {
				switch (unitTo) {
					case 'kg':
						return +value
					case 't':
						return (value = value / 1000)
					case 'g':
						return (value = value * 1000)
					default: return +value
				}
			}
			return kilo
		}

		if (unitFrom === 'g') {
			const gram = (unitTo, value) => {
				switch (unitTo) {
					case 'g':
						return +value
					case 'kg':
						return (value = value / 1000)
					case 't':
						return (value = value / 1000000)
					default: return +value
				}
			}
			return gram
		}

		if (unitFrom === '°C') {
			const celsius = (unitTo, value) => {
				switch (unitTo) {
					case '°C':
						return +value
					case '°F':
						return (value = value * 1.8 + 32)
					case 'K':
						return (value = value + 273.15)
					default: return +value
				}
			}
			return celsius
		}

		if (unitFrom === '°F') {
			const fahrenheit = (unitTo, value) => {
				switch (unitTo) {
					case '°F':
						return +value
					case '°C':
						return (value = (value - 32) * 0.55)
					case 'K':
						return (value = (value - 32) * 0.55 + 273.15)
					default: return +value
				}
			}
			return fahrenheit
		}

		if (unitFrom === 'K') {
			const fahrenheit = (unitTo, value) => {
				switch (unitTo) {
					case 'K':
						return +value
					case '°C':
						return (value = value - 273.15)
					case '°F':
						return (value = (value - 273.15) * 1.8 + 32)
					default: return +value
				}
			}
			return fahrenheit
		}

		if (unitFrom === 'K') {
			const fahrenheit = (unitTo, value) => {
				switch (unitTo) {
					case 'K':
						return +value
					case '°C':
						return (value = value - 273.15)
					case '°F':
						return (value = (value - 273.15) * 1.8 + 32)
					default: return +value
				}
			}
			return fahrenheit
		}

		if (unitFrom === 'h') {
			const hours = (unitTo, value) => {
				switch (unitTo) {
					case 'h':
						return +value
					case 'min':
						return (value = value * 60)
					case 's':
						return (value = value * 3600)
					default: return +value
				}
			}
			return hours
		}

		if (unitFrom === 'min') {
			const minutes = (unitTo, value) => {
				switch (unitTo) {
					case 'min':
						return +value
					case 'h':
						return (value = value * 60)
					case 's':
						return (value = value * 3600)
					default: return +value
				}
			}
			return minutes
		}

		if (unitFrom === 's') {
			const seconds = (unitTo, value) => {
				switch (unitTo) {
					case 's':
						return +value
					case 'h':
						return (value = value * 3600)
					case 'min':
						return (value = value / 60)
					default: return +value
				}
			}
			return seconds
		}

		if (unitFrom === 'km/h') {
			const kilometers = (unitTo, value) => {
				switch (unitTo) {
					case 'km/h':
						return +value
					case 'mi/h':
						return (value = value / 1.609)
					case 'm/h':
						return (value = value * 1000)
					case 'm/s':
						return (value = value / 3.6)
					default: return +value
				}
			}
			return kilometers
		}

		if (unitFrom === 'mi/h') {
			const miles = (unitTo, value) => {
				switch (unitTo) {
					case 'mi/h':
						return +value
					case 'km/h':
						return (value = value * 1.609)
					case 'm/h':
						return (value = value * 1609)
					case 'm/s':
						return (value = value / 2.237)
					default: return +value
				}
			}
			return miles
		}

		if (unitFrom === 'm/h') {
			const meters = (unitTo, value) => {
				switch (unitTo) {
					case 'm/h':
						return +value
					case 'km/h':
						return (value = value / 1000)
					case 'mi/h':
						return (value = value / 1609)
					case 'm/s':
						return (value = value / 3600)
					default: return +value
				}
			}
			return meters
		}

		if (unitFrom === 'm/s') {
			const meters = (unitTo, value) => {
				switch (unitTo) {
					case 'm/s':
						return +value
					case 'km/h':
						return (value = value * 3.6)
					case 'mi/h':
						return (value = value * 2.237)
					case 'm/h':
						return (value = value * 3600)
					default: return +value
				}
			}
			return meters
		}

		if (unitFrom === 'm/s') {
			const meters = (unitTo, value) => {
				switch (unitTo) {
					case 'm/s':
						return +value
					case 'km/h':
						return (value = value * 3.6)
					case 'mi/h':
						return (value = value * 2.237)
					case 'm/h':
						return (value = value * 3600)
					default: return +value
				}
			}
			return meters
		}
	}
}
