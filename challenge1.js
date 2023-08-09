
//Given an array of strings, print only the strings that have exactly 4 characters.

// The goal for this problem is to identify all the string elements inside the array with only 4 characters.

// I decided to use a for loop to evaluate each element inside the array. The evaluation starts at index 0 and recalls each 
// 4 letter character through the .length method. I did this by creating the i variable creating assigning it an idex of 0.
// I then made i be less than total elements in the array. I then had the for loop evaluate each string one at a time with i++. 
// Within the if statement, I had set the method to 4 characters which would then print out each string
// that was flagged with 4 characters.

var words = ["dog", "read", "Papagorgio", "tire"]

for ( var i = 0; i < words.length; i++){
    if(words[i].length === 4)
    console.log(words[i])
}