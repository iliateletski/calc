import React from 'react'
import CalcBtn from '../UI/calcBtn/CalcBtn'
import { useDispatch, useSelector } from 'react-redux'
import { calcKeyboard, converterKeyboard } from './utils'
import { useLocation } from 'react-router-dom'
import { CALC_ROUTE } from '../../utils/consts'
import SpecialButtons from '../SpecialButtons'

const Keyboard = () => {
	const dispatch = useDispatch()
	const isValueA = useSelector(state => state.converter.isValueA)
	const isValueB = useSelector(state => state.converter.isValueB)
	const typeUnits = useSelector(state => state.converter.units.type)
	const location = useLocation()
	const isCalc = location.pathname === CALC_ROUTE
	const keyboard = isCalc ? calcKeyboard : converterKeyboard

	return (
		<div className='calc__buttons'>
			{isCalc && (
				<>
					<SpecialButtons />
					<hr />
				</>
			)}
			<div className='buttons__inner'>
				{keyboard.map(item => (
					<CalcBtn
						className={item.className ? item.className : ''}
						value={item.value}
						key={item.value}
						onClick={value => dispatch(item.action(value))}
						disabled={
							item.value === '↑'
								? isValueA
								: item.value === '↓'
								? isValueB
								: typeUnits !== 'temperature' && item.value === '+/-' && !isCalc
								? true
								: false
						}
					>
						{item.value !== '*' ? item.value : 'x'}
					</CalcBtn>
				))}
			</div>
		</div>
	)
}

export default Keyboard
