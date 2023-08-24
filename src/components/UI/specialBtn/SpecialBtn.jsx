import React from 'react'
import './SpecialBtn.css'

const SpecialBtn = ({ children, onClick }) => {
	return (
		<button className='special_btn' onClick={onClick}>
			{children}
		</button>
	)
}

export default SpecialBtn
