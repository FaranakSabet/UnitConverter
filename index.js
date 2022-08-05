let numEl = document.getElementById("num-el");
let btnEl = document.getElementById("btn-el");
let lengthEl = document.getElementById("length-el");
let volumeEl = document.getElementById("volume-el");
let massEl = document.getElementById("mass-el");

//make the button work when clicked

let inputNumber = numEl.value

btnEl.addEventListener("click", function () {
  inputNumber = numEl.value;
  convert();
});

// create function to calculate

const oneMeter = 3.281;
const oneLiter = 0.264;
const oneKg = 2.204;

function calLength() {
  let sumMeter = inputNumber / oneMeter;
  sumMeter = parseFloat(sumMeter.toFixed(3));
  let sumFeet = inputNumber * oneMeter;
  sumFeet = parseFloat(sumFeet.toFixed(3));
  lengthEl.innerHTML = `<p>${inputNumber} meters = ${sumFeet} feet | ${inputNumber} feet = ${sumMeter} meters</p>`;
}

function calVolume() {
  let sumLiters = inputNumber / oneLiter;
  sumLiters = parseFloat(sumLiters.toFixed(3));
  let sumGallons = inputNumber * oneLiter;
  sumGallons = parseFloat(sumGallons.toFixed(3));
  volumeEl.innerHTML = `<p>${inputNumber} liters = ${sumGallons} gallons | ${inputNumber} gallons = ${sumLiters} liters</p>`;
}

function calMass() {
  let sumKg = inputNumber / oneKg;
  sumKg = parseFloat(sumKg.toFixed(3));
  let sumPounds = inputNumber * oneKg;
  sumPounds = parseFloat(sumPounds.toFixed(3));
  massEl.innerHTML = `<p>${inputNumber} kilos = ${sumPounds} pounds | ${inputNumber} pounds = ${sumKg} kilos</p>`;
}

function convert() {
  calLength();
  calVolume();
  calMass();
}