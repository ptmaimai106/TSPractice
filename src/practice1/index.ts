import converter, {Temperature} from './convert';

const testData: any[] = [
    [5, Temperature.CELSIUS, Temperature.FAHRENHEIT],
    [5, Temperature.CELSIUS, Temperature.KELVIN],
    [5, Temperature.CELSIUS, Temperature.CELSIUS],
    [41, Temperature.FAHRENHEIT, Temperature.CELSIUS],
    [41, Temperature.FAHRENHEIT, Temperature.KELVIN],
    [41, Temperature.FAHRENHEIT, Temperature.FAHRENHEIT],
    [290, Temperature.KELVIN, Temperature.FAHRENHEIT],
    [290, Temperature.KELVIN, Temperature.CELSIUS],
    [290, Temperature.KELVIN, Temperature.KELVIN],
    ['abc', Temperature.KELVIN, Temperature.CELSIUS],
    [290, 6, Temperature.KELVIN],
    [290, Temperature.KELVIN, 7],
];


testData.map(item => console.log(converter(item[0], item[1], item[2])));
