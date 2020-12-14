export enum Temperature {
    CELSIUS = 'CELSIUS',
    FAHRENHEIT = 'FAHRENHEIT',
    KELVIN = 'KELVIN'
}

class Celsius {
    public convertToFahrenheit(temperature: number) {
        return (temperature * 9) / 5 + 32;
    }

    private convertToKelvin(temperature: number) {
        return temperature + 273.15
    }

    public convert(temperature: number, toUnit: string) {
        if (toUnit === Temperature.FAHRENHEIT) {
            return this.convertToFahrenheit(temperature);
        }
        return this.convertToKelvin(temperature);
    };
}

class Fahrenheit {
    private convertToCelsius = (temperature: number) =>
        (temperature * 9) / 5 + 32;

    private convertToKelvin = (temperature: number) => temperature + 273.15;

    public convert = (temperature: number, toUnit: string) => {
        if (toUnit === Temperature.CELSIUS) {
            return this.convertToCelsius(temperature);
        }
        return this.convertToKelvin(temperature);
    };
}

class Kelvin {
    private convertToFahrenheit = (temperature: number) =>
        (temperature * 9) / 5 + 32;

    private convertToCelsius = (temperature: number) => temperature + 273.15;

    public convert = (temperature: number, toUnit: string) => {
        if (toUnit === Temperature.FAHRENHEIT) {
            return this.convertToFahrenheit(temperature);
        }
        return this.convertToCelsius(temperature);
    };
}

const converter = (temperature: number, fromUnit: string, toUnit: string) => {
    let updatedTemperature = temperature;
    switch (fromUnit) {
        case Temperature.CELSIUS:
            const celsiusConverter = new Celsius();
            updatedTemperature = celsiusConverter.convert(temperature, toUnit);
            break;
        case Temperature.FAHRENHEIT:
            const fahrenheitConverter = new Fahrenheit();
            updatedTemperature = fahrenheitConverter.convert(temperature, toUnit);
            break;
        case Temperature.KELVIN:
            const kelvinConverter = new Kelvin();
            updatedTemperature = kelvinConverter.convert(temperature, toUnit);
            break;
        default:
            return temperature;

    }
    return updatedTemperature;
};


export default converter;
