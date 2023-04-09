import React, { useContext } from "react";
import CalcBtn from "./UI/calcBtn/CalcBtn";
import { getKeyboard } from "../render/renderData";
import { backspaceBtn } from "../utils/backspaceBtn";
import SpecialButtons from "./SpecialButtons";
import { CalcContext } from "../context/context";

const Keyboard = ({calc, setCalc, converter, setConverter, showError}) => {

    const{isCalc} = useContext(CalcContext);
    const{calcKeyboard} = getKeyboard(calc, setCalc, showError);
    const{converterKeyboard} = getKeyboard(converter, setConverter, showError);
    const backspace = backspaceBtn(calc, setCalc);

    return (
        <div className="calc__buttons">
            {isCalc && <SpecialButtons backspace={backspace}/>}    
            <hr/>
            <div className="buttons__inner">
                {isCalc 

                    ? calcKeyboard.map(keyboard => 
                        <CalcBtn
                            className={keyboard.className}
                            value={keyboard.value}
                            onClick={keyboard.onClick}
                            key={keyboard.value}
                        >
                            {keyboard.value}
                        </CalcBtn>
                    )

                    : converterKeyboard.map(keyboard => 
                        <CalcBtn
                            className={keyboard.className}
                            value={keyboard.value}
                            onClick={keyboard.onClick}
                            key={keyboard.value}
                        >
                            {keyboard.value}
                        </CalcBtn>
                    )    
                }
            </div>
        </div>
    );
}

export default Keyboard;