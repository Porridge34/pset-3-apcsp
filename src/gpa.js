const input = require("readline-sync");
let letter_grade = input.question("\nEnter a letter grade: ");
letter_grade = letter_grade.toLowerCase();
let gpa = Number(0);
function plus_or_minus(grade){
  if (grade === "F+" || grade === "F-" || grade.length>2 || Number(gpa)>=0){
    console.log("\nInvalid.")
    gpa = null;
  }else if (grade.charAt(grade.length-1)=== "+"){
    gpa = gpa+0.33;
    letter_grade = letter_grade.charAt(0);
  }else if (grade.charAt(grade.length-1)=== "-"){
    gpa = gpa-0.33;
    letter_grade = letter_grade.charAt(0);
  }
}
plus_or_minus(letter_grade);
if (letter_grade === "a"){
  gpa = gpa+4;
}else if (letter_grade === "b"){
  gpa = gpa+3;
}else if (letter_grade === "c"){
  gpa = gpa+2;
}else if (letter_grade === "d"){
  gpa = gpa+1;
}else if (letter_grade === "f"){
  gpa =0;
}
if (gpa>4){
  gpa=4;
}else if (gpa!==null){
  console.log("\n"+gpa.toFixed(2));
}
