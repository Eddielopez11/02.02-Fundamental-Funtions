// intro functions

var myObject = {
  superPower: "som text",
  anotherProperty: "something",

};

/**
 * PART 0
 *
 * Define a function max() that takes two numbers as arguments
 * and returns the largest of them. Use the if-then-else construct available in Javascript.
 */

function max(a, b){
    // YOUR CODE HERE
    var greatestNumber = 0;
    if (a > b){
      var greatestNumber = a;
      return greatestNumber;
    } else{
      var greatestNumber = b;
      return greatestNumber;
    }
};

console.assert(max(1,3) === 3);
console.assert(max(0,3) === 3);
console.assert(max(10,3) === 10);
console.assert(max(-1,-3) === -1);
console.assert(max("aaa",0) === 0);
console.assert(isNaN(max("aaa","bbb")));

/**
 * PART 1
 *
 * Define a function maxOfThree() that takes three
 * numbers as arguments and returns the largest of them.
 */

function maxOfThree(a, b, c){
    // YOUR CODE HERE
    var greatestNumber = 0;
    if (b < a && a > c){
      var greatestNumber = a;
      return greatestNumber;
    } else if (a < b && b > c){
      var greatestNumber = b;
      return greatestNumber;
    } else{
      var greatestNumber = c;
      return greatestNumber;
    }
};

console.assert(maxOfThree(1,3,2) === 3);
console.assert(maxOfThree(0,3,-1) === 3);
console.assert(maxOfThree(10,3,50) === 50);
console.assert(maxOfThree(-1,-3,-10) === -1);
console.assert(maxOfThree("aaa",0,1) === 1);
console.assert(isNaN(maxOfThree("aaa","bbb","ccc")));

/**
 * PART 2
 *
 * Write a function isVowel() that takes a character (i.e. a string of length 1)
 * and returns true if it is a vowel, false otherwise.
 */

function isVowel(char){
    // YOUR CODE HERE
    var outcome = char == "a" || char == "e" || char == "i" || char == "o" || char == "u";
    return outcome;
};

console.assert(isVowel(0) === false);
console.assert(isVowel("B") === false);
console.assert(isVowel("b") === false);
console.assert(isVowel("a") === true);
console.assert(isVowel("E") === true);

/**
 * PART 3
 *
 * Write a function rovarspraket() that will translate
 * a text into a "rövarspråket". That is, double every
 * consonant and place an occurrence of "o" in between.
 *
 * For example, rovarspraket("this is fun") should
 * return the string "tothohisos isos fofunon".

 */

function rovarspraket(text){
    // YOUR CODE HERE
    var rovarWord = "";
    for (var i = 0; i < text.length; i++) {
      var currentChar = text[i];
      if (text === 0){
        rovarWord += text;
      } else if (!isVowel(currentChar)) {
        rovarWord += currentChar + "o" + currentChar;
      } else {
        rovarWord += currentChar;
      }
    }
    return rovarWord;
};
// var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// var rovarWord = "";
// for(var i = 0; i < text.length; i++){
//   var currentChar = text[i];
//   if (!isVowel(currentChar){
//     rovarWord += currentChar + "o" + currentChar;
//   } else {
//     rovarWord = text;
//   }
// return rovarWord;
// }

console.assert(rovarspraket("a") === "a")
console.assert(rovarspraket("b") === "bob")
console.assert(rovarspraket("cat") === "cocatot")
console.assert(rovarspraket("javascript") === "jojavovasoscocroripoptot")
console.assert(rovarspraket(0) === "0")

/**
 * Part 4
 *
 * Define a function reverse() that computes
 * the reversal of a string. For example,
 * reverse("skoob") should return the
 * string "books".
 */

function reverse(string){
    // YOUR CODE HERE
    var array;
    // var reversed;
    // array = string.split();
    array = array.reverse();
    // reversed = array.join()
    return array;
}

console.assert(reverse("books") === "skoob")
console.assert(reverse("we don't want no trouble") === "elbuort on tnaw t'nod ew")

/**
 * Part 5
 *
 * Write a function findLongestWord() that takes an
 * string returns the first, longest word in the array.
 *
 * i.e. findLongestWord("book dogs") should return "book"
 */

function findLongestWord(sentence){
    // YOUR CODE HERE
    var rem = sentence.replace(/'/g, '')
    var strings = rem.split(" ");
    var currentWord = 0;
    var longestWord = "";
    for (var i = 0; i < strings.length; i++) {
      if (strings[i].length > currentWord){
        currentWord = strings[i].length
        longestWord = strings[i];
      }
    }
    return longestWord;
}

console.assert(findLongestWord("book dogs") === "book")
console.assert(findLongestWord("don't mess with Texas") === "Texas")
