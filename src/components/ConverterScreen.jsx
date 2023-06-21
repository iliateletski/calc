import React from "react";
import MySelect from "./UI/mySelect/MySelect"

const ConverterScreen = ({converter, setConverter, units, activeUnits, setActiveUnits, classes}) => {

    const[isActiveScreenA, isActiveScreenB] = [[], []];
    if(converter.isValueA) isActiveScreenA.push('active');
    if(converter.isValueB) isActiveScreenB.push('active');


    return (
        <div >

            <hr/>

            <MySelect
                options={units}
                value={activeUnits.unitA}
                onChange={value => setActiveUnits({...activeUnits, unitA: value})}
            />

            <div 
                className={`converter__screen ${classes.entryFieldA}`} 
                onClick={() => setConverter({...converter, isValueA: true, isValueB: false,})}
            >
                {converter.valueA}
            </div>

            <hr className={isActiveScreenA.join('')}/>

            <MySelect
                onChange={(value => setActiveUnits({...activeUnits, unitB: value}))}
                options={units}
                value={activeUnits.unitB}
            />

            <div 
                className={`converter__screen ${classes.entryFieldB}`} 
                onClick={() => setConverter({...converter, isValueB: true, isValueA: false,})}
            >
                {converter.valueB}
            </div>

            <hr className={isActiveScreenB.join('')}/>

        </div>
    )
}

export default ConverterScreen;
