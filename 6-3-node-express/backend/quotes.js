// Import random.js file


// TODO 3: Create and export getRandomQuote function
//Hint: export function getRandomQuote(){}
import { getRandomInt } from "./utils/random.js";

const quotes = [
  "Believe in yourself.",
  "Success is built one step at a time.",
  "Small progress is still progress.",
  "Discipline beats motivation.",
  "Start now, improve later."
];

export function getRandomQuote() {
  const index = getRandomInt(quotes.length);
  return quotes[index];
}
