let T = 0
let rh = 0
let HI = 0
function convertCtoF (tempC: number) {
    return 32 + 9 / 5 * tempC
}
input.onButtonPressed(Button.A, function () {
    T = envirobit.getTemperature()
    T = convertCtoF(T)
    basic.showString("Temperature: " + T + " deg F")
})
input.onButtonPressed(Button.AB, function () {
    T = envirobit.getTemperature()
    rh = envirobit.getHumidity()
    T = convertCtoF(T)
    if (T < 80) {
        HI = T
    } else {
        HI = calcHeatIndex(T, rh)
    }
    basic.showString("Heat Index: " + HI + " deg F")
})
input.onButtonPressed(Button.B, function () {
    rh = envirobit.getHumidity()
    basic.showString("Humidity: " + rh + "%")
})
function calcHeatIndex (tempF: number, relHumidity: number) {
    return -42.379 + 2.04901523 * tempF + 10.14333127 * relHumidity - 0.22475541 * (tempF * relHumidity) - 0.00683783 * tempF ** 2 - 0.05481717 * relHumidity ** 2 + 0.00122874 * (tempF ** 2 * relHumidity) + 0.00122874 * (tempF * relHumidity ** 2) - 0.00000199 * (tempF ** 2 * relHumidity ** 2)
}
