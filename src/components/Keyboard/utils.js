import {
	setValueCalc,
	setSign,
	clearCalc,
	calculate,
	plusMinusCalc
} from '../../store/slices/calcSlice'

import {
	setValueConv,
	backspaceConv,
	clearConv,
	toggleIsValueA,
	toggleIsValueB,
	plusMinusConv
} from '../../store/slices/converterSlice'

export const calcKeyboard = [
	{ value: 'ac', className: 'gray', action: clearCalc },
	{ value: '+/-', className: 'gray', action: plusMinusCalc },
	{ value: '%', className: 'gray', action: calculate },
	{ value: '/', className: 'orange', action: setSign },
	{ value: 7, action: setValueCalc },
	{ value: 8, action: setValueCalc },
	{ value: 9, action: setValueCalc },
	{ value: '*', className: 'orange', action: setSign },
	{ value: 4, action: setValueCalc },
	{ value: 5, action: setValueCalc },
	{ value: 6, action: setValueCalc },
	{ value: '-', className: 'orange', action: setSign },
	{ value: 1, action: setValueCalc },
	{ value: 2, action: setValueCalc },
	{ value: 3, action: setValueCalc },
	{ value: '+', className: 'orange', action: setSign },
	{ value: 0, className: 'zero', action: setValueCalc },
	{ value: '.', action: setValueCalc },
	{ value: '=', className: 'orange', action: calculate }
]

export const converterKeyboard = [
	{ value: 7, action: setValueConv },
	{ value: 8, action: setValueConv },
	{ value: 9, action: setValueConv },
	{ value: '⌫', className: 'orange', action: backspaceConv },
	{ value: 4, action: setValueConv },
	{ value: 5, action: setValueConv },
	{ value: 6, action: setValueConv },
	{ value: 'ac', className: 'orange', action: clearConv },
	{ value: 1, action: setValueConv },
	{ value: 2, action: setValueConv },
	{ value: 3, action: setValueConv },
	{ value: '↑', className: 'orange', action: toggleIsValueA },
	{ value: '+/-', action: plusMinusConv },
	{ value: 0, action: setValueConv },
	{ value: '.', action: setValueConv },
	{ value: '↓', className: 'orange', action: toggleIsValueB }
]
