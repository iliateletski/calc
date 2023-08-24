import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { CONVERTER_ROURE } from '../utils/consts'
import SpecialBtn from './UI/specialBtn/SpecialBtn'
import { backspaceCalc } from '../store/slices/calcSlice'

const SpecialButtons = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()

	return (
		<div>
			<div className='buttons__special'>
				<SpecialBtn
					onClick={() => {
						navigate(CONVERTER_ROURE)
					}}
				>
					<svg
						width='25'
						height='16'
						viewBox='0 0 25 16'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M12.5 1V6.5M6.5 1V6.5M18.5 1V6.5M23 1H2C1.44772 1 1 1.44772 1 2V14C1 14.5523 1.44772 15 2 15H23C23.5523 15 24 14.5523 24 14V2C24 1.44772 23.5523 1 23 1Z'
							stroke='#FF9900'
							strokeWidth='2'
						/>
					</svg>
				</SpecialBtn>
				<SpecialBtn onClick={() => dispatch(backspaceCalc())}>
					<svg
						width='23'
						height='16'
						viewBox='0 0 23 16'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M17 5L10.5 11.5M10.5 5L17 11.5M21 15H7.45993C7.16801 15 6.89066 14.8724 6.70068 14.6508L1.55782 8.65079C1.23683 8.2763 1.23683 7.7237 1.55782 7.34921L6.70068 1.34921C6.89066 1.12756 7.16801 1 7.45994 1H21C21.5523 1 22 1.44772 22 2V14C22 14.5523 21.5523 15 21 15Z'
							stroke='#FF9900'
							strokeWidth='2'
						/>
					</svg>
				</SpecialBtn>
			</div>
		</div>
	)
}

export default SpecialButtons
