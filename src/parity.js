const input = require("readline-sync");
const number = Number(input.question("\nEnter an integer: "));
if (Number.MAX_SAFE_INTEGER < number || Number.MIN_SAFE_INTEGER > number || Number.isNaN(number)){
  console.log("\nInvalid.");
}else{
  if (number%2 === 0){
    console.log("\nEven.");
  }else if (number%2 ===1){
    console.log("\nOdd.");
  }else{
    console.log("\nInvalid.");
  }
}
