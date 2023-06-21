import React from "react";
import "./SpecialBtn.css"

const BackspaceBtn = ({children, onClick}) => {

    return (
        <button 
            className='material-symbols-outlined special'
            onClick={onClick}
        >
            <span>
                {children}
            </span>
        </button>
    )
}

export default BackspaceBtn;