import React, { useEffect, useState } from "react";
import ConverterScreen from "../components/ConverterScreen"
import ConverterKeyboard from "../components/ConverterKeyboard";
import ConverterHeder from "../components/ConverterHeader";
import Navbar from "../components/NavBar";
import Error from "../components/UI/error/Error";
import { getSelectOptions } from "../render/renderData";
import { useConverterFormula } from "../hooks/useConverterFofmula";
import { unitConversion } from "../utils/converter/unitConversion";
import { useError } from "../hooks/useError";
import { changeActiveBtn } from "../utils/converter/changeActiveBtn";
import { clear } from "../utils/clear";


const Converter = () => {

    const initialUnitsState = getSelectOptions('weight');
    const[units, setUnits] = useState(initialUnitsState);
    const[activeUnits, setActiveUnits] = useState({unitA: units[0].value, unitB: units[1].value});
    const[converter, setConverter] = useState({
        isPlusMinus: true,
        isValueA: true,
        isValueB: false,
        valueA: '',
        valueB: '',
        result: '0',
    });
    console.log(converter)

    const[classes, setClasses] = useState({
        entryFieldA: '',
        entryFieldB: '',
    })

    const clearAll = clear(converter, setConverter);
    const[showError, error] = useError();
    const formula = useConverterFormula(converter, activeUnits);
    const conversion = unitConversion(converter, setConverter, activeUnits, formula,);
    const toggleActiveBtn = changeActiveBtn(converter, setConverter); 

    useEffect(() => {
        setActiveUnits({
            ...activeUnits,
            unitA: units[0].value,
            unitB: units[1].value,
        })
    },[units]);

    useEffect(() => {
        conversion(converter.result);

        if(converter.valueA.length >= 15 && !classes.entryFieldA) setClasses({...classes, entryFieldA: 'small__font'});
        if(converter.valueB.length >= 15 && !classes.entryFieldB) setClasses({...classes, entryFieldB: 'small__font'});

        if(converter.valueA.length < 15 && classes.entryFieldA) setClasses({...classes, entryFieldA: ''});
        if(converter.valueB.length < 15 && classes.entryFieldB) setClasses({...classes, entryFieldB: ''});
    }, [converter.result]);

    
    
    const changeUnits = (value) => {
        const selectOptions = getSelectOptions(value);
        setUnits(selectOptions);
        clearAll();
        toggleActiveBtn(value);
    }
    
    return (
        <div>
            <ConverterHeder>Конвертация едениц</ConverterHeder>
            {error.errorIsActive && <Error>{error.textError}</Error>}
            <Navbar changeUnits={changeUnits}/>
            <ConverterScreen
                classes={classes}
                converter={converter} 
                setConverter={setConverter}
                units={units}
                activeUnits={activeUnits}
                setActiveUnits={setActiveUnits}
            />
            <ConverterKeyboard
                toggleActiveBtn={toggleActiveBtn}
                showError={showError}
                converter={converter}
                setConverter={setConverter}
                clearAll={clearAll}
            />
        </div>
    )
}

export default Converter;