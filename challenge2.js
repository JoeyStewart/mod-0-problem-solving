
// Start with an array of strings with a mix of uppercase and lowercase letters. Print every word in all lowercase letters.

// The goal is to make all strings in the array lowercase. 
// I knew I needed to use the .toLowerCase method, but was unsure how to apply to the entire array. After searching online
// I discovered the .map method which creates a new array. I knew I could create an accompanying function. This is what I understand
// to be a nested function. Or a function within a function. In this case I used it within the .map method. 
// So I used recalled a function inside .map's argument and held a place value "s" in the function's argument. 
// I then returned the array with s.toLowerCase().
// From there, I could recall the words variable in the console.log with the new array all in lowercase lettering. 

var words = ["Bolivia", "Bhutan", "East Timor", "Dardanelles", "Galicia"].map(function(s) {
    return s.toLowerCase();
  })
  console.log(words);