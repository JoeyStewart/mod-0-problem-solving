
//Write a method or function that removes all instances of the letter <strong>s</strong> in a string. 
//The method or function should accept a string as an argument and return the same string with every instance of the 
//letter <strong>s</strong> removed.

// The goal is to remove all instances of the letter "s" in a string. 
// I created the function removeS. I created the variable word and assigned it to the string "Mississippi".
// I then used the replaceAll method to replace "s" with "". Which would replace it with nothing since the second argument 
// was left blank. I assigned made this compariable to noS and used console.log with noS to recall the method and it's arguments.
// The function was now finished and I closed the code with curly brackets.
// I then used the created function removeS outside the created method to recall "Mississippi" without the letter "s"

function removeS() {
var word = "Mississippi";
noS = word.replaceAll("s", "");
console.log(noS);
}

removeS();