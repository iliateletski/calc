export const CALC_ROUTE = '/'
export const CONVERTER_ROURE = '/converter'

export const NAV_BUTTONS = [
    {name: 'Масса', value: 'weight'},
    {name: 'Температура', value: 'temperature'},
    {name: 'Время', value: 'time'},
    {name: 'Скорость', value: 'speed'},
];

export const CONVERTER_UNITS = {
    
    weight: [
        {name: 'Тонны (t)', value: 't',},
        {name: 'Килограммы (kg)', value: 'kg',},
        {name: 'Граммы (g)', value: 'g',},
    ],
    
    temperature: [
            {name: 'Градус Цельсия (°C)', value: '°C',},
            {name: 'Градус Фаренгейта (°F)', value: '°F',},
            {name: 'Градус Кельвина (K)', value: 'K',},
    ],
    
    time: [
        {name: 'Часы (h)', value: 'h',},
        {name: 'Минуты (min)', value: 'min',},
        {name: 'Секунды (s)', value: 's',},
    ],

    speed: [
        {name: 'Киллометры в час(km/h)', value: 'km/h',},
        {name: 'Милм в час(mi/h)', value: 'mi/h',},
        {name: 'Метры в час(m/h)', value: 'm/h',},
        {name: 'Метры в секунду(m/s)', value: 'm/s',},
    ],
}

export const ERROR_DIVISION_BY_ZERO = 'errorDivisionByZero';
export const ERROR_LENGTH_STRING = 'errorLengthString';
export const ERROR_INVALID_FORMAT = 'errorInvalidFormat';
export const ERROR_RESULT = 'errorResult';

export const ERRORS = {
    errorDivisionByZero: 'Нельзя делить на ноль',
    errorLengthString: 'Невозможно ввести более 15 символов',
    errorInvalidFormat: 'Использован недопустимый формат',
    errorResult: 'ОШИБКА',
}