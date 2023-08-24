import { configureStore } from '@reduxjs/toolkit'
import calcSlice from './slices/calcSlice'
import converterSlice from './slices/converterSlice'

export const store = configureStore({
	reducer: {
		calc: calcSlice,
		converter: converterSlice
	},
	devTools: true
})
