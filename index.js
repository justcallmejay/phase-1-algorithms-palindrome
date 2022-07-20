function isPalindrome(word){
//   // Write your algorithm here
// 1. get string
// 2. chop 'abba' string into arrays
let sampleWord = word.split('')

// console.log(sampleWord)

// 3. copy array into a  reverse form [and join it (I had to review the solution.. sorry :( )]
let revWord = sampleWord.reverse();
let sampleWordJoin = revWord.join('');

// console.log(sampleWordJoin)
// 4. compare reverse form with original array
//4a. have code iterate each element within array and compare it 
  if (word == sampleWordJoin) {
    return true  
  } else {
    return false
  }

}


//OTHER ATTEMPTS:
// const palinD = word.map((words) =>{
//   let regWord = words.split('')
//   let revWord = words.split('').reverse()

//     return 'Is palindrome'
//   } else {
//     return 'Not palindrome'
//   }

// }) 
// }
/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
/*The argument is passed down into the parameter, which is first split and returned into array, then the function declares a variable which copies array and reverse the order.  Finally, two loop methods to solve whether or not the word is a palindrome.  Unfortunately, two loop methods created 16 boolean cases with */
// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;