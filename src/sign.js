const input = require("readline-sync");
const number = Number(input.question("\nEnter a number: "));
if (Number.MIN_SAFE_INTEGER > (number) || Number.MAX_SAFE_INTEGER < (number)||Number.isNaN(number)) {
    console.log("\nInvalid.");
} else {
  const absolute_number = Number(Math.abs(number));
  if (absolute_number === number){
    if (number === 0){
      console.log("\nZero.")
    } else{
      console.log("\nPositive.")
    }
  }else{
    console.log("\nNegative.")
  }
}
