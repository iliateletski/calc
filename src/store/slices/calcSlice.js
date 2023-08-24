import { createSlice } from '@reduxjs/toolkit'
import { changeValue } from '../../utils/changeValue'
import { changeSign } from '../../utils/calc/changeSign'
import { calculation } from '../../utils/calc/calculate'
import { plusMinusBtn } from '../../utils/plusMinusBtn'
import { backspaceBtn } from '../../utils/backspaceBtn'

const initialState = {
	isValueA: true,
	isValueB: false,
	finish: false,
	valueA: '',
	valueB: '',
	sign: '',
	result: '0',
	typeError: ''
}

const converterSlice = createSlice({
	name: 'calc',
	initialState,
	reducers: {
		setValueCalc(state, action) {
			return changeValue(state, action.payload, initialState)
		},

		setSign(state, action) {
			changeSign(state, action.payload, initialState)
		},

		resetTypeErrorCalc(state) {
			state.typeError = ''
		},

		clearCalc() {
			return initialState
		},

		calculate(state, action) {
			return calculation({ state, payload: action.payload, initialState })
		},

		plusMinusCalc(state) {
			plusMinusBtn(state)
		},

		backspaceCalc(state) {
			backspaceBtn(state)
		}
	}
})

export default converterSlice.reducer
export const {
	setValueCalc,
	setSign,
	clearCalc,
	calculate,
	plusMinusCalc,
	backspaceCalc,
	resetTypeErrorCalc
} = converterSlice.actions
