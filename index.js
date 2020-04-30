const firstVerse = (animal) => `I know an old lady who swallowed a ${animal}.`
const swallowed = (one, two) => `She swallowed the ${one} to catch the ${two}.`
const verses = {
  'fly': ["I don't know why she swallowed the fly. Perhaps she'll die."],
  'spider': ['It wriggled and jiggled and tickled inside her.'],
  'bird': ['How absurd to swallow a bird!', 'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.'],
  'cat': ['Imagine that, to swallow a cat!'],
  'dog': ['What a hog, to swallow a dog!'],
  'goat': ['Just opened her throat and swallowed a goat!'],
  'cow': ["I don't know how she swallowed a cow!"],
  'horse': ["She's dead, of course!"],
};

const versesArr = Array.from(Object.entries(verses));

class FoodChain {
  verse(number) {
    let result;

    if(number === 1 || number === 8) {
        const first = firstVerse(versesArr[number - 1][0]);
        const second = versesArr[number - 1][1];
        result = `${first}\n${second}\n`;
     } else if(number === 3) {
        const first = firstVerse(versesArr[number - 1][0]);
        let second = versesArr[number - 1][1].map(el => `\n${el}`).join('');
        number--;
        while(number > 1) {
          second += `\n${swallowed(versesArr[number - 1][0], versesArr[number - 2][0])}`;
          number--;
        }
        const last = versesArr[number - 1][1];
        result = `${first}${second}\n${last}\n`;
     }
     else {
        const first = firstVerse(versesArr[number - 1][0]);
        let second = versesArr[number - 1][1];
        while(number > 1) {
          if(number === 3) {
            second += `\n${versesArr[number - 1][1][1]}`;
            number--;
          }
          second += `\n${swallowed(versesArr[number - 1][0], versesArr[number - 2][0])}`;
          number--;
        }
        const last = versesArr[number - 1][1];
        result = `${first}\n${second}\n${last}\n`;
     }
     return result;
  }

  verses(start, end) {
    let res = '';
    for(let i = start; i <= end; i++) {
      res = res.concat(this.verse(i), '\n');
    };
    return res;
  }
}
module.exports = FoodChain;