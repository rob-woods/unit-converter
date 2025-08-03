/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputField = document.getElementById("unit-num")
const convertBtn = document.getElementById("convert-btn")
const lengthOutput = document.getElementById("length-output")
const volumeOutput = document.getElementById("volume-output")
const massOutput = document.getElementById("mass-output")
const metreToFeet = 3.281
const litreToGallon = 0.264
const kiloToPound = 2.204

let unit = 20
let metresOutput = 0
let feetOutput = 0
let litresOutput = 0
let gallonsOutput = 0
let kilosOutput = 0
let poundsOutput = 0

convertBtn.addEventListener("click", function() {
  unit = inputField.value
  convert(unit)
})

function metricToImperial(inputValue, conversionRatio) {
  return (inputValue * conversionRatio).toFixed(3)
}

function imperialToMetric(inputValue, conversionRatio) {
  return (inputValue / conversionRatio).toFixed(3)
}

function convert(inputValue) {
  feetOutput = metricToImperial(inputValue, metreToFeet)
  metresOutput = imperialToMetric(inputValue, metreToFeet)
  gallonsOutput = metricToImperial(inputValue, litreToGallon)
  litresOutput = imperialToMetric(inputValue, litreToGallon)
  poundsOutput = metricToImperial(inputValue, kiloToPound)
  kilosOutput = imperialToMetric(inputValue, kiloToPound)
  render()
}

function render() {
  lengthOutput.innerHTML = `${unit} metres = ${feetOutput} feet | ${unit} feet = ${metresOutput} metres`
  volumeOutput.innerHTML = `${unit} litres = ${gallonsOutput} gallons | ${unit} gallons = ${litresOutput} litres`
  massOutput.innerHTML = `${unit} kilos = ${poundsOutput} pounds | ${unit} pounds = ${kilosOutput} kilos`
}

convert(unit)