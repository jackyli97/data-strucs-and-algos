class WordCloudData {
  constructor(inputString) {
    this.wordsToCounts = new Map();
    this.populateWordsToCounts(inputString);
  }

  populateWordsToCounts(inputString) {
    // Count the frequency of each word
    // Initialize a map
    // If the word all lowercased is already in the map, or uppercased
    let sentArr = this.splitWords(inputString);
    // this.capitalize(sentArr[0])
    sentArr.forEach((word) => {
      if (word !== "") {
        if (this.wordsToCounts.has(word)) {
          this.changeMap(word, this.wordsToCounts);
        } else {
          let capitalized = this.capitalize(word);
          let lowercase = word.toLowerCase();
          if (this.wordsToCounts.has(capitalized)) {
            this.changeMap(capitalized, this.wordsToCounts);
          } else if (this.wordsToCounts.has(lowercase)) {
            this.changeMap(lowercase, this.wordsToCounts);
          } else this.wordsToCounts.set(word, 1);
        }
      }
    });
  }

  changeMap(word, map) {
    let oldCount = map.get(word);
    map.set(word, oldCount + 1);
  }

  splitWords(str) {
    let arr = [""];
    let currWord = 0;

    for (let i = 0; i < str.length; i++) {
      let code = str[i].charCodeAt(0);

      if (this.isLetter(code)) {
        arr[currWord] += str[i];
      } else if (arr[currWord] !== "") {
        if (str[i] === "'" || str[i] === "-") arr[currWord] += str[i];
        else {
          arr.push("");
          currWord += 1;
        }
      }
    }
    return arr;
  }

  capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
  }

  isLetter(code) {
    return (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
  }
}
