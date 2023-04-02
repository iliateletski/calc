import React from "react";
import { Children } from "react";
import "./SpecialBtn.css"

const BackspaceBtn = ({children, onClick}) => {

    return (
        <button 
            className='material-symbols-outlined special'
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default BackspaceBtn;