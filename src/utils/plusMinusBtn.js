export const plusMinusBtn = (state, noActive = false) => {
	if (noActive === true) return state

	const keyValue = state.isValueA ? 'valueA' : 'valueB'

	if (state[keyValue].includes('-')) {
		state[keyValue] = state[keyValue].slice(1)
		state.result = state[keyValue]
	} else {
		state[keyValue] = `-${state[keyValue]}`
		state.result = state[keyValue]
	}
}
