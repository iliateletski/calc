import React from "react";
import NavBtn from "./UI/navBtn/NavBtn";

const Navbar = ({changeUnits}) => {

    const navButtons = [
        {name: 'Масса', value: 'weight',},
        {name: 'Температура', value: 'temperature',},
        {name: 'Время', value: 'time',},
        {name: 'Скорость', value: 'speed',},
        {name: 'Валюта', value: 'currency',},
    ];


    return (
        <div className="Navbar">
            {navButtons.map(btn => 
                <NavBtn
                    onClick={value => changeUnits(value)}
                    key={btn.value}
                    value={btn.value}
                >
                    {btn.name}
                </NavBtn>
            )}
        </div>
    )
}

export default Navbar;