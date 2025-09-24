function findLongestWord(sentence) {
  let words = sentence.split(" "); // split sentence into words
  let longest = "";

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i]; // update if word is longer
    }
  }

  console.log("Longest word:", longest);
  console.log("Length:", longest.length);
}

// Example usage
findLongestWord("JavaScript is a powerful programming language");