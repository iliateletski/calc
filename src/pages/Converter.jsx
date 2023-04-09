import React, { useEffect, useState } from "react";
import ConverterScreen from "../components/ConverterScreen"
import Keyboard from "../components/Keyboard";
import ConverterHeder from "../components/ConverterHeader";
import Navbar from "../components/NavBar";
import Error from "../components/UI/error/Error";
import { getSelectOptions } from "../render/renderData";
import { useConverterFormula } from "../hooks/useConverterFofmula";
import { unitConversion } from "../utils/converter/unitConversion";
import { useError } from "../hooks/useError";
import { useActiveBtnChange } from "../hooks/useActiveBtnChange";
import ConverterKeyboard from "../components/ConverterKeyboard";


const Converter = () => {

    const initialUnitsState = getSelectOptions('weight');
    const[units, setUnits] = useState(initialUnitsState);
    const[activeUnits, setActiveUnits] = useState({unitA: units[0].value, unitB: units[1].value});
    const[converter, setConverter] = useState({
        isValueA: true,
        isValueB: false,
        valueA: '',
        valueB: '',
        result: '0',
    });

    const[showError, error] = useError();
    const formula = useConverterFormula(converter, activeUnits);
    const conversion = unitConversion(converter, setConverter, activeUnits, formula,);

    useEffect(() => {
        setActiveUnits({
            ...activeUnits,
            unitA: units[0].value,
            unitB: units[1].value,
        })
    },[units]);

    useEffect(() => {
        conversion(converter.result);
    }, [converter.result]);
    
    const changeUnits = (value) => {
        const selectOptions = getSelectOptions(value);
        setUnits(selectOptions);
    }
    
    return (
        <div>
            <ConverterHeder>Конвертация едениц</ConverterHeder>
            {error.errorIsActive && <Error>{error.textError}</Error>}
            <Navbar changeUnits={changeUnits}/>
            <ConverterScreen
                converter={converter} 
                setConverter={setConverter}
                formula={formula}
                units={units}
                activeUnits={activeUnits}
                setActiveUnits={setActiveUnits}
            />
            <ConverterKeyboard
                showError={showError}
                converter={converter}
                setConverter={setConverter}
            />
        </div>
    )
}

export default Converter;