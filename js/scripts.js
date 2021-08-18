function mostUsedWords(passage) {
  const originalPassage = passage;
  // I looked this up! That's okay to do! 
  let punctuationlessPassage = passage.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
  // This splits the passage at the space.
  let passageArray = passage.split(" "); 

  // instantiate empty strings variables for first, second, and third most common words.
  let first = ["", 0];
  let second = ["", 0];
  let third = ["", 0];

  passageArray.forEach(function (word) {
    let wordCount = numberOfOccurrencesInText(word, passage); 
    if (wordCount > first[1]) {
      third[0] = second[0];
      third[1] = second[1];
      second[0] = first[0];
      second[1] = first[1];
      first[0] = word;
      first[1] = wordCount;
    } else if (wordCount > second[1]) {
      third[0] = second[0];
      third[1] = second[1];
      second[0] = word;
      second[1] = wordCount;
    }  else if (wordCount > third[1]) {
      third[0] = word;
      third[1] = wordCount;
    }
  })

  // do some sort of formatting to combine all three into a string that tells the user 1st 2nd and 3rd highest
  // return that.
  
};

// This will return the number of specified word in the passage
// Returns that int
function numberOfOccurrencesInText(word, text) {
  // edge case handling, is the word empty?
  if (noInputtedWord(word, text)) {
    return 0;
  }
  const wordArray = text.split(" ");
  let wordCount = 0;
  wordArray.forEach(function (element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++;
    }
  });
  return wordCount;
}
