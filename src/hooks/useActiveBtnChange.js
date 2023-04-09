import { useState } from "react"

export const useActiveBtnChange = () => {

    const[isActiveBtn, setIsActiveBtn] = useState({
        arrowUp: false,
        arrowDown: true,
        plusMinus: true,
    });

    const changeActiveBtn = (value) => {
        
        if(value === '↑') {
            setIsActiveBtn({
                ...isActiveBtn,
                arrowUp: false,
                arrowDown: true,
            });
        }

        if(value === '↓') {
            setIsActiveBtn({
                ...isActiveBtn,
                arrowDown: false,
                arrowUp: true,
            });
        }

        if(value === 'temperature') {
            setIsActiveBtn({
                ...isActiveBtn,
                plusMinus: true,
            });
        }
        // } else {
        //     setIsActiveBtn({
        //         ...isActiveBtn,
        //         plusMinus: false,
        //     });
        // }
    }

    return [isActiveBtn, changeActiveBtn];
}