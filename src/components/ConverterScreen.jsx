import React, { useEffect } from "react";
import MySelect from "./UI/mySelect/MySelect"

const ConverterScreen = ({converter, setConverter, units, activeUnits, setActiveUnits}) => {

    return (
        <div className="">
            <hr/>
            <MySelect
                options={units}
                value={activeUnits.unitA}
                onChange={value => setActiveUnits({...activeUnits, unitA: value})}
            />
            <div 
                className="converter__screen" 
                onClick={() => setConverter({...converter, isValueA: true, isValueB: false,})}
            >
                {converter.valueA}
            </div>
            <hr/>
            <MySelect
                onChange={(value => setActiveUnits({...activeUnits, unitB: value}))}
                options={units}
                value={activeUnits.unitB}
            />
            <div 
                className="converter__screen" 
                onClick={() => setConverter({...converter, isValueB: true, isValueA: false,})}
            >
                {converter.valueB}
            </div>

        </div>
    )
}

export default ConverterScreen;
