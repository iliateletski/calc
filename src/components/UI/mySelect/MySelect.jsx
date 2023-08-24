import React from 'react'
import './MySelect.css'

const MySelect = ({ options, value, onChange }) => {
	return (
		<select
			value={value}
			onChange={e => onChange(e.target.value)}
			className='mySelect'
		>
			{options.map(option => (
				<option value={option.value} key={option.value}>
					{option.name}
				</option>
			))}
		</select>
	)
}

export default MySelect
