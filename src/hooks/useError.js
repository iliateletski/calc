import { useState } from "react";
import Error from "../components/UI/error/Error";
import { ERRORS } from "../utils/consts";

// const errorDivisionByZero = 'errorDivisionByZero';
// const errorLengthString = 'errorLengthString';
// const errorInvalidFormat = 'errorInvalidFormat';
// const errorResult = 'errorResult';

// const errorsMap = new Map([
//     [errorDivisionByZero, 'Нельзя делить на ноль'],
//     [errorLengthString, 'Невозможно ввести более 15 символов'],
//     [errorInvalidFormat, 'Использован недопустимый формат'],
//     [errorResult, 'ОШИБКА'],
// ]);

export const useError = () => {
    const[error, setError] = useState({
        errorIsActive: false,
        textError: ''
    });

    const showError = (typeError) => {
        setError({
            ...error,
            errorIsActive: true,
            textError: ERRORS[typeError]
        });
        
        setTimeout(() => {
            setError(prev => ({
                ...prev,
                errorIsActive: false,
                textError: '',
            }));
        }, 2000);
    }

    return [showError, error]
}