
//Given an array of strings, print only the strings that have exactly 4 characters.

var words = ["dog", "read", "Papagorgio", "tire"]

for ( var i = 0; i < words.length; i++){
    if(words[i].length === 4)
    console.log(words[i])
}