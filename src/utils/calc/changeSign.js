import { ERROR_INVALID_FORMAT } from '../consts'
import { calculation } from './calculate'

export const changeSign = (state, payload, initialState) => {
	if (!state.valueA || state.valueA === '-' || state.valueB === '-') {
		state.typeError = ERROR_INVALID_FORMAT
		return
	}

	if (state.isValueB) {
		calculation({ state, initialState })
	}
	state.isValueA = false
	state.isValueB = true
	state.finish = false
	state.valueB = ''
	state.sign = payload
	state.result = payload
}
