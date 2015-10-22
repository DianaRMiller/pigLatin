var pigLatin = function(word) {
  var vowels = ["a","e","i","o","u"];
  for ( var index = 0; index<= vowels.length; index++)
    if (word[0] === vowels[index]) {
      return (word.concat("ay"));
  }
};
