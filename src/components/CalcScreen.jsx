import React from 'react'
import Error from './UI/error/Error'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { resetTypeErrorCalc } from '../store/slices/calcSlice'
import { useError } from '../hooks/useError'

const CalcScreen = () => {
	const dispatch = useDispatch()
	const result = useSelector(state => state.calc.result)
	const typeError = useSelector(state => state.calc.typeError)
	const [showError, error] = useError()

	useEffect(() => {
		if (typeError) {
			showError(typeError)
			dispatch(resetTypeErrorCalc())
		}
	}, [typeError, dispatch, showError])

	return (
		<div className={`calc__screen ${result.length >= 9 ? 'small__font' : ''}`}>
			{error.errorIsActive && <Error>{error.textError}</Error>}
			{result}
		</div>
	)
}

export default CalcScreen
