
//Write a method or function that removes all instances of the letter <strong>s</strong> in a string. 
//The method or function should accept a string as an argument and return the same string with every instance of the 
//letter <strong>s</strong> removed.

function removeS() {
var word = "Mississippi";
noS = word.replaceAll("s", "");
console.log(noS);
}

removeS();