// https://www.omnicalculator.com/conversion/pints-to-cups-converter

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const cupsRadio = document.getElementById('cupsRadio');
const pintsRadio = document.getElementById('pintsRadio');

let cups;
let pints = v; 

// labels of the inpust
const variable = document.getElementById('variable');

cupsRadio.addEventListener('click', function() {
  variable.textContent = 'pints';
  pints = v;
  result.textContent = '';
});

pintsRadio.addEventListener('click', function() {
  variable.textContent = 'cups';
  cups = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(cupsRadio.checked)
    result.textContent = `cups = ${computecups().toFixed(5)}`;

  else if(pintsRadio.checked)
    result.textContent = `pints = ${computepints().toFixed(5)}`;
})

// calculation

function computecups() {
  return Number(pints.value) * 2;
}

function computepints() {
  return Number(cups.value) / 2;
}