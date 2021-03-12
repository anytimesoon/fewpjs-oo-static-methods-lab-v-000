class Formatter {
  //add static methods here
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
  
  static sanitize(str) {
    return str
  }
  
  static titleize(str) {
    var words = str.split(' ');

    
    $.each(words, function(index, word){
        words[index] = word.charAt(0).toUpperCase() + word.slice(1);
    });
    
    return str
  }
}