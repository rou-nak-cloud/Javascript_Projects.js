const quotes = [
  "The only way to do great work is to love what you do. — Steve Jobs",
  "Innovation distinguishes between a leader and a follower. — Steve Jobs",
  "It always seems impossible until it's done. — Nelson Mandela",
  "The best way to predict the future is to invent it. — Alan Kay",
  "Code is like humor. When you have to explain it, it’s bad. — Cory House",
  "Simplicity is the soul of efficiency. — Austin Freeman",
  "Before software can be reusable it first has to be usable. — Ralph Johnson",
  "Make it work, make it right, make it fast. — Kent Beck",
  "Knowledge is power. — Francis Bacon",
  "Strive not to be a success, but rather to be of value. — Albert Einstein",
  "The mind is everything. What you think you become. — Buddha",
  "The only true wisdom is in knowing you know nothing. — Socrates",
  "Life is what happens when you're busy making other plans. — John Lennon",
  "An unexamined life is not worth living. — Socrates",
  "Definiteness of purpose is the starting point of all achievement. — W. Clement Stone",
  "Talk is cheap. Show me the code. — Linus Torvalds",
  "Programs must be written for people to read, and only incidentally for machines to execute. — Abelson & Sussman",
  "Whether you think you can or you think you can’t, you’re right. — Henry Ford",
  "Happiness depends upon ourselves. — Aristotle",
  "Learn from yesterday, live for today, hope for tomorrow. — Albert Einstein",
];

function showQuote() {
  const index = Math.floor(Math.random() * quotes.length);
  const selectedQuote = quotes[index];
  const [quote, author] = selectedQuote.split(" - ");

  console.log("\n+-----------+");
  console.log("| Quoted Text |");
  console.log("+-------------+");
  console.log(` ${quote}`);
  if (author) {
    console.log(`  ${author}`);
  }
  console.log("+-------------+");
}

showQuote();
