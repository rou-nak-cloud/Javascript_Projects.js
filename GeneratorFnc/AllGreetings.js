const greetings = [
  { language: "English", greeting: "Hello" },
  { language: "Bengali", greeting: "Namaskar", native: "নমস্কার" },
  { language: "Hindi", greeting: "Namaste", native: "नमस्ते" },
  { language: "Spanish", greeting: "Hola" },
  { language: "French", greeting: "Bonjour" },
  { language: "Japanese", greeting: "Konnichiwa", native: "こんにちは" },
  { language: "German", greeting: "Hallo" },
  { language: "Italian", greeting: "Ciao" },
  { language: "Arabic", greeting: "Marhaban", native: "مرحباً" },
  { language: "Mandarin", greeting: "Nǐ hǎo", native: "你好" },
  { language: "Russian", greeting: "Privyet", native: "Привет" },
  { language: "Korean", greeting: "Annyeonghaseyo", native: "안녕하세요" },
];

function startGreetingLoop() {
  // Run once immediately so the user doesn't wait 5 seconds for the first print
  printRandomGreeting();

  setInterval(printRandomGreeting, 5000);
}

function printRandomGreeting() {
  // 1. Wipe the terminal clean for a smooth UI refresh
  console.clear();

  // 2. Pick a random greeting
  const index = Math.floor(Math.random() * greetings.length);
  const item = greetings[index];

  // 3. Construct the dynamic string with "..." formatting
  let greetingText = `... ${item.greeting} ...`;
  if (item.native) {
    greetingText = `... ${item.greeting} (${item.native}) ...`;
  }

  // 4. Print the clean text frame
  console.log(
    "+-------------------------------------------------------------+",
  );
  console.log(`| LANGUAGE: ${item.language.toUpperCase().padEnd(30)}|`);
  console.log(
    "+-------------------------------------------------------------+",
  );
  console.log(`  ${greetingText}`);
  console.log(`  translating global thoughts in real time`);
  console.log(
    "+-------------------------------------------------------------+",
  );
  console.log("  Press Ctrl+C to stop the application.");
}

// Start the 5-second loop
startGreetingLoop();
