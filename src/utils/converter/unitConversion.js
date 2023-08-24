import { ConverterFormula } from '../../formulas/ConverterFormula'
import { roundNumber } from '../roundNumber'

export const unitConversion = state => {
	const formula = ConverterFormula.getConverterFormula(
		state.isValueA ? state.activeUnits.unitA : state.activeUnits.unitB
	)

	if (state.valueA === '-' || state.valueB === '-') return

	if (state.isValueA && state.valueA) {
		state.valueB = roundNumber(formula(state.activeUnits.unitB, state.valueA))
	}

	if (state.isValueB && state.valueB) {
		state.valueA = roundNumber(formula(state.activeUnits.unitA, state.valueB))
	}

	if ((state.isValueA && !state.valueA) || (state.isValueB && !state.valueB)) {
		state.valueA = ''
		state.valueB = ''
	}
}
