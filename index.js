/**
 * Task Fakhri
 */

import fakhri from "./tasks/fakhri/index.js";
import dwiki from "./tasks/dwiki/index.js";

console.log("===========================================");
// Use IIFE here
(function taskFakhri() {
  // Convert Celcius to Fahrenheit
  // Success
  try {
    const fahrenheit = fakhri.celciusToFahrenheit(10);
    console.log(fahrenheit);
  } catch (error) {
    console.log(error.message);
  }
  // Failed
  try {
    const fahrenheit = fakhri.celciusToFahrenheit("10", 30);
    console.log(fahrenheit);
  } catch (error) {
    console.log(error.message);
  }
  // Counting Changes Nominal
  // Success
  try {
    const changes = fakhri.cashier(250_000, 375_000);
    console.log(changes);
  } catch (error) {
    console.log(error.message);
  }
  // Failed
  try {
    const changes = fakhri.cashier("250_000", "375_000");
    console.log(changes);
  } catch (error) {
    console.log(error.message);
  }
  // Tugas 1 map dan filter dwiki
  // Success
  try {
    const arrBaru = dwiki.manualMap([1,2,3,4,5]);
    console.log(arrBaru);
    const hasil = dwiki.manualFilter([12, 5, 8, 130, 44])
    console.log(hasil)
  } catch (error) {
    console.log(error.message);
  }
  // Failed
  try {
    const arrBaru = dwiki.manualMap(1,2,3,4,5);
    console.log(arrBaru);
    const hasil = dwiki.manualFilter(12, 5, 8, 130, 44)
    console.log(hasil)
  } catch (error) {
    console.log(error.message);
  }
  // Tugas 2 cetak tabel dwiki
  // Success
  try {
    const hasil = dwiki.cetakTabel(10);
    hasil
  } catch (error) {
    console.log(error.message);
  }
  // Failed
  try {
    const hasil = dwiki.cetakTabel("abc");
    hasil
  } catch (error) {
    console.log(error.message);
  }
  // Tugas 3 count Array dwiki
  // Succes
  try {
    const hasil = dwiki.countArray([1,2,3,4,5]);
    console.log(hasil)
  } catch (error) {
    console.log(error.message);
  }
  // Failed
  try {
    const hasil = dwiki.countArray(1,2,3,4,5);
    console.log(hasil)
  } catch (error) {
    console.log(error.message);
  }
})();
console.log("===========================================");
