import React from "react";
import ConverterScreen from "../components/ConverterScreen"
import Keyboard from "../components/Keyboard";
import ConverterHeder from "../components/ConverterHeader";

const Converter = () => {
    
    return (
        <div>
            <ConverterHeder>Конвертация едениц</ConverterHeder>
            <ConverterScreen></ConverterScreen>
            <Keyboard/>
        </div>
    )
}

export default Converter;