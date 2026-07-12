const prompt = require("prompt-sync")();

console.log("+---------------------+");
console.log("| TERMINAL COUNTDOWN |");
console.log("+---------------------+\n");

// const endTime = new Date(2026, 6, 11, 18).getTime();
// In JavaScript, months are 0-indexed. July 11, 2026 at 6:00 PM

// Get user input for target hours/minutes/seconds
console.log("Set your countdown timer:");
const inputHours = parseInt(prompt("Enter hours: ") || 0);
const inputMinutes = parseInt(prompt("Enter minutes: ") || 0);
const inputSeconds = parseInt(prompt("Enter seconds: ") || 0);

// Convert their input into total milliseconds to figure out the exact end time
const totalDurationMs =
  inputHours * 60 * 60 * 1000 + inputMinutes * 60 * 1000 + inputSeconds * 1000;
const endTime = Date.now() + totalDurationMs;

console.log("| Timer started! Press Ctrl+C to exit |");

const interval = setInterval(() => {
  const currentTime = Date.now();
  let timerToCount = endTime - currentTime;

  if (timerToCount <= 0) {
    process.stdout.write("\rRemaining: 0d 0h 0m 0s\n\n");
    console.log("| Time's up! |");
    process.exit();
  }

  const day = Math.floor(timerToCount / (1000 * 60 * 60 * 24));
  timerToCount %= 1000 * 60 * 60 * 24;
  const hour = Math.floor(timerToCount / (1000 * 60 * 60));
  timerToCount %= 1000 * 60 * 60;
  const minute = Math.floor(timerToCount / (1000 * 60));
  timerToCount %= 1000 * 60;
  const second = Math.floor(timerToCount / 1000);

  // '\r' clears the current line so timer updates in place instead of spamming new lines
  process.stdout.write(`\rRemaining: ${day}d ${hour}h ${minute}m ${second}s`);
}, 1000);
