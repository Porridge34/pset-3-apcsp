const readlineSync = require("readline-sync");
const MIN = 0.01;
const MAX = 0.99;
const quarter = Number(0.25);
const dime = Number(0.10);
const nickel = Number(0.05);
const penny = Number(0.01);
let amount = Number(readlineSync.question("\nEnter a dollar amount: "));
if (Number.isNaN(amount)) {
    console.log("Invalid.");
} else if (amount < MIN || amount > MAX) {
    console.log("Invalid.");
} else {
    const quarter_number = Math.floor(amount/quarter);
    amount = ((amount*100)%(quarter*100))/100;
    const dime_number = Math.floor(amount/dime);
    amount = ((amount*100)%(dime*100))/100;
    const nickel_number = Math.floor(amount/nickel);
    amount = ((amount*100)%(quarter*100))/100;
    const penny_number = Math.floor(amount/penny);
    console.log();
    console.log(quarter_number+" quarters, "+dime_number+" dimes, "+nickel_number+" nickels, "+penny_number+" pennies.")
}
