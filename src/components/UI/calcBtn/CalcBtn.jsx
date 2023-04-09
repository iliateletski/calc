import React from "react";
import './CalcBtn.css'

const CalcBtn = ({children, className, onClick, isActiveBtn, ...props}) => {

    const classes = [`btn`];

    if(className) classes.push(className);
    if(isActiveBtn) classes.push('no-active')

    return(
        <button className={classes.join(' ')} onClick={(e) => onClick(e.target.value)} {...props}>
            {children}
        </button>
    );
}

export default CalcBtn;