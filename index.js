// Define the tutorials array
const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

// Function to convert tutorial titles to title case
function titleCased() {
  return tutorials.map((tutorial) => {
    return tutorial
      .split(" ") // Split the sentence into words
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter
      .join(" "); // Join words back into a sentence
  });
}

// Export the function (for testing purposes)
module.exports = { titleCased };
