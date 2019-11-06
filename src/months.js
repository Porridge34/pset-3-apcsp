const input = require("readline-sync");
let monthEntered = input.question("\nEnter a month: ");
monthEntered = monthEntered.toLowerCase();
console.log("");
if (monthEntered.length !==null){
  while (monthEntered.length > 3){
      monthEntered = monthEntered.replace(monthEntered.charAt(3), '');
  }
  if(monthEntered === "feb"){
    console.log("28 or 29 days.");
  } else if (monthEntered === "jan" || monthEntered === "mar" || monthEntered === "may" || monthEntered === "jul" || monthEntered === "aug"
  || monthEntered === "oct" || monthEntered ==="dec"){
    console.log("31 days.");
  } else if (monthEntered === "apr" || monthEntered === "jun" || monthEntered === "sep" || monthEntered === "nov"){
    console.log("30 days.");
  }else {
    console.log("Invalid.")
  }
}
