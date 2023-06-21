import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CalcContext } from "../context/context";
import { CONVERTER_ROURE } from "../utils/consts";
import SpecialBtn from "./UI/specialBtn/SpecialBtn";

const SpecialButtons = ({backspace}) => {

    const{setIsCalc} = useContext(CalcContext);

    return (
        <div>
            <div className="buttons__special">
                <Link to={CONVERTER_ROURE}>
                    <SpecialBtn onClick={() => setIsCalc(false)}>straighten</SpecialBtn>
                </Link>
                <SpecialBtn onClick={backspace}>backspace</SpecialBtn>
            </div>
        </div>
    )
} 

export default SpecialButtons;