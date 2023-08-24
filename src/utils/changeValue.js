import { ERROR_LENGTH_STRING } from './consts'

export const changeValue = (state, payload, initialState) => {
	if (state.finish) return { ...initialState, valueA: payload, result: payload }

	const keyValue = state.isValueA ? 'valueA' : 'valueB'

	if (state[keyValue].length === 15) {
		state.typeError = ERROR_LENGTH_STRING
		return
	}

	if (payload === '0' && state[keyValue] === '0') return

	if (payload === '.') {
		if (state[keyValue].includes('.')) return
		if (state[keyValue]) {
			state[keyValue] = state[keyValue] + payload
		} else {
			state[keyValue] = '0' + payload
		}
		state.result = state[keyValue]
		return
	}

	if (state[keyValue] === '0' && payload !== '.') {
		state[keyValue] = payload
		state.result = payload
		return
	}
	state[keyValue] = state[keyValue] + payload
	state.result = state[keyValue]
}
