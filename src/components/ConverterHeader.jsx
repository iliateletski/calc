import React from 'react'
import { useNavigate } from 'react-router-dom'
import SpecialBtn from './UI/specialBtn/SpecialBtn'

const ConverterHeder = ({ children }) => {
	const navigate = useNavigate()

	return (
		<div className='converter__header'>
			<SpecialBtn
				onClick={() => {
					navigate(-1)
				}}
			>
				<svg
					width='15'
					height='24'
					viewBox='0 0 15 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path d='M14 1L2 12L14 23' stroke='#FF9900' strokeWidth='2' />
				</svg>
			</SpecialBtn>

			<h2 className='converter__title'>{children}</h2>
		</div>
	)
}

export default ConverterHeder
