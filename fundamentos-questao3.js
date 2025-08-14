function celsiusParaFahrenheit(c) {
    return (c * 9/5) + 32;
}

function fahrenheitParaCelsius(f) {
    return (f - 32) * 5/9;
}

console.log(`25°C = ${celsiusParaFahrenheit(25)}°F`);
console.log(`77°F = ${fahrenheitParaCelsius(77)}°C`);
