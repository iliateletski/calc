import { createSlice } from '@reduxjs/toolkit'
import { changeValue } from '../../utils/changeValue'
import { plusMinusBtn } from '../../utils/plusMinusBtn'
import { backspaceBtn } from '../../utils/backspaceBtn'
import { CONVERTER_UNITS } from '../../utils/consts'
import { unitConversion } from '../../utils/converter/unitConversion'

const initialState = {
	units: CONVERTER_UNITS.weight,
	activeUnits: {
		unitA: CONVERTER_UNITS.weight.data[0].value,
		unitB: CONVERTER_UNITS.weight.data[1].value
	},
	isValueA: true,
	isValueB: false,
	valueA: '',
	valueB: '',
	result: '0',
	typeError: ''
}

const calcSlice = createSlice({
	name: 'converter',
	initialState,
	reducers: {
		setValueConv(state, action) {
			return changeValue(state, action.payload, initialState)
		},

		conversion(state) {
			unitConversion(state)
		},

		setActiveUnits(state, action) {
			state.activeUnits = { ...state.activeUnits, ...action.payload }
		},

		setUnits(state, action) {
			const unitA = CONVERTER_UNITS[action.payload].data[0].value
			const unitB = CONVERTER_UNITS[action.payload].data[1].value
			return {
				...initialState,
				units: CONVERTER_UNITS[action.payload],
				activeUnits: { unitA, unitB }
			}
		},

		resetTypeErrorConv(state) {
			state.typeError = ''
		},

		toggleIsValueA(state) {
			state.isValueA = true
			state.isValueB = false
		},

		toggleIsValueB(state) {
			state.isValueB = true
			state.isValueA = false
		},

		resetTypeError(state) {
			state.typeError = ''
		},

		clearConv() {
			return initialState
		},

		plusMinusConv(state) {
			plusMinusBtn(state)
		},

		backspaceConv(state) {
			backspaceBtn(state)
		}
	}
})

export default calcSlice.reducer
export const {
	setValueConv,
	conversion,
	clearConv,
	plusMinusConv,
	backspaceConv,
	resetTypeErrorConv,
	setActiveUnits,
	setUnits,
	toggleIsValueA,
	toggleIsValueB
} = calcSlice.actions
