'use strict';

function inTocm (number) {
  var num = number * 2.54;
  alert('The anser is: ' + num);
}
function cmToIn (number) {
  var num = number / 2.53;
  alert('The anser is: ' + num);
}
function flToMl (number) {
  var num = number / 29.57;
  alert('The anser is: ' + num);
}
function mlToFl (number) {
  var num = number * 0.033814;
  alert('The anser is: ' + num);
}
function miToKm (number) {
  var num = number * 1.6;
  alert('The anser is: ' + num);
}
function kmToMi (number) {
  var num = number * 0.62;
  alert('The anser is: ' + num);
}
function lbToKg (number) {
  var num = number * 0.45359;
  alert('The anser is: ' + num);
}
function kgToLb (number){
  var num = number / 0.45359;
  alert('The anser is: ' + num);
}
function etToMt (number) {
  var num = number / 1.1023;
  alert('The anser is: ' + num);
}
function mtToEt (number) {
  var num = number * 1.1023;
  alert('The anser is: ' + num);
}

function convertUnits () {
  var value = document.getElementById('measurement');
  var unit  = document.getElementById('units');

  if (unit === 'in-cm'){
    inTocm(value);
  } else if (unit === 'cm-in') {
    cmToIn(value);
  } else if (unit === 'floz-mL'){
    flToMl(value);
  } else if (unit === 'mL-floz') {
    mlToFl(value);
  } else if (unit === 'mi-km') {
    miToKm(value);
  } else if (unit === 'km-mi'){
    kmToMi(value);
  } else if (unit === 'lbs-kg'){
    lbToKg(value);
  } else if (unit === 'kg-lbs') {
    kgToLb(value);
  } else if (unit === 'eshitton-mshitton') {
    etToMt(value);
  } else if (unit === 'mshitton-eshitton') {
    mtToEt(value);
  }
}

convertUnits();
