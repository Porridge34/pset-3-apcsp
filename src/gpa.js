const input = require("readline-sync");
let letter_grade = input.question("\nEnter a letter grade: ");
letter_grade = letter_grade.toLowerCase();
let gpa = Number(0);
function plus_or_minus(grade){
  if (grade === "f+" || grade === "f-" || grade.length>2 || grade >= Number.MIN_SAFE_INTEGER){
    console.log("\nInvalid.")
    gpa = null;
  }else if (grade.charAt(grade.length-1)=== "+"){
    gpa = gpa+0.33;
  }else if (grade.charAt(grade.length-1)=== "-"){
    gpa = gpa-0.33;
  }
}
if (letter_grade.charAt(0) === 'a'){
  gpa = gpa+4;
}else if (letter_grade.charAt(0) === "b"){
  gpa = gpa+3;
}else if (letter_grade.charAt(0) === "c"){
  gpa = gpa+2;
}else if (letter_grade.charAt(0) === "d"){
  gpa = gpa+1;
}else if (letter_grade.charAt(0) === "f"){
  gpa =0;
}
plus_or_minus(letter_grade);
if (gpa>4){
  gpa=4;
}
if (gpa!==null){
  console.log("\n"+gpa.toFixed(2));
}
