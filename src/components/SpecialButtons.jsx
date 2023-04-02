import React from "react";
import { Link } from "react-router-dom";
import SpecialBtn from "./UI/specialBtn/SpecialBtn";

const SpecialButtons = ({backspace}) => {

    return (
        <div>
            <div className="buttons__special">
                <Link to={'/converter'}>
                    <SpecialBtn>straighten</SpecialBtn>
                </Link>
                <SpecialBtn onClick={backspace}>backspace</SpecialBtn>
            </div>
        </div>
    )
} 

export default SpecialButtons;