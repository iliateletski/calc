import React from "react";
import CalcBtn from "./UI/calcBtn/CalcBtn";
import { getKeyboard } from "../render/renderData";
import { backspaceBtn } from "../utils/backspaceBtn";
import SpecialButtons from "./SpecialButtons";

const Keyboard = ({calc, setCalc, showError}) => {

    const[calcKeyboard, converterKeyboard] = getKeyboard(calc, setCalc, showError);
    const backspace = backspaceBtn(calc, setCalc);

    return (
        <div className="calc__buttons">
            <SpecialButtons backspace={backspace}/>    
            <hr/>
            <div className="buttons__inner">
                {calcKeyboard.map(keyboard => 
                    <CalcBtn
                        className={keyboard.className}
                        value={keyboard.value}
                        onClick={keyboard.onClick}
                        key={keyboard.value}
                    >
                        {keyboard.value}
                    </CalcBtn>
                )}
            </div>
        </div>
    );
}

export default Keyboard;