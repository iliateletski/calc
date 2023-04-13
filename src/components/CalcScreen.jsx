import React from "react";
import Error from "./UI/error/Error";
import { useFontSize } from "../hooks/useFontSize";
import { useEffect } from "react";

const CalcScreen = ({children, error}) => {

    const[className, changeFontSize] = useFontSize();
    
    useEffect(() => {
        if(children.length >= 9 && !className) changeFontSize('small__font');
        if(children.length < 9 && className) changeFontSize('');
    }, [children]);
    

    return (

        <div className={`calc__screen ${className}` }>
            {error.errorIsActive && <Error>{error.textError}</Error>}
            {children}
        </div>
    );
}

export default CalcScreen;