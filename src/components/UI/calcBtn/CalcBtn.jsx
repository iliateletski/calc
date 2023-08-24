import React from 'react'
import './CalcBtn.css'

const CalcBtn = ({
	children,
	className = '',
	onClick,
	disabled = false,
	...props
}) => {
	return (
		<button
			className={`btn ${className} ${disabled ? 'no-active' : ''}`}
			onClick={e => onClick(e.target.value)}
			disabled={disabled}
			{...props}
		>
			{children}
		</button>
	)
}

export default CalcBtn
