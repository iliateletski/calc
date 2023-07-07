import React, { useEffect, useState } from "react";
import ConverterScreen from "../components/ConverterScreen"
import ConverterKeyboard from "../components/ConverterKeyboard";
import ConverterHeder from "../components/ConverterHeader";
import Navbar from "../components/NavBar";
import Error from "../components/UI/error/Error";
import { useConverterFormula } from "../hooks/useConverterFofmula";
import { unitConversion } from "../utils/converter/unitConversion";
import { useError } from "../hooks/useError";
import { changeActiveBtn } from "../utils/converter/changeActiveBtn";
import { clear } from "../utils/clear";
import { CONVERTER_UNITS } from "../utils/consts";

const Converter = () => {

    const[units, setUnits] = useState(CONVERTER_UNITS.weight);
    const[activeUnits, setActiveUnits] = useState({unitA: units[0].value, unitB: units[1].value});
    const[converter, setConverter] = useState({
        isPlusMinus: true,
        isValueA: true,
        isValueB: false,
        valueA: '',
        valueB: '',
        result: '0',
        finish: false
    });

    const[classes, setClasses] = useState({
        entryFieldA: '',
        entryFieldB: '',
    })
    
    
    const clearAll = clear(setConverter);
    const[showError, error] = useError();
    const formula = useConverterFormula(converter, activeUnits);
    const conversion = unitConversion(converter, setConverter, activeUnits, formula,);
    const toggleActiveBtn = changeActiveBtn(setConverter); 
    
    useEffect(() => {
        setActiveUnits({
            ...activeUnits,
            unitA: units[0].value,
            unitB: units[1].value,
        })
    },[units]);
    
    useEffect(() => {
        conversion(
            converter.isValueA ? converter.valueA : converter.valueB
        );

        if(converter.valueA.length >= 15 && !classes.entryFieldA) setClasses({...classes, entryFieldA: 'small__font'});
        if(converter.valueB.length >= 15 && !classes.entryFieldB) setClasses({...classes, entryFieldB: 'small__font'});

        if(converter.valueA.length < 15 && classes.entryFieldA) setClasses({...classes, entryFieldA: ''});
        if(converter.valueB.length < 15 && classes.entryFieldB) setClasses({...classes, entryFieldB: ''});
    }, [converter.result, formula]);

    
    
    const changeUnits = (value) => {
        const selectOptions = CONVERTER_UNITS[value];
        setUnits(selectOptions);
        toggleActiveBtn(value);
        clearAll();
    }
    
    return (
        <div>
            <ConverterHeder>Конвертация единиц</ConverterHeder>
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