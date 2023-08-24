import React from 'react'
import ConverterScreen from '../components/ConverterScreen'
import ConverterHeder from '../components/ConverterHeader'
import Navbar from '../components/NavBar'
import Keyboard from '../components/Keyboard/Keyboard'

const Converter = () => {
	return (
		<div>
			<ConverterHeder>Конвертация единиц</ConverterHeder>
			<Navbar />
			<ConverterScreen />
			<Keyboard />
		</div>
	)
}

export default Converter
