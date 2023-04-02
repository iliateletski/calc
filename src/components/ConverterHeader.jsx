import React from "react";
import { Link } from "react-router-dom";
import SpecialBtn from "./UI/specialBtn/SpecialBtn"

const ConverterHeder = ({children}) => {

    return(
        <div className="converter__header">
            <Link to='/'>
                <SpecialBtn>arrow_back_ios</SpecialBtn>
            </Link>
            <h1>{children}</h1>
        </div>
    );
}

export default ConverterHeder;