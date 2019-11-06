const input = require("readline-sync");
let cardEntered = input.question("\nEnter a playing card: ");
cardEntered = cardEntered.toLowerCase();
let resultCard = null;
function checkSuit(string){
  if (string === 'c'){
    resultCard = resultCard + "of Clubs.";
  }else if (string === 's'){
    resultCard = resultCard + "of Spades.";
  }else if (string ==='h'){
    resultCard = resultCard +  "of Hearts. ";
  }else if (string === 'd'){
    resultCard = resultCard + "of Diamonds. ";
  }else {
    resultCard = "Invalid.";
  }
}
function checkRank(string){
  if (string === '2'){
    resultCard = "Two ";
  }else if (string === '3'){
    resultCard = "Three ";
  }else if (string ==='4'){
    resultCard = "Four ";
  }else if (string === '5'){
    resultCard = "Five ";
  }else if (string === '6'){
    resultCard = "Six ";
  }else if (string === '7'){
    resultCard = "Seven ";
  }else if (string === '8'){
    resultCard = "Eight ";
  }else if (string === '9'){
    resultCard = "Nine ";
  }else if (string === 'j'){
    resultCard = "Jack ";
  }else if (string === 'q'){
    resultCard = "Queen ";
  }else if (string === 'k'){
    resultCard = "King ";
  }else if (string === 'a'){
    resultCard = "Ace ";
  }else if (string === 't'){
    resultCard = "Ace ";
  }else {
    resultCard = "Invalid.";
  }
}
checkRank(cardEntered.charAt(0));
if (resultCard === "Invalid."){
  checkRank(cardEntered.charAt(1));
  if (resultCard === "Invalid."){
    console.log("\nInvalid.");
  }else {
    checkSuit(cardEntered.charAt(0));
    console.log("\n"+resultCard);
  }
}else {
  checkSuit(cardEntered.charAt(1));
  console.log("\n"+resultCard);
}
