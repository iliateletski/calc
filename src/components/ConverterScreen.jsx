import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useError } from '../hooks/useError'
import {
	conversion,
	setActiveUnits,
	toggleIsValueA,
	toggleIsValueB,
	resetTypeErrorConv
} from '../store/slices/converterSlice'
import Error from './UI/error/Error'
import MySelect from './UI/mySelect/MySelect'

const ConverterScreen = () => {
	const dispatch = useDispatch()
	const activeUnits = useSelector(state => state.converter.activeUnits)
	const units = useSelector(state => state.converter.units)
	const result = useSelector(state => state.converter.result)
	const isValueA = useSelector(state => state.converter.isValueA)
	const isValueB = useSelector(state => state.converter.isValueB)
	const valueA = useSelector(state => state.converter.valueA)
	const valueB = useSelector(state => state.converter.valueB)
	const typeError = useSelector(state => state.converter.typeError)
	const [showError, error] = useError()

	useEffect(() => {
		dispatch(conversion())
	}, [result, activeUnits, dispatch])

	useEffect(() => {
		if (typeError) {
			showError(typeError)
			dispatch(resetTypeErrorConv())
		}
	}, [typeError, dispatch, showError])

	return (
		<div>
			<hr />

			<MySelect
				options={units.data}
				value={activeUnits.unitA}
				onChange={value => dispatch(setActiveUnits({ unitA: value }))}
			/>

			<div
				className={`converter__screen ${
					valueA.length >= 15 ? 'small__font' : ''
				}`}
				onClick={() => dispatch(toggleIsValueA())}
			>
				{valueA}
			</div>

			<hr className={isValueA ? 'active' : ''} />

			<MySelect
				onChange={value => dispatch(setActiveUnits({ unitB: value }))}
				options={units.data}
				value={activeUnits.unitB}
			/>

			<div
				className={`converter__screen ${
					valueB.length >= 15 ? 'small__font' : ''
				}`}
				onClick={() => dispatch(toggleIsValueB())}
			>
				{valueB}
			</div>

			<hr className={isValueB ? 'active' : ''} />

			{error.errorIsActive && <Error>{error.textError}</Error>}
		</div>
	)
}

export default ConverterScreen
