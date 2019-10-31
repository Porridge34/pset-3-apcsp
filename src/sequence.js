const input = require("readline-sync");
const number_1 = Number(input.question("\nEnter three numbers.\n\n1."));
const number_2 = Number(input.question("2."));
const number_3 = Number(input.question("3."));
var valid = true;
function check_min_max(number){
  if (number > Number.MAX_SAFE_INTEGER){
    console.log("\nInvalid.");
    valid = false;
  }else if (number < Number.MIN_SAFE_INTEGER){
    console.log ("\nInvalid.");
    valid = false;
  }
}
check_min_max(number_1);
check_min_max(number_2);
check_min_max(number_3);
if (valid === true){
  if(number_1==number_2 && number_2==number_3){
    console.log("\nEqual.")
  }else if(number_1>=number_2 && number_2>=number_3){
    if(number_1>number_2 && number_2>number_3){
      console.log("\nStrictly decreasing.");
    }else{
      console.log("\nDecreasing.");
    }
  }else if(number_3>=number_2 && number_2>=number_1){
    if(number_3>number_2 && number_2>number_1){
      console.log("\nStrictly increasing.");
    }else{
      console.log("\nIncreasing.");
    }
  }else{
    console.log("\nUnordered.")
  }
}
