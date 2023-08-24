import React from 'react'
import CalcScreen from '../components/CalcScreen'
import Keyboard from '../components/Keyboard/Keyboard'

const Calculator = () => {
	return (
		<div className='calc'>
			<CalcScreen />
			<Keyboard />
		</div>
	)
}

export default Calculator
