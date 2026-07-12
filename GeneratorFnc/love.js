const prompt = require("prompt-sync")();

const boyName = prompt("Enter BOY name: ");
const girlName = prompt("Enter GIRL name: ");

const boyNameString = boyName.length;
const girlNameString = girlName.length;

const resultLove = Math.pow(boyNameString + girlNameString, 3) % 101; //(0-100 to render num)

console.log("\n+----------+");
console.log(`|Your Result: ${resultLove}`);
console.log("+----------+");
