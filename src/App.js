import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { routes } from './routes/routes'
import { CALC_ROUTE } from './utils/consts'

function App() {
	return (
		<div className='App'>
			<Routes>
				{routes.map(route => (
					<Route key={route.path} path={route.path} element={route.element} />
				))}
				<Route path='*' element={<Navigate to={CALC_ROUTE} />} />
			</Routes>
		</div>
	)
}

export default App
