import './NavBtn.css'

const NavBtn = ({ children, isActive, value, onClick }) => {
	return (
		<button
			className={`navBtn ${isActive ? 'active' : ''}`}
			value={value}
			onClick={e => {
				onClick(e.target.value)
			}}
		>
			{children}
		</button>
	)
}

export default NavBtn
