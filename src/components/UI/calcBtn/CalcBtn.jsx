import React from "react";
import './CalcBtn.css'

const CalcBtn = ({children, className, onClick, ...props}) => {

    return(
        <button className={`btn ${className}`} onClick={(e) => onClick(e.target.value)} {...props}>
            {children}
        </button>
    );
}

export default CalcBtn;