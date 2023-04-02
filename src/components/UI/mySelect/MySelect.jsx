import React from "react";
import classes from "./MySelect.module.css"

const MySelect = (options, value, onChange) => {

    return(
        <select 
            value={value}
            onChange={ e => onChange(e.target.value)}
            className={classes.mySelect}    
        >
            {options.map(option => 
                
                <options
                    value={option.value}
                    key={option.value}
                >
                    {option.name}
                </options>

            )}

        </select>
    );
}

export default MySelect;