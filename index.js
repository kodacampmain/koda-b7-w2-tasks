/**
 * Task Fakhri
 */

import fakhri from "./tasks/fakhri/index.js";

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
})();
console.log("===========================================");
/**
 * Task Ilham
 */

import ilham from "./tasks/ilham/index.js";

console.log("===========================================");
(function taskIlham() {
  try {
    // manualMap
    // success
    const data = [1,2,3,4,5]
    const tomanualMap = ilham.manualMap(data,(num)=>num*num);
    console.log(tomanualMap)
  } catch (error){
    console.log(error.message)
  }
  try {
    // error
    const data = "2";
    const toManualMap = ilham.manualMap(data,(num)=>num*num);
    console.log(toManualMap)
  } catch (error){
    console.log(error.message)
  }
  try {
    // manualFilter
    // success
    const data = [1,2,3,4,5];
    const toManualFilter = ilham.manualFilter(data,(num)=>num % 2 === 0);
    console.log(toManualFilter)
  } catch(error) {
    console.log(error.message)
  }
  try {
    // Failed
    const data = "1";
    const toManualFilter = ilham.manualFilter(data,(num)=>num % 2 === 0);
    console.log(toManualFilter)
  } catch (error) {
    console.log(error.message)
  }
  try {
    // cetakTable
    // success
    const toTable = ilham.cetakTable(10)
    console.log(toTable)
  }catch (error) {
    console.log(error.message)
  }
  try {
    // failed
    const tabel = ilham.cetakTable("abc")
    console.log(tabel)
  }catch (error){
    console.log(error.message)
  }
  try {
    // count Array
    // success
    const datanum = [1,2,3,4,5];
    const toCount = ilham.countArray(datanum)
    console.log(toCount)
  }catch (error){
    console.log(error.message)
  } 
  try {
    // failed
    const data = "abb";
    const toCount = ilham.countArray(data)
    console.log(toCount)
  } catch(error) {
    console.log(error.message)
  }
})()
console.log("===========================================");