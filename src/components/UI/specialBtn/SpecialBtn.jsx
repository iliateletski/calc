import React from "react";
import "./SpecialBtn.css"

const BackspaceBtn = ({children, onClick}) => {

    return (
        <button 
            className='special_btn'
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default BackspaceBtn;