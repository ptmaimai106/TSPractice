const CELSIUS = 'CELSIUS';
const FAHRENHEIT = 'FAHRENHEIT';
const KELVIN = 'KELVIN';

class Celsius{
    convertToFahrenheit = temperature => (temperature * 9) / 5 + 32;
    convertToKelvin = temperature => temperature + 273.15;
    convert = (temperature, toUnit) => {
        if(toUnit === FAHRENHEIT){
            this.convertToFahrenheit(temperature)
        } else this.convertToKelvin(temperature)
    }
}


class Fahrenheit{
    convertToCelsius = temperature => (temperature * 9) / 5 + 32;
    convertToKelvin = temperature => temperature + 273.15;
    convert = (temperature, toUnit) => {
        if(toUnit === CELSIUS){
            this.convertToCelsius(temperature)
        } else this.convertToKelvin(temperature)
    }
}

class Kelvin{
    convertToFahrenheit = temperature => (temperature * 9) / 5 + 32;
    convertToCelsius = temperature => temperature + 273.15;
    convert = (temperature, toUnit) => {
        if(toUnit === FAHRENHEIT){
            this.convertToFahrenheit(temperature)
        } else this.convertToCelsius(temperature)
    }
}

const converter = (temperature, fromUnit, toUnit) => {
    switch (fromUnit) {
        case CELSIUS:
            const celsiusConverter = new Celsius();
            celsiusConverter.convert(temperature, toUnit);
            break;
        case FAHRENHEIT:
            const fahrenheitConverter = new Fahrenheit();
            fahrenheitConverter.convert(temperature, toUnit);
            break;
        case KELVIN:
            const kelvinConverter = new Kelvin();
            kelvinConverter.convert(temperature, toUnit);
            break;
    }
}

export default converter;

