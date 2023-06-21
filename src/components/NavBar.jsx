import React, { useState } from "react";
import NavBtn from "./UI/navBtn/NavBtn";

const Navbar = ({changeUnits}) => {

    const navButtons = [
        {name: 'Масса', value: 'weight'},
        {name: 'Температура', value: 'temperature'},
        {name: 'Время', value: 'time'},
        {name: 'Скорость', value: 'speed'},
    ];

    const[activeBtn, setActiveBtn] = useState('weight');

    const tabClick = (value) => {
        setActiveBtn(value);
    }

    return (
        <div className="Navbar">
            {navButtons.map(btn =>
                    <NavBtn
                        onClick={value => {
                            tabClick(value)
                            changeUnits(value)
                        }}
                        isActive={activeBtn === btn.value ? true : false}
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