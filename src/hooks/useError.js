import { useState } from 'react'
import { ERRORS } from '../utils/consts'

export const useError = () => {
	const [error, setError] = useState({
		errorIsActive: false,
		textError: ''
	})

	const showError = typeError => {
		setError({
			...error,
			errorIsActive: true,
			textError: ERRORS[typeError]
		})

		setTimeout(() => {
			setError(prev => ({
				...prev,
				errorIsActive: false,
				textError: ''
			}))
		}, 2000)
	}

	return [showError, error]
}
