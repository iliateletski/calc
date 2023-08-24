export const backspaceBtn = state => {
	if (!state.valueA) return state

	if (state.isValueA) {
		state.valueA = state.valueA.slice(0, -1)
		state.result = state.valueA
		state.finish = false
	}

	if (state.isValueB) {
		state.valueB = state.valueB.slice(0, -1)
		state.result = state.valueB
	}
}
