import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setUnits } from '../store/slices/converterSlice'
import { NAV_BUTTONS } from '../utils/consts'
import NavBtn from './UI/navBtn/NavBtn'

const Navbar = () => {
	const [activeBtn, setActiveBtn] = useState('weight')
	const dispatch = useDispatch()

	const tabClick = value => {
		setActiveBtn(value)
	}

	return (
		<div className='Navbar'>
			{NAV_BUTTONS.map(btn => (
				<NavBtn
					onClick={value => {
						tabClick(value)
						dispatch(setUnits(value))
					}}
					isActive={activeBtn === btn.value ? true : false}
					key={btn.value}
					value={btn.value}
				>
					{btn.name}
				</NavBtn>
			))}
		</div>
	)
}

export default Navbar
