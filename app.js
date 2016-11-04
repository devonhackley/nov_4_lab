'use strict';

function inTocm (number) {
  return number * 2.54;
}
function cmToIn (number) {
  return number / 2.53;
}
function flToMl (number) {
  return number / 29.57;
}
function mlToFl (number) {
  return number * 0.033814;
}
function miToKm (number) {
  return number * 1.6;
}
function kmToMi (number) {
  return number * 0.62;
}
function lbToKg (number) {
  return number * 0.45359;
}
function kgToLb (number){
  return number / 0.45359;
}
function etToMt (number) {
  return number / 1.1023;
}
function mtToEt (number) {
  return number * 1.1023;
}

function convertUnits () {
  var value = getElementById('measurement');
  var unit  = getElementById('units');

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
