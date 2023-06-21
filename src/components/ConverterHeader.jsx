import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CalcContext } from "../context/context";
import { CALC_ROUTE } from "../utils/consts";
import SpecialBtn from "./UI/specialBtn/SpecialBtn"

const ConverterHeder = ({children}) => {

    const{setIsCalc} = useContext(CalcContext);

    return(
        <div className="converter__header">
            <Link to={CALC_ROUTE}>
                <SpecialBtn onClick={() => setIsCalc(true)}>arrow_back_ios</SpecialBtn>
            </Link>
            <h1>{children}</h1>
        </div>
    );
}

export default ConverterHeder;