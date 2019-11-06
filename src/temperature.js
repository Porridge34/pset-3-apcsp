const input = require("readline-sync");
const temperatureEntered = Number(input.question("\nEnter a temperature: "));
let scaleEntered = input.question("Enter a scale: ");
scaleEntered = scaleEntered.toLowerCase();
let boilingPoint = null;
let freezingPoint = null;
console.log("");
function stateIs(temperature){
  if (boilingPoint === null || temperature <= Number.MIN_SAFE_INTEGER || temperature >= Number.MAX_SAFE_INTEGER){
    console.log("Invalid.");
  }else if (temperature >= boilingPoint){
    console.log("Gas.");
  }else if (temperature <= freezingPoint){
    console.log("Solid.");
  }else if (temperature < boilingPoint && temperature > freezingPoint){
    console.log("Liquid.");
  }else{
    console.log("Invalid.")
  }
}
if (scaleEntered === "f"){
  boilingPoint = 212;
  freezingPoint = 32;
} else if(scaleEntered === "k"){
  boilingPoint = 373.15;
  freezingPoint = 273.15;
} else if(scaleEntered === "c"){
  boilingPoint = 100;
  freezingPoint = 0;
} 
stateIs(temperatureEntered);
