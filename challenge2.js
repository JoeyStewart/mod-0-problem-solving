
// Start with an array of strings with a mix of uppercase and lowercase letters. Print every word in all lowercase letters.

var words = ["Bolivia", "Bhutan", "East Timor", "Dardanelles", "Galicia"].map(function(v) {
    return v.toLowerCase();
  });
  console.log(words);