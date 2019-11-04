const input = require("readline-sync");
const grade = input.question("\nEnter a grade: ");
let letterGrade = "Invalid. ";
switch (grade !== null){
  case grade >= 90 && 100 >= grade:
    letterGrade = "A";
    break;
  case grade >= 80 && 89 >= grade:
    letterGrade = "B";
    break;
  case grade >= 70 && 79 >= grade:
    letterGrade = "C";
    break;
  case grade >= 60 && 69 >= grade:
    letterGrade = "D";
    break;
  case grade >= 0 && 59 >= grade:
    letterGrade = "F";
    break;
}
if (letterGrade === "Invalid. "){
  console.log("\n"+letterGrade);
}else{
  console.log("\nYou received an " + letterGrade + ".");
}
