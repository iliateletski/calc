import React, { useState } from "react";
import classes from "./NavBtn.module.css"

const NavBtn = ({children, value, onClick}) => {

    const[isActiveBtn, setIsActiveBtn] = useState()
    
    const cssClass = [classes.navBtn];
    
     
    return (
        <button
            className={cssClass.join(' ')} 
            value={value} 
            onClick={e => onClick(e.target.value)}
        >
            {children}
        </button>
    )
}

export default NavBtn;
