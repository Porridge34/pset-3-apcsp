const input = require("readline-sync");
const year = input.question("\nEnter a year: ");
let isLeapYear = null;
if (year >= 0 && year <= Number.MAX_SAFE_INTEGER && year%1===0){
  if(year%4===0){
    isLeapYear = "";
  }else{
    isLeapYear = " not";
  }
  console.log("\n"+year+" is"+isLeapYear+" a leap year.");
}else {
  console.log("\nInvalid.");
}
