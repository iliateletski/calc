import { useState } from "react";

export const useFontSize = () => {
    const[className, setClassName] = useState('');

    const changeFontSize = (className) => {
        setClassName(className);
    }

    return [className, changeFontSize];
}