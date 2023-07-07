import React, { useState } from "react";
import { NAV_BUTTONS } from "../utils/consts";
import NavBtn from "./UI/navBtn/NavBtn";

const Navbar = ({changeUnits}) => {

    const[activeBtn, setActiveBtn] = useState('weight');

    const tabClick = (value) => {
        setActiveBtn(value);
    }

    return (
        <div className="Navbar">
            {NAV_BUTTONS.map(btn =>
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