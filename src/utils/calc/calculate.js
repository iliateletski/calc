import { CalcFormula } from '../../formulas/CalcFormula'
import {
	ERROR_DIVISION_BY_ZERO,
	ERROR_INVALID_FORMAT,
	ERROR_RESULT
} from '../consts'
import { roundNumber } from '../roundNumber'

export const calculation = ({ state, payload, initialState }) => {
	if (payload === '=' && !state.valueB) return

	if (state.valueA === '-' || state.valueB === '-') {
		state.typeError = ERROR_INVALID_FORMAT
		return
	}

	if (payload === '%') {
		if (
			!state.valueA ||
			(state.sign && !state.valueB) ||
			(payload === '%' && state.finish)
		) {
			state.typeError = ERROR_INVALID_FORMAT
			return
		}
	}

	if (state.sign === '/' && state.valueB === '0') {
		return { ...initialState, typeError: ERROR_DIVISION_BY_ZERO }
	}

	const getFormula = CalcFormula.getCalcFormula(payload)
	const result = roundNumber(getFormula(state.sign, state.valueA, state.valueB))

	if (result.length > 15) {
		return { ...initialState, typeError: ERROR_RESULT }
	}

	state.result = result
	state.valueA = result
	state.isValueA = true
	state.isValueB = false
	if (payload) state.finish = true
}
