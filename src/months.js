const input = require("readline-sync");
let monthEntered = input.question("\nEnter a month: ");
monthEntered = monthEntered.toLowerCase();
let invalid = true;
function shortenMonth(month){
  while (month.length > 3){
    month.replace(month.charAt(4), '');
    console.log(month);
  }
}
shortenMonth(monthEntered);
console.log("");
switch (monthEntered.length !==null){
  case (monthEntered === "feb"):
    console.log("28 or 29 days.");
    invalid = false;
    break;
  case (monthEntered === "jan" || monthEntered === "mar" || monthEntered === "may" || monthEntered === "jul" || monthEntered === "aug" || monthEntered === "oct" || monthEntered ==="dec"):
    console.log("31 days.");
    invalid = false;
    break;
  case (monthEntered === "apr" || monthEntered === "jun" || monthEntered === "sep" || monthEntered === "nov"):
    console.log("30 days.");
    invalid = false;
    break;
  case (invalid === true):
    console.log("Invalid.");
    break;
}
