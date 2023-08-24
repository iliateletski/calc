import Calculator from '../pages/Calculator'
import Converter from '../pages/Converter'
import { CALC_ROUTE, CONVERTER_ROURE } from '../utils/consts'

export const routes = [
	{ path: CALC_ROUTE, element: <Calculator /> },
	{ path: CONVERTER_ROURE, element: <Converter /> }
]
